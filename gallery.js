import hashRouter from "./router.js";

const items = `
${hashRouter.map((route) => {
  return `
  <div class='item'>
    <a href='#${route.path}'>${route.desc}</a>
  </div>
  `
})}
`
const gallery = document.createElement('div');
gallery.setAttribute('class', 'gallery');
gallery.innerHTML = items;