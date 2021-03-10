import Vue from 'vue'
import Router from 'vue-router'
import Customers from './views/Customers.vue'
import CustomerDetails from './views/CustomerDetails.vue'
import UserDetails from './views/UserDetails.vue'
import EmployeesList from './views/EmployeesList.vue'

Vue.use(Router)



const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Customers'
    },
    {
      path: '/userdetails',
      name: '/userdetails',
      component: UserDetails
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/customerdetails/:id',
      name: 'customerdetails',
      component: CustomerDetails
    },
    {
      path: '/employeeslist',
      name: 'employeeslist',
      component: EmployeesList
    },
  ]
})
export default router
