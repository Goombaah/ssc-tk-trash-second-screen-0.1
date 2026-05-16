# SSC TK Trash Second Screen

Outil HTML hors ligne pour afficher les priorites trash SSC/TK pendant un raid.

## Utilisation

Ouvre `index.html` dans un navigateur. La page redirige vers l'outil principal:

```text
SSC_TK_TRASH_SECOND_SCREEN.html
```

L'outil fonctionne sans serveur et charge ses fichiers depuis:

- `css/ssc-tk-trash.css`
- `js/ssc-tk-trash.js`
- `assets/`

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
