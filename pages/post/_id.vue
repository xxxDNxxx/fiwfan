<template>
  <div >
      <div v-if="post" class="detail-col">
    <div class="img-member-post ">
      <v-carousel>
        <v-carousel-item class="img-border"
          v-for="(item, i) in items"
         
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div align-self="end" class="text-detail">
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
            
            <v-btn class="btn-success" color="" elevation="2" x-large>{{post.line}}</v-btn>
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
        <!-- <v-row>
        <h3>{{imagelnk+post.image1}}</h3>
        </v-row> -->
      </v-container>
    </div>
    </div>
  </div>
</template>
<style>

.img-member-post  {
     width: 50%;
   height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.text-detail{
    width: 50%;
    margin-left: 2rem;
    padding: 1rem;
    background: #ccd9e4;
    border-radius: 15px;
}

.img-border{
  border-radius: 20px;
}.btn-success{
    background-color: #ffb700 !important;
    border-color: #ffd952 !important;
}
.detail-col{
  width: 100%; display: flex;
}
 @media (min-width:1919px) and (max-width:4000px) {
}

@media  (min-width:1700px) and (max-width:1919px) {
}

@media  (min-width:1024px) and (max-width:1700px) {
}

@media  (min-width:768px) and (max-width:1023px) {
   /* .detail-col{
  width: 100%; display: block;
}
.img-member-post {
     width: 100%;
    }
    .text-detail{
     width: 100%;
     margin-left: 0rem;
     margin-top: 1rem;
} */
}

@media (min-width:414px) and (max-width:767px) {
  .detail-col{
  width: 100%; display: block;
}
.img-member-post {
     width: 100%;
    }
  .text-detail{
     width: 100%;
     margin-left: 0rem;
     margin-top: 1rem;
}
}

@media  (min-width:375px) and (max-width:413px) {
    .detail-col{
  width: 100%; display: block;
}
.img-member-post {
     width: 100%;
    }
    .text-detail{
     width: 100%;
     margin-left: 0rem;
     margin-top: 1rem;
}
}

@media  (max-width:374px) {
    .detail-col{
  width: 100%; display: block;
}
.img-member-post {
     width: 100%;
    }
     .text-detail{
     width: 100%;
     margin-left: 0rem;
     margin-top: 1rem;
}
}


</style>
<script>
import * as postService from '@/services/postServices'
export default {
  data() {

    return {
     
      post:null,
      //  baseStyles:{
      // borderRadius:'20' 
      // },
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
