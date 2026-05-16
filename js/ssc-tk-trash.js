const icon = (name) => `assets/${name}.jpg`;

const i18n = {
  "en": {
    "markerTitle": {
      "skull": "Skull",
      "cross": "Cross",
      "moon": "Moon",
      "triangle": "Triangle",
      "star": "Star",
      "square": "Square"
    },
    "tagLabels": {
      "focus": "☠️ Focus",
      "kick": "✖️ Kick",
      "sheep": "🌙 Sheep",
      "los": "🛡️ LOS",
      "fear": "😱 Fear",
      "mc": "👁️ MC",
      "cleave": "💥 Cleave",
      "aoe": "🔥 AoE",
      "tank": "⚠️ Tank danger",
      "ranged": "🏹 Ranged danger",
      "stun": "Stun",
      "purge": "Purge",
      "dispel": "Dispel",
      "banish": "Banish",
      "tranq": "Tranq"
    },
    "spellDescriptions": {
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
    },
    "ui": {
      "subtitle": "TBC Anniversary Phase 2 · trash raid lead overlay · offline",
      "searchPlaceholder": "Search mob / spell / danger   /",
      "detailed": "Detailed",
      "dangerOnly": "RED/ORANGE",
      "reset": "Reset",
      "keys": "Keys: 1 SSC · 2 TK · 3 ALL · C compact · U ultra · F overlay · R reset · L language",
      "allZones": "All pre",
      "empty": "No visible cards. Reset filters or change search.",
      "visibleCards": "visible cards",
      "raidLabel": "Raid",
      "spells": "Spells",
      "copy": "Copy",
      "unknownSpell": "Effect to confirm."
    }
  },
  "fr": {
    "markerTitle": {
      "skull": "Crâne",
      "cross": "Croix",
      "moon": "Lune",
      "triangle": "Triangle",
      "star": "Étoile",
      "square": "Carré"
    },
    "tagLabels": {
      "focus": "☠️ Focus",
      "kick": "✖️ Kick",
      "sheep": "🌙 Sheep",
      "los": "🛡️ LOS",
      "fear": "😱 Fear",
      "mc": "👁️ MC",
      "cleave": "💥 Cleave",
      "aoe": "🔥 AoE",
      "tank": "⚠️ Danger tank",
      "ranged": "🏹 Danger distance",
      "stun": "Stun",
      "purge": "Purge",
      "dispel": "Dispel",
      "banish": "Banish",
      "tranq": "Tranq"
    },
    "spellDescriptions": {
      "Acid Geyser": "Variante de l'Underbog Colossus. Jet de poison sur un joueur; la cible vient sur le tank pour ne pas arroser le raid.",
      "Arcane Blast": "Dégâts Arcanes + knockback. Le tank joue dos au mur.",
      "Arcane Flurry": "Très gros burst Arcanes sur une cible aléatoire.",
      "Arcane Lightning": "Dégâts Arcanes avec silence sur le Greyheart Nether-Mage.",
      "Avenger's Shield": "Touche jusqu'à 3 cibles et daze. Dangereux si le Shield-Bearer est libre.",
      "Bestial Wrath": "Booste les dégâts du Beast-Tamer et des Sporebats. Tuer vite pendant le buff.",
      "Blast Wave": "AoE feu + slow autour de l'Astromancer.",
      "Blizzard": "Zone au sol du Battle Mage. Sortir tout de suite.",
      "Bloodthirst": "Attaque mêlée qui met de la pression sur le tank.",
      "Chain Lightning": "Nature qui rebondit entre joueurs proches. S'écarter si ça chaîne trop.",
      "Charge": "Charge et stun brièvement. Éviter les mobs libres dans les heals/casters.",
      "Charged Arcane Explosion": "AoE Arcanes du Sentinel. Danger mêlée.",
      "Cleave": "Cleave frontal. Le mob doit regarder loin du raid.",
      "Cone of Cold": "Cône de givre frontal + slow. Tank face au mur / loin du raid.",
      "Corrupt Devotion Aura": "Aura qui réduit l'armure autour du Serpentguard.",
      "Countercharge": "Ajoute dégâts Arcanes en mêlée et silence les joueurs proches.",
      "Dive": "Le Phoenix-Hawk vise une cible éloignée et knockback autour d'elle.",
      "Domination": "Contrôle mental d'un joueur. Totem de Glèbe/CC instant.",
      "Enrage": "Grosse vitesse d'attaque. Tranq sur Tidewalker Warrior.",
      "Fireball": "Dégât feu direct du Nether-Mage.",
      "Fireball Volley": "Dégâts feu sur le raid.",
      "Flash of Light": "Heal du Blood Knight, documenté comme non interruptible.",
      "Frenzy": "Accélère les attaques et dégâts. Surveiller les pics tank.",
      "Frightening Shout": "Fear en mêlée. Tremor/Fear Ward utiles.",
      "Frost Nova": "Root les joueurs proches. Ne pas rester bloqué dans une zone dangereuse.",
      "Frost Shock": "Dégât givre instant + slow sur la cible haute menace.",
      "Frostbolt": "Cast de givre interruptible quand indiqué.",
      "Frostbolt Volley": "Dégâts givre sur tout le raid.",
      "Golem Repair": "Heal un golem proche. Source conseille le MC du Tempest-Smith.",
      "Hammer of Justice": "Stun du Blood Knight, dispellable.",
      "Healing Touch": "Gros heal sur un murloc. À kick.",
      "Holy Fire": "Dégât sacré + DoT feu de la Priestess.",
      "Holy Nova": "AoE dégâts/heal du Priestess Spirit après la mort de la Priestess.",
      "Holy Smite": "Cast sacré direct.",
      "Initial Infection": "Maladie nature. Cleanse immédiat.",
      "Kick": "Interrompt les casts en mêlée. Garder les casters loin du Skulker si possible.",
      "Knock Away": "Knockback / reset menace. Le tank reprend vite.",
      "Lightning Bolt": "Cast nature interruptible du Tidewalker Shaman.",
      "Lightning Shield": "Punit les auto-attaques; purge ou attention mêlée.",
      "Mana Burn": "Pression mana autour du Phoenix-Hawk.",
      "Molten Armor": "Buff qui punit les attaquants; à purge/spellsteal.",
      "Mortal Cleave": "Cleave frontal avec effet Mortal Strike. Face loin du raid.",
      "Overcharge": "Énorme burst Arcanes sur le tank haut en menace. Swap/mitigation/heal fort.",
      "Poison Bolt Volley": "Volley nature/poison du Serpentshrine Lurker.",
      "Poison Shield": "Buff à purge tout de suite, sinon dégâts nature raid.",
      "Power Up": "Augmente les dégâts des golems proches de 50%. Contrôler le Smith.",
      "Rain of Fire": "Zone feu canalisée. Sortir le raid/le pack.",
      "Rancid Mushroom": "Champignons qui créent des nuages nature. Ne pas les taper, bouger.",
      "Recharge": "Canalise un heal sur un Crystalcore Golem proche.",
      "Rejuvenation": "HoT sur cible prioritaire. Purge si possible.",
      "Renew": "HoT du Blood Knight. Purge.",
      "Saw Blade": "Saignement sur joueurs aléatoires par le Mechanic.",
      "Shadow Bolt": "Dégât ombre direct.",
      "Shadow Nova": "AoE ombre + knockback. Placement loin de l'eau/bords.",
      "Shatter Armor": "Réduit l'armure du tank de 50% pendant 15 sec. Commentaires source: réduction dégâts aussi possible, à confirmer.",
      "Shell Shock": "Pression bombe/stun du Tempest-Smith. Gestion exacte à confirmer.",
      "Shield Charge": "Gros dégâts + knockback. Stack derrière pour casser les angles de charge.",
      "Silence": "AoE silence. LOS ou casters hors range.",
      "Sonic Scream": "Dégâts Arcanes du Hate-Screamer; portée exacte à confirmer en live.",
      "Spell Reflection": "Renvoie les sorts pendant une courte durée. Stop casts.",
      "Spore Burst": "AoE nature + DoT autour du Sporebat.",
      "Spore Quake": "Très grande pression nature de zone. Le raid doit bouger vite.",
      "Starfall": "Dégâts Arcanes proches du Star Scryer.",
      "Trample": "Dégâts mêlée du Crystalcore Sentinel.",
      "Uppercut": "Knockback tank. Jouer dos au mur.",
      "Virulent Poison": "Poison dispellable du Tidecaller.",
      "Water Elemental Totem": "Pose un totem qui invoque un gros élémentaire. Swap totem instant.",
      "Whirlwind": "AoE mêlée. Mêlées dehors / tank contrôle.",
      "Wing Buffet": "Knockback du Phoenix-Hawk Hatchling."
    },
    "ui": {
      "subtitle": "TBC Anniversary Phase 2 · outil trash raid lead · offline",
      "searchPlaceholder": "Chercher mob / sort / danger   /",
      "detailed": "Détaillé",
      "dangerOnly": "ROUGE/ORANGE",
      "reset": "Reset",
      "keys": "Touches: 1 SSC · 2 TK · 3 ALL · C compact · U ultra · F overlay · R reset · L langue",
      "allZones": "Toutes zones",
      "empty": "Aucune carte visible. Reset filtres ou change la recherche.",
      "visibleCards": "cartes visibles",
      "raidLabel": "Call",
      "spells": "Sorts",
      "copy": "Copier",
      "unknownSpell": "Effet à confirmer."
    }
  }
};

