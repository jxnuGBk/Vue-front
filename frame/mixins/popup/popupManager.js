import { addClass, removeClass } from '../../utils/util';
const instances = {};
const modalStack = [];
/* eslint-disable */
var hasModal = false;

function getModal() {
  var modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    modalDom.addEventListener('click', function () {

      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }

  return modalDom;
};

const PopupManager = {
  zIndex: 2000,
  getInstance(id) {
    return instances[id];
  },
  register(id, instance) {
    instances[id] = instance;
  },

  unregister(id) {
    delete instances[id];
  },

  nextZIndex() {
    return PopupManager.zIndex+=2;
  },

  openModal(id, zIndex, dom, className) {
    for (let i = 0, j = modalStack.length; i < j; i++) {
      var item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }
    const modal = getModal();
    addClass(modal, 'active');
    addClass(modal, className);
    addClass(modal, className+'-enter');
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modal);
    } else {
      document.body.appendChild(modal);
    }
    modal.style.zIndex = zIndex;
    modal.style.display = '';
    modalStack.push({ id: id, zIndex: zIndex, className });
  },

  closeModal(id) {
    const modalDom = getModal();
    var topItem = {};
    if (modalStack.length > 0) {
      topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        if (topItem.className) {
          removeClass(modalDom, topItem.className+'-enter')
        }

        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }
    if (modalStack.length === 0) {
      addClass(modalDom, topItem.className+'-leave');
    }
    const instance = instances[id];
    setTimeout(() => {
      if (modalStack.length === 0) {
        if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
        modalDom.style.display = 'none';
        PopupManager.modalDom = undefined;
        removeClass(modalDom, topItem.className+'-leave');
      }
      if(instance) {
        instance.rendered = false;
      }
    }, 250);
  },

  doOnModalClick() {
    const topModal = modalStack[modalStack.length - 1];
    const instance = PopupManager.getInstance(topModal.id);
    if(!instance.modalHide) return;
    if(!topModal) return;

    if(instance) {
      instance.close();
    }
  }
}

export default PopupManager;
