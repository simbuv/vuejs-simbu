<template>
    <div>
<h1>Employee List</h1>
<table>
    <tr>
        <td>Employee ID</td>
        <td>Employee Age</td>
        <td>Name</td>
        <td>Salary</td>       
    </tr>
    <tr v-for="emp in EmployeesList" v-bind:key="emp.id" >
        <td>{{emp.id}}</td>
        <td>{{emp.employee_age}}</td>
        <td>{{emp.employee_name}}</td>
        <td>{{emp.employee_salary}}</td>        
    </tr>
</table>
 </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios'
import VueAxis from 'vue-axios'
Vue.use(VueAxis,axios)

require("dotenv").config();
//console.log(process.env.VUE_APP_EMPLOYEESLIST_API);
export default {
    name:"EmployeesList",
     data() {
         return {
             EmployeesList: []
         }
     },
     mounted() {
        axios({
            
            method: "GET",
            "url": `${process.env.VUE_APP_EMPLOYEESLIST_API}`
        }).then(response => {
            this.EmployeesList = response.data.data;
           
        }, error => {
            console.error(error);
        });
    }
}
</script>