$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "assets\trash"
$rawDir = Join-Path $outDir "_raw"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
New-Item -ItemType Directory -Force -Path $rawDir | Out-Null

$mobs = @(
  @{ mob = "Coilfang Beast-Tamer"; id = 21221; raid = "SSC" },
  @{ mob = "Coilfang Hate-Screamer"; id = 21339; raid = "SSC" },
  @{ mob = "Serpentshrine Sporebat"; id = 21246; raid = "SSC" },
  @{ mob = "Underbog Colossus"; id = 21251; raid = "SSC" },
  @{ mob = "Vashj'ir Honor Guard"; id = 21218; raid = "SSC" },
  @{ mob = "Coilfang Priestess"; id = 21220; raid = "SSC" },
  @{ mob = "Coilfang Shatterer"; id = 21301; raid = "SSC" },
  @{ mob = "Greyheart Tidecaller"; id = 21229; raid = "SSC" },
  @{ mob = "Greyheart Nether-Mage"; id = 21230; raid = "SSC" },
  @{ mob = "Greyheart Skulker"; id = 21232; raid = "SSC" },
  @{ mob = "Greyheart Shield-Bearer"; id = 21231; raid = "SSC" },
  @{ mob = "Serpentshrine Lurker"; id = 21863; raid = "SSC" },
  @{ mob = "Coilfang Fathom-Witch"; id = 21299; raid = "SSC" },
  @{ mob = "Coilfang Serpentguard"; id = 21298; raid = "SSC" },
  @{ mob = "Tidewalker Warrior"; id = 21225; raid = "SSC" },
  @{ mob = "Tidewalker Hydromancer"; id = 21228; raid = "SSC" },
  @{ mob = "Tidewalker Depth-Seer"; id = 21224; raid = "SSC" },
  @{ mob = "Tidewalker Shaman"; id = 21226; raid = "SSC" },
  @{ mob = "Astromancer"; id = 20033; raid = "TK" },
  @{ mob = "Star Scryer"; id = 20034; raid = "TK" },
  @{ mob = "Bloodwarder Marshal"; id = 20035; raid = "TK" },
  @{ mob = "Phoenix-Hawk Hatchling"; id = 20038; raid = "TK" },
  @{ mob = "Phoenix-Hawk"; id = 20039; raid = "TK" },
  @{ mob = "Crystalcore Devastator"; id = 20040; raid = "TK" },
  @{ mob = "Crystalcore Sentinel"; id = 20041; raid = "TK" },
  @{ mob = "Crystalcore Mechanic"; id = 20052; raid = "TK" },
  @{ mob = "Tempest-Smith"; id = 20042; raid = "TK" },
  @{ mob = "Crimson Hand Blood Knight"; id = 20049; raid = "TK" },
  @{ mob = "Crimson Hand Battle Mage"; id = 20047; raid = "TK" },
  @{ mob = "Crimson Hand Centurion"; id = 20048; raid = "TK" }
)

$fallbackPages = @{
  "Phoenix-Hawk Hatchling" = "https://www.wowhead.com/npc=20038/phoenix-hawk-hatchling"
}

function Convert-ToSlug([string]$name) {
  $slug = $name.ToLowerInvariant()
  $slug = $slug -replace "[^a-z0-9]+", "_"
  $slug = $slug.Trim("_")
  return $slug
}

function New-Placeholder([string]$mob, [string]$raid, [string]$dest) {
  Add-Type -AssemblyName System.Drawing
  $bmp = New-Object System.Drawing.Bitmap 180, 220
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $bg = if ($raid -eq "SSC") { [System.Drawing.Color]::FromArgb(255, 4, 24, 24) } else { [System.Drawing.Color]::FromArgb(255, 24, 16, 36) }
  $accent = if ($raid -eq "SSC") { [System.Drawing.Color]::FromArgb(255, 51, 215, 197) } else { [System.Drawing.Color]::FromArgb(255, 240, 181, 90) }
  $g.Clear($bg)
  $brush = New-Object System.Drawing.SolidBrush $accent
  $pen = New-Object System.Drawing.Pen $accent, 2
  $g.DrawRectangle($pen, 7, 7, 166, 206)
  $initials = (($mob -split "[^A-Za-z0-9]+") | Where-Object { $_ } | Select-Object -First 2 | ForEach-Object { $_[0] }) -join ""
  $font = New-Object System.Drawing.Font "Arial", 30, ([System.Drawing.FontStyle]::Bold)
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $g.DrawString($initials.ToUpperInvariant(), $font, $brush, (New-Object System.Drawing.RectangleF 0, 70, 180, 55), $format)
  $small = New-Object System.Drawing.Font "Arial", 9, ([System.Drawing.FontStyle]::Bold)
  $g.DrawString("NO IMAGE", $small, $brush, (New-Object System.Drawing.RectangleF 0, 138, 180, 24), $format)
  $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}

