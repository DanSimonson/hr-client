<template>
  <div class="index">
    <app-customer v-bind:customers="customers"></app-customer>
    <!--<app-edit v-bind:customers="customers"></app-edit>-->
  </div>
</template>

<script>
  import Customers from '@/components/Customers.vue';
  import EditCustomer from '@/components/EditCustomer.vue';
  import db from '@/firebase/init'
  export default {
    components: {
      'app-customer': Customers,
      'app-edit': EditCustomer
    },
    name: 'Index',
    data() {
      return {
        customers: []
        /*customers: [
          { id: '1', name: 'Joe Blow', email: 'blow@gmail.com', phone: '08257415421' },
          { id: '2', name: 'John Doe', email: 'doe@yahoo.com', phone: '09264521254' },
          { id: '3', name: 'Steve Green', email: 'green@gmail.com', phone: '07276323652' }
        ]*/
      }
    },
    created() {
      db.collection('client').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let customer = doc.data()
            customer.id = doc.id
            this.customers.push(customer)
          })
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .customerForm {
    /*margin-left: 40px;
    margin-top: 20px;
    margin: 30px auto;*/
  }

  .btnClass {
    /*margin-bottom: 20px;*/
  }

  .index {
    padding: 10px 0;
  }
</style>