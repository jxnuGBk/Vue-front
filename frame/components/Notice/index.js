import NoticeVue from './Notice';
import Vue from 'vue';
import { addClass } from '../../utils/util';

const NotifyConstruct = Vue.extend(NoticeVue);

const newInstance = () => {
  let NotifyVueConstruct = Vue.extend(NotifyConstruct);

  let rtn = new NotifyVueConstruct({
    el: document.createElement('div')
  });

  NotifyVueConstruct.prototype.close = function () {
    this.$el.addEventListener('webkitAnimationEnd', removeDom);
    addClass(this.$el, 'notice-leave');
    this.closed = true;
    this.timer && clearTimeout(this.timer);
    this.onClosed && this.onClosed();
  };
  return rtn;
};

const removeDom = () => {
  console.info('removeDom')
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

const Notice = (option) => {
  const instance = newInstance();
  instance.msg = option.msg;
  instance.color = option.color;
  instance.bgColor = option.bgColor;
  instance.closed = false;
  instance.onClosed = option.onClosed;
  instance.type = option.type || 'info';

  const { duration = 50000 } = option;
  document.body.appendChild(instance.$el);
  clearTimeout(instance.timer);

  Vue.nextTick(function () {
    setTimeout(function () {
      instance.visible = true
    }, 1)
    instance.$el.removeEventListener('webkitAnimationEnd', removeDom)
    duration && (instance.timer = setTimeout(function () {
      if (instance.closed) return
      instance.close()
    }, duration))
  })
};

export default Notice;
