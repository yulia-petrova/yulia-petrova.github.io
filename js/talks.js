// Renders the talks page with a switcher between the two sets (data in talks-data.js)
(function(){
  var view = 'conf';

  function el(tag, cls, html){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function renderList(host, items){
    var sorted = items.slice().sort(function(a,b){ return (b.y - a.y) || (b.m - a.m); });
    var lastYear = null;
    sorted.forEach(function(tk){
      if (tk.y !== lastYear){ host.appendChild(el('div','yearhead', String(tk.y))); lastYear = tk.y; }
      var row = el('div','talk');
      row.appendChild(el('span','date', tmonth(tk.m)));
      row.appendChild(el('span','tag ' + tk.tag, t('tag.' + tk.tag)));
      var sess = (window.LANG === 'pt' && tk.s_pt) || (window.LANG === 'ru' && tk.s_ru) || tk.s;
      var what = (tk.p ? '<em class="planned">(' + t('talks.planned') + ')</em> ' : '') + tk.e +
        (sess ? '<span class="sess">' + sess + '</span>' : '');
      row.appendChild(el('span','what', what));
      if (tk.links && tk.links.length){
        var lk = el('span','lnks');
        tk.links.forEach(function(l){
          var a = el('a', null, t('lnk.' + l.t) + ' ↗');
          a.href = l.u; a.target = '_blank'; a.rel = 'noopener';
          lk.appendChild(a);
        });
        row.appendChild(lk);
      }
      host.appendChild(row);
    });
  }

  function render(){
    var sw = document.getElementById('talkswitch');
    var host = document.getElementById('talklist');
    if (!sw || !host) return;
    sw.innerHTML = '';
    [['conf','talks.conf'],['sem','talks.sem']].forEach(function(pair){
      var b = el('button', null, t(pair[1]));
      b.setAttribute('aria-pressed', view === pair[0] ? 'true' : 'false');
      b.addEventListener('click', function(){ view = pair[0]; render(); });
      sw.appendChild(b);
    });
    host.innerHTML = '';
    renderList(host, view === 'conf' ? CONF : SEM);
  }

  document.addEventListener('DOMContentLoaded', render);
  document.addEventListener('langchange', render);
})();
