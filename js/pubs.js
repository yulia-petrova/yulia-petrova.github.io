// Renders the publications page (data in pubs-data.js)
(function(){
  var activeTopic = 'all';

  function el(tag, cls, html){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function authorsHtml(list){
    return list.map(function(a){
      return a === 'Yulia Petrova' ? '<span class="me">Yulia Petrova</span>' : a;
    }).join(', ');
  }
  function copyText(txt, btn){
    function done(){
      var old = btn.textContent;
      btn.textContent = t('pubs.copied');
      btn.classList.add('copied');
      setTimeout(function(){ btn.textContent = old; btn.classList.remove('copied'); }, 1500);
    }
    function fallback(){
      var ta = document.createElement('textarea');
      ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch(e){}
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(done, fallback);
    } else fallback();
  }

  function pubCard(p){
    var card = el('article','pub');
    card.id = p.id || '';
    var hasAb = !!(p.abstract && p.abstract.length);
    var btn = el('button','pub-title' + (hasAb ? '' : ' noab'),
      (hasAb ? '<span class="tw" aria-hidden="true">+</span>' : '<span class="tw" aria-hidden="true">·</span>') +
      '<span class="txt">' + p.title + '</span>');
    if (hasAb){
      btn.setAttribute('aria-expanded','false');
      btn.addEventListener('click', function(){
        var open = card.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.querySelector('.tw').textContent = open ? '−' : '+';
      });
    } else { btn.disabled = false; btn.tabIndex = -1; }
    card.appendChild(btn);

    var parts = [];
    if (p.authors && p.authors.length) parts.push(authorsHtml(p.authors));
    if (p.venue) parts.push('<span class="pub-venue">' + p.venue + '</span>');
    if (p.note) parts.push('<em>' + t('pubs.inprep') + '</em>');
    card.appendChild(el('p','pub-meta', parts.join(' · ')));

    if (hasAb){
      var abs = el('div','pub-abstract', p.abstract);
      abs.setAttribute('lang','en');
      card.appendChild(abs);
    }
    var act = el('div','pub-actions');
    var any = false;
    function link(label, url){
      var a = el('a', null, label);
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      act.appendChild(a); any = true;
    }
    if (p.doi) link(t('pubs.doi'), p.doi);
    var L = p.links || {};
    if (L.doi) link(t('pubs.doi'), L.doi);
    if (L.arxiv) link(t('pubs.arxiv'), L.arxiv);
    if (L.pdf) link(t('pubs.pdf'), L.pdf);
    if (L.ru) link(t('pubs.inRussian'), L.ru);
    if (L.mfo) link(t('pubs.mfo'), L.mfo);
    if (p.bibtex){
      var bib = el('button', null, t('pubs.bibtex'));
      bib.addEventListener('click', function(){ copyText(p.bibtex, bib); });
      act.appendChild(bib); any = true;
    }
    if (any) card.appendChild(act);
    return card;
  }

  function render(){
    var host = document.getElementById('publist');
    if (!host) return;
    host.innerHTML = '';

    // journal articles, filterable, grouped by year
    host.appendChild(el('h2', null, t('pubs.journal')));
    var filters = el('div','filters');
    ['all','porous','conslaws','smallball'].forEach(function(tp){
      var b = el('button', null, tp === 'all' ? t('pubs.all') : t('pubs.topic.' + tp));
      b.setAttribute('aria-pressed', activeTopic === tp ? 'true' : 'false');
      b.addEventListener('click', function(){ activeTopic = tp; render(); });
      filters.appendChild(b);
    });
    host.appendChild(filters);

    var shown = PUBS.filter(function(p){ return activeTopic === 'all' || p.topic === activeTopic; });
    shown.sort(function(a,b){ return (b.year||0) - (a.year||0); });
    var lastYear = null;
    shown.forEach(function(p){
      if (p.year !== lastYear){ host.appendChild(el('div','yearhead', String(p.year))); lastYear = p.year; }
      host.appendChild(pubCard(p));
    });

    // proceedings and patents belong to the porous-media/EOR line of work:
    // show them only under "All topics" and "Viscous fingering"
    if (activeTopic === 'all' || activeTopic === 'porous'){
      host.appendChild(el('h2', null, t('pubs.proc')));
      PROC.forEach(function(p){ host.appendChild(pubCard(p)); });

      host.appendChild(el('h2', null, t('pubs.patents')));
      PATENTS.forEach(function(p){
        host.appendChild(pubCard({title:p.title, authors:[], venue:p.detail, links:{}}));
      });
    }

    if (window.renderMathInElement){
      renderMathInElement(host, {
        delimiters: [{left:'$', right:'$', display:false}],
        throwOnError: false
      });
    }
  }

  document.addEventListener('DOMContentLoaded', render);
  document.addEventListener('langchange', render);
  window.addEventListener('load', render); // re-render once KaTeX is ready
})();
