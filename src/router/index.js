import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
//import Customers from '@/components/Customers'
import AddCustomer from '@/components/AddCustomer'
import EditCustomer from '@/components/EditCustomer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-customer',
      name: 'AddCustomer',
      component: AddCustomer
    },
    {
      path: '/edit-customer/:user_id',
      name: 'EditCustomer',
      component: EditCustomer
    }
  ],
  mode: 'history'
})
