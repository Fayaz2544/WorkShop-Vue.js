<template>
<div style="padding-top: 20px; justify-content: center;">
    <!-- <v-row justify="end">
        <v-col>
            <v-btn color="primary" class="mb-4" @click="newItem()">
                <span color="white">เพิ่มผลิตภัณฑ์</span>
            </v-btn>
        </v-col>
    </v-row> -->
    <v-row justify="center" class="space px-16">
        <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
            <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined>
                <div align="center" justify="center">
                    <v-img v-if="product.menu" :src="product.menu" max-height="300" max-width="300" contain></v-img>
                    <div v-else style="height: 300px; width: 300px; display: flex; align-items: center; justify-content: center; background-color: lightgray;">
                        <span>Image not available</span>
                    </div>
                </div>
                <v-card-title>{{ product.productName }}</v-card-title>
                <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{ product.subtitle }}</v-card-title>
                <v-card-title class="mt-n4">{{ product.price }}</v-card-title>
                <v-card-title class="mt-n4">{{ product.amount }}</v-card-title>
                <!-- <v-card-actions class="mx-2 mt-n4" style="justify-content: center;">
                    <v-btn color="success" class="mt-n2 add" @click="editItem(product)">
                        <span color="white">แก้ไข</span>
                    </v-btn>
                    <v-btn color="error" class="mt-n2 add" @click="saveDelete(product._id)">
                        <span color="white">ลบ</span>
                    </v-btn>
                </v-card-actions> -->
            </v-card>
        </v-col>
    </v-row>
    <v-dialog v-model="dialogedit" max-width="500">
        <v-card>
            <v-card-title primary-title>{{savemode}}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-text-field name="products_name" label="products_name" id="products_name" v-model="postdata.products_name"></v-text-field>
                        <v-text-field name="price" label="price" id="price" v-model="postdata.price"></v-text-field>
                        <v-text-field name="amout" label="amout" id="amout" v-model="postdata.amout"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="closeData()">ยกเลิก</v-btn>
                <v-btn color="info" @click="saveSelect()">บันทึก</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        bpm: 1,
        products: [],
        id: '',
        apidata: [],
        dialogedit: false,
        // ส่งข้อมูล
        postdata: {
            products_name: '',
            price: '',
            amout: '',
        },
        // ล้างข้อมูล
        postdefault: {
            products_name: '',
            price: '',
            amout: '',
        },
    }),
    computed: {
        savemode() {
            return this.id == '' ? 'New Item' : 'Edit Item'
        }
    },
    created() {
        this.fetchProducts(); // Fetch products when the component is created
    },
    methods: {
        fetchProducts() {
            axios.get('http://localhost:3000/orders')
                .then(response => {
                    this.products = response.data.data; // Assuming the data is in response.data.data
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        newItem() {
            this.id = ''
            this.postdata = {
                ...this.postdefault
            }
            this.dialogedit = true
        },
        editItem(product) {
            this.id = product._id
            this.postdata = product
            this.dialogedit = true
        },
        closeData() {
            this.id = ''
            this.postdata = {
                ...this.postdefault
            }
            this.dialogedit = false
        },
        saveSelect() {
            if (this.id != '') {
                this.savePutdata()
            } else {
                this.savePostdata()
            }
        },
        async savePostdata() {
            try {
                const {
                    data
                } = await this.axios.post('http://localhost:3000/products', this.postdata)
                console.log(data)
                alert('creat complete')
                this.fetchProducts()
                this.closeData()
            } catch (error) {
                console.log(error);
                alert('error')
            }
        },
        async savePutdata() {
            try {
                const {
                    data
                } = await this.axios.put('http://localhost:3000/products/' + this.id, this.postdata)
                console.log(data)
                alert('update complete')
                this.fetchProducts()
                this.closeData()
            } catch (error) {
                console.log(error);
                alert('error')
            }
        },
        async saveDelete(product) {
            try {
                if (confirm('delete it?')) {
                    const {
                        data
                    } = await this.axios.delete('http://localhost:3000/products/' + product)
                    console.log(data)
                    alert('delete complete!')
                    this.fetchProducts()
                    this.closeData()
                }
            } catch (error) {
                console.log(error)
                alert('error')
            }
        }
    }
};
</script>

<style>
/* Add any necessary styles */
</style>
