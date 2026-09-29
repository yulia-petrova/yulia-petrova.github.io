// Shared behavior: theme, language, uploads links
(function(){
  window.UPLOADS_BASE = (location.protocol === 'file:')
    ? 'https://yulia-petrova.github.io/uploads/'
    : 'uploads/';

  var store = {
    get: function(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
    set: function(k,v){ try { localStorage.setItem(k,v); } catch(e){} }
  };

  // ---------- theme ----------
  var root = document.documentElement;
  var savedTheme = store.get('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') root.setAttribute('data-theme', savedTheme);

  function currentTheme(){
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  window.toggleTheme = function(){
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store.set('theme', next);
    updateThemeBtn();
  };
  function updateThemeBtn(){
    var b = document.getElementById('themeToggle');
    if (b) b.textContent = currentTheme() === 'dark' ? '☀' : '☾';
  }

  // ---------- language ----------
  window.LANG = store.get('lang') || 'en';
  if (!I18N[window.LANG]) window.LANG = 'en';

  window.t = function(key){
    var v = (I18N[window.LANG] && I18N[window.LANG][key]);
    if (v == null) v = I18N.en[key];
    return v == null ? key : v;
  };
  window.tmonth = function(m){ return (I18N[window.LANG].M || I18N.en.M)[m] || ''; };

  window.applyI18n = function(){
    document.documentElement.lang = window.LANG === 'en' ? 'en' : (window.LANG === 'pt' ? 'pt-BR' : 'ru');
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i=0;i<nodes.length;i++){
      nodes[i].innerHTML = t(nodes[i].getAttribute('data-i18n'));
    }
    var btns = document.querySelectorAll('.langs button');
    for (var j=0;j<btns.length;j++){
      btns[j].setAttribute('aria-pressed', btns[j].getAttribute('data-lang') === window.LANG ? 'true' : 'false');
    }
    document.dispatchEvent(new CustomEvent('langchange'));
  };

  window.setLang = function(l){
    if (!I18N[l]) return;
    window.LANG = l;
    store.set('lang', l);
    applyI18n();
  };

  document.addEventListener('DOMContentLoaded', function(){
    updateThemeBtn();
    var ups = document.querySelectorAll('[data-upload]');
    for (var i=0;i<ups.length;i++){
      ups[i].setAttribute('href', UPLOADS_BASE + ups[i].getAttribute('data-upload'));
    }
    applyI18n();
  });
})();
