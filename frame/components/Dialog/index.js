import Vue from 'vue';
import Dialog from './Dialog';
import { addClass, removeClass } from '../../utils/util';

const instances = [];
let seed = 1;

const ModalConstruct = Vue.extend(Dialog);

const newInstance = () => {
  let instance = new ModalConstruct({
    el: document.createElement('div')
  });
  let id = 'alert_' + seed++;
  instance.id = id;
  instance.onClose = function() {
    Alert.close(id);
  };
  instances.push(instance);
  return instance;
};

const doDestory = (instance) => {
  instance.$destroy(true);
  document.body.removeChild(instance.$el);
};

const Modal = (options = {}) => {
  const instance = newInstance();
  instance.modalHide = false;
  instance.value = true;
  instance.msg = options.msg;
  instance.title = options.title;
  instance.opts = options.opts;
  document.body.appendChild(instance.$el);
};

const close = function(id) {
  for (let i = 0, len = instances.length; i < len; i++) {
    const instance = instances[i];
    if (id === instance.id) {
      doDestory(instance);
      instances.splice(i, 1);
      break;
    }
  }
};

const closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

const Alert = function(options) {
  Modal(options);
}
Alert.close = close;
Alert.closeAll = closeAll;

const Confirm = function(options = {}) {
  let { opts, onOk, onCancel } = options;
  if (!opts) {
    opts = [
      {
        txt: '取消',
        callback: () => {
          console.info('取消');
          return onCancel && onCancel();
        }
      },
      {
        txt: '确定',
        callback: () => {
          console.info('确定');
          return onOk && onOk();
        }
      }
    ];

    options.opts = opts;
  }
  Modal(options);
}
Confirm.close = close;
Confirm.closeAll = closeAll;

export { Dialog, Alert, Confirm };
