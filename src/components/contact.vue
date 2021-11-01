<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Fav)' : '' }}</h2>
        <hr>
         <button @click="toggleDetails">{{ detailsAreVisible  ? 'Hide Details' : 'Show Details' }}</button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="confirmDelete(idx)">Delete Friend</button>
        <ul v-if="detailsAreVisible">
            <li class="pe1"><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li class="pe1"><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
 
    </li>
</template>

<script>
    export default {
            emits: ['toggle-favorite', 'delete'],
         //props: ['id'],
            props: {
            idx: {
                type: Number,
                required: true
            },

            id: {
                type: String,
                required: true
            },
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

        inject: ['confirmDelete'],

        data() {
           return{
           detailsAreVisible: false,
            //friendIsFavorite: this.isFavorite 
        };
        },

        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },

            toggleFavorite() {
                this.$emit('toggle-favorite', this.id);
            },

            // deleteFriend() {
            //     this.$emit('delete-friend')
            // }
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
    width: 120px;
    margin-left: 10px; 
}

button:hover{
    cursor: pointer;
    background-color: rgb(251, 65, 127);
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
