<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite ? '(Fav)' : '' }}</h2>
        <hr>
         <button @click="toggleDetails">{{ detailsAreVisible  ? 'Hide Details' : 'Show Details' }}</button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li class="pe1"><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li class="pe1"><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
 
    </li>
</template>

<script>
    export default {
        // props: ['name', 'phoneNumber', 'emailAddress','isFavorite'],
        props: {
            name: {
                type: String,
                required: true
            },
             phoneNumber: {
                type: String,
                required: true
            },
             emailAddress: {
                type: String,
                required: true
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false
            }
        },

        data() {
           return{
           detailsAreVisible: false,
            friend: {
                id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '0123 45678 90',
                        email: 'manuel@localhost.com'
            },
            friendIsFavorite: this.isFavorite 
        };
        },

        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },

            toggleFavorite() {
                this.friendIsFavorite === !this.friendIsFavorite;
            }
        }

    }
</script>

<style>
    button {
    border:0;
    background-color:palevioletred;
    color: white;
    padding:5px;
    margin-bottom: 15px;
    width: 100px;
}

.pe1 {
    width: 80%;
    margin: auto;
    border:1px solid #ccc;
    border-radius: 5px;
    box-shadow: 1px 0 5px 1px #ccc;
    padding: 10px;
    margin-bottom: 20px;
}

hr {
    width: 90%;
    height: 2px;
    background-color: #ccc;
    border:0;
    margin-bottom: 15px;
}
h2 {
    margin-block-end: 0;
    color:rgb(91, 21, 156);
}


</style>
