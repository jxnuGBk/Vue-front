import Vue from 'vue';
import Router from 'vue-router';
import button from '../pages/button';
import cell from '../pages/cell';
import radio from '../pages/radio';
import gird from '../pages/gird';
import badge from '../pages/badge';
import actionSheet from '../pages/actionSheet';
import popup from '../pages/popup';
import layout from '../pages/layout';
import dialog from '../pages/dialog';
import notice from '../pages/notice';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/button', name: 'button', component: button },
    { path: '/cell', name: 'cell', component: cell },
    { path: '/radio', name: 'radio', component: radio },
    { path: '/gird', name: 'gird', component: gird },
    { path: '/badge', name: 'badge', component: badge },
    { path: '/actionSheet', name: 'actionSheet', component: actionSheet },
    { path: '/popup', name: 'popup', component: popup },
    { path: '/layout', name: 'layout', component: layout },
    { path: '/dialog', name: 'dialog', component: dialog },
    { path: '/notice', name: 'notice', component: notice }
  ]
});
