const icon = (name) => `assets/${name}.jpg`;

const i18n = {
  "en": {
    "markerTitle": {
      "skull": "Skull",
      "cross": "Cross",
      "moon": "Moon",
      "diamond": "Diamond",
      "circle": "Circle",
      "triangle": "Triangle",
      "star": "Star",
      "square": "Square"
    },
    "tagLabels": {
      "focus": "Focus",
      "kick": "Kick",
      "sheep": "Sheep",
      "los": "LOS",
      "fear": "Fear",
      "enemy-mc": "Enemy MC",
      "priest-mc": "Priest MC",
      "stopcc": "Stop cast",
      "cleave": "Cleave",
      "aoe": "AoE",
      "tank": "Tank danger",
      "ranged": "Ranged danger",
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
      "Atrophic Blow": "Underbog Colossus pair: tank stat debuff. Stabilize tank.",
      "Avenger's Shield": "Hits up to 3 targets and dazes. Dangerous when Shield-Bearer is loose.",
      "Bestial Wrath": "Boosts Beast-Tamer and Sporebat damage. Kill/commit defensives during the buff.",
      "Blast Wave": "Fire AoE and slow from Astromancer.",
      "Blizzard": "Ground AoE from Crimson Hand Battle Mage. Move out.",
      "Banish": "Warlock control. Keep banished and kill last when assigned.",
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
      "Gouge": "Rogue control that can stop non-interruptible trash casts.",
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
      "Mind Control": "Priest control when assigned, or enemy Domination depending on card context.",
      "Mortal Cleave": "Frontal cleave applying Mortal Strike-style healing reduction.",
      "Overcharge": "Massive Arcane burst on highest-threat tank from Crystalcore Sentinel. Tank swap/hard heal.",
      "Poison Bolt Volley": "Raid Nature/Poison volley from Serpentshrine Lurker.",
      "Poison Shield": "Nature raid damage if ignored. Purge it.",
      "Polymorph": "Mage control. Can stop non-interruptible casts on susceptible trash.",
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
      "Serpentshrine Parasite": "Underbog Colossus pair: parasite debuff can spawn small adds. Clean up fast.",
      "Sludge Nova": "Aqueous Spawn AoE: hits target and players within 8 yd, applies stacking Nature DoT and slow.",
      "Merge": "Aqueous Spawn channel that heals Aqueous Lord if the spawn is not killed quickly.",
      "Forked Lightning": "30 yd frontal Nature attack from Coilskar Sea-Caller, up to 5 targets.",
      "Hurricane": "Ground AoE placed on a player; move out immediately.",
      "Geyser": "Random target Frost splash and knock-up within 10 yd.",
      "Fury": "Bonechewer Taskmaster self-buff stacking size and damage by 10%.",
      "Throw Pick": "Bonechewer Worker ranged hit that disarms itself and stuns the target.",
      "Throbbing Stun": "3 sec stun triggered by Throw Pick.",
      "Immolation Arrow": "Sky Stalker fire arrow hit that leaves a burning ground patch.",
      "Felfire": "Dragonmaw Wyrmcaller melee proc for extra Fire damage.",
      "Jab": "Melee hit on primary threat target with knockback.",
      "Rain of Chaos": "Ground Fire AoE cast on a player location. Move out.",
      "Illidari Flames": "Frontal cone Fire damage per second. Face away.",
      "War Stomp": "Short-range stun and damage around the caster.",
      "Doom Bolt": "Single-target Shadow hit with 12 yd splash via Doom Blast.",
      "Doom Blast": "Shadow splash around Doom Bolt target. Spread 12.",
      "Freeze": "15 yd Frost root / immobilize effect.",
      "Starfall": "Nearby Arcane raid damage from Star Scryer.",
      "Toxic Pool": "Underbog Colossus death roll: poisonous ground pool. Raid moves out.",
      "Trample": "Melee-range damage from Crystalcore Sentinel.",
      "Uppercut": "Knockback on tank. Tank into wall.",
      "Virulent Poison": "Poison effect from Tidecaller. Cleanse poison.",
      "Water Elemental Totem": "Summons a large Water Elemental. Swap/kill totem instantly.",
      "Whirlwind": "Melee AoE. Melee step out / tank control.",
      "Wing Buffet": "Knockback from Phoenix-Hawk Hatchling."
    },
    "ui": {
      "subtitle": "TBC Anniversary Phase 3 · trash raid lead overlay · offline",
      "searchPlaceholder": "Search mob / spell / danger   /",
      "detailed": "Detailed",
      "dangerOnly": "RED/ORANGE",
      "auditOnly": "Audit ?",
      "reset": "Reset",
      "keys": "Keys: 1 SSC · 2 TK · 3 P3 ALL · 4 Hyjal · 5 BT · A audit · C compact · U ultra · F overlay · R reset · L language",
      "allZones": "All trash",
      "empty": "No visible cards. Reset filters or change search.",
      "visibleCards": "visible cards",
      "raidLabel": "Raid",
      "spells": "Spells",
      "copy": "Copy",
      "unknownSpell": "Effect to confirm.",
      "auditConfidence": "Confidence",
      "auditRank": "Focus rank",
      "auditReason": "Reason",
      "auditMarker": "Marker",
      "auditSource": "Source"
    }
  },
  "fr": {
    "markerTitle": {
      "skull": "Crâne",
      "cross": "Croix",
      "moon": "Lune",
      "diamond": "Losange",
      "circle": "Cercle",
      "triangle": "Triangle",
      "star": "Étoile",
      "square": "Carré"
    },
    "tagLabels": {
      "focus": "Focus",
      "kick": "Kick",
      "sheep": "Sheep",
      "los": "LOS",
      "fear": "Fear",
      "enemy-mc": "MC ennemi",
      "priest-mc": "MC prêtre",
      "stopcc": "Stop cast",
      "cleave": "Cleave",
      "aoe": "AoE",
      "tank": "Danger tank",
      "ranged": "Danger distance",
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
      "Atrophic Blow": "Paire Underbog: debuff stats sur tank. Stabiliser le tank.",
      "Avenger's Shield": "Touche jusqu'à 3 cibles et daze. Dangereux si le Shield-Bearer est libre.",
      "Bestial Wrath": "Booste les dégâts du Beast-Tamer et des Sporebats. Tuer vite pendant le buff.",
      "Blast Wave": "AoE feu + slow autour de l'Astromancer.",
      "Blizzard": "Zone au sol du Battle Mage. Sortir tout de suite.",
      "Banish": "Contrôle démo. Garder banish, tuer en dernier.",
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
      "Gouge": "Contrôle rogue qui peut stopper des casts non interruptibles.",
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
      "Mind Control": "Contrôle prêtre assigné, ou Domination ennemie selon la carte.",
      "Mortal Cleave": "Cleave frontal avec effet Mortal Strike. Face loin du raid.",
      "Overcharge": "Énorme burst Arcanes sur le tank haut en menace. Swap/mitigation/heal fort.",
      "Poison Bolt Volley": "Volley nature/poison du Serpentshrine Lurker.",
      "Poison Shield": "Buff à purge tout de suite, sinon dégâts nature raid.",
      "Polymorph": "Contrôle mage. Peut stopper des casts non interruptibles sur trash sensible.",
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
      "Serpentshrine Parasite": "Paire Underbog: debuff parasite qui peut spawn des petits adds.",
      "Spore Burst": "AoE nature + DoT autour du Sporebat.",
      "Spore Quake": "Très grande pression nature de zone. Le raid doit bouger vite.",
      "Starfall": "Dégâts Arcanes proches du Star Scryer.",
      "Toxic Pool": "Effet de mort Underbog: flaque poison au sol. Raid sort.",
      "Trample": "Dégâts mêlée du Crystalcore Sentinel.",
      "Uppercut": "Knockback tank. Jouer dos au mur.",
      "Virulent Poison": "Poison dispellable du Tidecaller.",
      "Water Elemental Totem": "Pose un totem qui invoque un gros élémentaire. Swap totem instant.",
      "Whirlwind": "AoE mêlée. Mêlées dehors / tank contrôle.",
      "Wing Buffet": "Knockback du Phoenix-Hawk Hatchling."
    },
    "ui": {
      "subtitle": "TBC Anniversary Phase 3 · outil trash raid lead · offline",
      "searchPlaceholder": "Chercher mob / sort / danger   /",
      "detailed": "Détaillé",
      "dangerOnly": "ROUGE/ORANGE",
      "auditOnly": "Audit ?",
      "reset": "Reset",
      "keys": "Touches: 1 SSC · 2 TK · 3 P3 ALL · 4 Hyjal · 5 BT · A audit · C compact · U ultra · F overlay · R reset · L langue",
      "allZones": "Tous trash",
      "empty": "Aucune carte visible. Reset filtres ou change la recherche.",
      "visibleCards": "cartes visibles",
      "raidLabel": "Call",
      "spells": "Sorts",
      "copy": "Copier",
      "unknownSpell": "Effet à confirmer.",
      "auditConfidence": "Confiance",
      "auditRank": "Focus rank",
      "auditReason": "Raison",
      "auditMarker": "Marker",
      "auditSource": "Source"
    }
  }
};

