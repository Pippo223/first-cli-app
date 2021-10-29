<template>

    <section >
        <form id="data" @submit.prevent="submitData">
            <h2>FORM</h2>
            <hr>
            <label for="fullName">Name: </label>
            <input type="text" name="fullName" v-model="enteredName">
            <br>

            <label for="phone">Phone: </label>
            <input type="tel" name="phone" v-model="enteredPhone">
            <br>

            <label for="email">Email: </label>
            <input type="email" name="email" v-model="enteredEmail">
            <br>

            <label for="favorite">Favorite: </label>
            <input type="checkbox" name="favorite" v-model="isFav">
    <br><br>
            <button>
                Add Contact
            </button>



        </form>

    </section>


</template>


<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
            isFav: false
        };
    },

    methods: {
        submitData() {
            this.$emit('add-contact', 
                this.enteredName,
                this.enteredPhone,
                this.enteredEmail,
                this.isFav
            )
        }
    }

}


</script>


<style>

    #data {
        margin: auto;
        white-space:pre;
        background-color: antiquewhite;
        margin-block-start: 0;
        padding: 10px;
        
    }

    input{ 
        margin: 10px 0;
    }
</style>