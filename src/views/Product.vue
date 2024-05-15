<template>
<v-row justify="center" class="space px-16">
    <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
        <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined>
            <div align="center" justify="center">
                <v-img v-if="product.picmenu" :src="product.picmenu" max-height="200" max-width="200" contain></v-img>
                <div v-else style="height: 300px; width: 300px; display: flex; align-items: center; justify-content: center; background-color: lightgray;">
                    <span>Image not available</span>
                </div>
            </div>
            <v-card-title>{{ product.products_name }}</v-card-title>
            <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{ product.subtitle }}</v-card-title>
            <v-card-title class="mt-n4">ราคาสินค้า: {{ product.price }} บาท
            </v-card-title>
            <v-card-actions class="mx-2 mt-n4">
                <v-btn outlined class="mt-n2 add" @click="decrement(i)">
                    <v-icon color="green">fa fa-minus</v-icon>
                </v-btn>
                <strong class="mx-2" v-text="product.bpm"></strong>
                <v-btn outlined class="mt-n2 add" @click="increment(i)">
                    <v-icon color="green">fa fa-plus</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="mx-2 mt-n3" fab dark small color="green" @click="addToOrder(i)">
                    <v-icon dark>fa fa-shopping-basket</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            id: '',
            products: [],
            orders: [],
            selectedProductId: '',
        };
    },
    methods: {
        decrement(index) {
            if (this.products[index].bpm > 0) {
                this.products[index].bpm--;
            }
        },
        increment(index) {
            const product = this.products[index];
            if (product.bpm < product.amount) {
                product.bpm++;
            } else {
                alert('Cannot add more than available amount');
            }
        },
        fetchProducts() {
            axios.get('http://localhost:3000/products')
                .then(response => {
                    this.products = response.data.data.map(product => ({
                        ...product,
                        bpm: 0,
                    }));
                    console.log(this.products);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        addToOrder(index) {
            const product = this.products[index];
            if (product.bpm > 0) {
                for (let i = 0; i < product.bpm; i++) {
                    const orderItem = {
                        productId: product._id,
                        products_name: product.products_name,
                        price: product.price,
                        amount: product.amount,
                        orderamount: 1 // กำหนด orderamount เป็น 1 เนื่องจากเพิ่ม order ต่อ 1 bpm
                    };
                    this.orders.push(orderItem);
                }
                this.products[index].bpm = 0; // รีเซ็ตค่า bpm เป็น 0 หลังจากที่เพิ่มในออร์เดอร์แล้ว
                console.log(this.orders);
                console.log('เพิ่มสินค้าลงในตะกร้า:', product);

                // เรียกเมทอด saveOrder พร้อมส่ง productId ไป
                this.saveOrder(product._id, this.orders);
            } else {
                alert('Please select at least one item to add to order.');
            }
        },
        // อัปเดตค่าของ selectedProductId เมื่อผู้ใช้เลือกสินค้า
        setSelectedProductId(productId) {
            this.selectedProductId = productId;
        },
        async saveOrder(productId, orderItem) {
            try {
                const url = `http://localhost:3000/products/${productId}/orders`;
                const response = await axios.post(url, orderItem); // ส่ง orderItem ที่มีค่า bpm ไป
                console.log(response.data);
                alert('Order created successfully');
                this.orders = [];
            } catch (error) {
                console.error('Error creating order:', error.response ? error.response.data : error.message);
                alert('Error creating order');
            }
        }
    },
    created() {
        this.fetchProducts(); // Fetch products when the component is created
    }
};
</script>
