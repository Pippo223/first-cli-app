<template>
    <section>

        <base-dialogue v-if="deleteClicked" title="Confirm Delete" 
        @no="noDelete">
            <template #default>
               <p> Are you sure you want to delete this contact?</p>
            </template>

            <template #actions>
                <button id="yes" @click="deleteContact">Yes</button>
                <button id="no" @click="noDelete">No</button>
            </template>

        </base-dialogue>

        <header><h1>My Friends</h1></header>


    <new-friend class="list" @add-contact="addContact"></new-friend>
        <ul>
          <li class="list" v-for="friend in friends" :key="friend.id" >
              <friend-contact
              :id="friend.id"
              :name="friend.name" 
              :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favorite="friend.isFavorite"
            @toggle-favorite="toggleStatus"
            @delete="confirmDelete"
          
          ></friend-contact>
          </li>  
        </ul>

    </section>
</template>

<script>
import BaseDialogue from './components/BaseDialogue.vue';
    export default {
  components: { BaseDialogue },
        data() {
            return {
                friends: [
                    {
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '0123 45678 90',
                        email: 'manuel@localhost.com',
                        isFavorite: true
                    },
                    {
                        id: 'julie',
                        name: 'Julie Jones',
                        phone: '9876 54321 09',
                        email: 'julie@localhost.com',
                        isFavorite: false
                    }

                ],

                deleteClicked: false,
                idxTracker: 0
            }
        },

        provide() {
    return {
                confirmDelete: this.confirmDelete
            }
        },

        methods: {
            toggleStatus(id) {
               const identifiedFriend = this.friends.find(friend => friend.id === id)
               identifiedFriend.isFavorite = !identifiedFriend.isFavorite; 
            },

            addContact(name, phone, email, isFav) {
                const newFriend = {
                    id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
                    // id: new Date().toISOString()
                    name: name,
                    phone: phone,
                    email: email,
                    isFavorite: isFav
                };
                if(newFriend.name && newFriend.phone && newFriend.email) {
                    this.friends.unshift(newFriend);
                }
                else {alert('One ore more fields are empty!')}
           },

           confirmDelete(id) {
               this.deleteClicked = true;
               this.idxTracker = this.friends.findIndex((fr) => fr.id === id);
               console.log(this.idxTracker)
           },

           deleteContact() {
              //const fid = this.friends.findIndex(fr => fr.id === id);
              
              this.friends.splice(this.idxTracker, 1)
              
              //this.friends = this.friends.filter(friend => friend.id !== id);
              //console.log(this.friends.length);
           },

           noDelete() {
               this.deleteClicked = false;
           }
        }
    };
</script>

<style>
    header{
    width: 50%;
    margin:auto;
    background-color:rgb(91, 21, 156);
    text-align: center;
    padding: 20px 0;
    border-radius: 10px;
    color: white;
    margin-bottom: 40px;
}

 ul{
    list-style: none;
    padding-inline-start: 0;
} 
.list {
    width: 50%;
    margin: auto;
    text-align:center;
    border:1px solid #ccc;
    border-radius: 10px;
    box-shadow: 1px 0 5px 1px #ccc;
    margin-bottom: 20px;
}

p{
    text-align: center;
}

#yes{
    background-color: yellowgreen;
}

#yes:hover{
    background-color: green;
}

</style>
