<template>
  <div class="login valign-wrapper">
    <div class="container">
    <form class="row"  @submit="login">
      
      <div class="col l4 m4 s10 offset-s1 offset-m4 offset-l4 login-form card">
        <!-- <img src="../assets/logo.png" class=" col l12 m10 offset-m1 s12"> -->
        <div v-if="message" class="alert alert-danger">{{message}}</div>
        
        <div class="input-field">
          <label for="email">Email</label>
          <input v-model="email" id="email"  type="email"  required>
        </div>

        <div class="input-field">
          <label for="password">Password</label>
          
          <input v-model="password" id="password" class="input-field" type="password"  required>


        </div>

        <div class="col s10 m10 l10 offset-l1 offset-m1 offset-s1 buttons">
          <button  @click="goToRegistration" class=" btn blue ">Register</button>
          <input type="submit" value="login"  class=" btn green ">
        </div>
        
      
      </div>
     
    </form>
    </div>
    
    
  </div>
</template>

<script>
import axios from 'axios'
const config = require ('../config.js');

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
    
    goToRegistration(){
      this.$router.push('/registration')
    },
    login(e){
      e.preventDefault()
      
      var loginInfo = {
        email:this.email,
        password: this.password
      }
      axios.post(`${config.BACKEND_SERVER_IP}/login?role=ServiceProvider`,loginInfo)
      .then((response)=>{
        console.log(response.data.token);
        localStorage.setItem('token',response.data.token);
        this.$router.push('/offers')
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

.login-form{
  padding: 16px;
  
}

.buttons{
  margin:16px 0px 16px 0px;
}


input[type=email]{
  margin: 16px;
}
.login{
  background: url("../assets/login-bg.jpg");
  background-size:cover;
}

</style>