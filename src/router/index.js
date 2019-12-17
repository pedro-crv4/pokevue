import Vue from 'vue'
import Router from 'vue-router'
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/component-a',
            name: 'RotaA',
            component: ComponentA
        },
        {
            path: '/component-b',
            name: 'RotaB',
            component: ComponentB
        }
    ]
})
