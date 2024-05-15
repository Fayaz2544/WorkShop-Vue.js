<template>
<div class="font">
<v-app-bar app color="white" flat>

    <v-badge color="#D5F0DB" dot>
        <v-img src="" contain width="30"></v-img>
    </v-badge>

    <v-toolbar-title class="ml-4">
        <span class="green--text">i</span><strong>Am Far_z</strong>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-badge color="#41AB55" overlap content="3" class="mr-2 mt-1">
        <v-avatar color="#ECF7EE">
            <v-icon color="#41AB55">
                mdi-cart-plus
            </v-icon>
        </v-avatar>
    </v-badge>

    <span class="grey--text d-none d-sm-flex">สวัสดี, <strong> คุณหญิง</strong></span>

    <v-avatar size="30" class="ml-2">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
    </v-avatar>

    <v-btn icon dark class="">
        <v-icon small color="#878A94">fas fa-chevron-down</v-icon>
    </v-btn>

</v-app-bar>
</div>

</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.font{
    font-family: "Prompt", sans-serif;
}

.v-toolbar__title {
    font-size: 1rem !important;
}

</style>
