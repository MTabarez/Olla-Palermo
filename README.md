# Red Palermo — Sitio web institucional

Sitio web estático de organización comunitaria para el barrio Palermo, Montevideo, Uruguay.

## Publicar en GitHub Pages (`usuario.github.io`)

El proyecto ya incluye el flujo automático de despliegue en `.github/workflows/deploy-pages.yml` y la configuración de rutas compatibles con GitHub Pages.

### 1. Subir el código a GitHub (rama `main`)

Creá un repositorio nuevo en GitHub (por ejemplo `red-palermo`) y ejecutá en la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Sitio inicial Red Palermo"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/red-palermo.git
git push -u origin main
```

### 2. Activar GitHub Pages con GitHub Actions

1. Entrá a tu repositorio en GitHub → **Settings** → **Pages**.
2. En **Build and deployment → Source**, elegí **GitHub Actions**.
3. Guardá los cambios. En la pestaña **Actions** vas a ver ejecutarse el workflow **Deploy Red Palermo to GitHub Pages**.
4. Al finalizar (1–2 minutos), el sitio quedará publicado con HTTPS en:
   `https://TU_USUARIO.github.io/red-palermo/`

Cada vez que hagas un nuevo `git push` a `main`, el sitio se actualizará automáticamente.

---

## Cómo actualizar textos e Instagram

Todo el contenido editable está centralizado en `src/data/siteContent.ts`:

- **Nombre de la organización y contacto**: bloque `brand`.
- **Últimas novedades (embed oficial de Instagram)**: dentro de `news.instagram`, completá `handle`, `profileUrl` y pegá hasta 4 enlaces públicos de publicaciones o reels en `postUrls`:
  ```ts
  instagram: {
    handle: '@tu_usuario_real',
    profileUrl: 'https://www.instagram.com/tu_usuario_real/',
    postUrls: [
      'https://www.instagram.com/p/CODIGO_1/',
      'https://www.instagram.com/reel/CODIGO_2/',
    ],
  }
  ```

## Desarrollo local

```bash
npm install
npm run dev
```

Para ejecutar pruebas unitarias y validar antes de publicar:

```bash
npm run lint
npx tsx --test src/utils/communityLogic.test.ts
npm run build
```
