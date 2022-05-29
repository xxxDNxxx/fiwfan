<template>
  <div>
      <div v-if="post">
    <div style="width:400px">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div align-self="end">
      <v-container>
        <v-row>
          <v-col align-self="end">
            <h3>{{post.name}}</h3>
            <p>{{post.province}}</p>
            <p>{{post.area}}</p>
            <h4>{{post.price}}/งาน</h4>
            <p v-if="post.sex == 'female'">ผู้หญิง|<span>อายุ:{{post.age}}ปี</span></p>
            <p v-if="post.sex == 'male'">ผู้ชาย|<span>อายุ:{{post.age}}ปี</span></p>
            <p>ส่วนสูง:{{post.height}}|<span>น้ำหนัก:{{post.weight}}</span></p>
            <p>สัดส่วน:{{post.chest}}/{{post.waist}}/{{post.hip}}</p>
            <v-btn color="success" elevation="2" x-large>{{post.line}}</v-btn>
            <v-btn color="grey" elevation="2">{{post.agency}}</v-btn>
            <v-spacer></v-spacer>
            <h3>
                รายละเอียดเพิ่มเติม
                <p>
                    {{post.detail}}

                </p>
            </h3>
          </v-col>
        </v-row>
        <v-row>
        <h3>{{imagelnk+post.image1}}</h3>
        </v-row>
      </v-container>
    </div>
    </div>
  </div>
</template>
<script>
import * as postService from '@/services/postServices'
export default {
  data() {

    return {
      post:null,
      imagelnk:"http://206.189.154.219:8085/images_post/",
      
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
  async mounted() {
      const response = await postService.getPostById(this.$route.params.id)
      console.log(response.data.response)
      this.post = response.data.response
      
  },
}
</script>
