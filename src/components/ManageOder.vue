<template>
<div class="font" style="padding-top: 20px; justify-content: center;">
    <v-row justify="center" class="space px-16">
        <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
            <v-card class="mx-auto rounded-xl" max-width="300" style="padding-top: 30px;" flat outlined>
                <div align="center" justify="center">
                    <v-img v-if="product.picmenu" :src="product.picmenu" max-height="200px" max-width="200px" style contain></v-img>
                    <div v-else style="height: 300px; width: 300px; display: flex; align-items: center; justify-content: center; background-color: lightgray;">
                        <span>Image not available</span>
                    </div>
                </div>
                <v-card-title style="justify-content:center">เมนู : {{ product.productName }}</v-card-title>
                <v-card-title class="mt-n4" style="justify-content: center;">ราคา : {{ product.price }} บาท</v-card-title>
                <v-card-actions class="mx-2 mt-n4" style="justify-content: center;">
                    <v-btn color="error" class="mt-n2 add" @click="saveDelete(product._id)">
                        <span color="white">ลบ</span>
                    </v-btn>
                </v-card-actions>
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
                        <v-text-field name="amount" label="amount" id="amount" v-model="postdata.amount"></v-text-field>
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
import Swal from 'sweetalert2';

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
        async saveDelete(orders) {
            try {
                if (confirm('delete it?')) {
                    const {
                        data
                    } = await this.axios.delete('http://localhost:3000/orders/' + orders)
                    console.log(data)
                    Swal.fire({
                        title: "ลบข้อมูลสำเร็จ",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000
                    });
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
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.font{
    font-family: "Prompt", sans-serif;
}
</style>
