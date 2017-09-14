/**
 * Created by xwj on 2017/9/14.
 */
import { Button } from './components/Button'

const views = {
  Button
}

const install = function (Vue, opts = {}) {
  Object.keys(views).forEach((key) => {
    Vue.component(key, views[key])
  })
}

const components = Object.assign(views, { install })

export default components
