<template>
<div>
  <v-layout column justify-center align-center>
<v-div class="head-col">



    <v-div class="head-text-col">
<p class="head-text">
  เปิดประสบการณ์ใหม่เร้าใจตื่นเต้นกับเรา
  <br>
   เรามีกิจกรรมต่าง ๆ ให้ผู้ใช้งานได้มีส่วนร่วม  <br>และสนุกไปด้วยกัน
</p>

</v-div>
 <v-div class="tltle-text-col">

<p class="tltle-text">
  เว็บไซต์รวบรวมน้อง ๆ ไซด์ไลน์ เลือกได้ทุกสไตล์
<br>
กินเลย์อร่อยดี แต่ถ้ากินดีต้อง Woohoo
<br>
เราเป็น Social Media Platform ที่ให้บริการเช่าพื้นที่สำหรับการโฆษณาเพื่อหาเพื่อน หาแฟน หาคนรัก หาคู่เดท หาคนเลี้ยง หาคนดูแล หาหมอนวดผ่อนคลาย เท่านั้น ไม่มีการซื้อบริการทางเพศ 
</p>


</v-div>
    </v-div>

    <v-row class="align-items-start">
      <v-col v-for="post in posts" :key="post.id" class="col-imgbox">
        <div class="box-img" style=" font-size: 13px;">
          <nuxtLink :to="{ name: 'post-id', params: { id: post.id } }" class="custom-link">
            <img src="https://api.fiwfans.com/image_sideline/406raeobjl0c1n526.jpg" class="img-member-new">

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
            <div class="tag-location">
              <p>{{ post.area }}</p>
            </div>
            <div class="text-d-1"
              style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; word-break: break-all; text-overflow: ellipsis; -webkit-line-clamp: 1;">
              <p>{{ post.name }}</p>
            </div>
            <div v-if="post.sex == 'female'" class="text-d-4 ">
              <p>หญิง</p>
            </div>
            <div v-if="post.sex == 'male'" class="text-d-4 ">
              <p>ชาย</p>
            </div>
            <div class="box-super-star">
              <v-row class="align-items-start">
                <v-col style="float:left;">
                  <p>อายุ {{ post.age }}</p>
                </v-col>
                <v-col style="float:right;">
                  <p>฿ {{ post.price }}</p>
                </v-col>
              </v-row>
            </div>
          </nuxtLink>
        </div>
      </v-col>


      <v-col v-for="post in posts" :key="post.id" class="col-imgbox">
        <div class="box-img" style=" font-size: 13px;">
          <nuxtLink :to="{ name: 'post-id', params: { id: post.id } }" class="custom-link">
            <img src="https://api.fiwfans.com/image_sideline/406raefigl2ehytws.jpg" class="img-member-new">

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
            <div class="tag-location">
              <p>{{ post.area }}</p>
            </div>
            <div class="text-d-1"
              style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; word-break: break-all; text-overflow: ellipsis; -webkit-line-clamp: 1;">
              <p>{{ post.name }}</p>
            </div>
            <div v-if="post.sex == 'female'" class="text-d-4 ">
              <p>หญิง</p>
            </div>
            <div v-if="post.sex == 'male'" class="text-d-4 ">
              <p>ชาย</p>
            </div>
            <div class="box-super-star">
              <v-row class="align-items-start">
                <v-col style="float:left;">
                  <p>อายุ {{ post.age }}</p>
                </v-col>
                <v-col style="float:right;">
                  <p>฿ {{ post.price }}</p>
                </v-col>
              </v-row>
            </div>
          </nuxtLink>
        </div>
      </v-col>



      <v-col v-for="post in posts" :key="post.id" class="col-imgbox">
        <div class="box-img" style=" font-size: 13px;">
          <nuxtLink :to="{ name: 'post-id', params: { id: post.id } }" class="custom-link"><img
              src="https://api.fiwfans.com/image_sideline/406rae5c5l2os3l6e.jpg" class="img-member-new">

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
            <div class="tag-location">
              <p>{{ post.area }}</p>
            </div>
            <div class="text-d-1"
              style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; word-break: break-all; text-overflow: ellipsis; -webkit-line-clamp: 1;">
              <p>{{ post.name }}</p>
            </div>
            <div v-if="post.sex == 'female'" class="text-d-4 ">
              <p>หญิง</p>
            </div>
            <div v-if="post.sex == 'male'" class="text-d-4 ">
              <p>ชาย</p>
            </div>
            <div class="box-super-star">
              <v-row class="align-items-start">
                <v-col style="float:left;">
                  <p>อายุ {{ post.age }}</p>
                </v-col>
                <v-col style="float:right;">
                  <p>฿ {{ post.price }}</p>
                </v-col>
              </v-row>
            </div>
          </nuxtLink>
        </div>
      </v-col>


      <v-col v-for="post in posts" :key="post.id" class="col-imgbox">
        <div class="box-img" style=" font-size: 13px;">
          <nuxtLink :to="{ name: 'post-id', params: { id: post.id } }" class="custom-link"><img
              src="https://api.fiwfans.com/image_sideline/406raejyukzqbuxhj.jpg" class="img-member-new">

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
            <div class="tag-location">
              <p>{{ post.area }}</p>
            </div>
            <div class="text-d-1"
              style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; word-break: break-all; text-overflow: ellipsis; -webkit-line-clamp: 1;">
              <p>{{ post.name }}</p>
            </div>
            <div v-if="post.sex == 'female'" class="text-d-4 ">
              <p>หญิง</p>
            </div>
            <div v-if="post.sex == 'male'" class="text-d-4 ">
              <p>ชาย</p>
            </div>
            <div class="box-super-star">
              <v-row class="align-items-start">
                <v-col style="float:left;">
                  <p>อายุ {{ post.age }}</p>
                </v-col>
                <v-col style="float:right;">
                  <p>฿ {{ post.price }}</p>
                </v-col>
              </v-row>
            </div>
          </nuxtLink>
        </div>
      </v-col>


      <v-col v-for="post in posts" :key="post.id" class="col-imgbox" style="">
        <div class="box-img" style=" font-size: 13px;">
          <nuxtLink :to="{ name: 'post-id', params: { id: post.id } }" class="custom-link"><img
              src="https://api.fiwfans.com/image_sideline/406rae43ukynjiiou.jpg" class="img-member-new" style="   ">

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
            <div class="tag-location">
              <p>{{ post.area }}</p>
            </div>
            <div class="text-d-1"
              style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; word-break: break-all; text-overflow: ellipsis; -webkit-line-clamp: 1;">
              <p>{{ post.name }}</p>
            </div>
            <div v-if="post.sex == 'female'" class="text-d-4 ">
              <p>หญิง</p>
            </div>
            <div v-if="post.sex == 'male'" class="text-d-4 ">
              <p>ชาย</p>
            </div>
            <div class="box-super-star">
              <v-row class="align-items-start">
                <v-col style="float:left;">
                  <p>อายุ {{ post.age }}</p>
                </v-col>
                <v-col style="float:right;">
                  <p>฿ {{ post.price }}</p>
                </v-col>
              </v-row>
            </div>
          </nuxtLink>
        </div>
      </v-col>
      <v-col v-for="post in posts" :key="post.id" class="col-imgbox">
        <div class="box-img" style=" font-size: 13px;">
          <nuxtLink :to="{ name: 'post-id', params: { id: post.id } }" class="custom-link"><img
              :src="imagelnk + post.image1" class="img-member-new" />

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
            <div class="tag-location">
              <p>{{ post.area }}</p>
            </div>
            <div class="text-d-1"
              style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; word-break: break-all; text-overflow: ellipsis; -webkit-line-clamp: 1;">
              <p>{{ post.name }}</p>
            </div>
            <div v-if="post.sex == 'female'" class="text-d-4 ">
              <p>หญิง</p>
            </div>
            <div v-if="post.sex == 'male'" class="text-d-4 ">
              <p>ชาย</p>
            </div>
            <div class="box-super-star">
              <v-row class="align-items-start">
                <v-col style="float:left;">
                  <p>อายุ {{ post.age }}</p>
                </v-col>
                <v-col style="float:right;">
                  <p>฿ {{ post.price }}</p>
                </v-col>
              </v-row>
            </div>
          </nuxtLink>
        </div>
      </v-col>

    </v-row>








  </v-layout>
  </div>
