
import Vue from 'vue'

import $Modal from '@/utils/Modal'
import $px2rem from '@/utils/px2rem'

import Modal from '@/components/Modal'
import Button from "@/components/Button"
import Spin from "@/components/Spin"

Vue.component('Modal', Modal)
Vue.component('Button', Button)
Vue.component('Spin', Spin)
Vue.use($Modal)
Vue.use($px2rem)