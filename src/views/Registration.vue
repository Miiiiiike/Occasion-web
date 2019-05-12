<template>
  <div class="registration valign-wrapper">
    <div class="container">
    <form class="row">
      <div class="col s12 l6 offset-l3 m6 offset-m3 card">
        <!-- <img src=""> -->
        
        <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file" @change="handleFileUpload()">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>

        
        <div class="input-field">
          <label for="name">Name of your business</label>
          <input v-model="name" id="name" class="form-control" type="text" req>
        </div>

        <div class="input-field">
          <label for="description">Description</label>
          <input v-model="description" id="description" class="form-control" type="text">

        </div>
        
        <div class="input-field">
          <label for="address"> Address</label>
          <input v-model="address" id="address" class="form-control" type="text"  >

        </div>

        <div class="input-field">
          <label for="email">Email</label>
          <input v-model="email" id="email" class="form-control" type="email">

        </div>
        
        <div class="input-field">
          <label for="password">Password</label>
          <input v-model="password" id="password" class="form-control" type="password">

        </div>
        <div class="input-field">
          <label for ="confirm_password">Confirm Password</label>
          <input v-model="password2" id="confirm_password" class="form-control" type="password">

        </div>

 <div class="input-field">
          <label for ="phonenumber">Phonenumber</label>
          <input v-model="phonenumber" id="phonenumber" class="form-control" type="text">

        </div>

        <div>
          <label>Trade licence</label>
          <br>
          <div class="file-field input-field">
            <span class="btn">Upload </span>
          <input @change="handlePhotoUpload($event)" class="form-control" type="file"  placeholder="Trade licence">

          </div>
        </div>


        <button @click="register"  class="btn btn-primary center-align col s4 offset-s4">Register</button>
      
      </div>
     
    </form>
    </div>
    
    
  </div>
</template>

<script>
import axios from 'axios';
const config = require ('../config.js');

export default {
  name: 'Registration',
  components: {
    
  },
  data(){
    return {
        photo:null,
        name:'',
        description:'',
        email:'',
        password:'',
        password2:'',
        phonenumber:'',
        confirmPassword:'',
        address:'',
        message:'',
    }
  },
  methods:{
    login(e){
      e.preventDefault()
    },
    handlePhotoUpload(e){
        console.log(e);
        this.file = this.$refs.file.files[0];
    },
    uploadPic(){
        let formData = new FormData();
        formData.append('file',this.file);
        axios.post( '/single-file',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).then(function(){
        console.log('SUCCESS!!');
        })
        .catch(function(){
        console.log('FAILURE!!');
        });
    },
    register(e){
        e.preventDefault();
        axios.post(`${config.BACKEND_SERVER_IP}/serviceproviders/request`,
        {name:this.name,
        description:this.description,
        email:this.email,
        password:this.password,
        phonenumber:this.phonenumber,  
        address:this.address})
        .then((response)=>{
          console.log(response.data.token);
          localStorage.setItem('token',response.data.token);
          this.$router.push('/login')
        })
        .catch((err)=>{
          if(err){
            this.message = err.message
          }
          console.log(err)
        })
    }
  },
  handlePhotoUpload(){
    this.photo = this.$refs.file.files[0];
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
.btn{
  margin: 16px;
}

.registration{
  background: url("../assets/balloons.jpg");
  background-size:cover;
  height: 100vh;
}


</style>