const guideSpellIcons = {
  "Acid Geyser": "assets/spell_fire_felcano.jpg",
  "Arcane Blast": "assets/spell_shadow_deathpact.jpg",
  "Arcane Flurry": "assets/spell_nature_lightningoverload.jpg",
  "Arcane Lightning": "assets/spell_nature_chainlightning.jpg",
  "Atrophic Blow": "assets/ability_creature_disease_02.jpg",
  "Avenger's Shield": "assets/spell_holy_devotionaura.jpg",
  "Bestial Wrath": "assets/ability_druid_ferociousbite.jpg",
  "Blast Wave": "assets/spell_holy_excorcism_02.jpg",
  "Blizzard": "assets/spell_frost_icestorm.jpg",
  "Banish": "assets/spell_shadow_cripple.jpg",
  "Bloodthirst": "assets/spell_nature_bloodlust.jpg",
  "Chain Lightning": "assets/spell_nature_chainlightning.jpg",
  "Charge": "assets/ability_warrior_charge.jpg",
  "Charged Arcane Explosion": "assets/spell_nature_wispsplode.jpg",
  "Cleave": "assets/ability_warrior_cleave.jpg",
  "Cone of Cold": "assets/spell_frost_glacier.jpg",
  "Corrupt Devotion Aura": "assets/spell_shadow_ragingscream.jpg",
  "Countercharge": "assets/spell_arcane_arcanepotency.jpg",
  "Dive": "assets/ability_hunter_pet_bat.jpg",
  "Domination": "assets/spell_shadow_shadowworddominate.jpg",
  "Dispel Magic": "assets/spell_holy_dispelmagic.jpg",
  "Enrage": "assets/ability_druid_challangingroar.jpg",
  "Fireball": "assets/spell_fire_flamebolt.jpg",
  "Fireball Volley": "assets/spell_fire_flamebolt.jpg",
  "Flash of Light": "assets/spell_holy_heal.jpg",
  "Frenzy": "assets/spell_shadow_unholyfrenzy.jpg",
  "Frightening Shout": "assets/ability_golemthunderclap.jpg",
  "Frost Nova": "assets/spell_frost_frostnova.jpg",
  "Frost Shock": "assets/spell_frost_frostshock.jpg",
  "Frostbolt": "assets/spell_frost_frostbolt02.jpg",
  "Frostbolt Volley": "assets/spell_frost_frostbolt02.jpg",
  "Golem Repair": "assets/inv_misc_enggizmos_15.jpg",
  "Gouge": "assets/ability_gouge.jpg",
  "Hammer of Justice": "assets/spell_holy_sealofmight.jpg",
  "Healing Touch": "assets/spell_nature_healingtouch.jpg",
  "Holy Fire": "assets/spell_holy_searinglight.jpg",
  "Holy Nova": "assets/spell_holy_holynova.jpg",
  "Holy Smite": "assets/spell_holy_holysmite.jpg",
  "Initial Infection": "assets/spell_nature_nullifydisease.jpg",
  "Kick": "assets/ability_kick.jpg",
  "Knock Away": "assets/inv_gauntlets_05.jpg",
  "Lightning Bolt": "assets/spell_nature_lightning.jpg",
  "Lightning Shield": "assets/spell_nature_lightningshield.jpg",
  "Mana Burn": "assets/spell_shadow_manaburn.jpg",
  "Molten Armor": "assets/inv_helmet_08.jpg",
  "Mind Control": "assets/spell_shadow_shadowworddominate.jpg",
  "Mortal Cleave": "assets/ability_warrior_savageblow.jpg",
  "Overcharge": "assets/spell_arcane_arcanepotency.jpg",
  "Poison Bolt Volley": "assets/spell_nature_corrosivebreath.jpg",
  "Poison Shield": "assets/spell_nature_elementalshields.jpg",
  "Polymorph": "assets/spell_nature_polymorph.jpg",
  "Power Up": "assets/spell_arcane_arcanetorrent.jpg",
  "Purge": "assets/spell_nature_purge.jpg",
  "Rain of Fire": "assets/spell_shadow_rainoffire.jpg",
  "Rancid Mushroom": "assets/inv_mushroom_07.jpg",
  "Recharge": "assets/spell_nature_elementalshields.jpg",
  "Rejuvenation": "assets/spell_nature_rejuvenation.jpg",
  "Renew": "assets/spell_holy_renew.jpg",
  "Saw Blade": "assets/ability_gouge.jpg",
  "Serpentshrine Parasite": "assets/inv_misc_monsterhead_03.jpg",
  "Shadow Bolt": "assets/spell_shadow_shadowbolt.jpg",
  "Shadow Nova": "assets/spell_shadow_shadowfury.jpg",
  "Shatter Armor": "assets/ability_warrior_decisivestrike.jpg",
  "Shell Shock": "assets/spell_fire_selfdestruct.jpg",
  "Shield Charge": "assets/ability_warrior_charge.jpg",
  "Silence": "assets/spell_holy_silence.jpg",
  "Sonic Scream": "assets/spell_nature_purge.jpg",
  "Spell Reflection": "assets/spell_shadow_teleport.jpg",
  "Psychic Scream": "assets/spell_shadow_psychicscream.jpg",
  "Spore Burst": "assets/spell_nature_abolishmagic.jpg",
  "Spore Quake": "assets/spell_fire_felhellfire.jpg",
  "Starfall": "assets/spell_arcane_starfire.jpg",
  "Toxic Pool": "assets/ability_creature_poison_06.jpg",
  "Trample": "assets/spell_nature_natureswrath.jpg",
  "Abomination": "assets/ability_creature_disease_02.jpg",
  "Anti-Magic Shell": "assets/spell_nature_elementalshields.jpg",
  "Banshee Curse": "assets/spell_shadow_cripple.jpg",
  "Banshee Wail": "assets/spell_shadow_shadowbolt.jpg",
  "Behemoth Charge": "assets/ability_warrior_charge.jpg",
  "Bloodbolt": "assets/spell_shadow_shadowbolt.jpg",
  "Booming Voice": "assets/spell_nature_bloodlust.jpg",
  "Cloud of Disease": "assets/ability_creature_disease_02.jpg",
  "Crashing Wave": "assets/spell_frost_glacier.jpg",
  "Debilitating Spray": "assets/spell_nature_abolishmagic.jpg",
  "Dementia": "assets/spell_shadow_possession.jpg",
  "Disease Cloud": "assets/ability_creature_disease_02.jpg",
  "Divine Shield": "assets/ability_warrior_shieldwall.jpg",
  "Fel Stomp": "assets/spell_fire_felhellfire.jpg",
  "Fiery Comet": "assets/spell_fire_meteorstorm.jpg",
  "Flamestrike": "assets/spell_fire_selfdestruct.jpg",
  "Free Friend": "assets/spell_holy_dispelmagic.jpg",
  "Frost Breath": "assets/spell_frost_frostbolt02.jpg",
  "Gargoyle Strike": "assets/spell_nature_natureswrath.jpg",
  "Harpooner's Mark": "assets/ability_marksmanship.jpg",
  "Hooked Net": "assets/ability_gouge.jpg",
  "Image of Dementia": "assets/spell_shadow_shadowworddominate.jpg",
  "Immolation": "assets/spell_fire_felhellfire.jpg",
  "Intervene": "assets/ability_warrior_charge.jpg",
  "Judgement of Command": "assets/spell_holy_sealofmight.jpg",
  "Knockdown": "assets/ability_warrior_charge.jpg",
  "L1 Arcane Charge": "assets/spell_arcane_arcanepotency.jpg",
  "L5 Arcane Charge": "assets/spell_arcane_blast.jpg",
  "Lash of Pain": "assets/spell_shadow_shadowbolt.jpg",
  "Lightning Prod": "assets/spell_nature_chainlightning.jpg",
  "Meteor": "assets/spell_fire_meteorstorm.jpg",
  "Mind Soothe": "assets/spell_holy_holysmite.jpg",
  "Painful Rage": "assets/spell_shadow_unholyfrenzy.jpg",
  "Paralyzing Poison": "assets/ability_creature_poison_06.jpg",
  "Poison Spit": "assets/spell_nature_corrosivebreath.jpg",
  "Power Word: Shield": "assets/ability_warrior_shieldwall.jpg",
  "Prophecy of Blood": "assets/spell_shadow_deathpact.jpg",
  "Riposte": "assets/ability_warrior_disarm.jpg",
  "Shared Bonds": "assets/spell_shadow_deathpact.jpg",
  "Sludge Nova": "assets/spell_nature_corrosivebreath.jpg",
  "Merge": "assets/spell_nature_healingtouch.jpg",
  "Forked Lightning": "assets/spell_nature_chainlightning.jpg",
  "Hurricane": "assets/spell_nature_earthquake.jpg",
  "Geyser": "assets/spell_frost_glacier.jpg",
  "Fury": "assets/spell_shadow_unholyfrenzy.jpg",
  "Throw Pick": "assets/inv_gizmo_02.jpg",
  "Throbbing Stun": "assets/ability_gouge.jpg",
  "Immolation Arrow": "assets/spell_fire_flamebolt.jpg",
  "Felfire": "assets/spell_fire_felhellfire.jpg",
  "Jab": "assets/ability_warrior_punishingblow.jpg",
  "Rain of Chaos": "assets/spell_shadow_rainoffire.jpg",
  "Illidari Flames": "assets/spell_fire_felhellfire.jpg",
  "War Stomp": "assets/ability_golemthunderclap.jpg",
  "Doom Bolt": "assets/spell_shadow_shadowbolt.jpg",
  "Doom Blast": "assets/spell_shadow_shadowfury.jpg",
  "Freeze": "assets/spell_frost_frostnova.jpg",
  "Shadow Word: Pain": "assets/spell_shadow_shadowbolt.jpg",
  "Shell Shield": "assets/ability_warrior_shieldwall.jpg",
  "Shield Bash": "assets/ability_kick.jpg",
  "Shield Wall": "assets/ability_warrior_shieldwall.jpg",
  "Spear Throw": "assets/ability_marksmanship.jpg",
  "Tail Sweep": "assets/ability_hunter_pet_windserpent.jpg",
  "Throw Shield": "assets/spell_holy_devotionaura.jpg",
  "Unholy Frenzy": "assets/spell_shadow_unholyfrenzy.jpg",
  "Vanish": "assets/spell_shadow_impphaseshift.jpg",
  "Vile Slime": "assets/spell_nature_corrosivebreath.jpg",
  "Water Spit": "assets/spell_frost_frostbolt02.jpg",
  "Uppercut": "assets/inv_gauntlets_05.jpg",
  "Virulent Poison": "assets/spell_nature_corrosivebreath.jpg",
  "Water Elemental Totem": "assets/spell_fire_sealoffire.jpg",
  "Whirlwind": "assets/ability_whirlwind.jpg",
  "Wing Buffet": "assets/inv_misc_monsterscales_14.jpg"
};

