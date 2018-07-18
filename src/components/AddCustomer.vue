<template>
    <div>
        <h2 mb-2 mt-3>Add Customer</h2>
        <form>
            <div class="form-group mx-auto col-sm-3">
                <label for="add-name">Name</label>
                <input type='text' class="form-control" id="add-name" v-model="name" />
            </div>
            <div class="form-group mx-auto col-sm-3">
                <label for="add-email">Email</label>
                <input type="text" class="form-control" id="add-email" rows="10" v-model="email" />

            </div>
            <div class="form-group mx-auto col-sm-3">
                <label for="add-phone">Phone</label>
                <input type="text" class="form-control" id="add-phone" v-model="phone" />
            </div>
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            <button type="submit" class="btn btn-outline-success" @click.prevent="addCustomer()">Create
            </button>
            <button class="btn btn-outline-warning">
                <router-link style='text-decoration: none; color: black' to='/'>Cancel</router-link>
            </button>
        </form>
    </div>
</template>

<script>
    import db from '@/firebase/init'
    export default {
        name: 'AddCustomer',
        data() {
            return {
                name: null,
                email: null,
                phone: null,
                feedback: null
            }
        },
        methods: {
            addCustomer() {
                //console.log(this.name)
                if (this.name && this.email && this.phone) {
                    db.collection('client').add({
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                    }).then(() => {
                        console.log('in promise')
                        this.$router.push({ name: 'Index' })
                    }).catch(err => {
                        console.log(err)
                    })
                    this.name = ''
                    this.email = ''
                    this.phone = ''
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

    .from-group {
        margin-top: 60px;
        padding: 20px;
        max-width: 100px;
    }
</style>