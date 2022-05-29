<template>
  
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
     

      
        <v-text-field
          v-model="displayname"
          
          label="ชื่อที่แสดงในเว็บไซต์"
          required
        ></v-text-field>
      
      
      
      <v-radio-group
      v-model="radios"
      mandatory
      
    >
      <v-radio
        label="นักท่องเที่ยว"
        value="user"
      ></v-radio>
      <v-radio
        label="นางแบบ"
        value="model"
      ></v-radio>
    </v-radio-group>
      
      
      
        <v-checkbox
          v-model="checkbox"
          
          value="1"
          label="คุณมีอายุ 20 ปี ขึ้นไป"
          type="checkbox"
          required
        ></v-checkbox>
      

      <v-btn
        class="mr-4"
        type="submit"
        
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  
</template>
<script>
import * as auth from '@/services/authService'


  export default {
    
    data: () => ({
      username: '',
      password:'',
      displayname:'',
      radios:null,
      checkbox: null,
    }),

    methods: {
      submit: async function () {
        
        const user = {
             username: this.username,
             password: this.password,
             name: this.displayname,
             level: this.radios,
             status: this.checkbox
         }
         
         const registerPromise = auth.registerUser(user)
         await Promise.all([registerPromise])
         this.$router.push({path:'/login'})
      },
      clear () {
        this.username = ''
        this.password = ''
        this.displayname = ''
        this.checkbox = null
        
      },
    },
  }
</script>