const trashImages = {
  "Astromancer": "assets/Trash2_fast/astromancer.webp",
  "Bloodwarder Marshal": "assets/Trash2_fast/bloodwarder_marshal.webp",
  "Coilfang Beast-Tamer": "assets/Trash2_fast/coilfang_beast_tamer.webp",
  "Coilfang Fathom-Witch": "assets/Trash2_fast/coilfang_fathom_witch.webp",
  "Coilfang Hate-Screamer": "assets/Trash2_fast/coilfang_hate_screamer.webp",
  "Coilfang Priestess": "assets/Trash2_fast/coilfang_priestess.webp",
  "Coilfang Serpentguard": "assets/Trash2_fast/coilfang_serpentguard.webp",
  "Coilfang Shatterer": "assets/Trash2_fast/coilfang_shatterer.webp",
  "Crimson Hand Battle Mage": "assets/Trash2_fast/crimson_hand_battle_mage.webp",
  "Crimson Hand Blood Knight": "assets/Trash2_fast/crimson_hand_blood_knight.webp",
  "Crimson Hand Centurion": "assets/Trash2_fast/crimson_hand_centurion.webp",
  "Crystalcore Devastator": "assets/Trash2_fast/crystalcore_devastator.webp",
  "Crystalcore Mechanic": "assets/Trash2_fast/crystalcore_mechanic.webp",
  "Crystalcore Sentinel": "assets/Trash2_fast/crystalcore_sentinel.webp",
  "Greyheart Nether-Mage": "assets/Trash2_fast/greyheart_nether_mage.webp",
  "Greyheart Shield-Bearer": "assets/Trash2_fast/greyheart_shield_bearer.webp",
  "Greyheart Skulker": "assets/Trash2_fast/greyheart_skulker.webp",
  "Greyheart Tidecaller": "assets/Trash2_fast/greyheart_tidecaller.webp",
  "Phoenix-Hawk": "assets/Trash2_fast/phoenix_hawk.webp",
  "Phoenix-Hawk Hatchling": "assets/Trash2_fast/phoenix_hawk_hatchling.webp",
  "Serpentshrine Lurker": "assets/Trash2_fast/serpentshrine_lurker.webp",
  "Serpentshrine Sporebat": "assets/Trash2_fast/serpentshrine_sporebat.webp",
  "Star Scryer": "assets/Trash2_fast/star_scryer.webp",
  "Tempest-Smith": "assets/Trash2_fast/tempest_smith.webp",
  "Tidewalker Depth-Seer": "assets/Trash2_fast/tidewalker_depth_seer.webp",
  "Tidewalker Hydromancer": "assets/Trash2_fast/tidewalker_hydromancer.webp",
  "Tidewalker Shaman": "assets/Trash2_fast/tidewalker_shaman.webp",
  "Tidewalker Warrior": "assets/Trash2_fast/tidewalker_warrior.webp",
  "Underbog Colossus": "assets/Trash2_fast/underbog_colossus.webp",
  "Vashj'ir Honor Guard": "assets/Trash2_fast/vashj_ir_honor_guard.webp",
  "Ghoul": "assets/TrashHyjal_wowhead/ghoul.jpg",
  "Shadowy Necromancer": "assets/TrashHyjal_generated/shadowy_necromancer.png",
  "Abomination": "assets/TrashHyjal_wowhead/abomination.jpg",
  "Banshee": "assets/TrashHyjal_generated/banshee.png",
  "Gargoyle": "assets/TrashHyjal_generated/gargoyle.png",
  "Frost Wyrm": "assets/TrashHyjal_generated/frost_wyrm.png",
  "Giant Infernal": "assets/TrashHyjal_generated/giant_infernal.png",
  "Fel Stalker": "assets/TrashHyjal_generated/fel_stalker.png",
  "Leviathan": "assets/TrashBT_generated/01_leviathan.png",
  "Coilskar Wrangler": "assets/TrashBT_generated/02_coilskar_wrangler.png",
  "Dragon Turtle": "assets/TrashBT_generated/03_dragon_turtle.png",
  "Coilskar Harpooner": "assets/TrashBT_generated/04_coilskar_harpooner.png",
  "Coilskar General": "assets/TrashBT_generated/05_coilskar_general.png",
  "Aqueous Lord": "assets/TrashBT_generated/06_aqueous_lord.png",
  "Aqueous Spawn": "assets/TrashBT_generated/07_aqueous_spawn.png",
  "Coilskar Sea-Caller": "assets/TrashBT_generated/08_coilskar_sea_caller.png",
  "Bonechewer Taskmaster": "assets/TrashBT_generated/09_bonechewer_taskmaster.png",
  "Bonechewer Worker": "assets/TrashBT_generated/10_bonechewer_worker.png",
  "Dragonmaw Sky Stalker": "assets/TrashBT_generated/11_dragonmaw_sky_stalker.png",
  "Dragonmaw Wyrmcaller": "assets/TrashBT_generated/12_dragonmaw_wyrmcaller.png",
  "Illidari Fearbringer": "assets/TrashBT_generated/13_illidari_fearbringer.png",
  "Dragonmaw Wind Reaver": "assets/TrashBT_generated/14_dragonmaw_wind_reaver.png",
  "Ashtongue Channeler": "assets/TrashBT_generated/15_ashtongue_channeler.png",
  "Shadowmoon Blood Mage": "assets/TrashBT_generated/16_shadowmoon_blood_mage.png",
  "Hand of Gorefiend": "assets/TrashBT_generated/17_hand_of_gorefiend.png",
  "Bonechewer Behemoth": "assets/TrashBT_generated/18_bonechewer_behemoth.png",
  "Bonechewer Blade Fury": "assets/TrashBT_generated/19_bonechewer_blade_fury.png",
  "Bonechewer Blood Prophet": "assets/TrashBT_generated/20_bonechewer_blood_prophet.png",
  "Bonechewer Shield Disciple": "assets/TrashBT_generated/21_bonechewer_shield_disciple.png",
  "Mutant War Hound": "assets/TrashBT_generated/22_mutant_war_hound.png",
  "Suffering Soul Fragment": "assets/TrashBT_generated/23_suffering_soul_fragment.png",
  "Hungering Soul Fragment": "assets/TrashBT_generated/24_hungering_soul_fragment.png",
  "Angered Soul Fragment": "assets/TrashBT_generated/25_angered_soul_fragment.png",
  "Mistress of Woe": "assets/TrashBT_generated/26_mistress_of_woe.png",
  "Priestess of Torment": "assets/TrashBT_generated/27_priestess_of_torment.png",
  "Mistress of Dementia": "assets/TrashBT_generated/28_mistress_of_dementia.png",
  "Promenade Sentinel": "assets/TrashBT_generated/29_promenade_sentinel.png",
  "Illidari Archon": "assets/TrashBT_generated/30_illidari_archon.png",
  "Illidari Assassin": "assets/TrashBT_generated/31_illidari_assassin.png",
  "Illidari Battle-mage": "assets/TrashBT_generated/32_illidari_battle_mage.png",
  "Illidari Blood Lord": "assets/TrashBT_generated/33_illidari_blood_lord.png"
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
      "diamond"
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
    "danger": "3 random pairs. Identify the pair from first cast.",
    "call": "A: target to tank + kill add. B: tank spike + tranq. C: raid out + cleanse.",
    "tank": "Death roll: none / Toxic Pool / 2 Ragers / many adds / mana mushroom.",
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
      ],
      [
        "Serpentshrine Parasite",
        "assets/ability_druid_supriseattack.jpg"
      ],
      [
        "Atrophic Blow",
        "assets/ability_warrior_decisivestrike.jpg"
      ],
      [
        "Enrage",
        "assets/ability_warrior_savageblow.jpg"
      ]
    ],
    "spellGroups": [
      {
        "label": "PAIR A",
        "spells": ["Acid Geyser", "Serpentshrine Parasite"],
        "note": "target to tank; kill add"
      },
      {
        "label": "PAIR B",
        "spells": ["Atrophic Blow", "Frenzy"],
        "note": "tank spike; tranq"
      },
      {
        "label": "PAIR C",
        "spells": ["Spore Quake", "Initial Infection"],
        "note": "raid out; cleanse"
      },
      {
        "label": "DEATH",
        "spells": ["Toxic Pool"],
        "note": "none / pool / 2 ragers / adds / mana"
      }
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
      "diamond"
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
      "diamond"
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
    ],
    "spellGroups": [
      {
        "label": "BANISH",
        "spells": ["Banish"],
        "note": "warlock; kill last"
      },
      {
        "label": "WATCH",
        "spells": ["Poison Bolt Volley", "Rancid Mushroom"],
        "note": "poison + ground"
      }
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
      "enemy-mc",
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
    ],
    "spellGroups": [
      {
        "label": "ENEMY MC",
        "spells": ["Domination"],
        "note": "CC player instantly"
      },
      {
        "label": "POSITION",
        "spells": ["Shadow Nova"],
        "note": "away from water"
      }
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
    "zone": "Entrance / Solarian path",
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
    "zone": "Entrance / Solarian path",
    "mob": "Star Scryer",
    "priority": "red",
    "markers": [
      "cross"
    ],
    "tags": [
      "focus",
      "enemy-mc",
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
    ],
    "spellGroups": [
      {
        "label": "ENEMY MC",
        "spells": ["Domination"],
        "note": "CC player instantly"
      },
      {
        "label": "TANK",
        "spells": ["Arcane Blast"],
        "note": "back to wall"
      },
      {
        "label": "AOE",
        "spells": ["Starfall"],
        "note": "kill second"
      }
    ]
  },
  {
    "raid": "TK",
    "zone": "Entrance / Solarian path",
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
      "diamond"
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
    ],
    "spellGroups": [
      {
        "label": "BANISH",
        "spells": ["Banish"],
        "note": "warlock; kill last"
      },
      {
        "label": "IF ACTIVE",
        "spells": ["Recharge", "Saw Blade"],
        "note": "stop heal / bleed"
      }
    ]
  },
  {
    "raid": "TK",
    "zone": "Void Reaver path",
    "mob": "Tempest-Smith",
    "priority": "orange",
    "markers": [
      "circle"
    ],
    "tags": [
      "priest-mc",
      "stun",
      "aoe"
    ],
    "danger": "Priest can Mind Control Smith and use its golem tools.",
    "call": "PRIEST MC Smith until golems die.",
    "tank": "If not MC'd: stop Power Up / Repair pressure à confirmer.",
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
    ],
    "spellGroups": [
      {
        "label": "PRIEST MC",
        "spells": ["Mind Control"],
        "note": "control Smith"
      },
      {
        "label": "USE/STOP",
        "spells": ["Power Up", "Golem Repair"],
        "note": "golem buff/heal"
      },
      {
        "label": "AOE",
        "spells": ["Shell Shock"],
        "note": "stun zone"
      }
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
      "stopcc",
      "aoe",
      "tank",
      "ranged"
    ],
    "danger": "Blizzard/Frostbolt Volley cannot be kicked; Poly/Gouge can stop casts.",
    "call": "Spam SHEEP/Gouge if AoE hurts; move Blizzard.",
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
    ],
    "spellGroups": [
      {
        "label": "STOP CAST",
        "spells": ["Polymorph", "Gouge"],
        "note": "works; not kickable"
      },
      {
        "label": "AOE",
        "spells": ["Blizzard", "Frostbolt Volley"],
        "note": "move / stop casts"
      },
      {
        "label": "FACE",
        "spells": ["Cone of Cold"],
        "note": "tank into wall"
      }
    ]
  },
  {
    "raid": "TK",
    "zone": "Kael corridor",
    "mob": "Crimson Hand Centurion",
    "priority": "orange",
    "markers": [
      "moon"
    ],
    "tags": [
      "sheep",
      "stopcc",
      "aoe",
      "ranged"
    ],
    "danger": "Arcane Flurry cannot be kicked; Poly/Gouge can stop casts.",
    "call": "Spam SHEEP/Gouge Centurion if Arcane Flurry hurts.",
    "tank": "Keep in wall-facing AoE pack with Battle Mage/Blood Knight.",
    "spells": [
      [
        "Arcane Flurry",
        "assets/spell_arcane_blast.jpg"
      ]
    ],
    "spellGroups": [
      {
        "label": "STOP CAST",
        "spells": ["Arcane Flurry", "Polymorph", "Gouge"],
        "note": "spam sheep/gouge"
      }
    ]
  },
  {
    "raid": "HYJAL",
    "zone": "Wave trash",
    "mob": "Ghoul",
    "priority": "green",
    "markers": ["triangle"],
    "tags": ["aoe"],
    "danger": "Basic undead wave mob. Frenzy temporarily increases attack speed.",
    "call": "Free AoE; tank stack.",
    "tank": "One tank can collect many Ghouls and hold them in AoE.",
    "spells": [["Frenzy", "assets/spell_shadow_unholyfrenzy.jpg"]]
  },
  {
    "raid": "HYJAL",
    "zone": "Wave trash",
    "mob": "Shadowy Necromancer",
    "priority": "red",
    "markers": ["skull", "cross"],
    "tags": ["focus", "kick", "stun", "ranged"],
    "danger": "Ranged caster. Shadow Bolt hits raid; Unholy Frenzy doubles another trash mob's attack speed for 20 sec.",
    "call": "FOCUS / STUN / KICK Necromancers.",
    "tank": "Use LOS or ranged pickups; do not let them freecast behind the wave.",
    "spells": [["Shadow Bolt", "assets/spell_shadow_shadowbolt.jpg"], ["Unholy Frenzy", "assets/spell_shadow_unholyfrenzy.jpg"]],
    "spellGroups": [
      { "label": "STOP", "spells": ["Shadow Bolt", "Unholy Frenzy"], "note": "stun/kick fast" }
    ]
  },
  {
    "raid": "HYJAL",
    "zone": "Wave trash",
    "mob": "Abomination",
    "priority": "orange",
    "markers": ["square"],
    "tags": ["tank", "stun", "aoe"],
    "danger": "Disease Cloud pulses Nature damage within 5 yd; Knockdown stuns and hits the primary threat target.",
    "call": "KITE / CONTROL Aboms; melee watch cloud.",
    "tank": "Kite with slows/stuns/roots if normal tanking gets scary.",
    "spells": [["Disease Cloud", "assets/ability_creature_disease_02.jpg"], ["Knockdown", "assets/ability_warrior_charge.jpg"]]
  },
  {
    "raid": "HYJAL",
    "zone": "Wave trash",
    "mob": "Banshee",
    "priority": "orange",
    "markers": ["moon"],
    "tags": ["focus", "dispel", "ranged"],
    "danger": "Banshee Curse reduces physical hit chance by 66% for 5 min; Anti-Magic Shell absorbs huge magic damage.",
    "call": "DECURE physicals; physical DPS focus Banshees.",
    "tank": "Bring into kill zone; call curse dispels quickly.",
    "spells": [["Banshee Wail", "assets/spell_shadow_shadowbolt.jpg"], ["Banshee Curse", "assets/spell_shadow_cripple.jpg"], ["Anti-Magic Shell", "assets/spell_nature_elementalshields.jpg"]]
  },
  {
    "raid": "HYJAL",
    "zone": "Wave trash",
    "mob": "Gargoyle",
    "priority": "yellow",
    "markers": ["star"],
    "tags": ["ranged"],
    "danger": "Starts airborne and attacks at long range; often spawns behind/inside camp and hits NPCs.",
    "call": "Ranged tag Gargoyles; pull them down.",
    "tank": "If a ranged player gets threat and moves away, Gargoyle descends and can be tanked.",
    "spells": [["Gargoyle Strike", "assets/spell_nature_natureswrath.jpg"]]
  },
  {
    "raid": "HYJAL",
    "zone": "Wave trash",
    "mob": "Frost Wyrm",
    "priority": "orange",
    "markers": ["diamond"],
    "tags": ["focus", "ranged", "aoe"],
    "danger": "Frost Breath damages/slows the target and players within 8 yd.",
    "call": "FOCUS Wyrm; spread 8.",
    "tank": "Keep raid spread around breath targets; bring it down quickly.",
    "spells": [["Frost Breath", "assets/spell_frost_frostbolt02.jpg"]]
  },
  {
    "raid": "HYJAL",
    "zone": "Wave trash",
    "mob": "Giant Infernal",
    "priority": "orange",
    "markers": ["square"],
    "tags": ["tank", "aoe"],
    "danger": "Spawn in groups of 8. Immolation burns enemies within 8 yd every 3 sec.",
    "call": "FR tank / split Infernals; melee watch Immolation.",
    "tank": "Fire resist tank useful; separate if stacked Immolation is melting melee/tank.",
    "spells": [["Immolation", "assets/spell_fire_felhellfire.jpg"]]
  },
  {
    "raid": "HYJAL",
    "zone": "Wave trash",
    "mob": "Fel Stalker",
    "priority": "orange",
    "markers": ["cross"],
    "tags": ["focus", "sheep", "ranged"],
    "danger": "Mana Burn at 30 yd burns roughly 1140 mana per cast.",
    "call": "FOCUS / CC Fel Stalkers before mana burns.",
    "tank": "Pick up fast; keep them away from healer/caster mana if possible.",
    "spells": [["Mana Burn", "assets/spell_shadow_manaburn.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Naj'entus",
    "mob": "Leviathan",
    "priority": "orange",
    "markers": ["square"],
    "tags": ["tank", "ranged", "dispel"],
    "danger": "Poison Spit splashes within 8 yd; Debilitating Spray reduces damage/healing by 50%; Tail Sweep rear knockback.",
    "call": "SPREAD 8; melee side only.",
    "tank": "Face away; raid avoids front/rear cones and stacks loosely.",
    "spells": [["Poison Spit", "assets/spell_nature_corrosivebreath.jpg"], ["Tail Sweep", "assets/ability_hunter_pet_windserpent.jpg"], ["Debilitating Spray", "assets/spell_nature_abolishmagic.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Naj'entus",
    "mob": "Coilskar Wrangler",
    "priority": "orange",
    "markers": ["cross"],
    "tags": ["cleave", "ranged", "tank"],
    "danger": "Lightning Prod chains to nearby players; frontal Cleave.",
    "call": "SPREAD; face Wrangler away.",
    "tank": "Turn frontal away and keep raid spread to reduce chain hits.",
    "spells": [["Lightning Prod", "assets/spell_nature_chainlightning.jpg"], ["Cleave", "assets/ability_warrior_cleave.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Naj'entus",
    "mob": "Dragon Turtle",
    "priority": "yellow",
    "markers": ["moon"],
    "tags": ["sheep", "tank", "ranged"],
    "danger": "Shell Shield reflects 50% magic damage and slows attack/cast speed; can be crowd controlled with Hibernate.",
    "call": "HIBERNATE Turtle or stop magic into Shell Shield.",
    "tank": "Do not fight active Turtle with Harpooner's Mark chaos if CC is available.",
    "spells": [["Water Spit", "assets/spell_frost_frostbolt02.jpg"], ["Shell Shield", "assets/ability_warrior_shieldwall.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Naj'entus",
    "mob": "Coilskar Harpooner",
    "priority": "orange",
    "markers": ["moon"],
    "tags": ["sheep", "ranged", "focus"],
    "danger": "Spear Throw hits up to 10 players; Harpooner's Mark forces Dragon Turtles onto marked target; Hooked Net roots and damages.",
    "call": "SHEEP Harpooner or Turtle; stop Mark combo.",
    "tank": "Separate/CC Harpooner and Turtle so both are not active together.",
    "spells": [["Spear Throw", "assets/ability_marksmanship.jpg"], ["Harpooner's Mark", "assets/ability_marksmanship.jpg"], ["Hooked Net", "assets/ability_gouge.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Naj'entus",
    "mob": "Coilskar General",
    "priority": "red",
    "markers": ["skull"],
    "tags": ["focus", "los", "tank"],
    "danger": "Free Friend removes CC from allies; Booming Voice buffs attack/cast speed for 30 sec.",
    "call": "LOS / KILL General before CC breaks.",
    "tank": "Pull General out of LOS of other mobs to stop Free Friend.",
    "spells": [["Free Friend", "assets/spell_holy_dispelmagic.jpg"], ["Booming Voice", "assets/spell_nature_bloodlust.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Naj'entus",
    "mob": "Aqueous Lord",
    "priority": "red",
    "markers": ["skull"],
    "tags": ["focus", "tank", "ranged", "dispel"],
    "danger": "Vile Slime reduces damage/healing by 50%; Crashing Wave is a 40 yd frontal cone.",
    "call": "FOCUS Lord; dispel/handle Vile Slime; avoid frontal.",
    "tank": "Face Crashing Wave away from raid; watch frontal range.",
    "spells": [["Vile Slime", "assets/spell_nature_corrosivebreath.jpg"], ["Crashing Wave", "assets/spell_frost_glacier.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Naj'entus",
    "mob": "Aqueous Spawn",
    "priority": "orange",
    "markers": ["cross"],
    "tags": ["focus", "aoe", "ranged"],
    "danger": "Sludge Nova hits the target and players within 8 yd, applies stacking Nature DoT and slow; Merge heals Aqueous Lord.",
    "call": "KILL Spawns fast; spread 8.",
    "tank": "Drag/hold near kill zone but avoid stacking raid for Sludge Nova.",
    "spells": [["Sludge Nova", "assets/spell_nature_corrosivebreath.jpg"], ["Merge", "assets/spell_nature_healingtouch.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Naj'entus",
    "mob": "Coilskar Sea-Caller",
    "priority": "orange",
    "markers": ["triangle"],
    "tags": ["focus", "ranged", "aoe", "tank"],
    "danger": "Forked Lightning is a 30 yd frontal hitting up to 5; Hurricane is ground AoE; Geyser splashes and knocks up within 10 yd.",
    "call": "FACE away; move Hurricane; spread for Geyser.",
    "tank": "Turn Sea-Caller away from raid and reposition out of Hurricane.",
    "spells": [["Forked Lightning", "assets/spell_nature_chainlightning.jpg"], ["Hurricane", "assets/spell_nature_earthquake.jpg"], ["Geyser", "assets/spell_frost_glacier.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Supremus",
    "mob": "Bonechewer Taskmaster",
    "priority": "yellow",
    "markers": ["triangle"],
    "tags": ["focus", "tank"],
    "danger": "Fury stacks, increasing size and damage done by 10% per cast.",
    "call": "Kill Taskmasters before Fury stacks.",
    "tank": "Watch stacking damage if they live too long.",
    "spells": [["Fury", "assets/spell_shadow_unholyfrenzy.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Supremus",
    "mob": "Bonechewer Worker",
    "priority": "yellow",
    "markers": ["square"],
    "tags": ["tank", "stun", "ranged"],
    "danger": "Throw Pick hits a target, disarms the Worker, and applies Throbbing Stun for 3 sec.",
    "call": "Tank stun possible; keep pack stable.",
    "tank": "Be ready for unexpected stun while gathering workers.",
    "spells": [["Throw Pick", "assets/inv_gizmo_02.jpg"], ["Throbbing Stun", "assets/ability_gouge.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Supremus",
    "mob": "Dragonmaw Sky Stalker",
    "priority": "orange",
    "markers": ["cross"],
    "tags": ["focus", "ranged", "aoe"],
    "danger": "Starts airborne. Immolation Arrow hits hard and leaves a burning ground patch.",
    "call": "Ranged get threat and drag down; move fire.",
    "tank": "Pick it up once it descends; keep raid moving out of burn patches.",
    "spells": [["Immolation Arrow", "assets/spell_fire_flamebolt.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Supremus",
    "mob": "Dragonmaw Wyrmcaller",
    "priority": "orange",
    "markers": ["skull"],
    "tags": ["focus", "cleave", "tank"],
    "danger": "Frontal Cleave, Felfire melee proc, Jab hits and knocks back the primary threat target.",
    "call": "Face Wyrmcaller away; melee side/back.",
    "tank": "Tank against safe angle/wall if knockbacks are messy.",
    "spells": [["Cleave", "assets/ability_warrior_cleave.jpg"], ["Felfire", "assets/spell_fire_felhellfire.jpg"], ["Jab", "assets/ability_warrior_punishingblow.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Supremus",
    "mob": "Illidari Fearbringer",
    "priority": "red",
    "markers": ["skull"],
    "tags": ["focus", "tank", "aoe", "stun"],
    "danger": "Patrol danger. Rain of Chaos ground AoE; Illidari Flames frontal cone; War Stomp short-range stun.",
    "call": "PULL one; face away; move Rain.",
    "tank": "Isolate patrols. Face frontal away and keep melee ready for stomp.",
    "spells": [["Rain of Chaos", "assets/spell_shadow_rainoffire.jpg"], ["Illidari Flames", "assets/spell_fire_felhellfire.jpg"], ["War Stomp", "assets/ability_golemthunderclap.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Supremus",
    "mob": "Dragonmaw Wind Reaver",
    "priority": "orange",
    "markers": ["moon"],
    "tags": ["focus", "ranged", "aoe"],
    "danger": "Starts airborne. Doom Bolt splashes within 12 yd; Freeze roots in 15 yd; Fireball leaves DoT.",
    "call": "Ranged drag down; spread 12; watch Freeze.",
    "tank": "Pick it up once it descends; keep raid loosely spread for Doom Bolt.",
    "spells": [["Doom Bolt", "assets/spell_shadow_shadowbolt.jpg"], ["Doom Blast", "assets/spell_shadow_shadowfury.jpg"], ["Freeze", "assets/spell_frost_frostnova.jpg"], ["Fireball", "assets/spell_fire_flamebolt.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Akama / Sanctuary",
    "mob": "Ashtongue Channeler",
    "priority": "red",
    "markers": ["skull", "cross"],
    "tags": ["focus", "kick", "priest-mc"],
    "danger": "Heals and caster support around Shade of Akama area; exact P3 Anniversary tuning à confirmer.",
    "call": "FOCUS / KICK Channelers.",
    "tank": "Assign interrupts; keep casters grouped for cleave where possible.",
    "spells": [["Healing Touch", "assets/spell_nature_healingtouch.jpg"], ["Mind Control", "assets/spell_shadow_shadowworddominate.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Teron path",
    "mob": "Shadowmoon Blood Mage",
    "priority": "yellow",
    "markers": ["moon"],
    "tags": ["sheep", "los", "ranged"],
    "danger": "Wowhead notes many can be skipped by hugging left and Mind Soothe on the last Blood Mages.",
    "call": "SKIP route if possible; Mind Soothe last pack.",
    "tank": "If pulled, LOS casters and clean up; details à confirmer.",
    "spells": [["Mind Soothe", "assets/spell_holy_holysmite.jpg"], ["Fireball", "assets/spell_fire_flamebolt.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Teron path",
    "mob": "Hand of Gorefiend",
    "priority": "green",
    "markers": ["triangle"],
    "tags": ["tank"],
    "danger": "Wowhead describes them as large melee mobs without remarkable mechanics.",
    "call": "Tank and burn.",
    "tank": "Treat as beefy melee; keep controlled.",
    "spells": [["Cleave", "assets/ability_warrior_cleave.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Gurtogg",
    "mob": "Bonechewer Behemoth",
    "priority": "red",
    "markers": ["skull"],
    "tags": ["focus", "tank", "stun", "ranged"],
    "danger": "Charge stun, 15 yd Fel Stomp stun, Enrage, Fiery Comet splash, Meteor split damage.",
    "call": "SOLO pull Behemoth; spread/stack Meteor as called.",
    "tank": "Pull alone where possible; manage Enrage and stomp range.",
    "spells": [["Behemoth Charge", "assets/ability_warrior_charge.jpg"], ["Fel Stomp", "assets/spell_fire_felhellfire.jpg"], ["Enrage", "assets/spell_shadow_unholyfrenzy.jpg"], ["Meteor", "assets/spell_fire_meteorstorm.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Gurtogg",
    "mob": "Bonechewer Blade Fury",
    "priority": "red",
    "markers": ["moon"],
    "tags": ["sheep", "focus", "stun", "cleave"],
    "danger": "Whirlwind buff triggers Whirlwind every second for 8 sec, hitting nearby players hard.",
    "call": "SHEEP Blade Fury; STUN/KILL after pack.",
    "tank": "Keep controlled until rest of pack is dead; melee out during Whirlwind.",
    "spells": [["Whirlwind", "assets/ability_whirlwind.jpg"], ["Polymorph", "assets/spell_nature_polymorph.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Gurtogg",
    "mob": "Bonechewer Blood Prophet",
    "priority": "orange",
    "markers": ["cross"],
    "tags": ["focus", "stopcc", "ranged"],
    "danger": "Prophecy of Blood increases target damage taken by 50%; Bloodbolt slows. Source notes casts require incapacitate effects to stop.",
    "call": "FOCUS Blood Prophet; incap casts.",
    "tank": "Cannot be stunned per source note; use incapacitate stops and kill early.",
    "spells": [["Prophecy of Blood", "assets/spell_shadow_deathpact.jpg"], ["Bloodbolt", "assets/spell_shadow_shadowbolt.jpg"], ["Gouge", "assets/ability_gouge.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Gurtogg",
    "mob": "Bonechewer Shield Disciple",
    "priority": "orange",
    "markers": ["square"],
    "tags": ["tank", "stun", "ranged"],
    "danger": "Shield Bash/Throw Shield stun targets; Shield Wall reduces damage by 75%; Intervene protects allies.",
    "call": "Swap off Shield Wall; control Disciple stuns.",
    "tank": "Expect chaotic stun/repositioning; swap targets during Shield Wall.",
    "spells": [["Shield Bash", "assets/ability_kick.jpg"], ["Throw Shield", "assets/spell_holy_devotionaura.jpg"], ["Shield Wall", "assets/ability_warrior_shieldwall.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Gurtogg",
    "mob": "Mutant War Hound",
    "priority": "yellow",
    "markers": ["diamond"],
    "tags": ["tank", "aoe"],
    "danger": "Persistent Cloud of Disease pulses Nature damage within 5 yd and lingers after death.",
    "call": "Melee watch disease aura; move after death.",
    "tank": "Keep away from stacked melee if aura damage spikes.",
    "spells": [["Cloud of Disease", "assets/ability_creature_disease_02.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Reliquary approach",
    "mob": "Suffering Soul Fragment",
    "priority": "yellow",
    "markers": ["cross"],
    "tags": ["kick", "aoe", "tank"],
    "danger": "One of the Reliquary approach ghosts; Soul Blast AoE interrupt info à confirmer.",
    "call": "RUN to ramp; KICK Soul Blast; AoE fragments.",
    "tank": "Collect on the move; stabilize at ramp. Exact ghost behavior à confirmer.",
    "spells": [["Soul Blast", "assets/spell_shadow_shadowbolt.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Reliquary approach",
    "mob": "Hungering Soul Fragment",
    "priority": "green",
    "markers": ["triangle"],
    "tags": ["aoe", "stun", "tank"],
    "danger": "One of the Reliquary approach ghosts; individually low threat, fast respawn area.",
    "call": "RUN to ramp; STUN/AoE fragments.",
    "tank": "Collect on the move; stabilize at ramp. Exact ghost behavior à confirmer.",
    "spells": []
  },
  {
    "raid": "BT",
    "zone": "Reliquary approach",
    "mob": "Angered Soul Fragment",
    "priority": "yellow",
    "markers": ["diamond"],
    "tags": ["aoe", "tank"],
    "danger": "One of the Reliquary approach ghosts; short range AoE anger damage à confirmer.",
    "call": "RUN to ramp; AoE fragments together.",
    "tank": "Collect on the move; stabilize at ramp. Exact ghost behavior à confirmer.",
    "spells": [["Anger", "assets/spell_shadow_unholyfrenzy.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Mother Shahraz",
    "mob": "Mistress of Woe",
    "priority": "orange",
    "markers": ["cross"],
    "tags": ["focus", "aoe", "dispel"],
    "danger": "Shared Bonds splits damage with partner; Holy Nova damages nearby enemies and heals nearby allies.",
    "call": "Cleave paired Mistresses; watch Holy Nova.",
    "tank": "Keep pair controlled; interrupt/stop healing pressure à confirmer.",
    "spells": [["Shared Bonds", "assets/spell_shadow_deathpact.jpg"], ["Holy Nova", "assets/spell_holy_holynova.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Mother Shahraz",
    "mob": "Priestess of Torment",
    "priority": "red",
    "markers": ["skull"],
    "tags": ["focus", "dispel", "tank"],
    "danger": "Painful Rage stacks attack speed/damage; Shadow Word: Pain is dispellable; Lash of Pain hits tank.",
    "call": "FOCUS Torment; dispel SW:P.",
    "tank": "Watch stacking Painful Rage and Lash spikes.",
    "spells": [["Painful Rage", "assets/spell_shadow_unholyfrenzy.jpg"], ["Shadow Word: Pain", "assets/spell_shadow_shadowbolt.jpg"], ["Lash of Pain", "assets/spell_shadow_shadowbolt.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Mother Shahraz",
    "mob": "Mistress of Dementia",
    "priority": "orange",
    "markers": ["moon"],
    "tags": ["focus", "cleave"],
    "danger": "Dementia randomly increases/decreases player damage; on death spawns Image of Dementia that spams Whirlwind briefly.",
    "call": "Kill Dementia; melee out for death image.",
    "tank": "Prepare for Whirlwind image on death.",
    "spells": [["Dementia", "assets/spell_shadow_possession.jpg"], ["Image of Dementia", "assets/spell_shadow_shadowworddominate.jpg"], ["Whirlwind", "assets/ability_whirlwind.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Council",
    "mob": "Promenade Sentinel",
    "priority": "red",
    "markers": ["skull"],
    "tags": ["focus", "ranged", "tank"],
    "danger": "L5 Arcane Charge deals Arcane damage equal to 100% max health to random raider; lethal without full HP + absorb.",
    "call": "FULL HP + shields for L5 Arcane Charge.",
    "tank": "Healers pre-top random targets; assign shields/absorbs.",
    "spells": [["L1 Arcane Charge", "assets/spell_arcane_arcanepotency.jpg"], ["L5 Arcane Charge", "assets/spell_arcane_blast.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Council",
    "mob": "Illidari Archon",
    "priority": "yellow",
    "markers": ["cross"],
    "tags": ["dispel", "ranged"],
    "danger": "Holy Smite hits single target; Power Word: Shield absorbs 5000 and can be dispelled.",
    "call": "Dispel shields; kill caster pack.",
    "tank": "Group with blood elf pack; dispel shield so damage sticks.",
    "spells": [["Holy Smite", "assets/spell_holy_holysmite.jpg"], ["Power Word: Shield", "assets/ability_warrior_shieldwall.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Council",
    "mob": "Illidari Assassin",
    "priority": "orange",
    "markers": ["diamond"],
    "tags": ["dispel", "tank", "ranged"],
    "danger": "Paralyzing Poison stuns 8 sec and is poison-dispellable; Riposte disarms; Vanish into Ambush hits random target.",
    "call": "POISON dispel stun; watch Vanish Ambush.",
    "tank": "Expect target swaps after Vanish; cleanse poison fast.",
    "spells": [["Paralyzing Poison", "assets/ability_creature_poison_06.jpg"], ["Riposte", "assets/ability_warrior_disarm.jpg"], ["Vanish", "assets/spell_shadow_impphaseshift.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Council",
    "mob": "Illidari Battle-mage",
    "priority": "red",
    "markers": ["moon"],
    "tags": ["sheep", "stopcc", "aoe", "ranged"],
    "danger": "Fireball/Frostbolt plus Blizzard mana drain/slow and Flamestrike ground damage. Blizzard can be stopped with incapacitate effects.",
    "call": "ROGUE/Gouge Battle-mage; move Blizzard/Flamestrike.",
    "tank": "Keep caster controlled; do not let AoE sit under raid.",
    "spells": [["Fireball", "assets/spell_fire_flamebolt.jpg"], ["Frostbolt", "assets/spell_frost_frostbolt02.jpg"], ["Blizzard", "assets/spell_frost_icestorm.jpg"], ["Flamestrike", "assets/spell_fire_selfdestruct.jpg"]]
  },
  {
    "raid": "BT",
    "zone": "Before Council",
    "mob": "Illidari Blood Lord",
    "priority": "red",
    "markers": ["skull"],
    "tags": ["focus", "dispel", "tank", "stun"],
    "danger": "Hammer of Justice stun is dispellable; Divine Shield lasts 15 sec and can be Mass Dispelled.",
    "call": "MASS DISPEL Divine Shield; dispel HoJ.",
    "tank": "Watch Command burst and HoJ on primary threat.",
    "spells": [["Judgement of Command", "assets/spell_holy_sealofmight.jpg"], ["Hammer of Justice", "assets/spell_holy_searinglight.jpg"], ["Divine Shield", "assets/ability_warrior_shieldwall.jpg"]]
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
    "danger": "3 paires aléatoires. Identifier la paire au premier cast.",
    "call": "A: cible vers tank + tuer add. B: spike tank + tranq. C: raid out + cleanse.",
    "tank": "Mort: rien / Toxic Pool / 2 Ragers / beaucoup d'adds / mana mushroom."
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
    "danger": "Le prêtre peut MC le Smith et utiliser ses outils golem.",
    "call": "PRÊTRE MC Smith jusqu'à la mort des golems.",
    "tank": "Si pas MC: stopper Power Up / Repair à confirmer."
  },
  "Crimson Hand Blood Knight": {
    "danger": "Flash of Light non interruptible; Hammer of Justice dispellable; Renew purgeable.",
    "call": "Dispel HoJ; purge Renew; burst à travers Flash.",
    "tank": "Tenir dans le pack AoE; heals dispel les stuns."
  },
  "Crimson Hand Battle Mage": {
    "danger": "Blizzard/Frostbolt Volley non kickable; Poly/Gouge stop les casts.",
    "call": "Spam SHEEP/Gouge si l'AoE pique; sortir Blizzard.",
    "tank": "Face au mur pour Cone of Cold."
  },
  "Crimson Hand Centurion": {
    "danger": "Arcane Flurry non kickable; Poly/Gouge stop les casts.",
    "call": "Spam SHEEP/Gouge Centurion si Arcane Flurry pique.",
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
  "Banish": "Bannir",
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
  "Gouge": "Suriner",
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
  "Mind Control": "Contrôle mental",
  "Mortal Cleave": "Enchaînement mortel",
  "Overcharge": "Surcharge",
  "Poison Bolt Volley": "Salve d'éclairs de poison",
  "Poison Shield": "Bouclier de poison",
  "Polymorph": "Métamorphose",
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

const sourceUrls = {
  ssc: "https://www.wowhead.com/tbc/guide/trash-mobs-serpentshrine-cavern-ssc-strategy-burning-crusade-classic",
  sscFr: "https://www.wowhead.com/tbc/fr/guide/trash-mobs-serpentshrine-cavern-ssc-strategy-burning-crusade-classic",
  tk: "https://www.wowhead.com/tbc/guide/trash-mobs-the-eye-tempest-keep-strategy-burning-crusade-classic",
  tkFr: "https://www.wowhead.com/tbc/fr/guide/trash-mobs-the-eye-tempest-keep-strategy-burning-crusade-classic",
  hyjal: "https://www.wowhead.com/tbc/guide/trash-mobs-hyjal-summit-strategy-burning-crusade-classic",
  bt: "https://www.wowhead.com/tbc/guide/trash-mobs-black-temple-strategy-burning-crusade-classic"
};

const auditData = {
  "Coilfang Beast-Tamer": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Cleave/Bestial Wrath and recommends killing Beast-Tamer quickly; it does not make Hate-Screamer focus 1 absolute for the pack.",
    confidence: "source",
    focusRank: null,
    focusReason: "Fast kill is sourced because Bestial Wrath boosts Beast-Tamer/Sporebat damage, but exact pack order can vary.",
    recommendedMarker: "skull",
    callShort: "Face away; kill quickly during Bestial Wrath."
  },
  "Coilfang Hate-Screamer": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents AoE Silence and Sonic Scream. Focus priority is raid-lead interpretation when silence is the problem.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Option A: focus/LOS Hate-Screamer if Silence is breaking caster control.",
    recommendedMarker: "cross",
    callShort: "Option A: focus/LOS if silence is dangerous."
  },
  "Serpentshrine Sporebat": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Charge and Spore Burst, and notes raids can kill Sporebats after Beast-Tamer; earlier focus is situational.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Option B: control/kill Sporebats if charges are causing deaths or healer chaos.",
    recommendedMarker: "triangle",
    callShort: "Option B: kill/control if charges are dangerous."
  },
  "Underbog Colossus": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead lists eight abilities; current Anniversary guide notes 3 possible pairs: Acid Geyser/Parasite, Atrophic Blow/Frenzy, or Spore Quake/Initial Infection. Death can be none, Toxic Pool, 2 Ragers, many small adds, or mushroom.",
    confidence: "source",
    focusRank: null,
    focusReason: "Second-screen priority is identifying the active pair, then calling the death roll.",
    recommendedMarker: "skull",
    callShort: "Call pair; call death roll."
  },
  "Vashj'ir Honor Guard": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Frightening Shout, Mortal Cleave, and tank knockback.",
    confidence: "source",
    focusRank: null,
    focusReason: "Danger is positioning/fear control; source does not provide a strict focus rank.",
    recommendedMarker: "skull",
    callShort: "Fear protection; face Mortal Cleave away."
  },
  "Coilfang Priestess": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Holy Fire and Priestess Spirit/Holy Nova after death.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "CC/kill priority is inferred from dangerous death spirit and caster pressure; no strict source rank.",
    recommendedMarker: "diamond",
    callShort: "CC or kill; watch Spirit Nova after death."
  },
  "Coilfang Shatterer": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Shatter Armor. Spell Reflection handling was from comments/secondary notes, not a clean guide priority.",
    confidence: "to_confirm",
    focusRank: null,
    focusReason: "Tank damage is sourced, but extra handling notes need live verification.",
    recommendedMarker: "cross",
    callShort: "Watch tank after Shatter Armor."
  },
  "Greyheart Tidecaller": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead gives a conditional order: normally Nether-Mage first, but if Nether-Mage is sheeped, kill Tidecaller first and swap to Water Elemental Totems.",
    confidence: "source",
    focusRank: null,
    focusReason: "Conditional source priority: focus Tidecaller first only when Nether-Mage is controlled; always swap Water Totem.",
    recommendedMarker: "skull",
    callShort: "If Nether-Mage is sheeped, kill Tidecaller; swap Water Totem."
  },
  "Greyheart Nether-Mage": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead says Nether-Mage is typically killed first, but can be sheeped while Tidecaller dies.",
    confidence: "source",
    focusRank: null,
    focusReason: "Conditional source priority: kill first if not sheeped; if sheeped, hold it and kill after Tidecaller.",
    recommendedMarker: "diamond",
    callShort: "Kill first unless sheeped; dispel/spellsteal buffs."
  },
  "Greyheart Skulker": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead says once Tidecallers are down, go for Skulker.",
    confidence: "source",
    focusRank: null,
    focusReason: "Sourced post-Tidecaller target, but exact numeric rank depends on whether Nether-Mage was sheeped.",
    recommendedMarker: "cross",
    callShort: "Kill after Tidecaller phase; watch Kick."
  },
  "Greyheart Shield-Bearer": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Shield Charge and Avenger's Shield. Stack/positioning is the key handling.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Danger is charge prevention and positioning; source does not give a universal focus rank.",
    recommendedMarker: "square",
    callShort: "Stack behind; face into wall."
  },
  "Serpentshrine Lurker": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead says Warlocks should control Serpentshrine Lurkers and save them for the end.",
    confidence: "source",
    focusRank: null,
    focusReason: "Sourced control/kill-late target; do not fight it with the rest of the pack active.",
    recommendedMarker: "moon",
    callShort: "Banish/control; save for end."
  },
  "Coilfang Fathom-Witch": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead says take down Fathom-Witches first, then Serpentguards.",
    confidence: "source",
    focusRank: 1,
    focusReason: "Sourced first kill for this pack because of Domination and Shadow Nova positioning danger.",
    recommendedMarker: "skull",
    callShort: "Focus/control MC; position away from water."
  },
  "Coilfang Serpentguard": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead says Serpentguards are killed after Fathom-Witches.",
    confidence: "source",
    focusRank: 2,
    focusReason: "Sourced second kill in Fathom-Witch/Serpentguard pack; watch Spell Reflection.",
    recommendedMarker: "cross",
    callShort: "Stop casts into reflection; watch armor aura."
  },
  "Tidewalker Warrior": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Enrage and Tranquilizing Shot handling.",
    confidence: "source",
    focusRank: null,
    focusReason: "Handling is Tranq/tank control, not necessarily focus first.",
    recommendedMarker: "triangle",
    callShort: "Tranq Enrage; tank stable."
  },
  "Tidewalker Hydromancer": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents interruptible Frostbolt, Frost Nova, and Frost Shock.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Caster kill/kick is inferred from interruptible damage; source does not rank it globally.",
    recommendedMarker: "cross",
    callShort: "Kick Frostbolt; kill caster if needed."
  },
  "Tidewalker Depth-Seer": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Healing Touch and Rejuvenation on murloc trash.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Healer focus is raid-lead inference from interruptible healing, not a sourced absolute rank.",
    recommendedMarker: "skull",
    callShort: "Focus/kick healer."
  },
  "Tidewalker Shaman": {
    sourceUrl: sourceUrls.ssc,
    sourceNote: "Wowhead documents Chain Lightning, Lightning Bolt, and Lightning Shield.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Kick/spread priority is inferred from spell pressure; no strict source rank.",
    recommendedMarker: "moon",
    callShort: "Kick; spread for Chain Lightning; purge shield."
  },
  "Astromancer": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead explicitly says Astromancer and Star Scryer should be the first two to die, with Astromancer first.",
    confidence: "source",
    focusRank: 1,
    focusReason: "Sourced first kill due to Molten Armor, Blast Wave, and Fireball Volley raid damage.",
    recommendedMarker: "skull",
    callShort: "Kill first; purge Molten Armor."
  },
  "Star Scryer": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead explicitly says Star Scryer is second after Astromancer in these TK packs.",
    confidence: "source",
    focusRank: 2,
    focusReason: "Sourced second kill due to Domination, Arcane Blast, and Starfall.",
    recommendedMarker: "cross",
    callShort: "Kill second; CC MC instantly."
  },
  "Bloodwarder Marshal": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead documents Whirlwind/Bloodthirst/Uppercut style melee pressure. Squire heal interaction needs direct pack verification.",
    confidence: "to_confirm",
    focusRank: null,
    focusReason: "Tank positioning is clear; focus rank and Squire interrupt call need manual audit.",
    recommendedMarker: "skull",
    callShort: "Wall tank; verify Squire heal call."
  },
  "Phoenix-Hawk Hatchling": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead documents AoE Silence and Wing Buffet in Al'ar room trash.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Hallway/corner positioning is raid-lead interpretation from silence/knockback mechanics.",
    recommendedMarker: "triangle",
    callShort: "Drag hallway; casters stay back."
  },
  "Phoenix-Hawk": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead documents Dive and Mana Burn. Exact stack/pull-count handling is raid-lead interpretation.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Control plan is inferred; source does not give strict focus rank.",
    recommendedMarker: "square",
    callShort: "Control Dive; watch Mana Burn."
  },
  "Crystalcore Devastator": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead documents Countercharge/Knock Away style tank and silence pressure.",
    confidence: "inferred",
    focusRank: null,
    focusReason: "Tank positioning/taunt timing is inferred handling, not a sourced kill rank.",
    recommendedMarker: "skull",
    callShort: "Max range; taunt after Knock Away."
  },
  "Crystalcore Sentinel": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead documents Overcharge tank burst and Crystalcore Sentinel danger.",
    confidence: "source",
    focusRank: null,
    focusReason: "Tank danger is sourced; not necessarily focus immediate. Treat as tank swap/heal call.",
    recommendedMarker: "skull",
    callShort: "Tank swap / hard heal Overcharge."
  },
  "Crystalcore Mechanic": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead says Warlocks can Banish Mechanics and they should be killed last.",
    confidence: "source",
    focusRank: null,
    focusReason: "Sourced control/kill-last target, not a focus priority.",
    recommendedMarker: "moon",
    callShort: "Banish; kill last."
  },
  "Tempest-Smith": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead notes Priest Mind Control can control Tempest-Smith until nearby Crystalcore Golems die.",
    confidence: "source",
    focusRank: null,
    focusReason: "Sourced control target for Priests, distinct from enemy Mind Control mechanics.",
    recommendedMarker: "circle",
    callShort: "Priest MC until golems die."
  },
  "Crimson Hand Blood Knight": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead documents Flash of Light, Hammer of Justice, and Renew handling.",
    confidence: "source",
    focusRank: null,
    focusReason: "Dispel/purge handling is sourced; no strict focus rank.",
    recommendedMarker: "cross",
    callShort: "Dispel HoJ; purge Renew; burn through Flash."
  },
  "Crimson Hand Battle Mage": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead says Blizzard/Frostbolt Volley cannot be interrupted but can be stopped with Polymorph or Gouge.",
    confidence: "source",
    focusRank: null,
    focusReason: "CC/move handling is sourced; no absolute focus rank.",
    recommendedMarker: "moon",
    callShort: "Spam Sheep/Gouge to stop AoE casts."
  },
  "Crimson Hand Centurion": {
    sourceUrl: sourceUrls.tk,
    sourceNote: "Wowhead says Arcane Flurry cannot be interrupted but can be stopped with Polymorph or Gouge.",
    confidence: "source",
    focusRank: null,
    focusReason: "Sourced stop-cast target; not necessarily focus priority.",
    recommendedMarker: "moon",
    callShort: "Spam Sheep/Gouge to stop Arcane Flurry."
  }
};

trashData.forEach((item) => Object.assign(item, auditData[item.mob] || {
  sourceUrl: { SSC: sourceUrls.ssc, TK: sourceUrls.tk, HYJAL: sourceUrls.hyjal, BT: sourceUrls.bt }[item.raid] || sourceUrls.tk,
  sourceNote: "Audit metadata missing for this mob.",
  confidence: "to_confirm",
  focusRank: null,
  focusReason: "Needs manual audit.",
  recommendedMarker: item.markers[0] || null,
  callShort: item.call
}));

const savedRaid = localStorage.getItem("raid") || "ALL";
const savedRaids = localStorage.getItem("raids");

const state = {
  raids: new Set(savedRaids ? JSON.parse(savedRaids) : (savedRaid === "ALL" ? ["SSC", "TK", "HYJAL", "BT"] : [savedRaid])),
  collapsedRaids: new Set(JSON.parse(localStorage.getItem("collapsedRaids") || "[]")),
  zone: localStorage.getItem("zone") || "ALL",
  mode: localStorage.getItem("mode") || "detailed",
  zoom: localStorage.getItem("zoom") || "1",
  lang: "en",
  dangerOnly: localStorage.getItem("dangerOnly") === "true",
  auditOnly: localStorage.getItem("auditOnly") === "true",
  tags: new Set(JSON.parse(localStorage.getItem("tags") || "[]")),
  query: ""
};

if (localStorage.getItem("phase3Enabled") !== "true") {
  state.raids.add("HYJAL");
  state.raids.add("BT");
  localStorage.setItem("phase3Enabled", "true");
}

const cardsEl = document.querySelector("#cards");
const filtersEl = document.querySelector("#filters");
const raidPlatesEl = document.querySelector("#raidPlates");
const countEl = document.querySelector("#count");
const mainCountEl = document.querySelector("#mainCount");
const contentTitleEl = document.querySelector("#contentTitle");
const searchEl = document.querySelector("#search");
const zoomSelectEl = document.querySelector("#zoomSelect");

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

function spellDisplayName(name) {
  return state.lang === "fr" ? (frSpellNames[name] || name) : name;
}

function spellIcon(name, fallback) {
  return guideSpellIcons[name] || fallback || icon(name.toLowerCase().replace(/[^a-z0-9]+/g, "_"));
}

function spellInfo(name, fallback) {
  const descriptions = t().spellDescriptions;
  return {
    name,
    displayName: spellDisplayName(name),
    description: descriptions[name] || ui("unknownSpell"),
    src: spellIcon(name, fallback)
  };
}

function save() {
  const raidMode = activeRaidMode();
  localStorage.setItem("raid", raidMode);
  localStorage.setItem("raids", JSON.stringify([...state.raids]));
  localStorage.setItem("zone", state.zone);
  localStorage.setItem("mode", state.mode);
  localStorage.setItem("zoom", state.zoom);
  localStorage.setItem("dangerOnly", state.dangerOnly);
  localStorage.setItem("auditOnly", state.auditOnly);
  localStorage.setItem("tags", JSON.stringify([...state.tags]));
  localStorage.setItem("collapsedRaids", JSON.stringify([...state.collapsedRaids]));
}

function activeRaidMode() {
  if (state.raids.has("SSC") && state.raids.has("TK")) return "ALL";
  if (state.raids.has("SSC")) return "SSC";
  if (state.raids.has("TK")) return "TK";
  for (const raid of ["HYJAL", "BT", "SUNWELL"]) if (state.raids.has(raid)) return raid;
  return "NONE";
}

function activeRaidList() {
  return raidCatalog.map((raid) => raid.key).filter((raid) => state.raids.has(raid));
}

function normalized(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function visibleItems() {
  const q = normalized(state.query);
  return trashData.map(localizedItem).filter((item) => {
    if (!state.raids.has(item.raid)) return false;
    if (state.zone !== "ALL" && item.zone !== state.zone) return false;
    if (state.dangerOnly && !["red", "orange"].includes(item.priority)) return false;
    if (state.auditOnly && item.confidence !== "to_confirm") return false;
    for (const tag of state.tags) if (!item.tags.includes(tag)) return false;
    if (!q) return true;
    const originalMob = item.originalMob || item.mob;
    const enItem = trashData.find((base) => base.mob === originalMob) || item;
    const frItem = frTrashText[originalMob] || {};
    const hay = normalized([
      item.raid, item.zone, item.mob, originalMob, item.priority, item.danger, item.call, item.tank,
      enItem.danger, enItem.call, enItem.tank, frItem.danger, frItem.call, frItem.tank,
      item.tags.join(" "), item.spells.map(([name]) => name).join(" "),
      (item.spellGroups || []).map((group) => [group.label, group.note, ...group.spells].join(" ")).join(" "),
      item.spells.map(([name]) => frSpellNames[name] || "").join(" "),
      item.confidence, item.sourceNote, item.sourceQuoteShort, item.focusReason,
      item.recommendedMarker, item.callShort, String(item.focusRank ?? "")
    ].join(" "));
    return hay.includes(q);
  });
}

function markerImgs(markers) {
  const titles = t().markerTitle;
  return markers.map((m) => `<span class="marker marker-${m}" title="${titles[m] || m}" aria-label="${titles[m] || m}"></span>`).join("");
}

const tagMarkers = {
  focus: ["skull"],
  sheep: ["moon", "square"],
  stopcc: ["moon", "square"],
  banish: ["diamond", "triangle"]
};

const tagIconSpells = {
  kick: "Kick",
  los: "Spell Reflection",
  fear: "Psychic Scream",
  "enemy-mc": "MC",
  "priest-mc": "MC",
  cleave: "Cleave",
  aoe: "Blast Wave",
  tank: "Shield Wall",
  ranged: "Ranged",
  stun: "Hammer of Justice",
  purge: "Purge",
  dispel: "Dispel Magic",
  tranq: "Frenzy"
};

const tagIconPaths = {
  "enemy-mc": "assets/spell_shadow_shadowworddominate.jpg",
  "priest-mc": "assets/spell_shadow_shadowworddominate.jpg",
  los: "assets/spell_arcane_blink.jpg",
  tank: "assets/ability_warrior_shieldwall.jpg",
  ranged: "assets/ability_marksmanship.jpg",
  purge: "assets/spell_nature_purge.jpg",
  dispel: "assets/spell_holy_dispelmagic.jpg"
};

function actionIcon(tag) {
  const titles = t().markerTitle;
  if (tagMarkers[tag]) {
    return `<span class="tag-icons">${tagMarkers[tag].map((marker) => `<span class="tag-marker marker-${marker}" title="${titles[marker] || marker}"></span>`).join("")}</span>`;
  }
  const spellName = tagIconSpells[tag];
  const src = tagIconPaths[tag] || (spellName ? spellIcon(spellName) : "");
  if (src) {
    const title = spellName === "MC" ? "Domination" : spellName || tag;
    return `<span class="tag-icons"><img class="tag-spell-icon" src="${escapeHtml(src)}" alt="" title="${escapeHtml(title)}"></span>`;
  }
  return "";
}

function tagButtonContent(tag, label) {
  return `${actionIcon(tag)}<span>${escapeHtml(label)}</span>`;
}

function spellPills(spells) {
  return spells.map(([name, src]) => {
    const spell = spellInfo(name, src);
    return spellChip(spell, "spell", true);
  }).join("");
}

function spellPillsFromNames(names) {
  return names.map((name) => spellChip(spellInfo(name), "spell", true)).join("");
}

function spellChip(spell, className = "spell", showText = true) {
  return `<span class="${className}" tabindex="0" title="${escapeHtml(spell.description)}" data-tip-title="${escapeHtml(spell.displayName)}" data-tip="${escapeHtml(spell.description)}"><img src="${escapeHtml(spell.src)}" alt="">${showText ? escapeHtml(spell.displayName) : ""}</span>`;
}

function renderSpellBlock(item) {
  if (!item.spellGroups?.length) return `<div class="spell-strip">${spellPills(item.spells)}</div>`;
  const groups = item.spellGroups;
  return `<div class="spell-groups">${groups.map((group) => `
    <div class="spell-group">
      <div class="spell-group-head">${escapeHtml(group.label)}</div>
      <div class="spell-group-body">${spellPillsFromNames(group.spells)}</div>
      <div class="spell-group-note">${escapeHtml(group.note || "")}</div>
    </div>
  `).join("")}</div>`;
}

function richText(text) {
  const source = String(text);
  const candidates = Object.keys(guideSpellIcons)
    .flatMap((name) => {
      const displayName = spellDisplayName(name);
      return [name, displayName].filter((value, index, arr) => value && arr.indexOf(value) === index).map((label) => ({ label, name }));
    })
    .sort((a, b) => b.label.length - a.label.length);
  let html = "";
  for (let i = 0; i < source.length;) {
    const match = candidates.find(({ label }) => source.startsWith(label, i));
    if (match) {
      html += spellChip(spellInfo(match.name), "inline-spell", true);
      i += match.label.length;
    } else {
      html += escapeHtml(source[i]);
      i += 1;
    }
  }
  return html;
}

const lineBreakMobs = new Set([
  "Underbog Colossus",
  "Star Scryer",
  "Tempest-Smith",
  "Crimson Hand Battle Mage"
]);

function formattedCardText(text, item) {
  const originalMob = item.originalMob || item.mob;
  if (!lineBreakMobs.has(originalMob)) return escapeHtml(text);
  const lines = String(text)
    .replace(/;\s+/g, "\n")
    .replace(/\s+(B:)/g, "\n$1")
    .replace(/\s+(C:)/g, "\n$1")
    .replace(/\s+(If not MC'd:)/i, "\n$1")
    .replace(/\s+(Si pas MC:)/i, "\n$1")
    .replace(/Death roll:\s*/i, "Death roll:\n")
    .replace(/Mort:\s*/i, "Mort:\n")
    .replace(/\s+\/\s+(2 Ragers|many adds|mana mushroom|beaucoup d'adds|mana)/i, "\n/ $1")
    .replace(/\s+(and use its golem tools\.?)/i, "\n$1")
    .replace(/\s+(et utiliser ses outils golem\.?)/i, "\n$1")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  return `<span class="text-lines">${lines.map((line) => `<span class="text-line">${escapeHtml(line)}</span>`).join("")}</span>`;
}

function tagPills(tags) {
  const labels = t().tagLabels;
  return tags.slice(0, 3).map((tag) => `<span class="tag ${tag}">${tagButtonContent(tag, labels[tag] || tag)}</span>`).join("");
}

function actionTitle(item) {
  const labels = t().tagLabels;
  const order = ["focus", "kick", "stopcc", "sheep", "banish", "los", "tank", "aoe", "ranged", "enemy-mc", "priest-mc", "cleave", "fear"];
  return order
    .filter((tag) => item.tags.includes(tag))
    .slice(0, 2)
    .map((tag) => labels[tag] || tag)
    .join(" / ");
}

function mobInitials(mob) {
  return mob.split(/[^A-Za-z0-9]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function trashPortrait(item) {
  const originalMob = item.originalMob || item.mob;
  const src = trashImages[originalMob];
  const raidClass = item.raid.toLowerCase();
  if (!src) {
    return `<div class="mob-portrait portrait-${raidClass} no-image"><div class="portrait-initials">${escapeHtml(mobInitials(originalMob))}</div><small>no image</small></div>`;
  }
  return `<div class="mob-portrait portrait-${raidClass}"><img src="${escapeHtml(src)}" alt="${escapeHtml(item.mob)}" loading="lazy" decoding="async"></div>`;
}

function auditPanel(item) {
  if (!state.auditOnly) return "";
  const rank = item.focusRank ?? "—";
  const marker = item.recommendedMarker ? markerImgs([item.recommendedMarker]) : "—";
  const sourceText = item.sourceQuoteShort || item.sourceNote || "—";
  return `
    <div class="audit-panel">
      <div class="audit-line"><span class="audit-k">${ui("auditConfidence")}</span><span class="audit-v confidence-${escapeHtml(item.confidence)}">${escapeHtml(item.confidence)}</span></div>
      <div class="audit-line"><span class="audit-k">${ui("auditRank")}</span><span class="audit-v">${escapeHtml(rank)}</span></div>
      <div class="audit-line"><span class="audit-k">${ui("auditMarker")}</span><span class="audit-v">${marker}</span></div>
      <div class="audit-line"><span class="audit-k">${ui("auditReason")}</span><span class="audit-v">${escapeHtml(item.focusReason || "—")}</span></div>
      <div class="audit-line"><span class="audit-k">${ui("auditSource")}</span><span class="audit-v"><a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(sourceText)}</a></span></div>
    </div>
  `;
}

function syncStaticText() {
  document.documentElement.lang = state.lang;
  document.querySelector("[data-i18n='subtitle']").textContent = ui("subtitle");
  searchEl.placeholder = ui("searchPlaceholder");
  document.querySelector("[data-mode='detailed']").textContent = ui("detailed");
  document.querySelector("#dangerOnly").textContent = ui("dangerOnly");
  document.querySelector("#auditOnly").textContent = ui("auditOnly");
  document.querySelector("#reset").textContent = ui("reset");
  document.documentElement.style.setProperty("--ui-zoom", state.zoom);
  zoomSelectEl.value = state.zoom;
  document.querySelectorAll("[data-lang-choice]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langChoice === state.lang);
  });
  document.querySelector("[data-i18n='keys']").textContent = ui("keys");
}

function renderFilters() {
  const labels = t().tagLabels;
  const filterOrder = ["focus", "kick", "stopcc", "sheep", "banish", "enemy-mc", "priest-mc", "tank", "los", "fear", "cleave", "aoe", "ranged"];
  filtersEl.innerHTML = filterOrder
    .map((key) => `<button data-tag="${key}" class="${state.tags.has(key) ? "active" : ""}">${tagButtonContent(key, labels[key] || key)}</button>`)
    .join("");
}

function toggleRaidTab(raidName) {
  if (state.raids.has(raidName)) {
    state.raids.delete(raidName);
    state.collapsedRaids.add(raidName);
    if (state.zone !== "ALL" && zonesForRaid(raidName).some(([zone]) => zone === state.zone)) {
      state.zone = "ALL";
    }
  } else {
    state.raids.add(raidName);
    state.collapsedRaids.delete(raidName);
  }
}

const zoneIcons = {
  "Pre Hydross": "assets/ui-ej-boss-hydross-the-unstable.png",
  "Pre Lurker Platforms": "assets/ui-ej-boss-the-lurker-below.png",
  "Pre Leotheras": "assets/ui-ej-boss-leotheras-the-blind.png",
  "Pre Morogrim": "assets/ui-ej-boss-morogrim-tidewalker.png",
  "Entrance / Solarian path": "assets/ui-ej-boss-high-astromancer-solarian.png",
  "Al'ar room": "assets/ui-ej-boss-alar.png",
  "Void Reaver path": "assets/ui-ej-boss-void-reaver.png",
  "Kael corridor": "assets/ui-ej-boss-kaelthas-sunstrider.png",
  "Wave trash": "assets/UI-RaidTargetingIcons.png",
  "Before Naj'entus": "assets/ui-ej-boss-high-warlord-najentus.png",
  "Before Supremus": "assets/ui-ej-boss-supremus.png",
  "Akama / Sanctuary": "assets/ui-ej-boss-shade-of-akama.png",
  "Teron path": "assets/ui-ej-boss-teron-gorefiend.png",
  "Before Gurtogg": "assets/ui-ej-boss-gurtogg-bloodboil.png",
  "Reliquary approach": "assets/ui-ej-boss-reliquary-of-souls.png",
  "Before Mother Shahraz": "assets/ui-ej-boss-mother-shahraz.png",
  "Before Council": "assets/ui-ej-boss-illidari-council.png"
};

const zoneLabels = {
  en: {
    "Pre Hydross": "Hydross Path",
    "Pre Lurker Platforms": "Lurker Platforms",
    "Pre Leotheras": "Leotheras Path",
    "Pre Morogrim": "Morogrim Path",
    "Entrance / Solarian path": "Entrance / Solarian Path",
    "Al'ar room": "Al'ar Room",
    "Void Reaver path": "Void Reaver Path",
    "Kael corridor": "Kael Corridor",
    "Wave trash": "Wave Trash",
    "Before Naj'entus": "Before Naj'entus",
    "Before Supremus": "Before Supremus",
    "Akama / Sanctuary": "Akama / Sanctuary",
    "Teron path": "Teron Path",
    "Before Gurtogg": "Before Gurtogg",
    "Reliquary approach": "Reliquary Approach",
    "Before Mother Shahraz": "Before Mother Shahraz",
    "Before Council": "Before Council"
  },
  fr: {
    "Pre Hydross": "Chemin Hydross",
    "Pre Lurker Platforms": "Plateformes Lurker",
    "Pre Leotheras": "Chemin Leotheras",
    "Pre Morogrim": "Chemin Morogrim",
    "Entrance / Solarian path": "Entrée / chemin Solarian",
    "Al'ar room": "Salle Al'ar",
    "Void Reaver path": "Chemin Void Reaver",
    "Kael corridor": "Couloir Kael",
    "Wave trash": "Vagues trash",
    "Before Naj'entus": "Avant Naj'entus",
    "Before Supremus": "Avant Supremus",
    "Akama / Sanctuary": "Akama / Sanctuaire",
    "Teron path": "Chemin Teron",
    "Before Gurtogg": "Avant Gurtogg",
    "Reliquary approach": "Approche Reliquary",
    "Before Mother Shahraz": "Avant Mother Shahraz",
    "Before Council": "Avant Conseil"
  }
};

function zoneLabel(zone) {
  return zoneLabels[state.lang]?.[zone] || zoneLabels.en[zone] || zone;
}

const raidAllIcons = {
  SSC: "assets/ui-ej-boss-lady-vashj.png",
  TK: "assets/ui-ej-boss-kaelthas-sunstrider.png",
  HYJAL: "assets/UI-RaidTargetingIcons.png",
  BT: "assets/ui-ej-boss-illidan-stormrage.png",
  SUNWELL: "assets/UI-RaidTargetingIcons.png"
};

const raidCatalog = [
  { key: "SSC", label: "Serpentshrine Cavern", short: "SSC", status: "live" },
  { key: "TK", label: "Tempest Keep", short: "TK", status: "live" },
  { key: "HYJAL", label: "Mount Hyjal", short: "Hyjal", status: "live" },
  { key: "BT", label: "Black Temple", short: "BT", status: "live" },
  { key: "SUNWELL", label: "Sunwell Plateau", short: "Sunwell", status: "later" }
];

function zonesForRaid(raid) {
  const zoneMap = new Map();
  trashData
    .filter((item) => item.raid === raid)
    .forEach((item) => zoneMap.set(item.zone, (zoneMap.get(item.zone) || 0) + 1));
  return [...zoneMap.entries()];
}

function renderRaidPlates() {
  const allZones = raidCatalog.flatMap((raid) => zonesForRaid(raid.key));
  if (state.zone !== "ALL" && !allZones.some(([zone]) => zone === state.zone)) {
    state.zone = "ALL";
  }

  raidPlatesEl.innerHTML = raidCatalog.map((raidInfo) => {
    const raid = raidInfo.key;
    const active = state.raids.has(raid);
    const collapsed = state.collapsedRaids.has(raid);
    const zones = zonesForRaid(raid);
    const visibleZones = zones.length === 1 ? [] : zones;
    const zoneButtons = visibleZones.map(([zone, count]) => {
      const iconSrc = zoneIcons[zone] || "assets/UI-RaidTargetingIcons.png";
      return `<button data-zone="${escapeHtml(zone)}" class="zone-tile ${state.zone === zone ? "active" : ""}"><img class="zone-icon" src="${escapeHtml(iconSrc)}" alt=""><span class="zone-label">${escapeHtml(zoneLabel(zone))}</span><span class="zone-count">${count}</span></button>`;
    }).join("");
    const allRaidCount = trashData.filter((item) => item.raid === raid).length;
    const allRaidButton = `<button data-zone="ALL" class="zone-tile zone-tile-all ${state.zone === "ALL" ? "active" : ""}"><img class="zone-icon" src="${escapeHtml(raidAllIcons[raid])}" alt=""><span class="zone-label">${ui("allZones")}</span><span class="zone-count">${allRaidCount}</span></button>`;
    const placeholder = zones.length ? "" : `<div class="zone-placeholder">Coming later</div>`;
    return `
      <div class="raid-panel raid-panel-${raid.toLowerCase()} raid-status-${raidInfo.status} ${active ? "active" : "inactive"} ${collapsed ? "collapsed" : ""}" data-raid-panel="${raid}">
        <div class="raid-plate-wrap">
          <button class="raid-plate raid-plate-${raid.toLowerCase()} ${active ? "active" : ""}" data-raid-toggle="${raid}" type="button"><span>${escapeHtml(raidInfo.short)}</span><small>${escapeHtml(raidInfo.label)}</small></button>
          <button class="raid-collapse" data-raid-collapse="${raid}" type="button" aria-expanded="${collapsed ? "false" : "true"}" title="${collapsed ? "Open paths" : "Close paths"}">${collapsed ? "+" : "-"}</button>
        </div>
        <div class="zone-rail zone-rail-${raid.toLowerCase()}">${zones.length ? allRaidButton + zoneButtons : placeholder}</div>
      </div>
    `;
  }).join("");
}

function renderCards() {
  syncStaticText();
  const raidMode = activeRaidMode();
  document.body.classList.toggle("raid-ssc", raidMode === "SSC");
  document.body.classList.toggle("raid-tk", raidMode === "TK");
  document.body.classList.toggle("raid-all", raidMode === "ALL");
  document.body.classList.toggle("compact", state.mode === "compact" || state.mode === "ultra");
  document.body.classList.toggle("ultra", state.mode === "ultra");
  document.body.classList.toggle("audit", state.auditOnly);
  document.querySelectorAll("[data-mode]").forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === state.mode));
  document.querySelector(".danger-toggle").classList.toggle("active", state.dangerOnly);
  document.querySelector("#auditOnly").classList.toggle("active", state.auditOnly);
  renderRaidPlates();

  const items = visibleItems();
  countEl.textContent = `${items.length}/${trashData.length} mobs`;
  if (mainCountEl) mainCountEl.textContent = String(items.length);
  if (contentTitleEl) {
    const activeRaids = activeRaidList();
    const raidLabel = activeRaids.length
      ? activeRaids.map((key) => raidCatalog.find((raid) => raid.key === key)?.short || key).join(" + ")
      : "No raid selected";
    const zoneText = state.zone === "ALL" ? ui("allZones") : zoneLabel(state.zone);
    contentTitleEl.textContent = `${raidLabel} - ${zoneText}`;
  }

  if (!items.length) {
    const hasFutureRaid = activeRaidList().some((raid) => raidCatalog.find((entry) => entry.key === raid)?.status === "later");
    cardsEl.innerHTML = `<div class="empty ${hasFutureRaid ? "coming-later" : ""}">${hasFutureRaid ? "Coming later - raid placeholder ready for future trash data." : ui("empty")}</div>`;
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
          <article class="card ${item.priority} ${item.spellGroups?.length > 2 ? "card-complex" : ""} ${lineBreakMobs.has(item.originalMob || item.mob) ? "card-checklist" : ""}">
            ${trashPortrait(item)}
            <div class="card-main">
              <div class="card-head">
                <div class="mobline">
                  <div class="zone">${item.raid} - ${escapeHtml(zoneLabel(item.zone))}</div>
                  <div class="mob">${item.mob}</div>
                  <div class="action-title">${escapeHtml(actionTitle(item))}</div>
                </div>
                <div class="markers">${markerImgs(item.markers)}</div>
              </div>
              <div class="card-body">
                <div class="info-panels">
                  <section class="info-panel danger-panel">
                    <div class="panel-label">DANGER</div>
                    <div class="panel-text">${formattedCardText(item.danger, item)}</div>
                  </section>
                  <section class="info-panel call-panel">
                    <div class="panel-label">CALL</div>
                    <div class="panel-text">${formattedCardText(item.call, item)}</div>
                  </section>
                </div>
                <div class="tank-note"><span>T</span><b>${formattedCardText(item.tank, item)}</b></div>
                <div class="spell-row">${renderSpellBlock(item)}</div>
              </div>
              ${auditPanel(item)}
              <div class="tagbar">${tagPills(item.tags)}</div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
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

raidPlatesEl.addEventListener("click", (event) => {
  const collapseBtn = event.target.closest("[data-raid-collapse]");
  if (collapseBtn) {
    toggleRaidTab(collapseBtn.dataset.raidCollapse);
    save();
    renderCards();
    return;
  }
  const btn = event.target.closest("[data-zone]");
  if (btn) {
    const panel = btn.closest("[data-raid-panel]");
    if (panel) state.raids.add(panel.dataset.raidPanel);
    state.zone = btn.dataset.zone;
    save();
    renderCards();
    return;
  }
  const raidPlate = event.target.closest("[data-raid-toggle]");
  if (raidPlate) {
    toggleRaidTab(raidPlate.dataset.raidToggle);
    save();
    renderCards();
    return;
  }
  const panel = event.target.closest("[data-raid-panel]");
  if (!panel) return;
  toggleRaidTab(panel.dataset.raidPanel);
  save();
  renderCards();
});

document.addEventListener("click", (event) => {
  const raid = event.target.closest("[data-raid-toggle]");
  const mode = event.target.closest("[data-mode]");
  const langChoice = event.target.closest("[data-lang-choice]");
  let changed = false;
  if (raid && !raidPlatesEl.contains(raid)) {
    const raidName = raid.dataset.raidToggle;
    state.raids.has(raidName) ? state.raids.delete(raidName) : state.raids.add(raidName);
    changed = true;
  }
  if (mode) {
    state.mode = mode.dataset.mode;
    changed = true;
  }
  if (langChoice) {
    state.lang = langChoice.dataset.langChoice;
    changed = true;
  }
  if (event.target.closest("#dangerOnly")) {
    state.dangerOnly = !state.dangerOnly;
    changed = true;
  }
  if (event.target.closest("#auditOnly")) {
    state.auditOnly = !state.auditOnly;
    changed = true;
  }
  if (event.target.closest("#reset")) {
    state.raids = new Set(["SSC", "TK", "HYJAL", "BT"]);
    state.zone = "ALL";
    state.mode = "detailed";
    state.dangerOnly = false;
    state.auditOnly = false;
    state.tags.clear();
    state.collapsedRaids.clear();
    state.query = "";
    searchEl.value = "";
    document.body.classList.remove("fullscreen");
    changed = true;
  }
  if (event.target.closest("#fullscreen")) {
    document.body.classList.toggle("fullscreen");
    changed = true;
  }
  if (!changed) return;
  save();
  renderFilters();
  renderCards();
});

searchEl.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

zoomSelectEl.addEventListener("change", (event) => {
  state.zoom = event.target.value;
  save();
  renderCards();
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.target.matches("input, textarea, select, [contenteditable='true']")) return;
  const key = event.key.toLowerCase();
  let changed = false;
  if (key === "/") {
    event.preventDefault();
    searchEl.focus();
    return;
  }
  if (key === "1") {
    state.raids.has("SSC") ? state.raids.delete("SSC") : state.raids.add("SSC");
    changed = true;
  }
  if (key === "2") {
    state.raids.has("TK") ? state.raids.delete("TK") : state.raids.add("TK");
    changed = true;
  }
  if (key === "3") {
    state.raids = new Set(["SSC", "TK", "HYJAL", "BT"]);
    changed = true;
  }
  if (key === "4") {
    state.raids.has("HYJAL") ? state.raids.delete("HYJAL") : state.raids.add("HYJAL");
    changed = true;
  }
  if (key === "5") {
    state.raids.has("BT") ? state.raids.delete("BT") : state.raids.add("BT");
    changed = true;
  }
  if (key === "c") {
    state.mode = state.mode === "compact" ? "detailed" : "compact";
    changed = true;
  }
  if (key === "u") {
    state.mode = state.mode === "ultra" ? "detailed" : "ultra";
    changed = true;
  }
  if (key === "a") {
    state.auditOnly = !state.auditOnly;
    changed = true;
  }
  if (key === "l") {
    state.lang = state.lang === "fr" ? "en" : "fr";
    changed = true;
  }
  if (key === "r") {
    state.zone = "ALL";
    state.dangerOnly = false;
    state.auditOnly = false;
    state.tags.clear();
    state.query = "";
    searchEl.value = "";
    changed = true;
  }
  if (key === "f") {
    document.body.classList.toggle("fullscreen");
    changed = true;
  }
  if (!changed) return;
  save();
  renderFilters();
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
  const spell = event.target.closest(".spell[data-tip], .inline-spell[data-tip]");
  if (!spell) return;
  tooltip.innerHTML = `<div class="tip-title">${spell.dataset.tipTitle}</div><div class="tip-body">${spell.dataset.tip}</div>`;
  tooltip.classList.add("visible");
  moveTooltip(event);
});

document.addEventListener("mousemove", (event) => {
  if (tooltip.classList.contains("visible")) moveTooltip(event);
});

document.addEventListener("mouseout", (event) => {
  if (event.target.closest(".spell[data-tip], .inline-spell[data-tip]")) tooltip.classList.remove("visible");
});

document.addEventListener("focusin", (event) => {
  const spell = event.target.closest(".spell[data-tip], .inline-spell[data-tip]");
  if (!spell) return;
  const rect = spell.getBoundingClientRect();
  tooltip.innerHTML = `<div class="tip-title">${spell.dataset.tipTitle}</div><div class="tip-body">${spell.dataset.tip}</div>`;
  tooltip.classList.add("visible");
  moveTooltip({ clientX: rect.left + rect.width / 2, clientY: rect.bottom });
});

document.addEventListener("focusout", (event) => {
  if (event.target.closest(".spell[data-tip], .inline-spell[data-tip]")) tooltip.classList.remove("visible");
});

renderFilters();
renderCards();
