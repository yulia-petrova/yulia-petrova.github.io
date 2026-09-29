// Homepage widgets: news list + upcoming talks (from news-data.js and talks-data.js)
(function(){
  function el(tag, cls, html){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function render(){
    var lang = window.LANG || 'en';

    var nl = document.getElementById('newslist');
    if (nl && typeof NEWS !== 'undefined'){
      nl.innerHTML = '';
      NEWS.slice(0,4).forEach(function(it){
        var row = el('div','news');
        row.appendChild(el('span','nd', (it.m ? tmonth(it.m) + ' ' : '') + it.y));
        row.appendChild(el('span','nt', it[lang] || it.en));
        nl.appendChild(row);
      });
    }

    var fs = document.getElementById('figures');
    if (fs && typeof FIGS !== 'undefined' && FIGS.length){
      var sec = document.getElementById('figsec');
      if (sec) sec.hidden = false;
      fs.innerHTML = '';
      FIGS.forEach(function(f){
        var fig = el('figure','fig' + (f.wide || f.row ? ' wide' : ''));
        var imgs = f.row
          ? '<div class="figrow">' + f.row.map(function(u){ return '<img src="' + u + '" alt="" loading="lazy">'; }).join('') + '</div>'
          : '<img src="' + f.src + '" alt="" loading="lazy">';
        var inner = imgs + '<figcaption>' + (f[lang] || f.en) + '</figcaption>';
        fig.innerHTML = f.link ? '<a href="' + f.link + '">' + inner + '</a>' : inner;
        fs.appendChild(fig);
      });
    }

    var up = document.getElementById('upcoming');
    if (up && typeof CONF !== 'undefined'){
      up.innerHTML = '';
      var now = new Date();
      var cur = now.getFullYear()*100 + (now.getMonth()+1);
      // strictly after the current month, so events from earlier this month drop off
      var next = CONF.filter(function(tk){ return tk.y*100 + (tk.m||12) > cur; })
                     .sort(function(a,b){ return (a.y*100+a.m) - (b.y*100+b.m); })
                     .slice(0,4);
      next.forEach(function(tk){
        var row = el('div','news');
        row.appendChild(el('span','nd', tmonth(tk.m) + ' ' + tk.y));
        var tag = tk.tag && tk.tag !== 'none' ? '<span class="utag">' + t('tag.' + tk.tag) + '</span> ' : '';
        row.appendChild(el('span','nt', tag + tk.e));
        up.appendChild(row);
      });
    }
  }
  document.addEventListener('DOMContentLoaded', render);
  document.addEventListener('langchange', render);
})();
