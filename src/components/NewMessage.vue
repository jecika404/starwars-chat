<template>
    <div class="newMessage">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message:</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="red-text" v-if="feedbeck">{{feedbeck}}</p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            feedbeck: null
        }
    },
    methods: {
        addMessage() {
            if(this.newMessage) {
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                })
                this.newMessage = null
                this.feedback = null
            }else {
                this.feedbeck = 'You must enter a message in order to send one'
            }
        }
    }
}
</script>