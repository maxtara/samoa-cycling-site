// Adds a "Save offline" button that downloads a self-contained copy of the current page.
(function () {
  var LEAFLET_CSS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  var LEAFLET_JS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  var SCRIPT_END = '</' + 'script>';

  function fetchText(url) {
    return fetch(url, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error(url + ' (' + r.status + ')');
      return r.text();
    });
  }

  function savePage(btn) {
    var label = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Saving…';
    fetchText(location.href).then(function (html) {
      var assets = html.indexOf(LEAFLET_JS) === -1
        ? Promise.resolve(null)
        : Promise.all([fetchText(LEAFLET_CSS), fetchText(LEAFLET_JS)]);
      return assets.then(function (leaflet) {
        if (leaflet) {
          html = html.replace(/<link[^>]+leaflet\.css[^>]*>/, function () {
            return '<style>' + leaflet[0] + '</style>';
          });
          html = html.replace(/<script[^>]+leaflet\.js[^>]*><\/script>/, function () {
            return '<script>' + leaflet[1].replace(/<\/script/gi, '<\\/script') + SCRIPT_END;
          });
        }
        html = html.replace(/<script[^>]+download\.js[^>]*><\/script>\s*/, '');
        var name = location.pathname.split('/').pop() || 'index.html';
        var url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
        var a = document.createElement('a');
        a.href = url;
        a.download = 'samoa-' + name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
        btn.textContent = 'Saved ✓';
      });
    }).catch(function (e) {
      alert('Could not save this page: ' + e.message);
      btn.textContent = label;
    }).then(function () {
      btn.disabled = false;
      setTimeout(function () { btn.textContent = label; }, 3000);
    });
  }

  function addButton() {
    if (!/^https?:$/.test(location.protocol)) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = '⬇ Save offline';
    btn.title = 'Download a copy of this page to your phone';
    btn.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:5000;padding:10px 14px;' +
      'border:0;border-radius:22px;background:#0b6e4f;color:#fff;font:600 14px -apple-system,Segoe UI,sans-serif;' +
      'box-shadow:0 2px 8px rgba(0,0,0,.3);cursor:pointer;';
    btn.addEventListener('click', function () { savePage(btn); });
    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addButton);
  else addButton();
})();
