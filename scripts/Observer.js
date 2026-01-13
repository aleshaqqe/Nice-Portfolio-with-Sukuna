export function onLoad(elements) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if(entry.target.classList.contains('card')){
          const cards= [...document.querySelectorAll('.projects__card')];
          const index = cards.indexOf(entry.target);
          const delay = index >= 0 ? index * 150 : 0;
          setTimeout(()=>{
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          },delay);

        }else{
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.13 });

  elements.forEach(el => {
    if(el) observer.observe(el);
  });

  return () => observer.disconnect();
}
