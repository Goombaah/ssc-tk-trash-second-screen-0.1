const icon = (name) => `assets/${name}.jpg`;
const markerTitle = {
  skull: "Crâne",
  cross: "Croix",
  moon: "Lune",
  triangle: "Triangle",
  star: "Étoile",
  square: "Carré"
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
  tank: "⚠️ Danger tank",
  ranged: "🏹 Danger distance",
  stun: "Stun",
  purge: "Purge",
  dispel: "Dispel",
  banish: "Banish",
  tranq: "Tranq"
};

const spellDescriptions = {
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
};

const trashData = [
  {
    raid: "SSC", zone: "Pre Hydross", mob: "Coilfang Beast-Tamer", priority: "orange",
    markers: ["skull"], tags: ["focus", "cleave", "tank"],
    danger: "Bestial Wrath booste le Beast-Tamer et les Sporebats; Cleave frontal.",
    call: "FOCUS Beast-Tamer; le tourner dos raid.",
    tank: "MT sur Beast-Tamer, dos au raid. Le tomber vite pendant Bestial Wrath.",
    spells: [["Cleave", icon("ability_warrior_cleave")], ["Bestial Wrath", icon("ability_druid_supriseattack")]]
  },
  {
    raid: "SSC", zone: "Pre Hydross", mob: "Coilfang Hate-Screamer", priority: "red",
    markers: ["skull", "cross"], tags: ["focus", "los", "aoe", "ranged"],
    danger: "Silence AoE 5 sec; Sonic Scream met une pression Arcanes proche.",
    call: "FOCUS / LOS Hate-Screamer.",
    tank: "Sortir le pack de l'open field si les casters doivent jouer LOS.",
    spells: [["Silence", icon("spell_shadow_impphaseshift")], ["Sonic Scream", icon("ability_hunter_pet_windserpent")]]
  },
  {
    raid: "SSC", zone: "Pre Hydross", mob: "Serpentshrine Sporebat", priority: "yellow",
    markers: ["triangle"], tags: ["stun", "aoe", "ranged"],
    danger: "Charge stun une cible; Spore Burst fait AoE nature + DoT proche.",
    call: "Contrôle du stack; tuer avant Beast-Tamer si les Charges mettent le chaos.",
    tank: "OTs ramassent vite les Sporebats; éviter les Charges libres sur les heals.",
    spells: [["Charge", icon("ability_warrior_charge")], ["Spore Burst", icon("spell_nature_abolishmagic")]]
  },
  {
    raid: "SSC", zone: "Pre Hydross", mob: "Underbog Colossus", priority: "orange",
    markers: ["skull"], tags: ["focus", "aoe", "tank", "dispel"],
    danger: "Sets fixes: Acid Geyser/Parasite, Atrophic Blow/Frenzy ou Spore Quake/Initial Infection; effet à la mort variable.",
    call: "Identifier la variante; sortir de Spore Quake; cleanse maladie.",
    tank: "Tank stable sur Enrage/Frenzy; OTs prêts pour les Ragers à la mort.",
    spells: [["Spore Quake", icon("spell_nature_earthquake")], ["Initial Infection", icon("spell_nature_nullifydisease")], ["Acid Geyser", icon("spell_nature_abolishmagic")]]
  },
  {
    raid: "SSC", zone: "Pre Lurker Platforms", mob: "Vashj'ir Honor Guard", priority: "orange",
    markers: ["skull"], tags: ["fear", "cleave", "tank"],
    danger: "Frightening Shout fear la mêlée; Mortal Cleave applique Mortal Strike; knockback tank.",
    call: "Anti-fear; face loin du raid.",
    tank: "Dos au mur si possible; Mortal Cleave loin du raid.",
    spells: [["Frightening Shout", icon("spell_shadow_possession")], ["Mortal Cleave", icon("ability_warrior_cleave")], ["Frenzy", icon("ability_warrior_savageblow")]]
  },
  {
    raid: "SSC", zone: "Pre Lurker Platforms", mob: "Coilfang Priestess", priority: "orange",
    markers: ["moon"], tags: ["sheep", "kick", "aoe", "dispel"],
    danger: "Holy Fire DoT; à la mort, Priestess Spirit spam Holy Nova et heal les ennemis proches.",
    call: "CC/KILL Priestess; bouger de la Nova du Spirit.",
    tank: "Garder le pack groupé pour AoE, mais prévoir le Spirit après la mort.",
    spells: [["Holy Fire", icon("spell_holy_searinglight")], ["Holy Nova", icon("spell_holy_holynova")], ["Holy Smite", icon("spell_holy_holysmite")]]
  },
  {
    raid: "SSC", zone: "Pre Lurker Platforms", mob: "Coilfang Shatterer", priority: "yellow",
    markers: ["cross"], tags: ["tank"],
    danger: "Shatter Armor réduit l'armure de 50% pendant 15 sec.",
    call: "Surveiller tank après Shatter Armor.",
    tank: "Gros heals si Shatter Armor passe; Spell Reflect mentionné en commentaire, à confirmer.",
    spells: [["Shatter Armor", icon("ability_warrior_savageblow")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Greyheart Tidecaller", priority: "red",
    markers: ["skull"], tags: ["focus", "purge", "dispel", "aoe"],
    danger: "Water Elemental Totem invoque un gros élémentaire; Poison Shield fait mal au raid si non purgé.",
    call: "KILL Tidecaller; swap Water Totem instant; purge Poison Shield.",
    tank: "Tenir le pack pendant que le raid swap totems. Ignorer l'élémentaire selon Wowhead.",
    spells: [["Water Elemental Totem", icon("spell_frost_glacier")], ["Poison Shield", icon("spell_nature_abolishmagic")], ["Virulent Poison", icon("spell_nature_nullifydisease")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Greyheart Nether-Mage", priority: "red",
    markers: ["moon"], tags: ["sheep", "focus", "aoe", "ranged", "dispel"],
    danger: "Caster très dangereux: silence Arcane Lightning, Rain of Fire, Arcane Volley, Cone of Cold, buffs Destruction.",
    call: "SHEEP Nether-Mage ou tuer en premier; dispel/spellsteal buffs.",
    tank: "Si actif, face loin du raid pour Cone of Cold et sortir de Rain of Fire.",
    spells: [["Arcane Lightning", icon("spell_nature_lightning")], ["Rain of Fire", icon("spell_shadow_rainoffire")], ["Fireball", icon("spell_fire_flamebolt")], ["Frostbolt", icon("spell_frost_frostbolt02")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Greyheart Skulker", priority: "yellow",
    markers: ["cross"], tags: ["focus", "kick"],
    danger: "Kick interrompt les casts en mêlée.",
    call: "Tuer après Tidecaller / contrôle Nether-Mage.",
    tank: "Le garder loin des heals/casters si possible.",
    spells: [["Kick", icon("ability_warrior_disarm")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Greyheart Shield-Bearer", priority: "orange",
    markers: ["square"], tags: ["tank", "ranged", "stun"],
    danger: "Shield Charge = gros dégâts + knockback; Avenger's Shield touche/daze 3 cibles.",
    call: "STACK derrière Shield-Bearer pour empêcher la charge.",
    tank: "Face au mur; raid stack derrière.",
    spells: [["Shield Charge", icon("ability_warrior_charge")], ["Avenger's Shield", icon("spell_holy_holybolt")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Serpentshrine Lurker", priority: "orange",
    markers: ["triangle"], tags: ["banish", "aoe", "ranged"],
    danger: "Poison Bolt Volley + champignons/Spore Cloud créent des zones de dégâts raid.",
    call: "BANISH Lurker; garder pour la fin.",
    tank: "Ne pas le gérer avec d'autres mobs actifs; bouger des champignons.",
    spells: [["Poison Bolt Volley", icon("spell_nature_nullifydisease")], ["Rancid Mushroom", icon("spell_nature_abolishmagic")], ["Shadow Bolt", icon("spell_shadow_shadowbolt")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Coilfang Fathom-Witch", priority: "red",
    markers: ["skull"], tags: ["focus", "mc", "aoe", "tank"],
    danger: "Domination MC un joueur; Shadow Nova peut envoyer le raid dans l'eau à piranhas.",
    call: "FOCUS Fathom-Witch; Glèbe/CC le Mind Control.",
    tank: "Placement loin des bords/eau avant Shadow Nova.",
    spells: [["Domination", icon("spell_shadow_shadowworddominate")], ["Shadow Nova", icon("spell_shadow_shadowfury")], ["Shadow Bolt", icon("spell_shadow_shadowbolt")]]
  },
  {
    raid: "SSC", zone: "Pre Leotheras", mob: "Coilfang Serpentguard", priority: "yellow",
    markers: ["cross"], tags: ["tank", "dispel"],
    danger: "Spell Reflection renvoie les sorts; Corrupt Devotion Aura réduit l'armure proche.",
    call: "Stop casts dans Spell Reflection.",
    tank: "Tanker après les Fathom-Witches; attention range aura armure.",
    spells: [["Spell Reflection", icon("ability_warrior_decisivestrike")], ["Corrupt Devotion Aura", icon("spell_shadow_possession")]]
  },
  {
    raid: "SSC", zone: "Pre Morogrim", mob: "Tidewalker Warrior", priority: "yellow",
    markers: ["triangle"], tags: ["tranq", "tank"],
    danger: "Enrage augmente la vitesse d'attaque de 150%; dispel au Tranq Shot.",
    call: "Tranq Enrage.",
    tank: "Prévoir Bloodthirst/Uppercut et petit knockback.",
    spells: [["Enrage", icon("ability_warrior_savageblow")], ["Bloodthirst", icon("ability_warrior_punishingblow")], ["Uppercut", icon("ability_warrior_charge")]]
  },
  {
    raid: "SSC", zone: "Pre Morogrim", mob: "Tidewalker Hydromancer", priority: "orange",
    markers: ["cross"], tags: ["kick", "focus", "aoe"],
    danger: "Frostbolt interruptible; Frost Nova root les joueurs proches.",
    call: "KICK Frostbolt; tuer caster.",
    tank: "Garder les murlocs packés pour AoE pendant que les kicks couvrent Hydromancer.",
    spells: [["Frostbolt", icon("spell_frost_frostbolt02")], ["Frost Nova", icon("spell_frost_frostnova")], ["Frost Shock", icon("spell_frost_glacier")]]
  },
  {
    raid: "SSC", zone: "Pre Morogrim", mob: "Tidewalker Depth-Seer", priority: "red",
    markers: ["skull"], tags: ["kick", "focus"],
    danger: "Healing Touch heal un autre murloc et se kick; Rejuvenation HoT.",
    call: "FOCUS / KICK healer.",
    tank: "Tenir le pack pendant que les kicks stoppent Healing Touch.",
    spells: [["Healing Touch", icon("spell_nature_healingtouch")], ["Rejuvenation", icon("spell_nature_rejuvenation")]]
  },
  {
    raid: "SSC", zone: "Pre Morogrim", mob: "Tidewalker Shaman", priority: "orange",
    markers: ["moon"], tags: ["kick", "ranged", "purge"],
    danger: "Chain Lightning punit les joueurs stackés; Lightning Bolt kickable; Lightning Shield punit les auto-attaques.",
    call: "KICK Shaman; s'écarter pour Chain Lightning; purge/attention shield.",
    tank: "Pack pour AoE seulement si Chain Lightning est sous contrôle.",
    spells: [["Chain Lightning", icon("spell_nature_chainlightning")], ["Lightning Bolt", icon("spell_nature_lightning")], ["Lightning Shield", icon("spell_nature_lightning")]]
  },
  {
    raid: "TK", zone: "Entrance / Void Reaver path", mob: "Astromancer", priority: "red",
    markers: ["skull"], tags: ["focus", "aoe", "purge", "ranged"],
    danger: "Molten Armor punit les attaquants et se purge; Blast Wave AoE slow; Fireball Volley dégâts raid.",
    call: "KILL Astromancer en premier; purge Molten Armor.",
    tank: "Tenir loin des casters libres; prévoir dégâts AoE.",
    spells: [["Molten Armor", icon("spell_fire_fireball02")], ["Blast Wave", icon("spell_fire_selfdestruct")], ["Fireball Volley", icon("spell_fire_flamebolt")]]
  },
  {
    raid: "TK", zone: "Entrance / Void Reaver path", mob: "Star Scryer", priority: "red",
    markers: ["cross"], tags: ["focus", "mc", "aoe", "tank"],
    danger: "Domination MC un joueur; Arcane Blast knockback; Starfall dégâts Arcanes proches.",
    call: "KILL Star Scryer en deuxième; CC MC instant.",
    tank: "Dos au mur pour Arcane Blast.",
    spells: [["Domination", icon("spell_shadow_shadowworddominate")], ["Arcane Blast", icon("spell_arcane_blast")], ["Starfall", icon("spell_arcane_starfire")]]
  },
  {
    raid: "TK", zone: "Entrance / Void Reaver path", mob: "Bloodwarder Marshal", priority: "orange",
    markers: ["skull"], tags: ["cleave", "tank", "aoe"],
    danger: "Whirlwind dégâts proches; Uppercut knockback tank; patrouille avec Squires.",
    call: "Tank Marshal au mur; interrupt heals des Squires.",
    tank: "Marshal face au mur pour que Uppercut ne te replace pas.",
    spells: [["Whirlwind", icon("ability_warrior_cleave")], ["Bloodthirst", icon("ability_warrior_punishingblow")], ["Uppercut", icon("ability_warrior_charge")]]
  },
  {
    raid: "TK", zone: "Al'ar room", mob: "Phoenix-Hawk Hatchling", priority: "orange",
    markers: ["triangle"], tags: ["los", "aoe", "tank", "ranged"],
    danger: "Silence AoE 6 sec; Wing Buffet knockback les joueurs proches.",
    call: "Tirer couloir; tank au coin; casters en arrière.",
    tank: "Tanker dans le coin du couloir avant la salle d'Al'ar.",
    spells: [["Silence", icon("spell_shadow_impphaseshift")], ["Wing Buffet", icon("ability_hunter_pet_windserpent")]]
  },
  {
    raid: "TK", zone: "Al'ar room", mob: "Phoenix-Hawk", priority: "yellow",
    markers: ["square"], tags: ["ranged", "aoe"],
    danger: "Dive vise un joueur éloigné et knockback autour; Mana Burn AoE autour du Phoenix-Hawk.",
    call: "Stack pour contrôler Dive; pull seulement 1-2.",
    tank: "Stack propre; prévenir les joueurs mana pour Mana Burn.",
    spells: [["Dive", icon("ability_warrior_charge")], ["Mana Burn", icon("spell_shadow_shadowworddominate")]]
  },
  {
    raid: "TK", zone: "Void Reaver path", mob: "Crystalcore Devastator", priority: "orange",
    markers: ["skull"], tags: ["tank", "ranged", "los"],
    danger: "Countercharge ajoute dégâts Arcanes mêlée et silence proche; Knock Away reset menace.",
    call: "Max range; mêlées derrière; taunt après Knock Away.",
    tank: "Face dans un coin et prêt à retaunt après reset menace.",
    spells: [["Countercharge", icon("spell_arcane_blast")], ["Knock Away", icon("ability_warrior_charge")]]
  },
  {
    raid: "TK", zone: "Void Reaver path", mob: "Crystalcore Sentinel", priority: "red",
    markers: ["skull"], tags: ["focus", "tank", "aoe", "ranged"],
    danger: "Overcharge énorme burst Arcanes sur tank haut en menace; Trample/Explosion font mal mêlée.",
    call: "Tank swap / hard heal Overcharge.",
    tank: "Deuxième tank prêt à taunt après Overcharge; heals commit fort.",
    spells: [["Overcharge", icon("spell_arcane_blast")], ["Trample", icon("ability_warrior_charge")], ["Charged Arcane Explosion", icon("spell_arcane_starfire")]]
  },
  {
    raid: "TK", zone: "Void Reaver path", mob: "Crystalcore Mechanic", priority: "yellow",
    markers: ["moon"], tags: ["banish", "ranged"],
    danger: "Recharge canalise un heal sur golem proche; Saw Blade bleed sur joueurs aléatoires.",
    call: "BANISH Mechanic; tuer en dernier.",
    tank: "Ne pas laisser Recharge freecast si actif; tuer après golems.",
    spells: [["Recharge", icon("inv_gizmo_02")], ["Saw Blade", icon("inv_gizmo_03")]]
  },
  {
    raid: "TK", zone: "Void Reaver path", mob: "Tempest-Smith", priority: "orange",
    markers: ["moon"], tags: ["mc", "stun", "aoe"],
    danger: "Power Up augmente les dégâts golems proches de 50%; Golem Repair heal; MC possible par prêtre.",
    call: "PRÊTRE MC Smith jusqu'à la mort des golems.",
    tank: "Si pas MC, stopper Power Up / Repair; interrupts à confirmer.",
    spells: [["Power Up", icon("inv_gizmo_02")], ["Golem Repair", icon("spell_nature_healingtouch")], ["Shell Shock", icon("inv_misc_bomb_05")]]
  },
  {
    raid: "TK", zone: "Kael corridor", mob: "Crimson Hand Blood Knight", priority: "yellow",
    markers: ["cross"], tags: ["dispel", "purge"],
    danger: "Flash of Light non interruptible; Hammer of Justice dispellable; Renew purgeable.",
    call: "Dispel HoJ; purge Renew; burst à travers Flash.",
    tank: "Tenir dans le pack AoE; heals dispel les stuns.",
    spells: [["Flash of Light", icon("spell_holy_holybolt")], ["Hammer of Justice", icon("spell_holy_searinglight")], ["Renew", icon("spell_nature_rejuvenation")]]
  },
  {
    raid: "TK", zone: "Kael corridor", mob: "Crimson Hand Battle Mage", priority: "orange",
    markers: ["moon"], tags: ["sheep", "aoe", "tank", "ranged"],
    danger: "Blizzard et Frostbolt Volley font mal au raid; Cone of Cold frontal slow. Non interruptible, mais Poly/Gouge stop les casts.",
    call: "SHEEP/Gouge Battle Mage si l'AoE pique; sortir de Blizzard.",
    tank: "Face au mur pour Cone of Cold.",
    spells: [["Blizzard", icon("spell_frost_glacier")], ["Cone of Cold", icon("spell_frost_frostnova")], ["Frostbolt Volley", icon("spell_frost_frostbolt02")]]
  },
  {
    raid: "TK", zone: "Kael corridor", mob: "Crimson Hand Centurion", priority: "orange",
    markers: ["skull"], tags: ["focus", "ranged"],
    danger: "Arcane Flurry met un énorme burst sur cible aléatoire.",
    call: "Surveiller burst aléatoire; CC si besoin.",
    tank: "Garder dans le pack AoE face mur avec Battle Mage/Blood Knight.",
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
    `<button data-zone="ALL" class="${state.zone === "ALL" ? "active" : ""}">Toutes zones <span class="zone-count">${trashData.filter((item) => state.raid === "ALL" || item.raid === state.raid).length}</span></button>`,
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
    cardsEl.innerHTML = `<div class="empty">Aucune carte visible. Reset filtres ou change la recherche.</div>`;
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
              <div class="row call-row"><div class="label">Call</div><div class="value call">${item.call}</div></div>
              <div class="row detail-row"><div class="label">Tank</div><div class="value">${item.tank}</div></div>
              <div class="row spells-row"><div class="label">Sorts</div><div class="spells">${spellPills(item.spells)}</div></div>
            </div>
            <div class="tagbar">${tagPills(item.tags)} <button class="mini-copy" data-single="${escapeHtml(item.call)}">Copier</button></div>
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
