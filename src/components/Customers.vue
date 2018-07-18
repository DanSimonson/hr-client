<template>
    <div>
        <div class="row">
            <div class="col-sm-3 mx-auto customerForm">
                <router-link :to="{name: 'AddCustomer'}">
                    <button id="myButton" class="mb-3 mt-2 btn btn-outline-info btnClass">Add Customer</button>
                </router-link>
                <!--<div class="form-group">
                    <label for="search-element">Customer Name</label>
                    <input class="form-control" id="search-element" requred/>
                </div>-->
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th class="col-sm-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customers" :key="customer.id">
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.email }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>
                            <button class="mb-3 btn btn-outline-primary btnClass">
                                <router-link style='text-decoration: none; color: black' :to="{ name: 'EditCustomer', params: {user_id: customer.id}}">
                                    Edit
                                </router-link>
                            </button>
                            <button class="mb-3  btn btn-outline-danger btnClass" @click="deleteCustomer(customer.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import db from '@/firebase/init'
    export default {
        props: {
            customers: {
                type: Array
            }
        },
        name: 'Customers',
        data() {
            return {

            }
        },
        methods: {
            deleteCustomer(id) {
                console.log(id)
                db.collection('client').doc(id).delete()
                    .then(() => {
                        this.customers = this.customers.filter(customer => {
                            return customer.id != id
                        })

                    })

            },
            editCustomer() {
                console.log('in edit customer function')
                /*<router-link :to="{ name: 'EditCustomer', params:{user_id: customer.id}}"></router-link>*/

            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .btn {
        color: black;
        text-decoration: none;
    }

    .btn:hover {
        text-decoration: none;
        cursor: pointer;
    }
</style>