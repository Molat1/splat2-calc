// TRANSLATION INSTRUCTIONS
// * Don't translate locale variables - just their values
//// (i.e. "HAT_SLOT": "<translation here>")
// * Don't translate comments (like these)
// * Don't translate variables (double bracket words) within phrases ("{{value}} HP")
//// Move the variable to where it makes sense in the translation.
// * Try not to make things much longer than necessary
// * Use in-game terms where possible
// * "Distance Units"/"Distance Units per Frame" should always be translated the same way
//// You can call them something different, but make sure it can be abbreviated as a unit!
//// (Distance Units/frame -> DU/f)

var es_strings = {
  // Gear section
  "HAT_SLOT": "Accesorios",
  "CLOTHES_SLOT": "Ropa",
  "SHOES_SLOT": "Calzado",

  // Stats section
  "STATS_HEADER": "Estadísticas",
  "INACCURATE_DISCLAIMER": "Stat is inaccurate due to lack of data.",
  "BOMB_HEADER": "Daño por bombas",
  // Will be used in tables - keep these short
  "BOMB_TABLE_BOMB": "Tipo de bomba",
  "TABLE_DIRECT": "Directo",
  "TABLE_NEAR": "Cercano",
  "TABLE_FAR": "Lejano",
  "TABLE_HIT": "Directo",
  "SPECIAL_HEADER": "Daño por especial",
  "SPECIAL_TABLE_SPECIAL": "Especiales",

  // Footer
  "FOOTER_COPYRIGHT": "Splatoon y todos los derechos de autor / bienes relacionados utilizados en esta página son propiedad de Nintendo.",
  "FOOTER_ABOUT": "about",

  // Misc. Strings
  "UNAVAILABLE": "No disponible",
  "UNRELEASED": "No liberado",
  //// Will be used in tables - keep these short
  "KID_FORM": "Inkling",
  "SQUID_FORM": "Calamar",

  // Popup headers/buttons
  "UI_WEAPON_PICKER": "Arsenal",
  "UI_GEAR_PICKER": "Ropa",
  "UI_ABOUT": "About",
  "UI_CHANGELOG": "¿Las novedades?",
  "UI_OK": "OK",
  "UI_CANCEL": "Cancelar",
  "UI_CONFIRM_CASUAL": "Vale",

  // Tooltips for utility buttons
  "UI_COPY_LINK": "Copiar enlace",
  "UI_SCREENSHOT_MODE": "Pantalla Completa",
  "UI_CLEAR_ABILITIES": "Limpiar potenciadores",
  "UI_CLEAR_ALL": "Limpiar todo",
  // Tooltips for special icons
  "UI_NONSTANDARD_SPLATNET": "Solo disponible en SplatNet2",
  "UI_NOT_POSSIBLE": "No es posible obtenerlo con este potenciador",

  // Stats - these appear over the stat bars.
  // If there is an asterisk (*), leave it in after the stat name.
  "STAT_SWIM_SPEED": "Velocidad de buceo",
  "STAT_RUN_SPEED": "Velocidad de carrera",
  "STAT_RUN_SPEED_RESIST": "Velocidad de desplazamiento (Tinta enemiga)",
  "STAT_RUN_SPEED_FIRING": "Velocidad de desplazamiento (Disparando)",
  "STAT_RUN_SPEED_ROLLING": "Velocidad de desplazamiento (Arrastrando)",
  "STAT_RECOVERY_SQUID": "Recarga Rápida (Calamar)",
  "STAT_RECOVERY_KID": "Recarga Rápida (Inkling)",
  "STAT_SAVER_MAIN": "Tintahorro principal",
  "STAT_SAVER_SUB": "Tintahorro secundario",
  "STAT_SPECIAL_CHARGE": "Recarga especial",
  "STAT_SPECIAL_SAVER": "Reducción Especial *",
  "STAT_SPECIAL_POWER": "Superarma Especial",
  "STAT_SPECIAL_POWER_UNKNOWN": "Superarma especial (???)",
  "STAT_SPECIAL_POWER_DURATION": "Superarma especial (Duración)",
  "STAT_SPECIAL_POWER_BALLER": "Superarma especial (Vida de la esfera)",
  "STAT_SPECIAL_POWER_TENTA": "Superarma especial (Aumento de la mira)",
  "STAT_SPECIAL_POWER_SPLASHDOWN": "Superarma especial (Diámetro de Salpicadura)",
  "STAT_SPECIAL_POWER_BUBBLE": "Superarma especial (Tamaño de la Burbuja)",
  "STAT_SUB_POWER": "Superarma secundaria",
  "STAT_SUB_POWER_RANGE": "Superarma secundaria (Rango de la bomba)",
  "STAT_SUB_POWER_CURLING": "Superarma secundaria (Velocidad de la bomba)",
  "STAT_SUB_POWER_MINE": "Superarma secundaria (Radio de la bomba trampa)",
  "STAT_SUB_POWER_WALL": "Superarma secundaria (Vida del telón)",
  "STAT_SUB_POWER_SPRINKLER": "Superarma secundaria (Dura más en su primera fase)",
  "STAT_SUB_POWER_BEAKON": "Superarma secundaria (Velocidad de salto a Balizas)",
  "STAT_JUMP_SQUID": "Supersalto Rápido (Calamar)",
  "STAT_JUMP_KID": "Supersalto rápido (Inkling)",
  "STAT_QUICK_RESPAWN": "Retorno exprés",
  "STAT_QUICK_RESPAWN_PUNISHER": "Tiempo de reaparición (Castigo Póstumo) *",
  "STAT_TRACKING_TIME": "Tiempo de rastreo",

  // Labels that go on the stat bars themselves. Keep these SHORT!
  "LABEL_DISTANCE_PER_FRAME": "{{value}} DU/f",
  "LABEL_PERCENT": "{{value}}%",
  // LABEL_MAIN_COST is combined with "SHOT_UNIT" values below
  "LABEL_MAIN_COST": "{{value}}% tanque/{{unit}}",
  "LABEL_SUB_COST": "{{value}}% tanque",
  "LABEL_TIME": "{{value}}s",
  "LABEL_HP": "{{value}} HP",

  // Tooltips for stats
  "DESC_PUNISHER_DISCLAIMER": "Los efectos del Castigo Póstumo no se entienden realmente bien.",
  "DESC_TRACKING": "Duración del Rastreador y la Bomba Trampa",
  "DESC_RECOVERY_TIME": "{{value}}s para llenar el tanque",
  "DESC_MAIN_COST": "{{totalShots}} para vaciar el tanque ({{reduction}}% de reducción)",
  "DESC_SUB_COST": "{{reduction}}% de reducción",
  "DESC_SPECIAL_COST": "{{value}}p para el especial",
  "DESC_DISTANCE": "{{value}} Distance Units",
  "DESC_QUICK_RESPAWN": "Reaparición más rápida cuando te liquidan sin que tu hayas liquidado a alguien varias veces.",
  "UNIT_DISTANCE_UNITS_PER_FRAME": "Distance Units/frame",

  // The "unit" weapons fire in
  // Used in phrases like "200 shots to empty"
  "SHOT_UNIT_SHOT": "Disparo",
  "SHOT_UNIT_SHOT_PLURAL": "Disparos",
  "SHOT_UNIT_FLICK": "Barrido",
  "SHOT_UNIT_FLICK_PLURAL": "Barridos",
  "SHOT_UNIT_FLICK_HORIZ": "¡Barrido horizontal",
  "SHOT_UNIT_FLICK_HORIZ_PLURAL": "Barridos horizontales",
  "SHOT_UNIT_FLICK_VERT": "Barrido vertical",
  "SHOT_UNIT_FLICK_VERT_PLURAL": "Barridos verticales",
  "SHOT_UNIT_SLOSHER": "Cubazo",
  "SHOT_UNIT_SLOSHER_PLURAL": "Cubazos",
  "SHOT_UNIT_CHARGER": "Disparo cargado",
  "SHOT_UNIT_CHARGER_PLURAL": "Disparos cargados",

  // Future feature - ink breakdown
  //// Combined with SHOT_UNIT
  "INK_BREAKDOWN_SHOTS_AFTER_SUB": "{{unitPlural}} after sub: {{value}}",
  "INK_BREAKDOWN_TOTAL_SHOTS": "{{value}} to empty",
  "INK_BREAKDOWN_INK_PER_SHOT": "{{value}}/{{unit}}",
  "INK_BREAKDOWN_INK_PER_SECOND": "{{value}}/second",
  "INK_BREAKDOWN_RECOVERY": "Full Recovery Time",

  // Future feature - Comeback/Tenacity/
  "HEADER_WITH_ABILITY": "{{ability}} Stats",

  // Future feature - a few explanations
  "UI_DISTANCE_EXPLANATION": "Distance Units per Frame is a measurement of speed in-game.",
  "UI_DISTANCE_EQUIVALENT": "Each line in the testing area is 50 Distance Units apart.",
  "UI_FRAMES_EXPLANATION": "One second is 60 frames.",

  // Future feature - options
  "UI_OPTIONS": "Options",
  "UI_ENABLE_UNRELEASED": "Enable Unreleased Weapons",
  "UI_UNRELEASED_DISCLAIMER": "Stats for unreleased weapons may not be accurate.",
  "UI_UNRELEASED_WEAPONS": "Unreleased Weapons",
  // Future feature - gear tabs
  "UI_SPLATNET_GEAR": "SplatNet Gear",
  "UI_STANDARD_GEAR": "Standard Gear",
  "UI_UNRELEASED_GEAR": "Unreleased Gear",
  // Future feature - set saving
  "UI_LOADOUT": "Loadout",
  "UI_SAVE_LOADOUT": "Save Loadout",
  "UI_LOAD_LOADOUT": "Load Loadout",
  "UI_SAVE": "Save",
  "UI_LOAD": "Load",
  "UI_NAME": "Name",
  "UI_ENTER_NAME": "Enter a name for this loadout:",
  "UI_ERROR_NAME_TOO_LONG": "Name must be shorter than 20 characters.",
  "UI_ERROR_DUPLICATE_NAME": "You already have a loadout with this name.",
  "UI_ERROR_INVALID_NAME": "Please pick a different name.",
  "UI_DELETE_LOADOUT": "Delete Loadout",
  "UI_DELETE": "Delete",
  "UI_VERIFY": "Are you sure?",
  "UI_SAVED_LOADOUTS": "Saved Loadouts",
  "UI_DELETE_ALL": "Delete All Loadouts",

  // This goes in the "about" popup.
  /// Leave the HTML tags alone.
  "UI_ABOUT_CONTENT": `Creado principalmente con AngularJS 1.6.5 y Bootstrap 3.<br><br>
 Esta herramienta fue desarrollada utilizando información y recursos que puedes encontrar en <a href="https://twitter.com/LeanYoshi" target="_blank">Lean</a>, así como información proporcionada por varios miembros de  Inkademy y Splatoon Server Developers  en Discord.
  <br><br>¡Gracias a todos los que me prestaron su ayuda y datos!<br><br>
  Muchas de las fórmulas usadas puedes verlas en <a href="https://splatoonwiki.org/wiki/User:Heddy/Charts" target="_blank">Heddy's charts</a> on Inkipedia.<br><br>
  Any feature suggestions, bug reports, and feedback can be left as issues on the project's <a href="https://github.com/DeviPotato/splat2-calc" target="_blank">GitHub</a>. <br>
  You can also reach me on the project's <a href="https://twitter.com/loadout_ink" target="_blank">twitter</a>.`
}
