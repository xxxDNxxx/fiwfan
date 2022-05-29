<template>
  <div>
    <v-form @submit.prevent="submit" v-model="valid">
      <v-container>
        <v-row>
          <v-card class="mx-auto" max-width="700">
            <v-card-text>
              <div class="text--primary">
                เนื่องจากคุณสร้างโพสต์เป็นครั้งแรก กรุณาติดต่อแอดมินทาง Telegram
                ช่องทางเดียวเท่านั้น คลิกที่นี่ เพื่อ "ยืนยันตัวตน"
                ก่อนสร้างโพสต์ * "ยืนยันตัวตน" ก่อนสร้างโพสต์และแสดงโพสต์
                มีจุดประสงค์เพื่อ - ป้องกันมิจฉาชีพ, การฉ้อโกง
                ที่อาจก่อให้เกิดผลเสียต่อนักท่องเที่ยวและเว็บไซต์ได้ -
                ป้องกันการแอบอ้างจากบุคคลอื่น (โพสต์ปลอม) -
                ป้องกันรูปภาพสุ่มเสี่ยง (โป้) หรือมีการโชว์ส่วนสำคัญ
                ซึ่งต้องมีการ Censor ทุกครั้ง ไม่ต้องตกใจ!
                ถ้าคุณไม่ได้กระทำอย่างที่เรากล่าวไปจากข้อความข้างต้น
                เราอนุมัติโพสต์ให้คุณอย่างแน่นอน
              </div>
            </v-card-text>

            
          </v-card>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="postname"
              :rules="nameRules"
              :counter="10"
              label="ชื่อที่ใช้รับงาน"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="rate"
              label="เรทราคา"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="area"
              label="พื้นที่ใช้รับงาน"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lineid"
              label="ไอดีไลน์ที่ใช้รับงาน"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lineid"
              label="ไอดีไลน์ที่ใช้รับงาน"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="slogan"
              label="สโลแกน"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="3">
            <v-select
      v-model="gender"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="เพศ"
      required
    ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="age"
              label="อายุ(ปี)"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="height"
              label="ส่วนสูง"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="weight"
              label="น้ำหนัก"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
            
            <v-col cols="12" md="4">
            <v-text-field
              v-model="chest"
              label="หน้าอก"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="waist"
              label="เอว"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="hip"
              label="สะโพก"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    postname: '',
    rate: '',
    area: '',
    slogan:'',
    lineid: '',
    gender: null,
      items: [
        'ชาย',
        'หญิง',
        'อื่นๆ',
        
      ],
    age:'',
    height:'',
    weight:'',
    chest:'',
    waist:'',
    hip:'',

    nameRules: [
      v => !!v || 'form is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: ''
  })
}
</script>
