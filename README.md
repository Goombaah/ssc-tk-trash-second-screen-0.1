# SSC TK Trash Second Screen

Outil HTML hors ligne pour afficher les priorites trash SSC/TK pendant un raid.

L'outil est bilingue EN/FR. Utilise le bouton `FR` / `EN` dans la barre du haut, ou la touche `L`, pour changer de langue.

## Utilisation

Ouvre `index.html` dans un navigateur. La page redirige vers l'outil principal:

```text
SSC_TK_TRASH_SECOND_SCREEN.html
```

L'outil fonctionne sans serveur et charge ses fichiers depuis:

- `css/ssc-tk-trash.css`
- `js/ssc-tk-trash.js`
- `assets/`

## Sources

- SSC: https://www.wowhead.com/tbc/fr/guide/trash-mobs-serpentshrine-cavern-ssc-strategy-burning-crusade-classic
- TK: https://www.wowhead.com/tbc/fr/guide/trash-mobs-the-eye-tempest-keep-strategy-burning-crusade-classic

## Version Netlify en un seul fichier

Pour regenerer la version autonome:

```bash
node build-standalone.js
```

Le fichier genere est:

```text
netlify_single_file/index.html
```

Les archives `.zip` sont ignorees par Git, car elles peuvent etre regenerees depuis les fichiers source.
