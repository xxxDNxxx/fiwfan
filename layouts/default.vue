<template>
  <v-app class="bg-main" dark>

    <v-app-bar :clipped-left="clipped" fixed app class="bg-head">


      <img src="https://www.citizensmn.bank/assets/files/PK9sr79g/woohoo-logo-200px.png" alt="" style="height:4rem;">
      <!-- <v-btn to="/logo" style=" color: #22269e; background-color: #ffa90a;"  button>
        <h3><img src="https://www.citizensmn.bank/assets/files/PK9sr79g/woohoo-logo-200px.png" alt=""></h3>
      </v-btn> -->
      <v-toolbar-title class="head-title" v-text="title" />
      <v-spacer></v-spacer>
      <v-btn
      rounded
      color="primary"
      dark
      v-if="isLoggedin"
     
    >
      {{user}}
    </v-btn>
      <v-btn
      rounded
      color="error"
      dark
      @click="userLogout"
      v-if="isLoggedin"
     
    >
      ออกจากระบบ
    </v-btn>
    <div v-else>
      <v-btn
      
      rounded
      color="primary"
      dark
      to="/login"
    >
      เข้าสู่ระบบ
    </v-btn>
    <v-btn
      
      to="/register"
      rounded
      color="error"
      dark
     
    >
      สมัครสมาชิก
    </v-btn>
    </div>



    </v-app-bar>
    <v-main style="padding:unset;">
      <v-container style="">
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app class="bg-foot">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: this.$auth.user,
      isLoggedin:this.$auth.loggedIn,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],

      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Woohoo'
    }
  },
  
      methods: {
        async userLogout() {
          await this.$auth.logout()
          this.$router.push('/login');
        },
      },
      
}
</script>
<style scoped>
* {
  font-family: 'prompt';
}

.bg-main {
  background: rgb(255, 255, 255);
}

/* .bg-head{
  background: #1b2c6c!important;
  border-radius: 0px 0px  10px 10px !important;
}*/
.bg-foot {
  background: #1b2c6c !important;
}

.bg-head {
  background: #ffffff !important;
  border-top: 1rem solid rgb(25, 26, 92);
  flex: unset;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: sticky;
  height: unset !important;
  box-shadow: -3px -4px 0px 0px rgb(0 0 0 / 9%), 0px 4px 5px 0px rgb(0 0 0 / 3%), 0px 1px 10px 0px rgb(0 0 0 / 13%) !important;
}

.head-title {
  margin-right: 3rem;
  margin-left: 1rem;
  color: rgb(14 43 129);
  font-size: 35px;
  font-weight: 500;
  background: #ffffff !important;
}

.bg-white {
  background: #ffffff !important;
}

link {
  color: white;
  margin: 1rem;
  border-style: none;
}
</style>