</template>

<style>
*{
   font-family: 'prompt';
}
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

p {
  color: black;
}

.img-member-new {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.col-imgbox {
  margin-top: 30px;
 
}

.custom-link {
  width: 100%;
  background: #dde7ff;
  border: unset;
  border-radius: 15px;
  padding: 15px;
}

.custom-link:hover {
  background: #ffffff;
}
.box-img{
    border: 1px solid #dce7ff;
    border-radius: 15px;
   
}
.box-img:hover {
    border: 1px solid #ffefd7;
    box-shadow: 2px 2px 4px 0px #ffdca7;
}
.head-col{
  width: 100%; 
  display: flex;
}
.head-text{
    color: rgb(14 43 129);
    font-size: 35px;
    font-weight: 500;
}
.tltle-text{
   color: rgb(39, 69, 158);
    font-size: 17px;
    text-align: left !important;
}
.head-text-col{
  width: 50%;
 
}
.tltle-text-col{
   width: 50%;
   padding-left: 1rem;
  
}
@media (min-width:1919px) and (max-width:4000px) {
  .img-member-new {
    height: 250px;
  }
}

@media (min-width:1700px) and (max-width:1919px) {
  .img-member-new {
    height: 230px;
  }
    .box-img{
  width: 250px;
}
}

@media (min-width:1024px) and (max-width:1700px) {
  .img-member-new {
    height: 180px;
  }
  .box-img{
  width: 220px;
}
}

@media (min-width:768px) and (max-width:1023px) {
  .img-member-new {
    height: 180px;
  }
.box-img{
  width: 210px;
}
}

@media (min-width:414px) and (max-width:767px) {
  .img-member-new {
    height: 150px;
  }
    .head-col{
  display: block;
}
.head-text{
    font-size: 25px;
    margin: unset !important;
}
.tltle-text{
    font-size: 12px;
}
  
.box-img{
  width: 180px;
}
}

@media (min-width:375px) and (max-width:413px) {
  .img-member-new {
    height: 150px;
  }
    .head-col{
  display: block;
}
.head-text{
    font-size: 25px;
     margin: unset !important;
}
.tltle-text{
    font-size: 12px;
}
  
.box-img{
  width: 160px;
}
}

@media (max-width:374px) {
  .img-member-new {
    height: 150px;
  }
    .head-col{
  display: block;
}
.head-text{
    font-size: 25px;
     margin: unset !important;
}
.tltle-text{
    font-size: 12px;
}
  
.box-img{
  width: 150px;
}
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
    posts: [],
    currentPostId: null,
    imagelnk: 'http://206.189.154.219:8085/images_post/'
  }),
  async mounted() {
    const response = await postService.getAllPosts()
    console.log(response.data.response[0])
    this.posts = response.data.response
  },
}
</script>
