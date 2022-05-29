<template>
  <v-layout column justify-center align-center>

    <v-row class="align-items-start">
      <v-col v-for="post in posts" :key="post.id" style="float:left; margin-right:30px; margin-top:30px;">
        <div class="box-img" style=" font-size: 13px;">
          <nuxtLink :to="{name:'post-id',params:{id:post.id}}" class="custom-link"
            ><img
              style="height: 320px; width: 200px;"
              :src="imagelnk+post.image1"
              class="img-member-new"
            />

            <div class="box-super-star">
              <v-row class="align-items-start">
                <v-col style="float:left;">
                  <p>SUPER STAR</p>
                </v-col>
                <v-col style="float:right;">
                  <p>ยืนยันตัวตน</p>
                </v-col>
              </v-row>
            </div>
            <div class="tag-location"><p>{{post.area}}</p></div>
            <div
              class="text-d-1"
              style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; word-break: break-all; text-overflow: ellipsis; -webkit-line-clamp: 1;"
            >
              <p>{{post.name}}</p>
            </div>
            <div v-if="post.sex =='female'" class="text-d-4 ">
              <p>หญิง</p>
            </div>
            <div v-if="post.sex =='male'" class="text-d-4 ">
              <p>ชาย</p>
            </div>
            <div class="box-super-star">
              <v-row class="align-items-start">
                <v-col  style="float:left;">
                  <p>อายุ {{post.age}}</p>
                </v-col>
                <v-col style="float:right;">
                  <p>฿ {{post.price}}</p>
                </v-col>
              </v-row>
            </div>
          </nuxtLink>
        </div>
      </v-col>
      
      
      
     
      
     
      
    </v-row>
  </v-layout>
</template>

<style>
a {
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  transition: 0.3s;
}

a:hover {
  box-shadow: 0 0 2px 1px rgba (0, 140, 186, 0.5);
}
p{
  color: black;
}
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import * as postService from '@/services/postServices'
export default {
  
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
    posts:[],
    currentPostId:null,
    imagelnk:'http://206.189.154.219:8085/images_post/'
  }),
  async mounted() {
    const response = await postService.getAllPosts()
    console.log(response.data.response[0])
    this.posts = response.data.response
  },
}
</script>
