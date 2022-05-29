<template>
  <v-row class="text-center" justify="center">
    <v-col cols="12" lg="3">
      

      <v-avatar size="150">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
    </v-col>
    <v-col>
        <form @submit.prevent="submit">
   <v-text-field
          v-model="displayname"
          label="ชื่อเล่น"
          required
        ></v-text-field>
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
        แก้ไข
      </v-btn>
      
    </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    displayname: '',
    username: '',
    password: '',
    
    

    nameRules: [
      v => !!v || 'form is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    
  })
}
</script>
