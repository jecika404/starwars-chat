<template>
    <div class="chat container">
        <h2 class="center green-text">Star Wars Chat</h2>
        <h4 class="center green-text text-darken-3">May the force be with you...</h4>
        <div class="card  grey lighten-4">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="green-text name" >{{message.name}}</span><br>
                        <span class="grey-text text-darken-3 message" >{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>   
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added') {
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style>
.chat h2 {
    font-size: 2em;
    margin: 10px 0 0 0;
}
.chat h4 {
    font-size: 1.5em;
    margin-bottom: 30px;
}
.chat .name {
    font-size: 1.4em !important;
}
.chat .message {
    font-size: 1em;
}
.chat .time {
    display: block;
    font-size: 0.8em;
}

.messages {
    max-height: 300px;
    overflow: auto;
}
.messages::-webkit-scrollbar {
    width: 3px;
}
.messages::-webkit-scrollbar-track {
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
    background: #aaa;
}
</style>