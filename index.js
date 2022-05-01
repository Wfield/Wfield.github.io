import hashRouter from "./router.js";
import HomePage from "./homepage.js";

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
HomePage.appendChild(gallery);

function createIframes(path, src) {
  const iframe = document.createElement('iframe');
  if (location.hash === `#${path}`) {
    iframe.setAttribute('id', path);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '600px');
    iframe.src = src;
    document.body.append(iframe);
    HomePage.hide();
  } else {
    const ele = document.getElementById(path);
    if(ele) {
      ele.remove()
    }
    HomePage.show();
  }
}

function hashChangeCallback() {
  hashRouter.map((route) => {
    createIframes(route.path, route.src)
  })
}

window.addEventListener('hashchange', hashChangeCallback);

window.addEventListener('load', () => {
  if(location.hash) {
    hashChangeCallback()
  }
})
