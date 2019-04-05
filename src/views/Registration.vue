<template>
  <div class="login">
    <div class="container">
    <form class="row">
      <div class="col-12">
        <img src="">

        <div class="form-group"> 
          <label>Photo</label>
        <input @change="handlePhotoUpload($event)" class="form-control" type="file"  placeholder="Picture (optional)">
        </div>

        <div class="form-group">
          <label>Name of your business</label>
        <input v-model="name" class="form-control" type="text"  placeholder="Name of your business" req>
        </div>

        <div class="form-group">
          <label>Description</label>
          <input v-model="description" class="form-control" type="text"  placeholder="Description">

        </div>
        
        <div class="form-group">
          <label>Address</label>
          <input v-model="address" class="form-control" type="text"  placeholder="Address">

        </div>

        <div class="form-group">
          <label>Email</label>
          <input v-model="email" class="form-control" type="email"  placeholder="Email">

        </div>
        
        <div class="form-group">
          <label>Password</label>
          <input v-model="password" class="form-control" type="password" placeholder="Password">

        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input v-model="password" class="form-control" type="password" placeholder="Password">

        </div>

        <div class="form-group">
          <label>Trade licence</label>
          <input @change="handlePhotoUpload($event)" class="form-control" type="file"  placeholder="Trade licence">
        </div>


        <button  class=" btn btn-primary ">Register</button>
      
      </div>
     
    </form>
    </div>
    
    
  </div>
</template>

<script>
import axios from 'axios';
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
        confirmPassword:'',
        address:'',
        message:''
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