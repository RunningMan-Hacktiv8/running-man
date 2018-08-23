<template>
  <div class="about">
    <div class="track-field">
      km: {{ position1 }}
    <div class="player1">
      <img src="../assets/kisspng-sonic-the-hedgehog-2-mario-tails-metal-sonic-pixel-5ac493b33cdba2.7782679115228323072493 (1).png" alt="" v-bind:style="{ marginLeft: position1 + 'px' }">
    </div>
      km: {{ position2 }}
    <div class="player2">
      <img src="../assets/kisspng-super-mario-advance-4-super-mario-bros-3-super-m-mario-5abb95e6e038c3.9712500315222430469184 (1).png" alt="" v-bind:style="{ marginLeft: position2 + 'px' }">
    </div>
    </div>
    <button id="player1-button" @click="counterPlayer1">run</button>
    <button id="player2-button" @click="counterPlayer2">run</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      position1: 0,
      position2: 0
    };
  },
  methods: {
    counterPlayer1: function() {
      this.position1 += 5;
      console.log(this.position1);
    },

    counterPlayer2: function() {
      this.position2 += 5;
      console.log(this.position2);
    },


    say: function(msg) {
      alert(msg);
    }
  }
};
</script>


<style>
.track-field {
  border: red solid 2px;
}

.player1 {
  position: relative;
  animation: MoveUpDown 0.1s linear infinite;
  margin-right: 80em;

  z-index: 999;
}

.player2 {
  position: relative;
  animation: MoveUpDown 0.1s linear infinite;
  margin-right: 80em;

  z-index: 999;
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
