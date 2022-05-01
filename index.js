// 元素依次为: hash 路由, iframe 位置, a 标签文本
const listMap = [
  ['webgl-moon', './components/sphere/index.html', 'moon']
]

const items = `
${listMap.map(([key, val, text]) => {
  return `
  <div class='item'>
    <a href='#${key}'>${text}</a>
  </div>
  `
})}
`
const gallery = document.createElement('div');
gallery.setAttribute('class', 'gallery');
gallery.innerHTML = items
document.body.append(gallery)

function hashChangeCallback(key, val) {
  const iframe = document.createElement('iframe');
  if (location.hash === `#${key}`) {
    iframe.setAttribute('id', key);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '600px');
    iframe.src = val;
    document.body.append(iframe);
    gallery.style.display = 'none';
  } else {
    const ele = document.getElementById(key);
    if(ele) {
      ele.remove()
    }
    gallery.style.display = 'block';
  }
}


window.addEventListener('hashchange', () => {
  listMap.map(([key, val]) => {
    hashChangeCallback(key, val)
  })
});

window.addEventListener('load', () => {
  if(location.hash) {
    const event = new CustomEvent('hashchange')
    window.dispatchEvent(event)
  }
})
