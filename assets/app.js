(function(){
  const root = document.documentElement;
  const key = 'theme';
  function apply(t){
    if(t==='light') root.setAttribute('data-theme','light');
    else root.removeAttribute('data-theme');
  }
  const saved = localStorage.getItem(key);
  if(saved) apply(saved);
  window.toggleTheme = function(){
    const isLight = root.getAttribute('data-theme')==='light';
    const next = isLight ? 'dark' : 'light';
    if(next==='light'){ root.setAttribute('data-theme','light'); }
    else { root.removeAttribute('data-theme'); }
    localStorage.setItem(key,next);
  }
})();