<template>
    <div v-if="customer" class='edit-customer container'>
        <h2 class='hStyle mt-3 mb-2'>Edit Customer: {{customer.name}} </h2>

        <form>
            <div class="form-group mx-auto col-sm-3">
                <label for="add-name">Name</label>
                <input type='text' class="form-control" id="add-name" v-model="customer.name" required/>
            </div>
            <div class="form-group mx-auto col-sm-3">
                <label for="add-email">Email</label>
                <input type="text" class="form-control" id="add-email" rows="10" v-model="customer.email" required/>

            </div>
            <div class="form-group mx-auto col-sm-3">
                <label for="add-phone">Phone</label>
                <input type="text" class="form-control" id="add-phone" v-model="customer.phone" required />
            </div>

            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            <button type="submit" class="btn btn-outline-success" @click.prevent="updateCustomer()">Update
            </button>
            <button class="btn btn-outline-info">
                <router-link style='text-decoration: none; color: black' to='/'>Cancel</router-link>
            </button>
        </form>
        <!--<h1>Edit Customer: {{ this.$route.params.user_id }}</h1>
        <button @click='updateCustomer'>update</button>-->
    </div>

</template>

<script>
    import db from '@/firebase/init'

    export default {
        name: 'EditCustomer',
        data() {
            return {
                customer: [],
                feedback: null
            }
        },
        created() {
            const user_id = this.$route.params.user_id
            var customerRef = db.collection("client").doc(user_id)
            customerRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.customer = doc.data()
                    this.customer.id = doc.id
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        },
        methods: {
            updateCustomer() {
                if (this.customer.name && this.customer.email && this.customer.phone) {
                    const user_id = this.$route.params.user_id
                    var customerRef = db.collection("client")
                    customerRef.doc(user_id).set({
                        name: this.customer.name, email: this.customer.email, phone: this.customer.phone
                    }).then(() => {
                        this.$router.push({ name: 'Index' })
                    }).catch(err => {
                        console.log(err)
                    })

                } else {
                    this.feedback = 'All input fields must be filled'
                }
            }
        }
    }

</script>
<style>
    .red-text {
        color: red;
    }
</style>