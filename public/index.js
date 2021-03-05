// ::String => ::Document
const createDOMFromString = (domString) => {
  const div = document.createElement("div");
  div.innerHTML = domString;
  return div;
};

class LikeButton {
  constructor() {
    this.state = { isLiked: false };
  }

  setState(state) {
    const oldEl = this.el;
    this.state = state;
    this.el = this.render();
    if (this.onStateChange) this.onStateChange(oldEl, this.el);
  }

  changeLikeText() {
    // const likeText = this.el.querySelector(".like-text");
    // this.state.isLiked = !this.state.isLiked;
    // likeText.innerHTML = this.state.isLiked ? "取消" : "点赞";
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }
  render() {
    // return `
    //       <button class="like-btn">
    //         <span class="like-text">点赞</span>
    //         <span>👍</span>
    //       </button>
    //       `;
    this.el = createDOMFromString(`
      <button class="like-btn">
        <span class="like-text">${this.state.isLiked ? "取消" : "点赞"}</span>
        <span>👍</span>
      </button>
    `);
    this.el.addEventListener("click", this.changeLikeText.bind(this), false);
    return this.el;
  }
}
const wrapper = document.querySelector(".wrapper");
const likeButton1 = new LikeButton();
const likeButton2 = new LikeButton();
// wrapper.innerHTML = likeButton1.render();
// wrapper.innerHTML += likeButton2.render();
wrapper.appendChild(likeButton1.render());
wrapper.appendChild(likeButton2.render());

// const likeButton = new LikeButton();
// wrapper.appendChild(likeButton.render()); // 第一次插入 DOM 元素
// likeButton.onStateChange = (oldEl, newEl) => {
//   wrapper.insertBefore(newEl, oldEl); // 插入新的元素
//   wrapper.removeChild(oldEl); // 删除旧的元素
// };

// const button = document.querySelector(".like-btn");
// const buttonText = document.querySelector(".like-text");
// let isLiked = false;
// button.addEventListener(
//   "click",
//   () => {
//     isLiked = !isLiked;
//     if (isLiked) {
//       buttonText.innerHTML = "取消";
//     } else {
//       buttonText.innerHTML = "点赞";
//     }
//   },
//   false
// );

class Component {
  setState(state) {
    const oldEl = this.el;
    this.state = state;
    this._renderDOM();
    if (this.onStateChange) this.onStateChange(oldEl, this.el);
  }
  _renderDOM() {
    this.el = createDOMFromString(this.render());
    if (this.onClick) {
      this.el.addEventListener("click", this.onClick.bind(this), false);
    }
    return this.el;
  }
}

// const mount = (component, wrapper) => {
//   wrapper.appendChild(component._renderDOM());
//   component.onStateChange = (oldEl, newEl) => {
//     wrapper.insertBefore(newEl, oldEl);
//     wrapper.removeChild(oldEl);
//   };
// };
