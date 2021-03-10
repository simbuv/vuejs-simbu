<template>
    <div>
<h1>User Details</h1>
<table border="1px">
    <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
        <td></td>
    </tr>
    <tr v-for="user in UserDetails" v-bind:key="user.id">
        <td>{{user.first_name}}</td>
        <td>{{user.last_name}}</td>
        <td>{{user.email}}</td>
        <td></td>
    </tr>
</table>
 </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios'
import VueAxis from 'vue-axios'
Vue.use(VueAxis,axios)

export default {
    name:"UserDetails",
     data() {
         return {
             UserDetails: []
         }
     },
     mounted() {
        axios({
            method: "GET",
            "url": "https://reqres.in/api/users?page=2"
        }).then(response => {
            this.UserDetails = response.data.data;
           
        }, error => {
            console.error(error);
        });
    }
}
</script>