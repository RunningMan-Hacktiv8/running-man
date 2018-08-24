<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">Create Room</button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-info" @click="toList">Join Room</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    toList(){
      router.push('/listRoom')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
