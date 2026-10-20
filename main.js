/* uvilleramente.github.io — theme, language and small enhancements. No dependencies. */
(function () {
  'use strict';

  /* ==========================================================================
     SITE CONFIG — the only place the owner needs to edit personal details.
     Empty string = the link stays hidden on the page.
     ========================================================================== */
  var SITE = {
    links: {
      email: '',      // TODO: your public email, e.g. 'you@example.com' (shown as a mailto: link)
      linkedin: '',   // TODO: full LinkedIn profile URL, e.g. 'https://www.linkedin.com/in/your-handle/'
      cv: '',         // TODO: CV URL or file path, e.g. 'assets/cv.pdf' (add the file to /assets)
      cipherNpm: 'https://www.npmjs.com/package/cipher-surgeon' // TODO: set to '' if cipher-surgeon is not on npm yet
    },
    screenshots: {
      // TODO: when the screenshot exists, save it as assets/cipher-surgeon.png (16:10 works best) and set:
      // cipherSurgeon: 'assets/cipher-surgeon.png'
      cipherSurgeon: ''
    }
  };

  /* ==========================================================================
     STRINGS — English is also hard-coded in the HTML as the no-JS fallback.
     ========================================================================== */
  var I18N = {
    en: {
      'meta.title': 'Andrésnael Acevedo De La Cruz · Developer tools',
      'meta.description': 'Andrésnael Acevedo De La Cruz (UvilleraMente) is a developer from the Dominican Republic working across C#/.NET, Angular and Flutter, building browser-first developer tools like JSON Surgeon and Cipher Surgeon.',
      'skip': 'Skip to content',
      'nav.tools': 'Tools',
      'nav.projects': 'Projects',
      'nav.stack': 'Stack',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'lang.switch': 'Cambiar a español',
      'lang.target': 'ES',
      'theme.toggle': 'Toggle dark theme',
      'hero.pitch': 'I build developer tools that fix things precisely and tell you exactly what they changed.',
      'hero.location': 'Dominican Republic',
      'hero.cta': 'See the tools',
      'hero.cv': 'Download CV',
      'tray.label': 'Instrument tray',
      'tray.title': 'Instrument tray',
      'tray.json': 'repair · explain · type',
      'tray.cipher': 'decode · verify · peel',
      'tray.firmalisto': 'fill · preview · sign',
      'tray.jobot': 'scan · score · draft',
      'tools.title': 'Featured tools',
      'tools.lede': 'Two sibling tools with the same rules: everything runs in your browser, nothing is uploaded, and every change is explained.',
      'status.live': 'Live',
      'status.building': 'In development',
      'status.prelaunch': 'Pre-launch',
      'status.private': 'Private / local tool',
      'json.alt': 'JSON Surgeon repairing an LLM response: the input with every fix highlighted, the list of fixes, and the repaired JSON.',
      'json.tagline': 'Paste broken JSON and get valid JSON back, with an explanation for every fix.',
      'json.f1': 'Repairs LLM output: Markdown fences, chatter, truncated responses, Python and JavaScript literals.',
      'json.f2': 'Every fix is reported with its line and column in your original input.',
      'json.f3': 'Generates TypeScript interfaces, C# records, Dart classes and JSON Schema.',
      'json.f4': 'Zero-dependency npm library and CLI that share the same engine.',
      'tags.label': 'Technologies',
      'tag.zerodeps': 'Zero deps',
      'copy.label': 'Copy install command',
      'copy.text': 'Copy',
      'copy.done': 'Copied',
      'btn.demo': 'Live demo',
      'btn.source': 'Source',
      'cipher.mockAlt': 'Illustration: a JWT split into header, payload and signature, with security findings listed below.',
      'cipher.screenshotAlt': 'Cipher Surgeon decoding a JWT, explaining its claims and flagging security issues.',
      'cipher.m1': 'unsigned token',
      'cipher.m2': 'expired',
      'cipher.m3': 'weak HMAC secret',
      'cipher.soon': 'Screenshot coming soon',
      'cipher.tagline': 'Decode, verify and sign JWTs in your browser, with every claim explained and every security issue flagged.',
      'cipher.f1': 'JWT decoder, verifier and signer that flags alg none, expired tokens and weak HMAC secrets.',
      'cipher.f2': 'AES-256-GCM password-based encryption and decryption, plus hashes and HMAC.',
      'cipher.f3': '“Peel the layers”: automatically unwraps base64, base64url, hex, URL encoding, JWT and JSON.',
      'cipher.f4': 'Zero dependencies, built on Web Crypto. Also an npm library and CLI.',
      'projects.title': 'Other projects',
      'projects.lede': 'Small products, each built to do one job well.',
      'fl.desc': 'A generator of legal and employment documents by country (contracts, letters, promissory notes) for Spanish-speaking users. You fill in a form, watch a live preview, and download a PDF generated in the browser.',
      'fl.f1': 'A static SEO page for every document × country combination, with FAQ structured data.',
      'fl.f2': 'PDF and Word export; drafts saved locally in the browser.',
      'fl.f3': 'One-time payments through Polar, with no database.',
      'jb.desc': 'A personal job-search assistant that runs entirely on my PC. It collects remote software jobs from public boards, filters them, scores them with a local LLM through Ollama, and drafts a cover letter for each good match.',
      'jb.f1': 'Local AI (Ollama + Qwen3): free, and nothing leaves the machine.',
      'jb.f2': 'Pre-fills application forms, but a human always reviews and presses Submit.',
      'jb.f3': 'Never automates LinkedIn; a small Flask panel tracks applications and interviews.',
      'jb.note': 'No public repository.',
      'stack.title': 'Skills & stack',
      'stack.lede': 'What I work with day to day, and what these projects are built on.',
      'stack.backend': 'Backend',
      'stack.frontend': 'Web front end',
      'stack.mobile': 'Mobile',
      'stack.platform': 'Browser platform',
      'stack.tooling': 'Tooling & delivery',
      'stack.ai': 'AI integration',
      'stack.llm': 'Local LLMs',
      'stack.llmjson': 'LLM output handling',
      'about.title': 'About',
      'about.p1': 'I\'m a developer from the Dominican Republic, working across C#/.NET, Angular and Flutter. The same small jobs kept coming up in that work: JSON that almost parses, and typing the matching model by hand in three languages.',
      'about.p2': 'Most repair tools fix things silently. I wanted tools that show what they changed and why, because a silent fix can hide a real bug, like a truncated payload. That idea became JSON Surgeon, and now Cipher Surgeon. Alongside them I build small products, like Firmalisto, aimed at one specific problem.',
      'pr.1': 'Every change is reported, never silent.',
      'pr.2': 'Runs in the browser; your data stays with you.',
      'pr.3': 'Zero runtime dependencies where it counts.',
      'pr.4': 'A framework-free, tested core with a thin UI on top.',
      'contact.title': 'Contact',
      'contact.lede': 'Found a bug in one of the tools, or want to talk about a project? Reach me here.',
      'contact.cv': 'Download CV',
      'contact.issues': 'Report a JSON Surgeon bug',
      'footer.built': 'Hand-written HTML, CSS and a little JavaScript. No trackers.',
      'lost.title': 'Nothing to operate on here',
      'lost.text': 'The page you were looking for doesn\'t exist, or it moved. The tools are still where they were.',
      'lost.home': 'Back to the home page',
      'lost.meta': 'Page not found · UvilleraMente'
    },
    es: {
      'meta.title': 'Andrésnael Acevedo De La Cruz · Herramientas para desarrolladores',
      'meta.description': 'Andrésnael Acevedo De La Cruz (UvilleraMente) es un desarrollador de República Dominicana que trabaja con C#/.NET, Angular y Flutter y crea herramientas para desarrolladores que corren en el navegador, como JSON Surgeon y Cipher Surgeon.',
      'skip': 'Saltar al contenido',
      'nav.tools': 'Herramientas',
      'nav.projects': 'Proyectos',
      'nav.stack': 'Stack',
      'nav.about': 'Sobre mí',
      'nav.contact': 'Contacto',
      'lang.switch': 'Switch to English',
      'lang.target': 'EN',
      'theme.toggle': 'Cambiar tema oscuro',
      'hero.pitch': 'Creo herramientas para desarrolladores que arreglan las cosas con precisión y te dicen exactamente qué cambiaron.',
      'hero.location': 'República Dominicana',
      'hero.cta': 'Ver las herramientas',
      'hero.cv': 'Descargar CV',
      'tray.label': 'Bandeja de instrumentos',
      'tray.title': 'Bandeja de instrumentos',
      'tray.json': 'reparar · explicar · tipar',
      'tray.cipher': 'decodificar · verificar · pelar',
      'tray.firmalisto': 'llenar · previsualizar · firmar',
      'tray.jobot': 'buscar · calificar · redactar',
      'tools.title': 'Herramientas destacadas',
      'tools.lede': 'Dos herramientas hermanas con las mismas reglas: todo corre en tu navegador, no se sube nada y cada cambio viene explicado.',
      'status.live': 'En línea',
      'status.building': 'En desarrollo',
      'status.prelaunch': 'Antes del lanzamiento',
      'status.private': 'Herramienta privada / local',
      'json.alt': 'JSON Surgeon reparando una respuesta de un LLM: la entrada con cada arreglo resaltado, la lista de arreglos y el JSON reparado.',
      'json.tagline': 'Pega un JSON roto y recibe un JSON válido, con una explicación de cada arreglo.',
      'json.f1': 'Repara la salida de los LLM: bloques de Markdown, texto de relleno, respuestas truncadas y literales de Python y JavaScript.',
      'json.f2': 'Cada arreglo se reporta con su línea y columna en tu entrada original.',
      'json.f3': 'Genera interfaces de TypeScript, records de C#, clases de Dart y JSON Schema.',
      'json.f4': 'Librería de npm y CLI sin dependencias, con el mismo motor.',
      'tags.label': 'Tecnologías',
      'tag.zerodeps': 'Sin dependencias',
      'copy.label': 'Copiar el comando de instalación',
      'copy.text': 'Copiar',
      'copy.done': 'Copiado',
      'btn.demo': 'Probar en vivo',
      'btn.source': 'Código',
      'cipher.mockAlt': 'Ilustración: un JWT dividido en encabezado, payload y firma, con los hallazgos de seguridad debajo.',
      'cipher.screenshotAlt': 'Cipher Surgeon decodificando un JWT, explicando sus claims y señalando problemas de seguridad.',
      'cipher.m1': 'token sin firma',
      'cipher.m2': 'expirado',
      'cipher.m3': 'secreto HMAC débil',
      'cipher.soon': 'Captura de pantalla próximamente',
      'cipher.tagline': 'Decodifica, verifica y firma JWT en tu navegador, con cada claim explicado y cada problema de seguridad señalado.',
      'cipher.f1': 'Decodificador, verificador y firmador de JWT que detecta alg none, tokens expirados y secretos HMAC débiles.',
      'cipher.f2': 'Cifrado y descifrado AES-256-GCM con contraseña, además de hashes y HMAC.',
      'cipher.f3': '“Pelar las capas”: desenvuelve automáticamente base64, base64url, hex, codificación URL, JWT y JSON.',
      'cipher.f4': 'Sin dependencias, construido sobre Web Crypto. También es librería de npm y CLI.',
      'projects.title': 'Otros proyectos',
      'projects.lede': 'Productos pequeños, cada uno hecho para resolver bien una sola tarea.',
      'fl.desc': 'Un generador de documentos legales y laborales por país (contratos, cartas, pagarés) para usuarios hispanohablantes. Llenas un formulario, ves una vista previa en vivo y descargas un PDF generado en el navegador.',
      'fl.f1': 'Una página SEO estática por cada combinación documento × país, con datos estructurados de preguntas frecuentes.',
      'fl.f2': 'Exportación a PDF y Word; el borrador se guarda en el navegador.',
      'fl.f3': 'Pagos únicos con Polar, sin base de datos.',
      'jb.desc': 'Un asistente personal de búsqueda de empleo que corre por completo en mi PC. Reúne ofertas remotas de software de bolsas públicas, las filtra, las califica con un LLM local mediante Ollama y redacta una carta de presentación para cada oferta buena.',
      'jb.f1': 'IA local (Ollama + Qwen3): gratis, y nada sale del equipo.',
      'jb.f2': 'Prellena los formularios, pero una persona siempre revisa y pulsa Enviar.',
      'jb.f3': 'Nunca automatiza LinkedIn; un pequeño panel en Flask lleva el seguimiento de aplicaciones y entrevistas.',
      'jb.note': 'Sin repositorio público.',
      'stack.title': 'Habilidades y stack',
      'stack.lede': 'Con lo que trabajo a diario y sobre lo que están construidos estos proyectos.',
      'stack.backend': 'Backend',
      'stack.frontend': 'Front end web',
      'stack.mobile': 'Móvil',
      'stack.platform': 'Plataforma del navegador',
      'stack.tooling': 'Herramientas y entrega',
      'stack.ai': 'Integración con IA',
      'stack.llm': 'LLM locales',
      'stack.llmjson': 'Manejo de salida de LLM',
      'about.title': 'Sobre mí',
      'about.p1': 'Soy desarrollador de República Dominicana y trabajo con C#/.NET, Angular y Flutter. En ese trabajo se repetían dos tareas pequeñas: JSON que casi se puede parsear y escribir a mano el modelo correspondiente en tres lenguajes.',
      'about.p2': 'La mayoría de las herramientas de reparación arreglan en silencio. Yo quería herramientas que muestren qué cambiaron y por qué, porque un arreglo silencioso puede esconder un error real, como un payload truncado. Esa idea se convirtió en JSON Surgeon, y ahora en Cipher Surgeon. Además, creo productos pequeños, como Firmalisto, enfocados en un problema concreto.',
      'pr.1': 'Cada cambio se reporta; nada en silencio.',
      'pr.2': 'Corre en el navegador; tus datos se quedan contigo.',
      'pr.3': 'Cero dependencias en tiempo de ejecución donde importa.',
      'pr.4': 'Un núcleo probado y sin framework, con una interfaz delgada encima.',
      'contact.title': 'Contacto',
      'contact.lede': '¿Encontraste un error en alguna herramienta o quieres hablar de un proyecto? Escríbeme aquí.',
      'contact.cv': 'Descargar CV',
      'contact.issues': 'Reportar un error de JSON Surgeon',
      'footer.built': 'HTML, CSS y un poco de JavaScript escritos a mano. Sin rastreadores.',
      'lost.title': 'Aquí no hay nada que operar',
      'lost.text': 'La página que buscabas no existe o se movió. Las herramientas siguen donde estaban.',
      'lost.home': 'Volver al inicio',
      'lost.meta': 'Página no encontrada · UvilleraMente'
    }
  };

  var root = document.documentElement;
  var isLost = document.body.hasAttribute('data-page-404');

  /* ---------- safe storage ---------- */
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function save(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* ignore */ } }

  /* ---------- language ---------- */
  function initialLang() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q === 'en' || q === 'es') return q;
    } catch (e) { /* ignore */ }
    var saved = load('lang');
    if (saved === 'en' || saved === 'es') return saved;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return /^es\b/i.test(nav) ? 'es' : 'en';
  }

  var lang = initialLang();

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || ''; }

  function applyLang() {
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':');
        if (i < 0) return;
        var v = t(pair.slice(i + 1).trim());
        if (v) el.setAttribute(pair.slice(0, i).trim(), v);
      });
    });
    document.title = t(isLost ? 'lost.meta' : 'meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc && !isLost) desc.setAttribute('content', t('meta.description'));
  }

  var langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.hidden = false;
    langBtn.addEventListener('click', function () {
      lang = lang === 'es' ? 'en' : 'es';
      save('lang', lang);
      applyLang();
    });
  }

  /* ---------- theme ---------- */
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function currentTheme() {
    var forced = root.getAttribute('data-theme');
    if (forced === 'light' || forced === 'dark') return forced;
    return mq && mq.matches ? 'dark' : 'light';
  }
  var themeBtn = document.getElementById('theme-toggle');
  function syncThemeBtn() { if (themeBtn) themeBtn.setAttribute('aria-pressed', String(currentTheme() === 'dark')); }
  if (themeBtn) {
    themeBtn.hidden = false;
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      save('theme', next);
      syncThemeBtn();
    });
  }
  if (mq && mq.addEventListener) mq.addEventListener('change', syncThemeBtn);
  syncThemeBtn();

  /* ---------- config-driven links (hidden when empty) ---------- */
  document.querySelectorAll('[data-link]').forEach(function (a) {
    var key = a.getAttribute('data-link');
    var value = (SITE.links[key] || '').trim();
    var holder = a.closest('[data-link-item]') || a;
    if (!value) { holder.hidden = true; return; }
    a.href = key === 'email' ? 'mailto:' + value : value;
    if (key === 'cv') a.setAttribute('download', '');
    holder.hidden = false;
    a.hidden = false;
  });
  document.querySelectorAll('[data-link-text]').forEach(function (el) {
    var key = el.getAttribute('data-link-text');
    var value = (SITE.links[key] || '').trim();
    el.textContent = key === 'linkedin' ? value.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : value;
  });

  /* ---------- Cipher Surgeon screenshot (placeholder until provided) ---------- */
  var cipherShot = (SITE.screenshots.cipherSurgeon || '').trim();
  var media = document.getElementById('cipher-media');
  if (cipherShot && media) {
    var img = new Image();
    img.width = 1440; img.height = 900;
    img.decoding = 'async';
    img.alt = t('cipher.screenshotAlt');
    img.setAttribute('data-i18n-attr', 'alt:cipher.screenshotAlt');
    img.onload = function () {
      var mock = media.querySelector('.mock');
      if (mock) mock.replaceWith(img);
    };
    img.src = cipherShot; // if it fails to load, the placeholder simply stays
  }

  /* ---------- copy buttons ---------- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    if (!navigator.clipboard) return;
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var label = btn.querySelector('[data-i18n]');
      navigator.clipboard.writeText(btn.getAttribute('data-copy')).then(function () {
        btn.classList.add('is-done');
        if (label) label.textContent = t('copy.done');
        setTimeout(function () { btn.classList.remove('is-done'); if (label) label.textContent = t('copy.text'); }, 1600);
      }, function () { /* clipboard blocked: leave as is */ });
    });
  });

  /* ---------- footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  applyLang();
})();
