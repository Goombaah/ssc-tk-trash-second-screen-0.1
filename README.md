# SSC TK Trash Second Screen

Assistant HTML offline pour raid lead / tank / off-tank sur les trashs TBC Anniversary.

Version actuelle: P3 preview active

- Phase 2: SSC + TK
- Phase 3: Hyjal + Black Temple
- Page publique: https://goombaah.github.io/ssc-tk-trash-second-screen-0.1/
- Fichier offline principal: `SSC_TK_TRASH_SECOND_SCREEN.html`

Ce n'est pas un site web classique: c'est un second ecran dense, pense comme un mix WeakAura / MDT / raid notes / overlay stream.

## Etat actuel

- 71 cartes trash au total
- SSC: 18 cartes
- TK: 12 cartes
- Hyjal: 8 cartes
- Black Temple: 33 cartes
- Icones boss BT recuperees depuis le boss overview Wowhead
- Portraits trash Hyjal: 8 screenshots Wowhead/Zamimg recuperes
- Portraits trash BT: screenshots et modelviewer Wowhead/Zamimg quand disponibles
- Portraits trash P3 restants: placeholders uniquement quand aucun asset fiable n'est encore mappe
- Tooltips spells actifs
- Sauvegarde preferences via `localStorage`
- Fonctionne offline une fois les fichiers recuperes

## Utilisation navigateur

Ouvre la page publique:

```text
https://goombaah.github.io/ssc-tk-trash-second-screen-0.1/
```

Sur second ecran:

1. Ouvre le lien dans Chrome.
2. Glisse la fenetre sur le second ecran.
3. Utilise `F11` ou le bouton `Overlay`.
4. Si une ancienne version reste visible, fais `Ctrl + F5`.

## Utilisation offline

Ouvre directement:

```text
SSC_TK_TRASH_SECOND_SCREEN.html
```

L'outil charge ses fichiers locaux:

- `css/ssc-tk-trash.css`
- `js/ssc-tk-trash.js`
- `assets/`

Aucun CDN ni framework externe n'est requis pour l'utilisation.

## Fonctions

- Filtres par raid: SSC, TK, Hyjal, BT
- Filtres par chemin / pre-boss
- Recherche instantanee par mob, spell ou danger
- Filtres action: Focus, Kick, Sheep, LOS, Fear, MC, Cleave, AoE, Tank danger, Ranged danger
- Modes: Detailed, Compact, Ultra
- Filtre RED/ORANGE
- Mode Audit
- Mode Overlay
- Switch EN/FR

## Raccourcis

- `1`: SSC
- `2`: TK
- `3`: P3 ALL
- `4`: Hyjal
- `5`: BT
- `C`: Compact
- `U`: Ultra
- `F`: Overlay
- `R`: Reset
- `L`: Langue EN/FR
- `A`: Audit

## Donnees

Les donnees trash sont dans:

```text
js/ssc-tk-trash.js
```

Chaque entree suit la structure:

```js
{
  raid,
  zone,
  mob,
  priority,
  markers,
  tags,
  danger,
  call,
  tank,
  spells
}
```

Si une information n'est pas confirmee, elle doit rester marquee `a confirmer` ou `to_confirm`.

## Sources principales

- SSC trash: https://www.wowhead.com/tbc/guide/trash-mobs-serpentshrine-cavern-ssc-strategy-burning-crusade-classic
- TK trash: https://www.wowhead.com/tbc/guide/trash-mobs-the-eye-tempest-keep-strategy-burning-crusade-classic
- Black Temple overview: https://www.wowhead.com/tbc/guide/black-temple-bt-raid-overview-burning-crusade-classic
- Black Temple trash: https://www.wowhead.com/tbc/guide/trash-mobs-black-temple-strategy-burning-crusade-classic
- Hyjal overview: https://www.wowhead.com/tbc/guide/hyjal-summit-mount-hyjal-raid-overview-burning-crusade-classic
- Hyjal trash: https://www.wowhead.com/tbc/guide/trash-mobs-hyjal-summit-strategy-burning-crusade-classic
- Phase 3 overview: https://www.wowhead.com/tbc/guide/phase-three-updates-overview

## Assets

Les assets sont stockes localement dans `assets/`.

Actuellement inclus:

- raid markers WoW
- spell icons
- boss icons SSC/TK
- boss icons BT
- screenshots trash BT depuis Wowhead, quand disponibles
- portraits trash SSC/TK
- placeholders pour trash P3

## Build standalone

Pour regenerer la version autonome:

```bash
node build-standalone.js
```

Le fichier genere est:

```text
netlify_single_file/index.html
```

Les archives `.zip` sont ignorees par Git, car elles peuvent etre regenerees depuis les fichiers source.
