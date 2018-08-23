<template>
  <div class="about">
    <!-- <div class="track-field"> -->
      <div class="players">

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

    

    <button id="player1-button" @click="counterPlayer1">run-player-1</button>
    
    <button id="player2-button" @click="counterPlayer2">run-player-2</button>

  </div>
</template>



<script>
const soundMarioWin =
  "https://themushroomkingdom.net/sounds/wav/mparty8/mparty8_mario_10.wav";
const soundMarioStart =
  "https://themushroomkingdom.net/sounds/wav/sm3dl/sm3dl_mario_here_we_go.wav";

export default {
  data: function() {
    return {
      position1: 0,
      position2: 0
    };
  },

  methods: {
    counterPlayer1: function() {
      this.position1 += 1;
      if (this.position1 >= 100) {
        alert("menang bro");
      }
      console.log(this.position1);
    },

    counterPlayer2: function() {
      this.position2 += 1;
      if (this.position2 >= 100) {
        alert("menang bro");
      }
      console.log(this.position2);
    },

    say: function(msg) {
      alert(msg);
    }
  },
  mounted() {
    let that = this;
    let that2 = this;

    window.addEventListener("keypress", function(e) {
      if (e.keyCode == 32) {
        console.log(that.position1);

        that.position1 += 1;
        if (that.position1 >= 100) {
          alert("menang bro");
          var audio = new Audio(sound);
          audio.play();
        }
      }

      if (e.keyCode == 49) {
        console.log(that2.position2);

        that2.position2 += 1;

        if (that2.position2 >= 100) {
          var audio = new Audio(soundMarioWin);
          audio.play();
        }
        if (that2.position2 < 2) {
          var audio = new Audio(soundMarioStart);
          audio.play();
        }
      }
    });
  }
};
</script>


<style>
.about {
  background-image: url("https://i.imgur.com/cGtTiIx.png");
  border: solid ;
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
.about {
  /* background-image:url("./assets/nigth-track.js") */
}
</style>
