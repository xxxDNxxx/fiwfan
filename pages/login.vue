<template>
<div>
    <h1>Login</h1>
  
    <form @submit.prevent="submit">
      
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
        class="mr-4"
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