<template>
<div>
    <h1>Login</h1>
  
    <form @submit.prevent="submit" class="box-login">
      
        <v-text-field
          v-model="username"
          
          label="ชื่อผู้ใช้/Username"
          required
        ></v-text-field>
      
      
        <v-text-field
          v-model="password"
          type="password"
          
          label="รหัสผ่าน"
          required
        ></v-text-field>
      
      
      <v-btn
        class="mr-4 btn-success "
        type="submit"
        
      >
        Login
      </v-btn>
      
    </form>
  
  </div>
</template>

<script>
import * as auth from '@/services/authService'


  export default {
    
    data: () => ({
      username: '',
      password:'',
      
    }),

    
  }
</script>
<style>
h1{
      color: rgb(14 43 129);
}

label {
      color: #1976d2 !important;
}
.btn-success {
    background-color: #ffb700 !important;
    border-color: #ffd952 !important;
}.box-login{
    color: #1976d2;
    padding: 1rem;
    background: #ffffff;
    border-radius: 15px;
    border: 1px solid #b6dbff;
    box-shadow: 7px 5px 8px #8c99a9;
    margin-top: 1rem;
}
</style>