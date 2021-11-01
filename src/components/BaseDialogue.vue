<template>
    <teleport to="body">
     <div @click="$emit('no')">
    <dialog open> 
        <header>
            <slot name="header">
                <h2>{{ title }}</h2>
            </slot>
        </header>

        <section>
            <slot>

            </slot>
        </section>

        <menu>
            <slot name="actions">
                <!-- <button id="no" @click="$emit('no')">No</button> -->
            </slot>
        </menu>
    </dialog>
    </div>
    </teleport>
</template>

<script>
export default {
    // props: ['title'], do this or what's below
    props: {
        title: {
            type: String,
            required: false
        }
    },

    emits: ['no']
}
</script>

<style scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
}

dialog{    
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    margin: 0;
    overflow: hidden;
}

header {
    background-color: rebeccapurple;
    color: white;
    width: 100%;
    padding: 1rem;
}

header h2 {
    margin: 0;
    color: white;
}

section {
    padding: 1rem;
}

menu {
    padding: 1rem;
    display: flex;
    justify-content:center;
    margin: 0;
}

#no {
    margin-left:50px;
}



@media (min-width: 768px) {
    dialog {
        left: calc(50% - 20rem);
        width: 40rem;
    }
}




</style>