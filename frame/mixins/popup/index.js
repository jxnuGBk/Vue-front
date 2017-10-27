import popupManager from './popupManager';
import { pageScroll, getScrollview, addClass, removeClass } from '../../utils/util';

var id = 0;

export default {
  props: {
    modalHide: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      opened: false,
      rendered: false,
      zIndex: popupManager.nextZIndex()
    };
  },

  beforeMount() {
    this.popupId = 'popup-' + id++;
    popupManager.register(this.popupId, this);
    this.scrollView = getScrollview(this.$el);
  },

  beforeDestroy() {
    popupManager.unregister(this.popupId);
    popupManager.closeModal(this.popupId);
  },

  methods: {
    open() {
      const dom = this.$el;
      addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
      popupManager.openModal(this.popupId, this.zIndex, dom, 'popup-mask');
      pageScroll.lock(popupManager.modalDom);
      dom.style.zIndex = this.zIndex + 1;
      this.opened = true;
    },
    close() {
      if (!this.opened) return;
      removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
      this.opened = false;
      pageScroll.unlock(popupManager.modalDom);
      popupManager.closeModal(this.popupId);
      this.show = false;
      this.$emit('input', false);
    }
  },

  watch: {
    value(val) {
      if (val) {
        this.rendered = true;
        this.open();
      } else {
        this.close();
      }
    }
  },

  mounted() {
    if (this.value) {
      this.rendered = true;
      this.open();
    }
  }
};

