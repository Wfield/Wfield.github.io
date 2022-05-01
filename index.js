import hashRouter from "./router.js";
import HomePage from "./homepage.js";

const items = `
${hashRouter.map((route) => {
  return `
  <div class='item'>
    <a href='#${route.path}'>${route.desc}</a>
  </div>
  `
}).join('\n')}
`
const gallery = document.createElement('div');
gallery.setAttribute('class', 'gallery');
gallery.innerHTML = items;
HomePage.appendChild(gallery);

function createIframes(path, src) {
  const iframe = document.createElement('iframe');
  if (path && src) {
    iframe.setAttribute('id', path);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '600px');
    iframe.src = src;
    document.body.append(iframe);
    HomePage.hide();
  } else {
    const ele = document.querySelector('iframe');
    if(ele) {
      ele.remove()
    }
    HomePage.show();
  }
}

function hashChangeCallback() {
  const { path, src} = hashRouter.find(route => `#${route.path}` === location.hash) || {};
  createIframes(path, src)
}

window.addEventListener('hashchange', hashChangeCallback);

window.addEventListener('load', () => {
  if(location.hash) {
    hashChangeCallback()
  }
})
