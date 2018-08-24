<template>
  <div class="about">
    <audio id=“audio”  autoplay>
   <source src="http://66.90.93.122/ost/super-mario-bros-2/amokcrqa/03%20-%20Super%20Mario%20Bros%202%20Main%20Theme.mp3"/>
    </audio>
    <!-- <div class="track-field"> -->

      
      <div class="players">
          <!-- {{playerOnRoom}} -->
          <button @click="getPositionFB">clickk</button>
          <div class="player1">
              km: {{ position1 }}
            <img src="../assets/kisspng-sonic-the-hedgehog-2-mario-tails-metal-sonic-pixel-5ac493b33cdba2.7782679115228323072493 (1).png" alt="" v-bind:style="{ marginLeft: position1 + '%' }">
          </div>
          
          <div class="player2">
              km: {{ position2 }}
            <img src="../assets/kisspng-super-mario-advance-4-super-mario-bros-3-super-m-mario-5abb95e6e038c3.9712500315222430469184 (1).png" alt="" v-bind:style="{ marginLeft: position2 + '%' }">
          </div>
          
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
const soundMarioWin =
  "https://themushroomkingdom.net/sounds/wav/mparty8/mparty8_mario_10.wav";
const soundMarioStart =
  "https://themushroomkingdom.net/sounds/wav/sm3dl/sm3dl_mario_here_we_go.wav";

const soundSonicWin =
  "https://wingless-seraph.net/sound/voice/31_jakigan_win.wav";
const soundSonicStart =
  "https://wingless-seraph.net/sound/voice/03_jakigan_before.wav";

const runAudio =
  "https://themushroomkingdom.net/sounds/wav/smb3/smb3_stomp.wav";

import { mapState, mapActions } from "vuex";
import database from '@/firebase/firebase.js'

export default {
  data: function() {
    return {
      position1: 0,
      position2: 0
    };
  },
  created(){
    // this.playGame()
    this.getPositionFB()
  },
  computed: {
    ...mapState(["statusPlayer1","rooms","roomName","player1","player2"])
  },
  methods: {
    ...mapActions([
      'getlistRoom'
    ]),
    playGame(){
      this.getlistRoom()
      this.playerOnRoom = this.rooms
      // for (let i = 0; i < this.rooms.length; i++) {
      //   for (var key in this.rooms[i]) {
      //     for( let j = 0; j < this.rooms[i][key].length; j++){
      //       for (var keyPlay in this.rooms[i][key][j]) {

      //         this.playerOnRoom = this.rooms[i][key][j][keyPlay]
      //         console.log("masuk");
      //       }
      //     }
      //     // if (key === this.state.roomName) {
            
      //       // context.commit('setPlayerOnRoom', test)            
      //     // }
      //   }
      // }
    },
    getPositionFB(){
      let self = this
      database.ref(`rooms/${self.roomName}`).on('value', function (snapshot) {
        var players = snapshot.val()
        self.position1 = players.player1.position
        self.position2 = players.player2.position
      })
    }
  },
  mounted() {
    // this.playGame()
    let that = this;
    let that2 = this;
    window.addEventListener("keypress", function(e) {
      //Sonic
      if (that.statusPlayer1) {
        if (e.keyCode == 32) {
          console.log("position player 1",that.position1);
          if(that.position1<90){

            database.ref('rooms/'+that.roomName+'/player1').set({
              username: that.player1,
              position: that.position1 + 2
            },function(err){
              if(err){
                console.log(err);
              }
              else{
                  // that.position1 += 2;
                  var run = new Audio(runAudio);
                  run.play();
              }
            })
            
          }
          if (that.position1 == 90) {
            var audio = new Audio(soundSonicWin);
            audio.play();
            alert("player 1 win");
          }
          if (that.position1 == 2) {
            var audio = new Audio(soundSonicStart);
            audio.play();
          }
        }
      //Mario
      } else if (!that2.statusPlayer1) {
        if (e.keyCode == 32) {
          console.log(that2.position2);
          if(that.position2<90){
            database.ref('rooms/'+that.roomName+'/player2').set({
              username: that.player2,
              position: that.position2 + 2
            },function(err){
              if(err){
                console.log(err);
              }
              else{
                var run = new Audio(runAudio);
                run.play();
              }
            })
          }        

          if (that2.position2 == 90) {
            var audio = new Audio(soundMarioWin);
            audio.play();
            alert("player 2 win");
          }
          if (that2.position2 == 2) {
            var audio = new Audio(soundMarioStart);
            audio.play();
          }
        }
      } else if (that.position1 == 90 || that2.position2 == 90) {
        this.$router.push('/')
      }
    });
  }
};
</script>


<style>
.about {
  background-image: url("https://i.imgur.com/cGtTiIx.png");
  border: solid;
  height: 800px;
}

img {
  position: absolute;
  z-index: -1;
}

.players {
  margin-top: 440px;
  /* border: red solid 2px; */
}

.player1 {
  position: relative;
  animation: MoveUpDown 0.1s linear infinite;
  margin-bottom: 10px;
  z-index: 998;
}

.player2 {
  position: relative;
  animation: MoveUpDown 0.1s linear infinite;
  margin-top: 160px;
  z-index: 900;
}
@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 0;
  }
  50% {
    bottom: 5px;
  }
}
</style>
