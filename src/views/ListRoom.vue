<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4" style="margin-bottom:5%" v-for="(room, index) in rooms" :key="index">
				<div class="card" style="width: 18rem;" >
					<div class="card-body" v-for = "(nameRoom, key) in room" :key="key">
						<h2 class="card-title">{{key}}</h2>
						<h5>{{nameRoom.length}}/2</h5>
						<div v-if='nameRoom.length==2'>
							<p style="color:red" >room penuh</p>
						</div>
						<div v-else>
							<button type="button" class="btn btn-info" @click="JoinRoom(room)">Join</button>
						</div>
					</div>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
	name:'listRoom',
	data(){
	return{
		statusRoom: true
	}
	},
	computed:{
	...mapState([
		'rooms'
	])
	},
	created(){
	this.getlistRoom()
	},
	methods:{
	...mapActions([
		'getlistRoom',
		'JoinRoom'
	])}
}
</script>

<style>

</style>
