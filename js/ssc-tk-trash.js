const icon = (name) => `assets/${name}.jpg`;
const markerTitle = {
  skull: "Skull",
  cross: "Cross",
  moon: "Moon",
  triangle: "Triangle",
  star: "Star",
  square: "Square"
};

const tagLabels = {
  focus: "☠️ Focus",
  kick: "✖️ Kick",
  sheep: "🌙 Sheep",
  los: "🛡️ LOS",
  fear: "😱 Fear",
  mc: "👁️ MC",
  cleave: "💥 Cleave",
  aoe: "🔥 AoE",
  tank: "⚠️ Tank danger",
  ranged: "🏹 Ranged danger",
  stun: "Stun",
  purge: "Purge",
  dispel: "Dispel",
  banish: "Banish",
  tranq: "Tranq"
};

const spellDescriptions = {
  "Acid Geyser": "Nature AoE variant on Underbog Colossus. Source lists it as one possible Colossus ability set.",
  "Arcane Blast": "Arcane damage with knockback on TK trash such as Star Scryer; tank should be near wall.",
  "Arcane Flurry": "Massive Arcane damage to a random target from Crimson Hand Centurion.",
  "Arcane Lightning": "Caster ability from Greyheart Nether-Mage; source notes silence pressure.",
  "Avenger's Shield": "Hits up to 3 targets and dazes. Dangerous when Shield-Bearer is loose.",
  "Bestial Wrath": "Boosts Beast-Tamer and Sporebat damage. Kill/commit defensives during the buff.",
  "Blast Wave": "Fire AoE and slow from Astromancer.",
  "Blizzard": "Ground AoE from Crimson Hand Battle Mage. Move out.",
  "Bloodthirst": "Melee damage ability on warrior-type trash.",
  "Chain Lightning": "Nature damage that jumps between players. Spread if it is chaining hard.",
  "Charge": "Charges and stuns a target. Keep loose mobs away from healers/casters.",
  "Charged Arcane Explosion": "Arcane AoE from Crystalcore Sentinel. Melee danger.",
  "Cleave": "Frontal/melee cleave. Face mob away from raid.",
  "Cone of Cold": "Frontal Frost cone and slow. Tank should face away / into wall.",
  "Corrupt Devotion Aura": "Armor reduction aura around Coilfang Serpentguard.",
  "Countercharge": "Adds Arcane melee damage and silences nearby players on Crystalcore Devastator.",
  "Dive": "Phoenix-Hawk targets a distant player and knocks nearby players back.",
  "Domination": "Mind controls a player. Break/CC immediately.",
  "Enrage": "Attack speed/damage pressure. Source notes Tidewalker Warrior Enrage is Tranq-able.",
  "Fireball": "Direct Fire cast from Nether-Mage.",
  "Fireball Volley": "Raid Fire damage from Astromancer.",
  "Flash of Light": "Heal from Crimson Hand Blood Knight. Source notes it cannot be interrupted.",
  "Frenzy": "Attack speed/damage pressure. Healers/tanks watch spikes.",
  "Frightening Shout": "Fear on nearby melee. Fear protection helps.",
  "Frost Nova": "Roots nearby players. Avoid being locked in dangerous ground.",
  "Frost Shock": "Instant Frost damage/slow from Tidewalker Hydromancer.",
  "Frostbolt": "Frost cast. Kick when listed on interrupt-priority trash.",
  "Frostbolt Volley": "Raid Frost damage from Crimson Hand Battle Mage.",
  "Golem Repair": "Heals nearby golem. Source suggests controlling/MC'ing Tempest-Smith.",
  "Hammer of Justice": "Stun from Blood Knight. Dispellable per source.",
  "Healing Touch": "Large heal on murloc trash. Interrupt.",
  "Holy Fire": "Fire/Holy DoT from Coilfang Priestess.",
  "Holy Nova": "AoE damage/healing from Priestess Spirit after Priestess dies.",
  "Holy Smite": "Direct Holy cast from Coilfang Priestess.",
  "Initial Infection": "Disease from Underbog Colossus variant. Cleanse disease.",
  "Kick": "Interrupts casting in melee range. Keep casters out of melee when possible.",
  "Knock Away": "Knockback/threat reset. Tank should be ready to taunt back.",
  "Lightning Bolt": "Interruptible Nature cast from Tidewalker Shaman.",
  "Lightning Shield": "Damages attackers; purge/avoid hitting into it if needed.",
  "Mana Burn": "AoE mana pressure around Phoenix-Hawk.",
  "Molten Armor": "Buff on Astromancer that punishes attackers; purge/spellsteal.",
  "Mortal Cleave": "Frontal cleave applying Mortal Strike-style healing reduction.",
  "Overcharge": "Massive Arcane burst on highest-threat tank from Crystalcore Sentinel. Tank swap/hard heal.",
  "Poison Bolt Volley": "Raid Nature/Poison volley from Serpentshrine Lurker.",
  "Poison Shield": "Nature raid damage if ignored. Purge it.",
  "Power Up": "Increases nearby golem damage by 50%. Control Tempest-Smith.",
  "Rain of Fire": "Ground Fire AoE. Move the pack/raid out.",
  "Rancid Mushroom": "Creates dangerous mushroom/cloud zones. Move away.",
  "Recharge": "Channels a heal on nearby Crystalcore Golem.",
  "Rejuvenation": "HoT. Purge when it appears on priority trash.",
  "Renew": "HoT from Crimson Hand Blood Knight. Purge.",
  "Saw Blade": "Bleed on random players from Crystalcore Mechanic.",
  "Shadow Bolt": "Direct Shadow cast.",
  "Shadow Nova": "Shadow AoE knockback. Position away from edges/water.",
  "Shatter Armor": "Reduces tank armor by 50% for 15 sec.",
  "Shell Shock": "Bomb/stun-style pressure from Tempest-Smith. Exact handling à confirmer.",
  "Shield Charge": "Massive damage and knockback. Stack behind / prevent charge angles.",
  "Silence": "AoE silence. LOS or position casters out of danger.",
  "Sonic Scream": "Arcane damage nearby on Hate-Screamer.",
  "Spell Reflection": "Reflects spells briefly. Stop casts into it.",
  "Spore Burst": "Nature AoE + DoT around Sporebat.",
  "Spore Quake": "Ground/raid Nature pressure from Underbog Colossus variant. Move out.",
  "Starfall": "Nearby Arcane raid damage from Star Scryer.",
  "Trample": "Melee-range damage from Crystalcore Sentinel.",
  "Uppercut": "Knockback on tank. Tank into wall.",
  "Virulent Poison": "Poison effect from Tidecaller. Cleanse poison.",
  "Water Elemental Totem": "Summons a large Water Elemental. Swap/kill totem instantly.",
  "Whirlwind": "Melee AoE. Melee step out / tank control.",
  "Wing Buffet": "Knockback from Phoenix-Hawk Hatchling."
};

