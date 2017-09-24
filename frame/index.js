/**
 * Created by xwj on 2017/9/14.
 */
import './styles/base.less';
import { Button } from './components/Button';
import Icon from './components/Icon';
import { CellGroup, CellItem } from './components/Cell';

const views = {
  Button,
  Icon,
  CellGroup, CellItem
}

const install = function (Vue, opts = {}) {
  Object.keys(views).forEach((key) => {
    Vue.component(key, views[key])
  })
}

const components = Object.assign(views, { install })

export default components
