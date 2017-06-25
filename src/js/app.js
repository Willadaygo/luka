import 'babel-polyfill'
import 'es6-promise/auto'
import CustomEvents from './utilities/custom-events'
import Ani from './ani'
import Header from '../modules/header/header'

CustomEvents.init()
Ani.init()
Header.init()