const trashData = [
  {
    raid: "SSC", zone: "Pre Hydross", mob: "Coilfang Beast-Tamer", priority: "orange",
    markers: ["skull"], tags: ["focus", "cleave", "tank"],
    danger: "Bestial Wrath boosts Beast-Tamer and Sporebat damage; frontal Cleave.",
    call: "FOCUS Beast-Tamer; face away.",
    tank: "MT on Beast-Tamer, turned away from raid. Kill quickly during Bestial Wrath.",
    spells: [["Cleave", icon("ability_warrior_cleave")], ["Bestial Wrath", icon("ability_druid_supriseattack")]]
  },
  {
    raid: "SSC", zone: "Pre Hydross", mob: "Coilfang Hate-Screamer", priority: "red",
    markers: ["skull", "cross"], tags: ["focus", "los", "aoe", "ranged"],
    danger: "Silence is AoE and interrupts casting for 5 sec; Sonic Scream Arcane damage nearby.",
    call: "FOCUS / LOS Hate-Screamer.",
    tank: "Move pack out of open field if casters need line of sight control.",
    spells: [["Silence", icon("spell_shadow_impphaseshift")], ["Sonic Scream", icon("ability_hunter_pet_windserpent")]]
  },
  {
    raid: "SSC", zone: "Pre Hydross", mob: "Serpentshrine Sporebat", priority: "yellow",
    markers: ["triangle"], tags: ["stun", "aoe", "ranged"],
    danger: "Charge stuns a target; Spore Burst Nature AoE + DoT nearby.",
    call: "Stack control; kill before Beast-Tamer if Charge is causing chaos.",
    tank: "OTs collect Sporebats fast; avoid loose charges into healers.",
    spells: [["Charge", icon("ability_warrior_charge")], ["Spore Burst", icon("spell_nature_abolishmagic")]]
  },
  {
    raid: "SSC", zone: "Pre Hydross", mob: "Underbog Colossus", priority: "orange",
    markers: ["skull"], tags: ["focus", "aoe", "tank", "dispel"],
    danger: "Variant sets: Acid Geyser/Parasite, Atrophic Blow/Frenzy, or Spore Quake/Initial Infection; death effects vary.",
    call: "Identify variant; move out of Spore Quake; cleanse disease.",
    tank: "Tank steady for Enrage/Frenzy; OTs ready for Colossus Ragers on death.",
    spells: [["Spore Quake", icon("spell_nature_earthquake")], ["Initial Infection", icon("spell_nature_nullifydisease")], ["Acid Geyser", icon("spell_nature_abolishmagic")]]
  },
  {
    raid: "SSC", zone: "Pre Lurker Platforms", mob: "Vashj'ir Honor Guard", priority: "orange",
    markers: ["skull"], tags: ["fear", "cleave", "tank"],
    danger: "Frightening Shout fears melee; Mortal Cleave applies Mortal Strike; Knockback on tank.",
    call: "Fear protection; face away.",
    tank: "Back to wall where possible; face Mortal Cleave away from raid.",
    spells: [["Frightening Shout", icon("spell_shadow_possession")], ["Mortal Cleave", icon("ability_warrior_cleave")], ["Frenzy", icon("ability_warrior_savageblow")]]
  },
  {
    raid: "SSC", zone: "Pre Lurker Platforms", mob: "Coilfang Priestess", priority: "orange",
    markers: ["moon"], tags: ["sheep", "kick", "aoe", "dispel"],
    danger: "Holy Fire DoT; on death Priestess Spirit spams Holy Nova and heals nearby enemies.",
    call: "CC/KILL Priestess; move from Spirit Nova.",
    tank: "Keep pack together for AoE, but expect Spirit after death.",
    spells: [["Holy Fire", icon("spell_holy_searinglight")], ["Holy Nova", icon("spell_holy_holynova")], ["Holy Smite", icon("spell_holy_holysmite")]]
  },
  {
    raid: "SSC", zone: "Pre Lurker Platforms", mob: "Coilfang Shatterer", priority: "yellow",
    markers: ["cross"], tags: ["tank"],
    danger: "Shatter Armor reduces armor by 50% for 15 sec.",
    call: "Watch tank after Shatter Armor.",
    tank: "Heavy heals if Shatter Armor lands; spell reflect note à confirmer by source comments.",
    spells: [["Shatter Armor", icon("ability_warrior_savageblow")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Greyheart Tidecaller", priority: "red",
    markers: ["skull"], tags: ["focus", "purge", "dispel", "aoe"],
    danger: "Water Elemental Totem summons a large elemental; Poison Shield raid Nature damage if not purged.",
    call: "KILL Tidecaller; swap to Water Totem instantly; purge Poison Shield.",
    tank: "Hold pack while raid swaps to totems. Ignore summoned elemental per source.",
    spells: [["Water Elemental Totem", icon("spell_frost_glacier")], ["Poison Shield", icon("spell_nature_abolishmagic")], ["Virulent Poison", icon("spell_nature_nullifydisease")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Greyheart Nether-Mage", priority: "red",
    markers: ["moon"], tags: ["sheep", "focus", "aoe", "ranged", "dispel"],
    danger: "Very powerful caster: Arcane Lightning silence, Rain of Fire, Arcane Volley, Cone of Cold, Destruction buffs.",
    call: "SHEEP Nether-Mage or kill first; dispel/spellsteal buffs.",
    tank: "If active, face away for Cone of Cold and pull out of Rain of Fire.",
    spells: [["Arcane Lightning", icon("spell_nature_lightning")], ["Rain of Fire", icon("spell_shadow_rainoffire")], ["Fireball", icon("spell_fire_flamebolt")], ["Frostbolt", icon("spell_frost_frostbolt02")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Greyheart Skulker", priority: "yellow",
    markers: ["cross"], tags: ["focus", "kick"],
    danger: "Kick interrupts spellcasting within melee range.",
    call: "Kill after Tidecaller / Nether-Mage control.",
    tank: "Keep away from healers and casters where practical.",
    spells: [["Kick", icon("ability_warrior_disarm")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Greyheart Shield-Bearer", priority: "orange",
    markers: ["square"], tags: ["tank", "ranged", "stun"],
    danger: "Shield Charge deals massive damage and knockback; Avenger's Shield hits/dazes 3 targets.",
    call: "STACK behind Shield-Bearer to prevent charge.",
    tank: "Face into wall; keep raid stacked behind.",
    spells: [["Shield Charge", icon("ability_warrior_charge")], ["Avenger's Shield", icon("spell_holy_holybolt")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Serpentshrine Lurker", priority: "orange",
    markers: ["triangle"], tags: ["banish", "aoe", "ranged"],
    danger: "Poison Bolt Volley and Rancid Mushrooms/Spore Cloud create raid damage zones.",
    call: "BANISH Lurker; save for last.",
    tank: "Do not fight with other mobs active; move away from mushrooms.",
    spells: [["Poison Bolt Volley", icon("spell_nature_nullifydisease")], ["Rancid Mushroom", icon("spell_nature_abolishmagic")], ["Shadow Bolt", icon("spell_shadow_shadowbolt")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Coilfang Fathom-Witch", priority: "red",
    markers: ["skull"], tags: ["focus", "mc", "aoe", "tank"],
    danger: "Domination mind controls a player; Shadow Nova knockback can punt players into piranha water.",
    call: "FOCUS Fathom-Witch; Grounding/CC Mind Control.",
    tank: "Position carefully away from edges/water before Shadow Nova.",
    spells: [["Domination", icon("spell_shadow_shadowworddominate")], ["Shadow Nova", icon("spell_shadow_shadowfury")], ["Shadow Bolt", icon("spell_shadow_shadowbolt")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Coilfang Serpentguard", priority: "yellow",
    markers: ["cross"], tags: ["tank", "dispel"],
    danger: "Spell Reflection reflects spells for a short duration; Corrupt Devotion Aura reduces nearby armor.",
    call: "Stop casts into Spell Reflection.",
    tank: "Tank after Fathom-Witches; watch armor aura range.",
    spells: [["Spell Reflection", icon("ability_warrior_decisivestrike")], ["Corrupt Devotion Aura", icon("spell_shadow_possession")]]
  },
  {
    raid: "SSC", zone: "Pre Morogrim", mob: "Tidewalker Warrior", priority: "yellow",
    markers: ["triangle"], tags: ["tranq", "tank"],
    danger: "Enrage increases attack speed by 150%; removable with Tranquilizing Shot.",
    call: "Tranq Enrage.",
    tank: "Prepare for Bloodthirst/Uppercut and brief knockback.",
    spells: [["Enrage", icon("ability_warrior_savageblow")], ["Bloodthirst", icon("ability_warrior_punishingblow")], ["Uppercut", icon("ability_warrior_charge")]]
  },
  {
    raid: "SSC", zone: "Pre Morogrim", mob: "Tidewalker Hydromancer", priority: "orange",
    markers: ["cross"], tags: ["kick", "focus", "aoe"],
    danger: "Frostbolt can be interrupted; Frost Nova roots nearby players.",
    call: "KICK Frostbolt; kill caster.",
    tank: "Keep murlocs clumped for AoE while interrupts cover Hydromancer.",
    spells: [["Frostbolt", icon("spell_frost_frostbolt02")], ["Frost Nova", icon("spell_frost_frostnova")], ["Frost Shock", icon("spell_frost_glacier")]]
  },
  {
    raid: "SSC", zone: "Pre Morogrim", mob: "Tidewalker Depth-Seer", priority: "red",
    markers: ["skull"], tags: ["kick", "focus"],
    danger: "Healing Touch heals another murloc and can be interrupted; Rejuvenation HoT.",
    call: "FOCUS / KICK healer.",
    tank: "Hold pack while interrupts stop Healing Touch.",
    spells: [["Healing Touch", icon("spell_nature_healingtouch")], ["Rejuvenation", icon("spell_nature_rejuvenation")]]
  },
  {
    raid: "SSC", zone: "Pre Morogrim", mob: "Tidewalker Shaman", priority: "orange",
    markers: ["moon"], tags: ["kick", "ranged", "purge"],
    danger: "Chain Lightning punishes stacked players; Lightning Bolt can be interrupted; Lightning Shield damages attackers.",
    call: "KICK Shaman; spread for Chain Lightning; purge/avoid shield.",
    tank: "Clump for AoE only if Chain Lightning damage is controlled.",
    spells: [["Chain Lightning", icon("spell_nature_chainlightning")], ["Lightning Bolt", icon("spell_nature_lightning")], ["Lightning Shield", icon("spell_nature_lightning")]]
  },
  {
    raid: "TK", zone: "Entrance / Void Reaver path", mob: "Astromancer", priority: "red",
    markers: ["skull"], tags: ["focus", "aoe", "purge", "ranged"],
    danger: "Molten Armor punishes attackers and can be purged; Blast Wave AoE slow; Fireball Volley raid damage.",
    call: "KILL Astromancer first; purge Molten Armor.",
    tank: "Hold away from loose casters; expect AoE damage.",
    spells: [["Molten Armor", icon("spell_fire_fireball02")], ["Blast Wave", icon("spell_fire_selfdestruct")], ["Fireball Volley", icon("spell_fire_flamebolt")]]
  },
  {
    raid: "TK", zone: "Entrance / Void Reaver path", mob: "Star Scryer", priority: "red",
    markers: ["cross"], tags: ["focus", "mc", "aoe", "tank"],
    danger: "Domination mind controls a player; Arcane Blast knockback; Starfall Arcane raid damage nearby.",
    call: "KILL Star Scryer second; CC MC instantly.",
    tank: "Back against a wall for Arcane Blast.",
    spells: [["Domination", icon("spell_shadow_shadowworddominate")], ["Arcane Blast", icon("spell_arcane_blast")], ["Starfall", icon("spell_arcane_starfire")]]
  },
  {
    raid: "TK", zone: "Entrance / Void Reaver path", mob: "Bloodwarder Marshal", priority: "orange",
    markers: ["skull"], tags: ["cleave", "tank", "aoe"],
    danger: "Whirlwind nearby damage; Uppercut knocks tank back; patrol with Squires.",
    call: "Wall tank Marshal; interrupt Squire heals.",
    tank: "Face Marshal into wall so Uppercut does not reposition you.",
    spells: [["Whirlwind", icon("ability_warrior_cleave")], ["Bloodthirst", icon("ability_warrior_punishingblow")], ["Uppercut", icon("ability_warrior_charge")]]
  },
  {
    raid: "TK", zone: "Al'ar room", mob: "Phoenix-Hawk Hatchling", priority: "orange",
    markers: ["triangle"], tags: ["los", "aoe", "tank", "ranged"],
    danger: "AoE Silence lasts 6 sec; Wing Buffet knocks back nearby players.",
    call: "Drag hallway; tank corner; casters stay back.",
    tank: "Tank in hallway corner before entering Al'ar room.",
    spells: [["Silence", icon("spell_shadow_impphaseshift")], ["Wing Buffet", icon("ability_hunter_pet_windserpent")]]
  },
  {
    raid: "TK", zone: "Al'ar room", mob: "Phoenix-Hawk", priority: "yellow",
    markers: ["square"], tags: ["ranged", "aoe"],
    danger: "Dive targets furthest player and knocks back nearby; Mana Burn AoE around Phoenix-Hawk.",
    call: "Stack to control Dive; pull only 1-2.",
    tank: "Keep stack disciplined, but warn mana users about Mana Burn.",
    spells: [["Dive", icon("ability_warrior_charge")], ["Mana Burn", icon("spell_shadow_shadowworddominate")]]
  },
  {
    raid: "TK", zone: "Void Reaver path", mob: "Crystalcore Devastator", priority: "orange",
    markers: ["skull"], tags: ["tank", "ranged", "los"],
    danger: "Countercharge adds Arcane melee damage and silences nearby; Knock Away resets threat.",
    call: "Max range; melee behind; taunt after Knock Away.",
    tank: "Face into corner and be ready to taunt back after threat reset.",
    spells: [["Countercharge", icon("spell_arcane_blast")], ["Knock Away", icon("ability_warrior_charge")]]
  },
  {
    raid: "TK", zone: "Void Reaver path", mob: "Crystalcore Sentinel", priority: "red",
    markers: ["skull"], tags: ["focus", "tank", "aoe", "ranged"],
    danger: "Overcharge massive Arcane burst on highest-threat tank; Trample/Explosion hurt melee.",
    call: "Tank swap / hard heal Overcharge.",
    tank: "Second tank ready to taunt after Overcharge; healers hard commit.",
    spells: [["Overcharge", icon("spell_arcane_blast")], ["Trample", icon("ability_warrior_charge")], ["Charged Arcane Explosion", icon("spell_arcane_starfire")]]
  },
  {
    raid: "TK", zone: "Void Reaver path", mob: "Crystalcore Mechanic", priority: "yellow",
    markers: ["moon"], tags: ["banish", "ranged"],
    danger: "Recharge channels a heal on nearby Crystalcore Golem; Saw Blade bleed on random players.",
    call: "BANISH Mechanic; kill last.",
    tank: "Do not let Recharge freecast if active; kill after golems.",
    spells: [["Recharge", icon("inv_gizmo_02")], ["Saw Blade", icon("inv_gizmo_03")]]
  },
  {
    raid: "TK", zone: "Void Reaver path", mob: "Tempest-Smith", priority: "orange",
    markers: ["moon"], tags: ["mc", "stun", "aoe"],
    danger: "Power Up increases nearby golem damage by 50%; Golem Repair heals; can be Mind Controlled by Priest.",
    call: "PRIEST MC Smith until golems die.",
    tank: "If not MC'd, stop Power Up / Repair pressure à confirmer for interrupts.",
    spells: [["Power Up", icon("inv_gizmo_02")], ["Golem Repair", icon("spell_nature_healingtouch")], ["Shell Shock", icon("inv_misc_bomb_05")]]
  },
  {
    raid: "TK", zone: "Kael corridor", mob: "Crimson Hand Blood Knight", priority: "yellow",
    markers: ["cross"], tags: ["dispel", "purge"],
    danger: "Flash of Light heal cannot be interrupted; Hammer of Justice stun dispellable; Renew purgeable.",
    call: "Dispel HoJ; purge Renew; burn through Flash.",
    tank: "Hold in AoE pack; healers dispel stuns.",
    spells: [["Flash of Light", icon("spell_holy_holybolt")], ["Hammer of Justice", icon("spell_holy_searinglight")], ["Renew", icon("spell_nature_rejuvenation")]]
  },
  {
    raid: "TK", zone: "Kael corridor", mob: "Crimson Hand Battle Mage", priority: "orange",
    markers: ["moon"], tags: ["sheep", "aoe", "tank", "ranged"],
    danger: "Blizzard and Frostbolt Volley raid damage; Cone of Cold frontal slow. Spells cannot be interrupted, but Poly/Gouge can stop casts.",
    call: "SHEEP/Gouge Battle Mage if AoE hurts; move from Blizzard.",
    tank: "Face into wall for Cone of Cold.",
    spells: [["Blizzard", icon("spell_frost_glacier")], ["Cone of Cold", icon("spell_frost_frostnova")], ["Frostbolt Volley", icon("spell_frost_frostbolt02")]]
  },
  {
    raid: "TK", zone: "Kael corridor", mob: "Crimson Hand Centurion", priority: "orange",
    markers: ["skull"], tags: ["focus", "ranged"],
    danger: "Arcane Flurry deals massive damage to a random target.",
    call: "Watch random burst; CC if needed.",
    tank: "Keep in wall-facing AoE pack with Battle Mage/Blood Knight.",
    spells: [["Arcane Flurry", icon("spell_arcane_blast")]]
  }
];

const state = {
  raid: localStorage.getItem("raid") || "ALL",
  zone: localStorage.getItem("zone") || "ALL",
  mode: localStorage.getItem("mode") || "detailed",
  dangerOnly: localStorage.getItem("dangerOnly") === "true",
  tags: new Set(JSON.parse(localStorage.getItem("tags") || "[]")),
  query: ""
};

const cardsEl = document.querySelector("#cards");
const filtersEl = document.querySelector("#filters");
const zoneFiltersEl = document.querySelector("#zoneFilters");
const countEl = document.querySelector("#count");
const searchEl = document.querySelector("#search");

function save() {
  localStorage.setItem("raid", state.raid);
  localStorage.setItem("zone", state.zone);
  localStorage.setItem("mode", state.mode);
  localStorage.setItem("dangerOnly", state.dangerOnly);
  localStorage.setItem("tags", JSON.stringify([...state.tags]));
}

function normalized(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function visibleItems() {
  const q = normalized(state.query);
  return trashData.filter((item) => {
    if (state.raid !== "ALL" && item.raid !== state.raid) return false;
    if (state.zone !== "ALL" && item.zone !== state.zone) return false;
    if (state.dangerOnly && !["red", "orange"].includes(item.priority)) return false;
    for (const tag of state.tags) if (!item.tags.includes(tag)) return false;
    if (!q) return true;
    const hay = normalized([
      item.raid, item.zone, item.mob, item.priority, item.danger, item.call, item.tank,
      item.tags.join(" "), item.spells.map(([name]) => name).join(" ")
    ].join(" "));
    return hay.includes(q);
  });
}

function markerImgs(markers) {
  return markers.map((m) => `<span class="marker marker-${m}" title="${markerTitle[m] || m}" aria-label="${markerTitle[m] || m}"></span>`).join("");
}

function spellPills(spells) {
  return spells.map(([name, src]) => {
    const description = spellDescriptions[name] || "Effet à confirmer.";
    return `<span class="spell" tabindex="0" title="${escapeHtml(description)}" data-tip-title="${escapeHtml(name)}" data-tip="${escapeHtml(description)}"><img src="${src}" alt="">${name}</span>`;
  }).join("");
}

function tagPills(tags) {
  return tags.map((tag) => `<span class="tag ${tag}">${tagLabels[tag] || tag}</span>`).join("");
}

function renderFilters() {
  filtersEl.innerHTML = Object.entries(tagLabels)
    .filter(([key]) => ["focus", "kick", "sheep", "los", "fear", "mc", "cleave", "aoe", "tank", "ranged"].includes(key))
    .map(([key, label]) => `<button data-tag="${key}" class="${state.tags.has(key) ? "active" : ""}">${label}</button>`)
    .join("");
}

function zonesForCurrentRaid() {
  const zoneMap = new Map();
  trashData
    .filter((item) => state.raid === "ALL" || item.raid === state.raid)
    .forEach((item) => zoneMap.set(item.zone, (zoneMap.get(item.zone) || 0) + 1));
  return [...zoneMap.entries()];
}

function renderZoneFilters() {
  const zones = zonesForCurrentRaid();
  if (state.zone !== "ALL" && !zones.some(([zone]) => zone === state.zone)) {
    state.zone = "ALL";
  }

  zoneFiltersEl.innerHTML = [
    `<button data-zone="ALL" class="${state.zone === "ALL" ? "active" : ""}">All pre <span class="zone-count">${trashData.filter((item) => state.raid === "ALL" || item.raid === state.raid).length}</span></button>`,
    ...zones.map(([zone, count]) => `<button data-zone="${escapeHtml(zone)}" class="${state.zone === zone ? "active" : ""}">${zone} <span class="zone-count">${count}</span></button>`)
  ].join("");
}

function renderCards() {
  document.body.classList.toggle("compact", state.mode === "compact" || state.mode === "ultra");
  document.body.classList.toggle("ultra", state.mode === "ultra");
  document.querySelectorAll("[data-mode]").forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === state.mode));
  document.querySelector(".danger-toggle").classList.toggle("active", state.dangerOnly);
  document.querySelectorAll("[data-raid]").forEach((btn) => btn.classList.toggle("active", btn.dataset.raid === state.raid));

  const items = visibleItems();
  countEl.textContent = `${items.length}/${trashData.length} mobs`;

  if (!items.length) {
    cardsEl.innerHTML = `<div class="empty">Aucune carte visible. Reset filters ou change la recherche.</div>`;
    return;
  }

  const byRaid = items.reduce((acc, item) => {
    (acc[item.raid] ||= []).push(item);
    return acc;
  }, {});

  cardsEl.innerHTML = Object.entries(byRaid).map(([raid, raidItems]) => `
    <section class="raid-section">
      <div class="section-title">${raid} <span>${raidItems.length} cartes visibles</span></div>
      <div class="cards">
        ${raidItems.map((item) => `
          <article class="card ${item.priority}">
            <div class="card-head">
              <div class="mobline">
                <div class="zone">${item.raid} — ${item.zone}</div>
                <div class="mob">${item.mob}</div>
              </div>
              <div class="markers">${markerImgs(item.markers)}</div>
            </div>
            <div class="card-body">
              <div class="row"><div class="label">Danger</div><div class="value">${item.danger}</div></div>
              <div class="row call-row"><div class="label">Raid</div><div class="value call">${item.call}</div></div>
              <div class="row detail-row"><div class="label">Tank</div><div class="value">${item.tank}</div></div>
              <div class="row spells-row"><div class="label">Spells</div><div class="spells">${spellPills(item.spells)}</div></div>
            </div>
            <div class="tagbar">${tagPills(item.tags)} <button class="mini-copy" data-single="${escapeHtml(item.call)}">Copy</button></div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
}

function copyText(text) {
  navigator.clipboard?.writeText(text).catch(() => {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  });
}

filtersEl.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-tag]");
  if (!btn) return;
  const tag = btn.dataset.tag;
  state.tags.has(tag) ? state.tags.delete(tag) : state.tags.add(tag);
  save();
  renderFilters();
  renderCards();
});

zoneFiltersEl.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-zone]");
  if (!btn) return;
  state.zone = btn.dataset.zone;
  save();
  renderZoneFilters();
  renderCards();
});

document.addEventListener("click", (event) => {
  const raid = event.target.closest("[data-raid]");
  const mode = event.target.closest("[data-mode]");
  const single = event.target.closest("[data-single]");
  if (raid) state.raid = raid.dataset.raid;
  if (mode) state.mode = mode.dataset.mode;
  if (event.target.closest("#dangerOnly")) state.dangerOnly = !state.dangerOnly;
  if (event.target.closest("#reset")) {
    state.raid = "ALL";
    state.zone = "ALL";
    state.mode = "detailed";
    state.dangerOnly = false;
    state.tags.clear();
    state.query = "";
    searchEl.value = "";
    document.body.classList.remove("fullscreen");
  }
  if (event.target.closest("#fullscreen")) document.body.classList.toggle("fullscreen");
  if (single) copyText(single.dataset.single);
  save();
  renderFilters();
  renderZoneFilters();
  renderCards();
});

searchEl.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input")) return;
  const key = event.key.toLowerCase();
  if (key === "/") {
    event.preventDefault();
    searchEl.focus();
  }
  if (key === "1") state.raid = "SSC";
  if (key === "2") state.raid = "TK";
  if (key === "3") state.raid = "ALL";
  if (key === "c") state.mode = state.mode === "compact" ? "detailed" : "compact";
  if (key === "u") state.mode = state.mode === "ultra" ? "detailed" : "ultra";
  if (key === "r") {
    state.zone = "ALL";
    state.dangerOnly = false;
    state.tags.clear();
    state.query = "";
    searchEl.value = "";
  }
  if (key === "f") document.body.classList.toggle("fullscreen");
  save();
  renderFilters();
  renderZoneFilters();
  renderCards();
});

const tooltip = document.createElement("div");
tooltip.className = "spell-tooltip";
document.body.appendChild(tooltip);

function moveTooltip(event) {
  const pad = 14;
  const rect = tooltip.getBoundingClientRect();
  let left = event.clientX + pad;
  let top = event.clientY + pad;
  if (left + rect.width > window.innerWidth - 8) left = event.clientX - rect.width - pad;
  if (top + rect.height > window.innerHeight - 8) top = event.clientY - rect.height - pad;
  tooltip.style.left = `${Math.max(8, left)}px`;
  tooltip.style.top = `${Math.max(8, top)}px`;
}

document.addEventListener("mouseover", (event) => {
  const spell = event.target.closest(".spell[data-tip]");
  if (!spell) return;
  tooltip.innerHTML = `<div class="tip-title">${spell.dataset.tipTitle}</div><div class="tip-body">${spell.dataset.tip}</div>`;
  tooltip.classList.add("visible");
  moveTooltip(event);
});

document.addEventListener("mousemove", (event) => {
  if (tooltip.classList.contains("visible")) moveTooltip(event);
});

document.addEventListener("mouseout", (event) => {
  if (event.target.closest(".spell[data-tip]")) tooltip.classList.remove("visible");
});

document.addEventListener("focusin", (event) => {
  const spell = event.target.closest(".spell[data-tip]");
  if (!spell) return;
  const rect = spell.getBoundingClientRect();
  tooltip.innerHTML = `<div class="tip-title">${spell.dataset.tipTitle}</div><div class="tip-body">${spell.dataset.tip}</div>`;
  tooltip.classList.add("visible");
  moveTooltip({ clientX: rect.left + rect.width / 2, clientY: rect.bottom });
});

document.addEventListener("focusout", (event) => {
  if (event.target.closest(".spell[data-tip]")) tooltip.classList.remove("visible");
});

renderFilters();
renderZoneFilters();
renderCards();