const trashData = [
  {
    "raid": "SSC",
    "zone": "Pre Hydross",
    "mob": "Coilfang Beast-Tamer",
    "priority": "orange",
    "markers": [
      "skull"
    ],
    "tags": [
      "focus",
      "cleave",
      "tank"
    ],
    "danger": "Bestial Wrath boosts Beast-Tamer and Sporebat damage; frontal Cleave.",
    "call": "FOCUS Beast-Tamer; face away.",
    "tank": "MT on Beast-Tamer, turned away from raid. Kill quickly during Bestial Wrath.",
    "spells": [
      [
        "Cleave",
        "assets/ability_warrior_cleave.jpg"
      ],
      [
        "Bestial Wrath",
        "assets/ability_druid_supriseattack.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Hydross",
    "mob": "Coilfang Hate-Screamer",
    "priority": "red",
    "markers": [
      "skull",
      "cross"
    ],
    "tags": [
      "focus",
      "los",
      "aoe",
      "ranged"
    ],
    "danger": "Silence is AoE and interrupts casting for 5 sec; Sonic Scream Arcane damage nearby.",
    "call": "FOCUS / LOS Hate-Screamer.",
    "tank": "Move pack out of open field if casters need line of sight control.",
    "spells": [
      [
        "Silence",
        "assets/spell_shadow_impphaseshift.jpg"
      ],
      [
        "Sonic Scream",
        "assets/ability_hunter_pet_windserpent.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Hydross",
    "mob": "Serpentshrine Sporebat",
    "priority": "yellow",
    "markers": [
      "triangle"
    ],
    "tags": [
      "stun",
      "aoe",
      "ranged"
    ],
    "danger": "Charge stuns a target; Spore Burst Nature AoE + DoT nearby.",
    "call": "Stack control; kill before Beast-Tamer if Charge is causing chaos.",
    "tank": "OTs collect Sporebats fast; avoid loose charges into healers.",
    "spells": [
      [
        "Charge",
        "assets/ability_warrior_charge.jpg"
      ],
      [
        "Spore Burst",
        "assets/spell_nature_abolishmagic.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Hydross",
    "mob": "Underbog Colossus",
    "priority": "orange",
    "markers": [
      "skull"
    ],
    "tags": [
      "focus",
      "aoe",
      "tank",
      "dispel"
    ],
    "danger": "Variant sets: Acid Geyser/Parasite, Atrophic Blow/Frenzy, or Spore Quake/Initial Infection; death effects vary.",
    "call": "Identify variant; move out of Spore Quake; cleanse disease.",
    "tank": "Tank steady for Enrage/Frenzy; OTs ready for Colossus Ragers on death.",
    "spells": [
      [
        "Spore Quake",
        "assets/spell_nature_earthquake.jpg"
      ],
      [
        "Initial Infection",
        "assets/spell_nature_nullifydisease.jpg"
      ],
      [
        "Acid Geyser",
        "assets/spell_nature_abolishmagic.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Lurker Platforms",
    "mob": "Vashj'ir Honor Guard",
    "priority": "orange",
    "markers": [
      "skull"
    ],
    "tags": [
      "fear",
      "cleave",
      "tank"
    ],
    "danger": "Frightening Shout fears melee; Mortal Cleave applies Mortal Strike; Knockback on tank.",
    "call": "Fear protection; face away.",
    "tank": "Back to wall where possible; face Mortal Cleave away from raid.",
    "spells": [
      [
        "Frightening Shout",
        "assets/spell_shadow_possession.jpg"
      ],
      [
        "Mortal Cleave",
        "assets/ability_warrior_cleave.jpg"
      ],
      [
        "Frenzy",
        "assets/ability_warrior_savageblow.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Lurker Platforms",
    "mob": "Coilfang Priestess",
    "priority": "orange",
    "markers": [
      "moon"
    ],
    "tags": [
      "sheep",
      "kick",
      "aoe",
      "dispel"
    ],
    "danger": "Holy Fire DoT; on death Priestess Spirit spams Holy Nova and heals nearby enemies.",
    "call": "CC/KILL Priestess; move from Spirit Nova.",
    "tank": "Keep pack together for AoE, but expect Spirit after death.",
    "spells": [
      [
        "Holy Fire",
        "assets/spell_holy_searinglight.jpg"
      ],
      [
        "Holy Nova",
        "assets/spell_holy_holynova.jpg"
      ],
      [
        "Holy Smite",
        "assets/spell_holy_holysmite.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Lurker Platforms",
    "mob": "Coilfang Shatterer",
    "priority": "yellow",
    "markers": [
      "cross"
    ],
    "tags": [
      "tank"
    ],
    "danger": "Shatter Armor reduces armor by 50% for 15 sec.",
    "call": "Watch tank after Shatter Armor.",
    "tank": "Heavy heals if Shatter Armor lands; spell reflect note à confirmer by source comments.",
    "spells": [
      [
        "Shatter Armor",
        "assets/ability_warrior_savageblow.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Leotheras",
    "mob": "Greyheart Tidecaller",
    "priority": "red",
    "markers": [
      "skull"
    ],
    "tags": [
      "focus",
      "purge",
      "dispel",
      "aoe"
    ],
    "danger": "Water Elemental Totem summons a large elemental; Poison Shield raid Nature damage if not purged.",
    "call": "KILL Tidecaller; swap to Water Totem instantly; purge Poison Shield.",
    "tank": "Hold pack while raid swaps to totems. Ignore summoned elemental per source.",
    "spells": [
      [
        "Water Elemental Totem",
        "assets/spell_frost_glacier.jpg"
      ],
      [
        "Poison Shield",
        "assets/spell_nature_abolishmagic.jpg"
      ],
      [
        "Virulent Poison",
        "assets/spell_nature_nullifydisease.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Leotheras",
    "mob": "Greyheart Nether-Mage",
    "priority": "red",
    "markers": [
      "moon"
    ],
    "tags": [
      "sheep",
      "focus",
      "aoe",
      "ranged",
      "dispel"
    ],
    "danger": "Very powerful caster: Arcane Lightning silence, Rain of Fire, Arcane Volley, Cone of Cold, Destruction buffs.",
    "call": "SHEEP Nether-Mage or kill first; dispel/spellsteal buffs.",
    "tank": "If active, face away for Cone of Cold and pull out of Rain of Fire.",
    "spells": [
      [
        "Arcane Lightning",
        "assets/spell_nature_lightning.jpg"
      ],
      [
        "Rain of Fire",
        "assets/spell_shadow_rainoffire.jpg"
      ],
      [
        "Fireball",
        "assets/spell_fire_flamebolt.jpg"
      ],
      [
        "Frostbolt",
        "assets/spell_frost_frostbolt02.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Leotheras",
    "mob": "Greyheart Skulker",
    "priority": "yellow",
    "markers": [
      "cross"
    ],
    "tags": [
      "focus",
      "kick"
    ],
    "danger": "Kick interrupts spellcasting within melee range.",
    "call": "Kill after Tidecaller / Nether-Mage control.",
    "tank": "Keep away from healers and casters where practical.",
    "spells": [
      [
        "Kick",
        "assets/ability_warrior_disarm.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Leotheras",
    "mob": "Greyheart Shield-Bearer",
    "priority": "orange",
    "markers": [
      "square"
    ],
    "tags": [
      "tank",
      "ranged",
      "stun"
    ],
    "danger": "Shield Charge deals massive damage and knockback; Avenger's Shield hits/dazes 3 targets.",
    "call": "STACK behind Shield-Bearer to prevent charge.",
    "tank": "Face into wall; keep raid stacked behind.",
    "spells": [
      [
        "Shield Charge",
        "assets/ability_warrior_charge.jpg"
      ],
      [
        "Avenger's Shield",
        "assets/spell_holy_holybolt.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Leotheras",
    "mob": "Serpentshrine Lurker",
    "priority": "orange",
    "markers": [
      "triangle"
    ],
    "tags": [
      "banish",
      "aoe",
      "ranged"
    ],
    "danger": "Poison Bolt Volley and Rancid Mushrooms/Spore Cloud create raid damage zones.",
    "call": "BANISH Lurker; save for last.",
    "tank": "Do not fight with other mobs active; move away from mushrooms.",
    "spells": [
      [
        "Poison Bolt Volley",
        "assets/spell_nature_nullifydisease.jpg"
      ],
      [
        "Rancid Mushroom",
        "assets/spell_nature_abolishmagic.jpg"
      ],
      [
        "Shadow Bolt",
        "assets/spell_shadow_shadowbolt.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Leotheras",
    "mob": "Coilfang Fathom-Witch",
    "priority": "red",
    "markers": [
      "skull"
    ],
    "tags": [
      "focus",
      "mc",
      "aoe",
      "tank"
    ],
    "danger": "Domination mind controls a player; Shadow Nova knockback can punt players into piranha water.",
    "call": "FOCUS Fathom-Witch; Grounding/CC Mind Control.",
    "tank": "Position carefully away from edges/water before Shadow Nova.",
    "spells": [
      [
        "Domination",
        "assets/spell_shadow_shadowworddominate.jpg"
      ],
      [
        "Shadow Nova",
        "assets/spell_shadow_shadowfury.jpg"
      ],
      [
        "Shadow Bolt",
        "assets/spell_shadow_shadowbolt.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Leotheras",
    "mob": "Coilfang Serpentguard",
    "priority": "yellow",
    "markers": [
      "cross"
    ],
    "tags": [
      "tank",
      "dispel"
    ],
    "danger": "Spell Reflection reflects spells for a short duration; Corrupt Devotion Aura reduces nearby armor.",
    "call": "Stop casts into Spell Reflection.",
    "tank": "Tank after Fathom-Witches; watch armor aura range.",
    "spells": [
      [
        "Spell Reflection",
        "assets/ability_warrior_decisivestrike.jpg"
      ],
      [
        "Corrupt Devotion Aura",
        "assets/spell_shadow_possession.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Morogrim",
    "mob": "Tidewalker Warrior",
    "priority": "yellow",
    "markers": [
      "triangle"
    ],
    "tags": [
      "tranq",
      "tank"
    ],
    "danger": "Enrage increases attack speed by 150%; removable with Tranquilizing Shot.",
    "call": "Tranq Enrage.",
    "tank": "Prepare for Bloodthirst/Uppercut and brief knockback.",
    "spells": [
      [
        "Enrage",
        "assets/ability_warrior_savageblow.jpg"
      ],
      [
        "Bloodthirst",
        "assets/ability_warrior_punishingblow.jpg"
      ],
      [
        "Uppercut",
        "assets/ability_warrior_charge.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Morogrim",
    "mob": "Tidewalker Hydromancer",
    "priority": "orange",
    "markers": [
      "cross"
    ],
    "tags": [
      "kick",
      "focus",
      "aoe"
    ],
    "danger": "Frostbolt can be interrupted; Frost Nova roots nearby players.",
    "call": "KICK Frostbolt; kill caster.",
    "tank": "Keep murlocs clumped for AoE while interrupts cover Hydromancer.",
    "spells": [
      [
        "Frostbolt",
        "assets/spell_frost_frostbolt02.jpg"
      ],
      [
        "Frost Nova",
        "assets/spell_frost_frostnova.jpg"
      ],
      [
        "Frost Shock",
        "assets/spell_frost_glacier.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Morogrim",
    "mob": "Tidewalker Depth-Seer",
    "priority": "red",
    "markers": [
      "skull"
    ],
    "tags": [
      "kick",
      "focus"
    ],
    "danger": "Healing Touch heals another murloc and can be interrupted; Rejuvenation HoT.",
    "call": "FOCUS / KICK healer.",
    "tank": "Hold pack while interrupts stop Healing Touch.",
    "spells": [
      [
        "Healing Touch",
        "assets/spell_nature_healingtouch.jpg"
      ],
      [
        "Rejuvenation",
        "assets/spell_nature_rejuvenation.jpg"
      ]
    ]
  },
  {
    "raid": "SSC",
    "zone": "Pre Morogrim",
    "mob": "Tidewalker Shaman",
    "priority": "orange",
    "markers": [
      "moon"
    ],
    "tags": [
      "kick",
      "ranged",
      "purge"
    ],
    "danger": "Chain Lightning punishes stacked players; Lightning Bolt can be interrupted; Lightning Shield damages attackers.",
    "call": "KICK Shaman; spread for Chain Lightning; purge/avoid shield.",
    "tank": "Clump for AoE only if Chain Lightning damage is controlled.",
    "spells": [
      [
        "Chain Lightning",
        "assets/spell_nature_chainlightning.jpg"
      ],
      [
        "Lightning Bolt",
        "assets/spell_nature_lightning.jpg"
      ],
      [
        "Lightning Shield",
        "assets/spell_nature_lightning.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Entrance / Void Reaver path",
    "mob": "Astromancer",
    "priority": "red",
    "markers": [
      "skull"
    ],
    "tags": [
      "focus",
      "aoe",
      "purge",
      "ranged"
    ],
    "danger": "Molten Armor punishes attackers and can be purged; Blast Wave AoE slow; Fireball Volley raid damage.",
    "call": "KILL Astromancer first; purge Molten Armor.",
    "tank": "Hold away from loose casters; expect AoE damage.",
    "spells": [
      [
        "Molten Armor",
        "assets/spell_fire_fireball02.jpg"
      ],
      [
        "Blast Wave",
        "assets/spell_fire_selfdestruct.jpg"
      ],
      [
        "Fireball Volley",
        "assets/spell_fire_flamebolt.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Entrance / Void Reaver path",
    "mob": "Star Scryer",
    "priority": "red",
    "markers": [
      "cross"
    ],
    "tags": [
      "focus",
      "mc",
      "aoe",
      "tank"
    ],
    "danger": "Domination mind controls a player; Arcane Blast knockback; Starfall Arcane raid damage nearby.",
    "call": "KILL Star Scryer second; CC MC instantly.",
    "tank": "Back against a wall for Arcane Blast.",
    "spells": [
      [
        "Domination",
        "assets/spell_shadow_shadowworddominate.jpg"
      ],
      [
        "Arcane Blast",
        "assets/spell_arcane_blast.jpg"
      ],
      [
        "Starfall",
        "assets/spell_arcane_starfire.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Entrance / Void Reaver path",
    "mob": "Bloodwarder Marshal",
    "priority": "orange",
    "markers": [
      "skull"
    ],
    "tags": [
      "cleave",
      "tank",
      "aoe"
    ],
    "danger": "Whirlwind nearby damage; Uppercut knocks tank back; patrol with Squires.",
    "call": "Wall tank Marshal; interrupt Squire heals.",
    "tank": "Face Marshal into wall so Uppercut does not reposition you.",
    "spells": [
      [
        "Whirlwind",
        "assets/ability_warrior_cleave.jpg"
      ],
      [
        "Bloodthirst",
        "assets/ability_warrior_punishingblow.jpg"
      ],
      [
        "Uppercut",
        "assets/ability_warrior_charge.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Al'ar room",
    "mob": "Phoenix-Hawk Hatchling",
    "priority": "orange",
    "markers": [
      "triangle"
    ],
    "tags": [
      "los",
      "aoe",
      "tank",
      "ranged"
    ],
    "danger": "AoE Silence lasts 6 sec; Wing Buffet knocks back nearby players.",
    "call": "Drag hallway; tank corner; casters stay back.",
    "tank": "Tank in hallway corner before entering Al'ar room.",
    "spells": [
      [
        "Silence",
        "assets/spell_shadow_impphaseshift.jpg"
      ],
      [
        "Wing Buffet",
        "assets/ability_hunter_pet_windserpent.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Al'ar room",
    "mob": "Phoenix-Hawk",
    "priority": "yellow",
    "markers": [
      "square"
    ],
    "tags": [
      "ranged",
      "aoe"
    ],
    "danger": "Dive targets furthest player and knocks back nearby; Mana Burn AoE around Phoenix-Hawk.",
    "call": "Stack to control Dive; pull only 1-2.",
    "tank": "Keep stack disciplined, but warn mana users about Mana Burn.",
    "spells": [
      [
        "Dive",
        "assets/ability_warrior_charge.jpg"
      ],
      [
        "Mana Burn",
        "assets/spell_shadow_shadowworddominate.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Void Reaver path",
    "mob": "Crystalcore Devastator",
    "priority": "orange",
    "markers": [
      "skull"
    ],
    "tags": [
      "tank",
      "ranged",
      "los"
    ],
    "danger": "Countercharge adds Arcane melee damage and silences nearby; Knock Away resets threat.",
    "call": "Max range; melee behind; taunt after Knock Away.",
    "tank": "Face into corner and be ready to taunt back after threat reset.",
    "spells": [
      [
        "Countercharge",
        "assets/spell_arcane_blast.jpg"
      ],
      [
        "Knock Away",
        "assets/ability_warrior_charge.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Void Reaver path",
    "mob": "Crystalcore Sentinel",
    "priority": "red",
    "markers": [
      "skull"
    ],
    "tags": [
      "focus",
      "tank",
      "aoe",
      "ranged"
    ],
    "danger": "Overcharge massive Arcane burst on highest-threat tank; Trample/Explosion hurt melee.",
    "call": "Tank swap / hard heal Overcharge.",
    "tank": "Second tank ready to taunt after Overcharge; healers hard commit.",
    "spells": [
      [
        "Overcharge",
        "assets/spell_arcane_blast.jpg"
      ],
      [
        "Trample",
        "assets/ability_warrior_charge.jpg"
      ],
      [
        "Charged Arcane Explosion",
        "assets/spell_arcane_starfire.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Void Reaver path",
    "mob": "Crystalcore Mechanic",
    "priority": "yellow",
    "markers": [
      "moon"
    ],
    "tags": [
      "banish",
      "ranged"
    ],
    "danger": "Recharge channels a heal on nearby Crystalcore Golem; Saw Blade bleed on random players.",
    "call": "BANISH Mechanic; kill last.",
    "tank": "Do not let Recharge freecast if active; kill after golems.",
    "spells": [
      [
        "Recharge",
        "assets/inv_gizmo_02.jpg"
      ],
      [
        "Saw Blade",
        "assets/inv_gizmo_03.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Void Reaver path",
    "mob": "Tempest-Smith",
    "priority": "orange",
    "markers": [
      "moon"
    ],
    "tags": [
      "mc",
      "stun",
      "aoe"
    ],
    "danger": "Power Up increases nearby golem damage by 50%; Golem Repair heals; can be Mind Controlled by Priest.",
    "call": "PRIEST MC Smith until golems die.",
    "tank": "If not MC'd, stop Power Up / Repair pressure à confirmer for interrupts.",
    "spells": [
      [
        "Power Up",
        "assets/inv_gizmo_02.jpg"
      ],
      [
        "Golem Repair",
        "assets/spell_nature_healingtouch.jpg"
      ],
      [
        "Shell Shock",
        "assets/inv_misc_bomb_05.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Kael corridor",
    "mob": "Crimson Hand Blood Knight",
    "priority": "yellow",
    "markers": [
      "cross"
    ],
    "tags": [
      "dispel",
      "purge"
    ],
    "danger": "Flash of Light heal cannot be interrupted; Hammer of Justice stun dispellable; Renew purgeable.",
    "call": "Dispel HoJ; purge Renew; burn through Flash.",
    "tank": "Hold in AoE pack; healers dispel stuns.",
    "spells": [
      [
        "Flash of Light",
        "assets/spell_holy_holybolt.jpg"
      ],
      [
        "Hammer of Justice",
        "assets/spell_holy_searinglight.jpg"
      ],
      [
        "Renew",
        "assets/spell_nature_rejuvenation.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Kael corridor",
    "mob": "Crimson Hand Battle Mage",
    "priority": "orange",
    "markers": [
      "moon"
    ],
    "tags": [
      "sheep",
      "aoe",
      "tank",
      "ranged"
    ],
    "danger": "Blizzard and Frostbolt Volley raid damage; Cone of Cold frontal slow. Spells cannot be interrupted, but Poly/Gouge can stop casts.",
    "call": "SHEEP/Gouge Battle Mage if AoE hurts; move from Blizzard.",
    "tank": "Face into wall for Cone of Cold.",
    "spells": [
      [
        "Blizzard",
        "assets/spell_frost_glacier.jpg"
      ],
      [
        "Cone of Cold",
        "assets/spell_frost_frostnova.jpg"
      ],
      [
        "Frostbolt Volley",
        "assets/spell_frost_frostbolt02.jpg"
      ]
    ]
  },
  {
    "raid": "TK",
    "zone": "Kael corridor",
    "mob": "Crimson Hand Centurion",
    "priority": "orange",
    "markers": [
      "skull"
    ],
    "tags": [
      "focus",
      "ranged"
    ],
    "danger": "Arcane Flurry deals massive damage to a random target.",
    "call": "Watch random burst; CC if needed.",
    "tank": "Keep in wall-facing AoE pack with Battle Mage/Blood Knight.",
    "spells": [
      [
        "Arcane Flurry",
        "assets/spell_arcane_blast.jpg"
      ]
    ]
  }
];

const frTrashText = {
  "Coilfang Beast-Tamer": {
    "danger": "Bestial Wrath booste le Beast-Tamer et les Sporebats; Cleave frontal.",
    "call": "FOCUS Beast-Tamer; le tourner dos raid.",
    "tank": "MT sur Beast-Tamer, dos au raid. Le tomber vite pendant Bestial Wrath."
  },
  "Coilfang Hate-Screamer": {
    "danger": "Silence AoE 5 sec; Sonic Scream met une pression Arcanes proche.",
    "call": "FOCUS / LOS Hate-Screamer.",
    "tank": "Sortir le pack de l'open field si les casters doivent jouer LOS."
  },
  "Serpentshrine Sporebat": {
    "danger": "Charge stun une cible; Spore Burst fait AoE nature + DoT proche.",
    "call": "Contrôle du stack; tuer avant Beast-Tamer si les Charges mettent le chaos.",
    "tank": "OTs ramassent vite les Sporebats; éviter les Charges libres sur les heals."
  },
  "Underbog Colossus": {
    "danger": "Sets fixes: Acid Geyser/Parasite, Atrophic Blow/Frenzy ou Spore Quake/Initial Infection; effet à la mort variable.",
    "call": "Identifier la variante; sortir de Spore Quake; cleanse maladie.",
    "tank": "Tank stable sur Enrage/Frenzy; OTs prêts pour les Ragers à la mort."
  },
  "Vashj'ir Honor Guard": {
    "danger": "Frightening Shout fear la mêlée; Mortal Cleave applique Mortal Strike; knockback tank.",
    "call": "Anti-fear; face loin du raid.",
    "tank": "Dos au mur si possible; Mortal Cleave loin du raid."
  },
  "Coilfang Priestess": {
    "danger": "Holy Fire DoT; à la mort, Priestess Spirit spam Holy Nova et heal les ennemis proches.",
    "call": "CC/KILL Priestess; bouger de la Nova du Spirit.",
    "tank": "Garder le pack groupé pour AoE, mais prévoir le Spirit après la mort."
  },
  "Coilfang Shatterer": {
    "danger": "Shatter Armor réduit l'armure de 50% pendant 15 sec.",
    "call": "Surveiller tank après Shatter Armor.",
    "tank": "Gros heals si Shatter Armor passe; Spell Reflect mentionné en commentaire, à confirmer."
  },
  "Greyheart Tidecaller": {
    "danger": "Water Elemental Totem invoque un gros élémentaire; Poison Shield fait mal au raid si non purgé.",
    "call": "KILL Tidecaller; swap Water Totem instant; purge Poison Shield.",
    "tank": "Tenir le pack pendant que le raid swap totems. Ignorer l'élémentaire selon Wowhead."
  },
  "Greyheart Nether-Mage": {
    "danger": "Caster très dangereux: silence Arcane Lightning, Rain of Fire, Arcane Volley, Cone of Cold, buffs Destruction.",
    "call": "SHEEP Nether-Mage ou tuer en premier; dispel/spellsteal buffs.",
    "tank": "Si actif, face loin du raid pour Cone of Cold et sortir de Rain of Fire."
  },
  "Greyheart Skulker": {
    "danger": "Kick interrompt les casts en mêlée.",
    "call": "Tuer après Tidecaller / contrôle Nether-Mage.",
    "tank": "Le garder loin des heals/casters si possible."
  },
  "Greyheart Shield-Bearer": {
    "danger": "Shield Charge = gros dégâts + knockback; Avenger's Shield touche/daze 3 cibles.",
    "call": "STACK derrière Shield-Bearer pour empêcher la charge.",
    "tank": "Face au mur; raid stack derrière."
  },
  "Serpentshrine Lurker": {
    "danger": "Poison Bolt Volley + champignons/Spore Cloud créent des zones de dégâts raid.",
    "call": "BANISH Lurker; garder pour la fin.",
    "tank": "Ne pas le gérer avec d'autres mobs actifs; bouger des champignons."
  },
  "Coilfang Fathom-Witch": {
    "danger": "Domination MC un joueur; Shadow Nova peut envoyer le raid dans l'eau à piranhas.",
    "call": "FOCUS Fathom-Witch; Glèbe/CC le Mind Control.",
    "tank": "Placement loin des bords/eau avant Shadow Nova."
  },
  "Coilfang Serpentguard": {
    "danger": "Spell Reflection renvoie les sorts; Corrupt Devotion Aura réduit l'armure proche.",
    "call": "Stop casts dans Spell Reflection.",
    "tank": "Tanker après les Fathom-Witches; attention range aura armure."
  },
  "Tidewalker Warrior": {
    "danger": "Enrage augmente la vitesse d'attaque de 150%; dispel au Tranq Shot.",
    "call": "Tranq Enrage.",
    "tank": "Prévoir Bloodthirst/Uppercut et petit knockback."
  },
  "Tidewalker Hydromancer": {
    "danger": "Frostbolt interruptible; Frost Nova root les joueurs proches.",
    "call": "KICK Frostbolt; tuer caster.",
    "tank": "Garder les murlocs packés pour AoE pendant que les kicks couvrent Hydromancer."
  },
  "Tidewalker Depth-Seer": {
    "danger": "Healing Touch heal un autre murloc et se kick; Rejuvenation HoT.",
    "call": "FOCUS / KICK healer.",
    "tank": "Tenir le pack pendant que les kicks stoppent Healing Touch."
  },
  "Tidewalker Shaman": {
    "danger": "Chain Lightning punit les joueurs stackés; Lightning Bolt kickable; Lightning Shield punit les auto-attaques.",
    "call": "KICK Shaman; s'écarter pour Chain Lightning; purge/attention shield.",
    "tank": "Pack pour AoE seulement si Chain Lightning est sous contrôle."
  },
  "Astromancer": {
    "danger": "Molten Armor punit les attaquants et se purge; Blast Wave AoE slow; Fireball Volley dégâts raid.",
    "call": "KILL Astromancer en premier; purge Molten Armor.",
    "tank": "Tenir loin des casters libres; prévoir dégâts AoE."
  },
  "Star Scryer": {
    "danger": "Domination MC un joueur; Arcane Blast knockback; Starfall dégâts Arcanes proches.",
    "call": "KILL Star Scryer en deuxième; CC MC instant.",
    "tank": "Dos au mur pour Arcane Blast."
  },
  "Bloodwarder Marshal": {
    "danger": "Whirlwind dégâts proches; Uppercut knockback tank; patrouille avec Squires.",
    "call": "Tank Marshal au mur; interrupt heals des Squires.",
    "tank": "Marshal face au mur pour que Uppercut ne te replace pas."
  },
  "Phoenix-Hawk Hatchling": {
    "danger": "Silence AoE 6 sec; Wing Buffet knockback les joueurs proches.",
    "call": "Tirer couloir; tank au coin; casters en arrière.",
    "tank": "Tanker dans le coin du couloir avant la salle d'Al'ar."
  },
  "Phoenix-Hawk": {
    "danger": "Dive vise un joueur éloigné et knockback autour; Mana Burn AoE autour du Phoenix-Hawk.",
    "call": "Stack pour contrôler Dive; pull seulement 1-2.",
    "tank": "Stack propre; prévenir les joueurs mana pour Mana Burn."
  },
  "Crystalcore Devastator": {
    "danger": "Countercharge ajoute dégâts Arcanes mêlée et silence proche; Knock Away reset menace.",
    "call": "Max range; mêlées derrière; taunt après Knock Away.",
    "tank": "Face dans un coin et prêt à retaunt après reset menace."
  },
  "Crystalcore Sentinel": {
    "danger": "Overcharge énorme burst Arcanes sur tank haut en menace; Trample/Explosion font mal mêlée.",
    "call": "Tank swap / hard heal Overcharge.",
    "tank": "Deuxième tank prêt à taunt après Overcharge; heals commit fort."
  },
  "Crystalcore Mechanic": {
    "danger": "Recharge canalise un heal sur golem proche; Saw Blade bleed sur joueurs aléatoires.",
    "call": "BANISH Mechanic; tuer en dernier.",
    "tank": "Ne pas laisser Recharge freecast si actif; tuer après golems."
  },
  "Tempest-Smith": {
    "danger": "Power Up augmente les dégâts golems proches de 50%; Golem Repair heal; MC possible par prêtre.",
    "call": "PRÊTRE MC Smith jusqu'à la mort des golems.",
    "tank": "Si pas MC, stopper Power Up / Repair; interrupts à confirmer."
  },
  "Crimson Hand Blood Knight": {
    "danger": "Flash of Light non interruptible; Hammer of Justice dispellable; Renew purgeable.",
    "call": "Dispel HoJ; purge Renew; burst à travers Flash.",
    "tank": "Tenir dans le pack AoE; heals dispel les stuns."
  },
  "Crimson Hand Battle Mage": {
    "danger": "Blizzard et Frostbolt Volley font mal au raid; Cone of Cold frontal slow. Non interruptible, mais Poly/Gouge stop les casts.",
    "call": "SHEEP/Gouge Battle Mage si l'AoE pique; sortir de Blizzard.",
    "tank": "Face au mur pour Cone of Cold."
  },
  "Crimson Hand Centurion": {
    "danger": "Arcane Flurry met un énorme burst sur cible aléatoire.",
    "call": "Surveiller burst aléatoire; CC si besoin.",
    "tank": "Garder dans le pack AoE face mur avec Battle Mage/Blood Knight."
  }
};

const frMobNames = {
  "Coilfang Beast-Tamer": "Dompteur de bêtes de Glissecroc",
  "Coilfang Hate-Screamer": "Hurle-haine de Glissecroc",
  "Serpentshrine Sporebat": "Sporoptère du sanctuaire du Serpent",
  "Underbog Colossus": "Colosse de Basse-tourbière",
  "Vashj'ir Honor Guard": "Garde d'honneur de Vashj'ir",
  "Coilfang Priestess": "Prêtresse de Glissecroc",
  "Coilfang Shatterer": "Fracasseur de Glissecroc",
  "Greyheart Tidecaller": "Implorateur de marée Griscoeur",
  "Greyheart Nether-Mage": "Mage-néant Griscoeur",
  "Greyheart Skulker": "Rôdeur Griscoeur",
  "Greyheart Shield-Bearer": "Porte-bouclier Griscoeur",
  "Serpentshrine Lurker": "Rôdeur du sanctuaire du Serpent",
  "Coilfang Fathom-Witch": "Sorcière des fonds de Glissecroc",
  "Coilfang Serpentguard": "Garde-serpent de Glissecroc",
  "Tidewalker Warrior": "Guerrier marcheur des flots",
  "Tidewalker Hydromancer": "Hydromancienne marcheuse des flots",
  "Tidewalker Depth-Seer": "Voyant des profondeurs marcheur des flots",
  "Tidewalker Shaman": "Chaman marcheur des flots",
  "Astromancer": "Astromancien",
  "Star Scryer": "Scrutateur stellaire",
  "Bloodwarder Marshal": "Maréchal garde-sang",
  "Phoenix-Hawk Hatchling": "Jeune faucon-phénix",
  "Phoenix-Hawk": "Faucon-phénix",
  "Crystalcore Devastator": "Dévastateur Coeur-de-cristal",
  "Crystalcore Sentinel": "Sentinelle Coeur-de-cristal",
  "Crystalcore Mechanic": "Mécanicien Coeur-de-cristal",
  "Tempest-Smith": "Forgeron-tempête",
  "Crimson Hand Blood Knight": "Chevalier de sang de la Main cramoisie",
  "Crimson Hand Battle Mage": "Mage de bataille de la Main cramoisie",
  "Crimson Hand Centurion": "Centurion de la Main cramoisie"
};

const frSpellNames = {
  "Acid Geyser": "Geyser acide",
  "Arcane Blast": "Déflagration des arcanes",
  "Arcane Flurry": "Rafale arcanique",
  "Arcane Lightning": "Éclair arcanique",
  "Avenger's Shield": "Bouclier du vengeur",
  "Bestial Wrath": "Courroux bestial",
  "Blast Wave": "Vague explosive",
  "Blizzard": "Blizzard",
  "Bloodthirst": "Sanguinaire",
  "Chain Lightning": "Chaîne d'éclairs",
  "Charge": "Charge",
  "Charged Arcane Explosion": "Explosion des arcanes chargée",
  "Cleave": "Enchaînement",
  "Cone of Cold": "Cône de froid",
  "Corrupt Devotion Aura": "Aura de dévotion corrompue",
  "Countercharge": "Contre-charge",
  "Dive": "Plongeon",
  "Domination": "Domination",
  "Enrage": "Enrager",
  "Fireball": "Boule de feu",
  "Fireball Volley": "Salve de boules de feu",
  "Flash of Light": "Éclair lumineux",
  "Frenzy": "Frénésie",
  "Frightening Shout": "Cri d'effroi",
  "Frost Nova": "Nova de givre",
  "Frost Shock": "Horion de givre",
  "Frostbolt": "Éclair de givre",
  "Frostbolt Volley": "Salve d'éclairs de givre",
  "Golem Repair": "Réparation de golem",
  "Hammer of Justice": "Marteau de la justice",
  "Healing Touch": "Toucher guérisseur",
  "Holy Fire": "Flammes sacrées",
  "Holy Nova": "Nova sacrée",
  "Holy Smite": "Châtiment sacré",
  "Initial Infection": "Infection initiale",
  "Kick": "Coup de pied",
  "Knock Away": "Repousser",
  "Lightning Bolt": "Éclair",
  "Lightning Shield": "Bouclier de foudre",
  "Mana Burn": "Brûlure de mana",
  "Molten Armor": "Armure de la fournaise",
  "Mortal Cleave": "Enchaînement mortel",
  "Overcharge": "Surcharge",
  "Poison Bolt Volley": "Salve d'éclairs de poison",
  "Poison Shield": "Bouclier de poison",
  "Power Up": "Renforcement",
  "Rain of Fire": "Pluie de feu",
  "Rancid Mushroom": "Champignon rance",
  "Recharge": "Recharge",
  "Rejuvenation": "Récupération",
  "Renew": "Rénovation",
  "Saw Blade": "Lame de scie",
  "Shadow Bolt": "Trait de l'ombre",
  "Shadow Nova": "Nova de l'ombre",
  "Shatter Armor": "Fracasser armure",
  "Shell Shock": "Commotion",
  "Shield Charge": "Charge au bouclier",
  "Silence": "Silence",
  "Sonic Scream": "Cri sonique",
  "Spell Reflection": "Renvoi de sort",
  "Spore Burst": "Explosion de spores",
  "Spore Quake": "Séisme de spores",
  "Starfall": "Météores",
  "Trample": "Piétinement",
  "Uppercut": "Uppercut",
  "Virulent Poison": "Poison virulent",
  "Water Elemental Totem": "Totem d'élémentaire d'eau",
  "Whirlwind": "Tourbillon",
  "Wing Buffet": "Coup d'aile"
};

const frNameAliases = {
  "Beast-Tamer": "Dompteur de bêtes",
  "Hate-Screamer": "Hurle-haine",
  "Sporebats": "sporoptères",
  "Sporebat": "sporoptère",
  "Priestess Spirit": "Esprit de prêtresse",
  "Priestess": "Prêtresse",
  "Tidecaller": "Implorateur de marée",
  "Nether-Mage": "Mage-néant",
  "Skulker": "Rôdeur",
  "Shield-Bearer": "Porte-bouclier",
  "Lurker": "Rôdeur",
  "Fathom-Witch": "Sorcière des fonds",
  "Serpentguard": "Garde-serpent",
  "Hydromancer": "Hydromancienne",
  "Shaman": "Chaman",
  "Astromancer": "Astromancien",
  "Star Scryer": "Scrutateur stellaire",
  "Marshal": "Maréchal",
  "Squires": "Écuyers",
  "Phoenix-Hawk": "Faucon-phénix",
  "Mechanic": "Mécanicien",
  "Smith": "Forgeron",
  "Battle Mage": "Mage de bataille",
  "Blood Knight": "Chevalier de sang"
};

function localizeFrenchNames(text) {
  return Object.entries({ ...frMobNames, ...frSpellNames, ...frNameAliases })
    .reduce((value, [en, fr]) => value.split(en).join(fr), text);
}

const state = {
  raid: localStorage.getItem("raid") || "ALL",
  zone: localStorage.getItem("zone") || "ALL",
  mode: localStorage.getItem("mode") || "detailed",
  lang: "en",
  dangerOnly: localStorage.getItem("dangerOnly") === "true",
  tags: new Set(JSON.parse(localStorage.getItem("tags") || "[]")),
  query: ""
};

const cardsEl = document.querySelector("#cards");
const filtersEl = document.querySelector("#filters");
const zoneFiltersEl = document.querySelector("#zoneFilters");
const countEl = document.querySelector("#count");
const searchEl = document.querySelector("#search");

function t() {
  return i18n[state.lang] || i18n.en;
}

function ui(key) {
  return t().ui[key] || i18n.en.ui[key] || key;
}

function localizedItem(item) {
  if (state.lang !== "fr") return item;
  const frText = frTrashText[item.mob];
  const localized = frText ? { ...item, ...frText } : { ...item };
  localized.originalMob = item.mob;
  localized.mob = frMobNames[item.mob] || item.mob;
  localized.danger = localizeFrenchNames(localized.danger);
  localized.call = localizeFrenchNames(localized.call);
  localized.tank = localizeFrenchNames(localized.tank);
  return localized;
}

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
  return trashData.map(localizedItem).filter((item) => {
    if (state.raid !== "ALL" && item.raid !== state.raid) return false;
    if (state.zone !== "ALL" && item.zone !== state.zone) return false;
    if (state.dangerOnly && !["red", "orange"].includes(item.priority)) return false;
    for (const tag of state.tags) if (!item.tags.includes(tag)) return false;
    if (!q) return true;
    const originalMob = item.originalMob || item.mob;
    const enItem = trashData.find((base) => base.mob === originalMob) || item;
    const frItem = frTrashText[originalMob] || {};
    const hay = normalized([
      item.raid, item.zone, item.mob, originalMob, item.priority, item.danger, item.call, item.tank,
      enItem.danger, enItem.call, enItem.tank, frItem.danger, frItem.call, frItem.tank,
      item.tags.join(" "), item.spells.map(([name]) => name).join(" "),
      item.spells.map(([name]) => frSpellNames[name] || "").join(" ")
    ].join(" "));
    return hay.includes(q);
  });
}

function markerImgs(markers) {
  const titles = t().markerTitle;
  return markers.map((m) => `<span class="marker marker-${m}" title="${titles[m] || m}" aria-label="${titles[m] || m}"></span>`).join("");
}

function spellPills(spells) {
  const descriptions = t().spellDescriptions;
  return spells.map(([name, src]) => {
    const displayName = state.lang === "fr" ? (frSpellNames[name] || name) : name;
    const description = descriptions[name] || ui("unknownSpell");
    return `<span class="spell" tabindex="0" title="${escapeHtml(description)}" data-tip-title="${escapeHtml(displayName)}" data-tip="${escapeHtml(description)}"><img src="${src}" alt="">${displayName}</span>`;
  }).join("");
}

function tagPills(tags) {
  const labels = t().tagLabels;
  return tags.map((tag) => `<span class="tag ${tag}">${labels[tag] || tag}</span>`).join("");
}

function syncStaticText() {
  document.documentElement.lang = state.lang;
  document.querySelector("[data-i18n='subtitle']").textContent = ui("subtitle");
  searchEl.placeholder = ui("searchPlaceholder");
  document.querySelector("[data-mode='detailed']").textContent = ui("detailed");
  document.querySelector("#dangerOnly").textContent = ui("dangerOnly");
  document.querySelector("#reset").textContent = ui("reset");
  document.querySelectorAll("[data-lang-choice]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langChoice === state.lang);
  });
  document.querySelector("[data-i18n='keys']").textContent = ui("keys");
}

function renderFilters() {
  const labels = t().tagLabels;
  filtersEl.innerHTML = Object.entries(labels)
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
    `<button data-zone="ALL" class="${state.zone === "ALL" ? "active" : ""}">${ui("allZones")} <span class="zone-count">${trashData.filter((item) => state.raid === "ALL" || item.raid === state.raid).length}</span></button>`,
    ...zones.map(([zone, count]) => `<button data-zone="${escapeHtml(zone)}" class="${state.zone === zone ? "active" : ""}">${zone} <span class="zone-count">${count}</span></button>`)
  ].join("");
}

function renderCards() {
  syncStaticText();
  document.body.classList.toggle("compact", state.mode === "compact" || state.mode === "ultra");
  document.body.classList.toggle("ultra", state.mode === "ultra");
  document.querySelectorAll("[data-mode]").forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === state.mode));
  document.querySelector(".danger-toggle").classList.toggle("active", state.dangerOnly);
  document.querySelectorAll("[data-raid]").forEach((btn) => btn.classList.toggle("active", btn.dataset.raid === state.raid));

  const items = visibleItems();
  countEl.textContent = `${items.length}/${trashData.length} mobs`;

  if (!items.length) {
    cardsEl.innerHTML = `<div class="empty">${ui("empty")}</div>`;
    return;
  }

  const byRaid = items.reduce((acc, item) => {
    (acc[item.raid] ||= []).push(item);
    return acc;
  }, {});

  cardsEl.innerHTML = Object.entries(byRaid).map(([raid, raidItems]) => `
    <section class="raid-section">
      <div class="section-title">${raid} <span>${raidItems.length} ${ui("visibleCards")}</span></div>
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
              <div class="row call-row"><div class="label">${ui("raidLabel")}</div><div class="value call">${item.call}</div></div>
              <div class="row detail-row"><div class="label">Tank</div><div class="value">${item.tank}</div></div>
              <div class="row spells-row"><div class="label">${ui("spells")}</div><div class="spells">${spellPills(item.spells)}</div></div>
            </div>
            <div class="tagbar">${tagPills(item.tags)} <button class="mini-copy" data-single="${escapeHtml(item.call)}">${ui("copy")}</button></div>
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
  const langChoice = event.target.closest("[data-lang-choice]");
  if (raid) state.raid = raid.dataset.raid;
  if (mode) state.mode = mode.dataset.mode;
  if (langChoice) state.lang = langChoice.dataset.langChoice;
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
  if (key === "l") state.lang = state.lang === "fr" ? "en" : "fr";
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
