<template>
<div class="text-font">
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="elevation-6 mt-10">
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">เข้าสู่ระบบบัญชีของคุณ</h4>
                                        <!-- <h6 class="text-center  grey--text ">Log in to your account so you can continue builiding <br>and editing your onboarding flows</h6> -->
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="8">

                                                <v-text-field label="อีเมล" outlined dense color="blue" autocomplete="false" class="mt-16" />
                                                <v-text-field label="รหัสผ่าน" outlined dense color="blue" autocomplete="false" type="password" />
                                                <v-row>
                                                    <!-- <v-col cols="12" sm="7">
                                                    <v-checkbox label="Remember Me" class="mt-n1" color="blue"> </v-checkbox>
                                                </v-col> -->
                                                    <v-col cols="12" sm="5">
                                                        <!-- <span class="caption blue--text">Forgot password</span> -->
                                                    </v-col>
                                                </v-row>
                                                <v-btn color="blue" dark block tile>เข้าสู่ระบบ</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                                    <div style="  text-align: center; padding: 180px 0;">
                                        <v-card-text class="white--text">
                                            <h3 class="text-center ">ยังไม่มีบัญชีใช่หรือไม่?</h3>
                                            <!-- <h6 class="text-center">Let's get you all set up so you can start creating your your first<br> onboarding experience</h6> -->
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn tile outlined dark @click="step++">ลงทะเบียน</v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-window-item>
                        <v-window-item :value="2">
                            <v-row>
                                <v-col cols="12" md="6" class="blue rounded-br-xl">
                                    <div style="  text-align: center; padding: 180px 0;">
                                        <v-card-text class="white--text">
                                            <h3 class="text-center ">พร้อมสำหรับการใช้งานแล้วใช่หรือไม่?</h3>
                                            <!-- <h6 class="text-center">Log in to your account so you can continue building and<br> editing your onboarding flows</h6> -->
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn tile outlined dark @click="step--">เข้าสู่ระบบ</v-btn>
                                        </div>
                                    </div>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">ลงทะเบียนเข้าใช้งาน</h4>
                                        <!-- <h6 class="text-center  grey--text ">Let's get you all set up so you can start creatin your <br>
                                            first onboarding experiance</h6> -->
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="8">
                                                <v-row>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="ชื่อ" outlined dense color="blue" autocomplete="false" class="mt-4" />
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="นามสกุล" outlined dense color="blue" autocomplete="false" class="mt-4" />
                                                    </v-col>
                                                </v-row>
                                                <v-text-field label="อีเมล" outlined dense color="blue" autocomplete="false" />
                                                <v-text-field label="รหัสผ่าน" outlined dense color="blue" autocomplete="false" type="password" />
                                                <v-btn color="blue" dark block tile>ลงทะเบียน</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
        step: 1
    }),
    props: {
        source: String
    }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.text-font {
    font-family: "Prompt", sans-serif;
}

.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
