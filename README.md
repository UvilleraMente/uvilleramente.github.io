# uvilleramente.github.io

Personal site of **Andrésnael Acevedo De La Cruz** ([@UvilleraMente](https://github.com/UvilleraMente)), served at <https://uvilleramente.github.io/>.

It is plain HTML, CSS and a little vanilla JavaScript. There is no build step, no framework and no external script.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page. English text is hard-coded here as the no-JS fallback. |
| `styles.css` | All styles. Colors are CSS custom properties on `:root`, redefined for dark mode. |
| `main.js` | The `SITE` config (personal links, screenshots), the EN/ES dictionary, and the theme and language toggles. |
| `404.html` | Not-found page. It uses absolute paths (`/styles.css`) because GitHub Pages serves it at any depth. |
| `favicon.svg` | Icon. |
| `assets/` | Images: `json-surgeon.jpg` (1440×900), `json-surgeon-800.jpg`, `og.png` (1200×630 social preview). |
| `robots.txt`, `sitemap.xml` | SEO. Update `<lastmod>` in the sitemap when the content changes. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are, without Jekyll. |

## Editing content

### Personal links (email, LinkedIn, CV)

Open `main.js` and fill in the `SITE` object at the top. Each field marked `TODO` is hidden on the page while it is empty:

```js
var SITE = {
  links: {
    email: '',      // 'you@example.com'
    linkedin: '',   // 'https://www.linkedin.com/in/your-handle/'
    cv: '',         // 'assets/cv.pdf'
    cipherNpm: 'https://www.npmjs.com/package/cipher-surgeon' // '' hides the npm button
  },
  screenshots: { cipherSurgeon: '' }
};
```

### Cipher Surgeon screenshot

The Cipher Surgeon card shows a CSS illustration until a screenshot exists. To use a real one:

1. Save it as `assets/cipher-surgeon.png`. A 16:10 image works best, for example 1440×900.
2. In `main.js`, set `screenshots.cipherSurgeon: 'assets/cipher-surgeon.png'`.

If the file can't be loaded, the illustration stays. When Cipher Surgeon goes live, also change its badge in `index.html` from `badge--wip` / `status.building` to `badge--live` / `status.live`.

### Text and translations

Every translatable element has a `data-i18n="key"` attribute, and attributes use `data-i18n-attr="aria-label:key"`. The strings live in the `I18N` object in `main.js`, under `en` and `es`.

To change some text, edit it in both `I18N.en` and `I18N.es`, and also in `index.html` so the no-JS fallback matches. To add text, give the element a new key and add that key to both languages.

The language comes from `?lang=en|es` first, then the saved choice, then `navigator.language`. The theme follows `prefers-color-scheme` until the toggle is used. Both choices are saved in `localStorage`, and the page still works when storage is blocked.

## Preview locally

Any static server works:

```bash
npx serve .            # or: python -m http.server 8000
```

## Deploy

1. Create the repository `UvilleraMente/uvilleramente.github.io` on GitHub. The name must match exactly for a user site.
2. Push this folder:
   ```bash
   git remote add origin https://github.com/UvilleraMente/uvilleramente.github.io.git
   git push -u origin main
   ```
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, then choose branch **`main`** and folder **`/ (root)`**, and save.
4. After a minute or so the site is live at <https://uvilleramente.github.io/>.

Project sites such as `/json-surgeon/` and `/cipher-surgeon/` are served from their own repositories under the same domain, so they are unaffected.
