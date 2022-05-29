<template>
  <v-app class="bg-main" dark>
    
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="bg-head"
    >
      
      
      
      
      <v-toolbar-title style="margin-right:100px;" v-text="title" />
      
       <v-btn to="/logo" style="margin-right:15px;"  button>
        <h3>โลโก้</h3>
      </v-btn>
      
      
    </v-app-bar>
    <v-main>
      <v-container style="margin:0;">
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
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
    <v-footer
      :fixed="fixed"
      app
      class="bg-head"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
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
      title: 'Fiwfan'
    }
  }
}
</script>
<style scoped>
.bg-main{
background: rgb(202,200,231);
background: linear-gradient(180deg, rgba(202,200,231,1) 0%, rgba(0,0,103,1) 10%, rgba(72,72,176,1) 57%, rgba(0,212,255,1) 100%);
}
.bg-head{
  background: rgb(202,200,231);
background: linear-gradient(0deg, rgba(202,200,231,1) 0%, rgba(0,0,103,1) 10%, rgba(72,72,176,1) 57%, rgba(0,212,255,1) 100%);
}
link{
  color:white;
  margin: 1rem;
  border-style: none;
}
</style>