import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import database from '@/firebase/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    roomName: '',
    rooms: ''
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
        // console.log('nama room--', dataRooms[i].roomName, self.state.roomName)
        if (dataRooms[i].roomName === self.state.roomName) {
          // console.log('masuk sini nih')
          status = true
        }
      }
      if (!status) {
        // console.log('masuk create --->')
        database.ref('rooms/' + self.state.roomName).set({
          players: 1,
          roomName: self.state.roomName
        }, function (err) {
          if (err) console.log(err)
          // console.log('berhasilll')
          database.ref('users/' + self.state.username).set({
            position: 0,
            username: self.state.username
          }, function (err) {
            if (err) console.log(err)
            console.log('berhasilll create user')
            self.state.username = ''
            self.state.roomName = ''
          })
        })
      }
    }
  }
})
