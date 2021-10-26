<template>
    <section>
        <header><h1>My Friends</h1></header>
        <ul>
          <li class="list">
              <friend-contact
              v-for="friend in friends"
              :key="friend.id" 
              :name="friend.name" 
              :phone-number="friend.phone"
            :email-address="friend.email"
            :is-favorite="true"
          
          ></friend-contact></li>  
 
          <li class="list"><friend-contact
            name="Lessie Lugg" 
            phone-number="235 7048 9801"
            email-address="less@eg.com"

          ></friend-contact></li>  
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
                        email: 'manuel@localhost.com'
                    },
                    {
                        id: 'julie',
                        name: 'Julie Jones',
                        phone: '9876 54321 09',
                        email: 'julie@localhost.com'
                    }

                ]
            }
        }
    }
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
