<template>
  <div class="login">
    <div class="container">
    <form class="row" @submit="login()">
      <div class="col-8">
        <img src="">
        <div v-if="message" class="alert alert-danger">{{message}}</div>
        <input v-model="email" class="form-control" type="email"  placeholder="Email" required>
        <input v-model="password" class="form-control" type="password" placeholder="Password" required>
        <button  @click="goToRegistration" class="col-4 btn btn-primary">Register</button>
        <input type="submit" value="login"  class="col-4 btn btn-success">
      
      </div>
     
    </form>
    </div>
    
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  components: {
    
  },
  data(){
    return {
      email:'',
      password:'',
      message:''
    }
  },
  methods:{
    login(e){
      e.preventDefault()
    },
    goToRegistration(){
      this.$router.push('/registration')
    },
    login(){
      
      var loginInfo = {
        email:this.email,
        password: this.password
      }
      const response = axios.post('http://localhost:3000/login?role=ServiceProvider',loginInfo)
      .then((data)=>{
        console.log(data.data.token);
        localStorage.setItem('token',data.data.token);
        this.$router.push('/home')
      })
      .catch((err)=>{
        if(err){
          this.message = err.message
        }
        console.log(err)
      })

}
  }
}
</script>

<style scoped>

.login{
  background:#f4f4f4;
  height: 100vh;
}
input{
  margin: 4px;
}


</style>