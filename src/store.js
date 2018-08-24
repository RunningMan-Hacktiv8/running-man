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
    player2: '',
    statusPlayer1: true,
    playerOnRoom: ''
  },
  mutations: {
    setUsername (state, payload) {
      state.username = payload
    },
    setRoomname (state, payload) {
      state.roomName = payload
    },
    setListRooms (state, payload) {
      state.rooms = payload
    },
    setPlayerOnRoom (state, payload) {
      state.playerOnRoom = payload
    }
  },
  actions: {
    getlistRoom (context) {
      database.ref('rooms/').on('value', function (snapshot) {
        var roomArray = []
        var result = snapshot.val()
        for (var key in result) {
          var players = []
          for (var keyPlay in result[key]) {
            players.push({[keyPlay]: result[key][keyPlay]})
          }
          roomArray.push({[key]: players})
        }
        context.commit('setListRooms', roomArray)
      })
    },
    toCreate (context, payload) {
      let dataRooms = this.state.rooms
      let status = false
      let self = this
      for (let i = 0; i < dataRooms.length; i++) {
        for (var key in dataRooms[i]) {
          if (key === self.state.roomName) {
            console.log(dataRooms[i][key])
            status = true
            self.state.username = ''
            alert('room name alreaady used')
          }
        }
      }
      if (!status) {
        console.log(self.state.roomName)

        database.ref('rooms/' + self.state.roomName + '/player1').set({
          username: self.state.username,
          position: 0
        }, function (err) {
          //     if (err) console.log(err)
          self.state.player1 = self.state.username
          self.state.username = ''
          console.log('berhasilll')
          //     console.log(self.state.player1)
        })
      }
    },
    JoinRoom (context, payload) {
      let self = this

      swal('Write something here:', {
        content: 'input'
      })
        .then((value) => {
          for (var key in payload) {
            database.ref('rooms/' + key + '/player2').set({
              username: value,
              position: 0
            }, function (err) {
              //     if (err) console.log(err)
              self.state.player2 = value
              context.commit('setRoomname', key)          
              self.state.statusPlayer1 = false
              console.log('berhasilll')
              //     console.log(self.state.player1)
            })
          }
        })
    }
    // playGame (context, payload) {
    //   // let status = false
    //   context.dispatch('getlistRoom')
    //   console.log("masuk play",this.state.rooms.length);
    //   console.log(this.state.rooms);
      
    //   // let self = this
    //   // for (let i = 0; i < this.state.rooms.length; i++) {
    //   //   for (var key in this.state.rooms[i]) {
    //   //     if (key === this.state.roomName) {
    //   //       var test = "jhjhadkfhj"
    //   //       console.log("masuk");
            
    //   //       context.commit('setPlayerOnRoom', test)            
    //   //     }
    //   //   }
    //   // }
    // }

  }
})
