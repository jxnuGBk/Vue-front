/**
 * Created by xwj on 2017/9/14.
 */
import './styles/base.less';
import { Button } from './components/Button';
import Icon from './components/Icon';
import { CellGroup, CellItem } from './components/Cell';
import Textarea from './components/Textarea';
import { Radio, RadioGroup } from './components/Radio';
import { Checkbox, CheckboxGroup } from './components/Checkbox';
import Switch from './components/Switch';
import { Row, Col } from './components/Gird';
import Badge from './components/Badge';
import ActionSheet from './components/ActionSheet';

const views = {
  Button,
  Icon,
  CellGroup, CellItem,
  Textarea,
  Radio, RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Row, Col,
  Badge,
  ActionSheet
};

const prefix = 'J';

const install = function (Vue, opts = {}) {
  Object.keys(views).forEach((key) => {
    Vue.component(`${prefix}${key}`, views[key])
  })
}

const components = Object.assign(views, { install })

export default components
