/**
 * 向上查找contentName匹配的父元素
 * @param context
 * @param componentName
 * @param componentNames
 * @returns {Vue|*}
 */
export const findComponentUpward = function(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.componentName;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.componentName;
  }
  return parent;
}

/**
 * 字符串是否被数组包涵
 * @param value
 * @param validList
 * @returns {boolean}
 */
export const oneOf = function (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

/**
 * 获取el可滚动的上级
 * @param el
 * @returns {*}
 */
export const getScrollview = function (el) {
  let currentNode = el;
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
};

export const hasClass = function (elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length === 0) return false;
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
};

export const addClass = function (ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className === '' ? cls : ele.className + ' ' + cls;
  }
};

export const removeClass = function (ele, cls) {
  if (hasClass(ele, cls)) {
    let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

const isType = function(obj, type) {
  return Object.prototype.toString.call(obj) === type;
};

export const isFunction = function(obj) {
  return isType(obj, '[object Function]');
};

export const isBoolean = function(obj) {
  return isType(obj, '[object Boolean]');
};

export const isObject = function(obj) {
  return isType(obj, '[object Object]');
}

export const isPromise = function(obj) {
  return isType(obj, '[object Promise]');
}

export const pageScroll = (function () {
  const fn = function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.returnValue = false;
    return false;
  };
  let islock = false;

  return {
    lock: function (el) {
      if (islock) return;
      islock = true;
      (el || document).addEventListener('touchmove', fn);
      (el || document).addEventListener('mousewheel', fn);
    },
    unlock: function (el) {
      islock = false;
      (el || document).removeEventListener('touchmove', fn);
      (el || document).removeEventListener('mousewheel', fn);
    }
  };
})();
