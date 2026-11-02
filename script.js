const gallery = document.getElementById('gallery');
const recipes = [
  {title:'Avocado Sunrise Toast', desc:'Creamy avocado on sourdough with chili flakes'},
  {title:'Lemon Herb Chicken', desc:'Bright, citrusy weeknight staple'},
  {title:'Berry Oat Parfait', desc:'Cold-friendly breakfast parfaits'},
  {title:'Mediterranean Quinoa Bowl', desc:'Colorful veggie-packed bowl'},
  {title:'Speedy Shakshuka', desc:'Tomato-poached eggs in 15 minutes'}
];
function render(){
  gallery.innerHTML = '';
  recipes.forEach(r => {
    const card = document.createElement('div');
    card.className = 'card';
    const h = document.createElement('h3');
    h.textContent = r.title;
    const p = document.createElement('p');
    p.textContent = r.desc;
    card.appendChild(h); card.appendChild(p);
    gallery.appendChild(card);
  });
}
render();
