<template>
<v-footer dark padless>
    <v-card flat tile class="py-12 px-5" width="100%" style="background: #B3C8CF;">
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">
                <v-toolbar color="transparent" flat>
                    <v-badge color="#102C57" dot>
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
                <v-card-text class="grey--text">1</v-card-text>
                <v-card-text class="grey--text mt-n4">2</v-card-text>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="2">
                <v-card-text class="white--text pt-0">
                    <h3>Delivery</h3>
                </v-card-text>
                <v-card-text class="grey--text">1</v-card-text>
                <v-card-text class="grey--text mt-n4">2</v-card-text>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="4">
                <v-card-text class="white--text pt-0">
                    <h3>Contact</h3>
                </v-card-text>
                <v-card-text class="grey--text">1</v-card-text>
                <v-card-text class="grey--text mt-n4">
                    2
                </v-card-text>
            </v-col>
        </v-row>
    </v-card>
</v-footer>
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
</style>