function Convert-ToPortrait([string]$source, [string]$dest) {
  Add-Type -AssemblyName System.Drawing
  $src = [System.Drawing.Image]::FromFile($source)
  $canvas = New-Object System.Drawing.Bitmap 180, 220
  $g = [System.Drawing.Graphics]::FromImage($canvas)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.Clear([System.Drawing.Color]::FromArgb(0, 0, 0, 0))
  $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Rectangle 0,0,180,220), ([System.Drawing.Color]::FromArgb(235, 3, 6, 9)), ([System.Drawing.Color]::FromArgb(245, 16, 18, 24)), 90
  $g.FillRectangle($bgBrush, 0, 0, 180, 220)
  $scale = [Math]::Min(164 / $src.Width, 202 / $src.Height)
  $w = [Math]::Max(1, [int]($src.Width * $scale))
  $h = [Math]::Max(1, [int]($src.Height * $scale))
  $x = [int]((180 - $w) / 2)
  $y = [int](220 - $h - 8)
  $g.DrawImage($src, $x, $y, $w, $h)
  $canvas.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $src.Dispose(); $canvas.Dispose()
}

$manifest = @{}
$report = @()

foreach ($entry in $mobs) {
  $slug = Convert-ToSlug $entry.mob
  $dest = Join-Path $outDir "$slug.png"
  $pageUrl = "https://www.wowhead.com/tbc/npc=$($entry.id)"
  $html = ""
  try {
    $html = (Invoke-WebRequest -Uri $pageUrl -UseBasicParsing).Content
  } catch {}

  $imageUrl = $null
  if ($html -match '<meta property="og:image" content="([^"]+)"') {
    $imageUrl = $Matches[1] -replace '&amp;', '&'
  } elseif ($html -match 'var lv_screenshots = \[\{"id":(\d+).*?"typeId":\d+.*?\};') {
    $imageUrl = "https://wow.zamimg.com/uploads/screenshots/normal/$($Matches[1]).jpg"
  }

  if (($null -eq $imageUrl -or $imageUrl -match "favicon|logo|share-icon") -and $fallbackPages.ContainsKey($entry.mob)) {
    try {
      $fallbackHtml = (Invoke-WebRequest -Uri $fallbackPages[$entry.mob] -UseBasicParsing).Content
      if ($fallbackHtml -match '<meta property="og:image" content="([^"]+)"') {
        $imageUrl = $Matches[1] -replace '&amp;', '&'
      }
    } catch {}
  }

  $sourceStatus = "placeholder"
  if ($imageUrl -and $imageUrl -notmatch "favicon|logo") {
    try {
      $raw = Join-Path $rawDir "$slug.jpg"
      Invoke-WebRequest -Uri $imageUrl -OutFile $raw
      Convert-ToPortrait $raw $dest
      $sourceStatus = "wowhead"
    } catch {
      New-Placeholder $entry.mob $entry.raid $dest
    }
  } elseif ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 5000)) {
    $sourceStatus = "custom"
  } else {
    New-Placeholder $entry.mob $entry.raid $dest
  }

  $manifest[$entry.mob] = "assets/trash/$slug.png"
  $report += [pscustomobject]@{ mob = $entry.mob; id = $entry.id; source = $sourceStatus; file = "assets/trash/$slug.png"; imageUrl = $imageUrl }
}

$manifestLines = @("const trashImages = {")
foreach ($key in ($manifest.Keys | Sort-Object)) {
  $manifestLines += "  `"$key`": `"$($manifest[$key])`","
}
$manifestLines += "};"
$manifestLines | Set-Content -LiteralPath (Join-Path $outDir "trash-images.manifest.js") -Encoding UTF8
$report | ConvertTo-Json -Depth 3 | Set-Content -LiteralPath (Join-Path $outDir "trash-images-report.json") -Encoding UTF8
$report | Format-Table -AutoSize
