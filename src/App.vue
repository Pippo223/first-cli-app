<template>
    <section>
        <header><h1>My Friends</h1></header>
    </section>

<section>
    <new-friend class="list" @add-contact="addContact"></new-friend>
</section>


<section>
        <ul>
          <li class="list" v-for="friend in friends" :key="friend.id" >
              <friend-contact
              :id="friend.id"
              :name="friend.name" 
              :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favorite="friend.isFavorite"
            @toggle-favorite="toggleStatus"
            @delete="deleteContact"
          
          ></friend-contact>
          </li>  
 
          <!-- <li class="list"><friend-contact
            name="Lessie Lugg" 
            phone-number="235 7048 9801"
            email-address="less@eg.com"

          ></friend-contact></li>   -->
        </ul>

    </section>
</template>

<script>
    export default {
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

                ]
            }
        },

        methods: {
            toggleStatus(id) {
               const identifiedFriend = this.friends.find(friend => friend.id === id)
               identifiedFriend.isFavorite = !identifiedFriend.isFavorite; 
            },

            addContact(name, phone, email) {
                const newFriend = {
                    id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
                    // id: new Date().toISOString()
                    name: name,
                    phone: phone,
                    email: email,
                    isFavorite: false
                };
                //if(newFriend.name && newFriend.phone && newFriend.email) {
                    this.friends.push(newFriend);
               // }
               // else {alert('One ore more fields are empty!')}
           },

           deleteContact(id) {
               this.friends = this.friends.filter(friend => friend.id !== id);
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

</style>
