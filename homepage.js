const HomePage = {
  element:  document.getElementById('homepage'),
  hide() {
    this.element.style.display = 'none';
  },
  show() {
    this.element.style.display = 'block';
  },
  appendChild(childEle) {
    this.element.appendChild(childEle);
  }
}

export default HomePage