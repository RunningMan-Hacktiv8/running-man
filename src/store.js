import Vue from 'vue'
import Vuex from 'vuex'
import database from '@/firebase/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    roomName: '',
    rooms: '',
    player1: '',
    player2: ''
  },
  mutations: {
    setUsername (state, payload) {
      state.username = payload
    },
    setRoomname (state, payload) {
      state.roomName = payload
    }
  },
  actions: {
    create (context) {
      database.ref('rooms/').on('value', function (snapshot) {
        context.dispatch('toCreate', snapshot.val())
      })
    },
    toCreate (context, payload) {
      this.state.rooms = Object.values(payload)
      let dataRooms = this.state.rooms
      let status = false
      let self = this
      for (let i = 0; i < dataRooms.length; i++) {
        if (dataRooms[i].roomName === self.state.roomName) {
          status = true
        }
      }
      if (!status) {
        database.ref('rooms/' + self.state.roomName + '/player1').set({
          username: self.state.username,
          position: 0
        }, function (err) {
          if (err) console.log(err)
          self.state.player1 = self.state.username
          console.log('berhasilll')
          console.log(self.state.player1)
        })
      }
    }
  }
})
