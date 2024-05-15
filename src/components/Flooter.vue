<template>
<div class="font">
    <v-footer dark padless>
        <v-card flat tile class="py-12 px-5" width="100%" style="background: #948979;">
            <v-row>
                <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">
                    <v-toolbar color="transparent" flat>
                        <v-badge color="#D5F0DB" dot>
                            <v-img src="1.png" contain width="30"></v-img>
                        </v-badge>

                        <v-toolbar-title class="ml-4">
                            <span class="green--text">i</span><strong>Am Far_z</strong>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="pt-0">
                        <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon fab outlined small>
                            <v-icon size="20px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="2">
                    <v-card-text class="white--text pt-0">
                        <h3>About</h3>
                    </v-card-text>
                    <v-card-text class="grey--text"></v-card-text>
                    <v-card-text class="grey--text mt-n4"></v-card-text>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="2">
                    <v-card-text class="white--text pt-0">
                        <h3>Delivery</h3>
                    </v-card-text>
                    <v-card-text class="grey--text"></v-card-text>
                    <v-card-text class="grey--text mt-n4"></v-card-text>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="4">
                    <v-card-text class="white--text pt-0">
                        <h3>Contact</h3>
                    </v-card-text>
                    <v-card-text class="grey--text"></v-card-text>
                    <v-card-text class="grey--text mt-n4">

                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-footer>
</div>
</template>

<script>
export default {
    data: () => ({
        icons: [
            "fab fa-apple",
            "fab fa-google-plus-g",
            "fab fa-twitter",
            "fab fa-facebook-f",
        ],
    }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.font{
    font-family: "Prompt", sans-serif;
}
</style>
