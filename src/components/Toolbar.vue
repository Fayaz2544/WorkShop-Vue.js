<template>
<div class="font">
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
            <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

            <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
        </div>

        <v-spacer></v-spacer>

        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
    </v-app-bar>

    <v-main>
        <router-view />
    </v-main>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.font{
    font-family: "Prompt", sans-serif;
}
</style>

