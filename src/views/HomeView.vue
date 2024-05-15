<template>
<v-app class="font">
    <Navbar />
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto rounded-xl" flat>
                    <div style="position: relative; text-align: center;">
                        <v-img src="../assets/food.jpeg" style="max-width: 100%; max-height: 100%; width: auto; height: auto;"></v-img>
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                            <!-- ตำแหน่งของร้านอาหาร -->
                            <span style="padding: 10px; font-size: 80px; color: white; background: #948979;"><B>Restaurant ร้านอาหาร</B></span>
                        </div>
                    </div>
                </v-card>
                <br>
                <v-card flat class="d-flex justify-center align-center pa-4">
                    <v-row class="d-flex justify-center" align="center">
                        <v-col cols="12" sm="6" md="4" class="text-center">
                            <v-badge bordered color="error" icon="fa fa-cog" overlap>
                                <v-btn class="white--text" color="error" depressed @click="toggleManageProducts">
                                    จัดการผลิตภัณฑ์
                                </v-btn>
                            </v-badge>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" class="text-center">
                            <v-badge bordered color="error" icon="fa fa-cog" overlap>
                                <v-btn class="white--text" color="error" depressed @click="toggleManageOrders">
                                    จัดการคำสั่งซื้อ
                                </v-btn>
                            </v-badge>
                        </v-col>
                    </v-row>
                </v-card>
                <template>
                    <v-card flat color="#EADBC8" class="rounded-xl mt-8">
                        <v-toolbar flat color="transparent" class="mt-5">
                            <v-toolbar-title class="text-h6">{{ toolbarTitle }}</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <component :is="currentComponent" />
                    </v-card>
                </template>
                <br>
                <flooter />
            </v-col>
        </v-row>
    </v-container>
    <Footer />
</v-app>
</template>

<script>
// import Navbar from './Navbar.vue';
// import Flooter from './Flooter.vue';
// import Product from './Product.vue';
// import ManageProduct from './ManageProduct.vue';
// import ManageOrder from './ManageOrder.vue';

import Navbar from '../components/Navbar.vue';
import Flooter from '../components/Flooter.vue';
import Product from '../components/Product.vue';
import ManageProduct from '../components/ManageProduct.vue';
import ManageOrder from '../components/ManageOder.vue';
import ManageCart from '../components/ManageCart.vue';

export default {
    components: {
        Navbar,
        Flooter,
        Product,
        ManageProduct,
        ManageOrder,
        ManageCart
    },
    data() {
        return {
            showManageProducts: false,
            showManageOrders: false
        };
    },
    computed: {
        currentComponent() {
            if (this.showManageProducts) {
                return 'ManageProduct';
            } else if (this.showManageOrders) {
                return 'ManageOrder';
            } else {
                return 'Product';
            }
        },
        toolbarTitle() {
            switch (this.currentComponent) {
                case 'ManageProduct':
                    return 'จัดการผลิตภัณฑ์';
                case 'ManageOrder':
                    return 'จัดการคำสั่งซื้อ';
                default:
                    return 'ผลิตภัณฑ์ที่เรามี';
            }
        }
    },
    methods: {
        toggleManageProducts() {
            this.showManageProducts = !this.showManageProducts;
            if (this.showManageProducts) {
                this.showManageOrders = false; // Ensure only one manage component is shown at a time
            }
        },
        toggleManageOrders() {
            this.showManageOrders = !this.showManageOrders;
            if (this.showManageOrders) {
                this.showManageProducts = false; // Ensure only one manage component is shown at a time
            }
        },
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.font{
    font-family: "Prompt", sans-serif;
}

.marginLeft {
    margin-left: -90px;
}

.mtop {
    margin-top: 100px;
}

.mbottom {
    margin-bottom: 100px;
}

.v-card.borderme {
    border: 2px solid green !important;
}

.v-card.borderout {
    border: 1px solid #d5f0db !important;
}

.v-btn:not(.v-btn--round).v-size--default.add {
    min-width: 0px !important;
}

.theme--light.v-sheet--outlined.mobile {
    border: 2px solid black !important;
}

@media only screen and (max-width: 600px) {
    h2.title1 {
        font-size: 15px;
    }

    h2.title2 {
        font-size: 15px;
    }

    .top {
        margin-top: 20px;
    }
}

@media only screen and (min-width: 600px) {
    .top {
        margin-top: 70px;
    }
}

@media only screen and (min-width: 768px) {
    .top {
        margin-top: 120px;
    }
}
</style>
