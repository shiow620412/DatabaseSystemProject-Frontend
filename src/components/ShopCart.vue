<template>
<div class="container">

    <div class="d-flex justify-content-center row">
        <div class="col-md-8">

            <div class="p-2">
                <h4>購物車</h4>
                <!-- <div class="d-flex flex-row align-items-center pull-right dropdown">
                    <span class="mr-1">Sort Ascending by:</span>
                    <span class="mr-1 font-weight-bold">Price</span>
                    <i type="button" class="fa fa-angle-down" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Name</a>
                            <a class="dropdown-item" href="#">Price</a>
                        </div>
                    </i>
                </div> -->
            </div>

            <div class="row py-2 text-center">
                <div class="col-md-2">商品圖片</div>
                <div class="col-md-2">商品名稱</div>
                <div class="col-md-2">購買數量</div>
                <div class="col-md-2">單價</div>
                <div class="col-md-2">金額</div>
                <div class="col-md-2"></div>
            </div>

            <div v-for="(te, index) in commodity" :key=index>
                <div class="row py-2 align-items-center">
                    <div class="col-md-2 d-flex justify-content-center"><img class="rounded" width="80" height="55" :src="te.Cphoto"></div>
                    <div class="col-md-2 text-center product-details">
                        <span class="font-weight-bold">{{ te.Cname }}</span>
                        <!-- <div class="d-flex flex-row product-desc">
                        <div class="size mr-1"><span class="text-grey">Size:</span><span class="font-weight-bold">&nbsp;M</span></div>
                        <div class="color"><span class="text-grey">Color:</span><span class="font-weight-bold">&nbsp;Grey</span></div>
                        </div> -->
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                        <div class="d-flex flex-row align-items-center qty">
                            <i class="fa fa-minus text-danger" type="buon" @click="te.Cnum--"></i>
                            <h5><input type="text" class="text-grey mt-1 mr-1 ml-1 text-center" size="1" v-model.number="te.Cnum"></h5>
                            <i class="fa fa-plus text-success" type="button" @click="te.Cnum++"></i>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <h5 class="text-grey text-center">${{ te.Cprice }}</h5>
                    </div>
                    <div class="col-md-2">
                        <h5 class="text-grey text-center">${{ te.Cnum * te.Cprice }}</h5>
                    </div>
                    <div class="col-md-2"><i class="fa fa-trash mb-1 text-danger" type="button" @click="ClickDelete"></i></div>
                </div>
            </div>

            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                <button class="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">付款</button>
            </div>

        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'ShopCart',
    Comment: {

    },
    data() {
        return {
            num: 0,
            commodity: [{
                Cphoto: require('../assets/logo.png'),
                Cname: 'T-shirt',
                Cnum: 5,
                Cprice: 300,
                Ctitle: 1500
            }, {
                Cphoto: require('../assets/logo_test.png'),
                Cname: 'Tableware',
                Cnum: 3,
                Cprice: 100,
                Ctitle: 300
            }, {
                Cphoto: require('../assets/logo.png'),
                Cname: 'Book',
                Cnum: 7,
                Cprice: 50,
                Ctitle: 350
            }, {
                Cphoto: require('../assets/logo_test.png'),
                Cname: 'Bag',
                Cnum: 1,
                Cprice: 550,
                Ctitle: 550
            }, {
                Cphoto: require('../assets/logo.png'),
                Cname: 'Pencil Box',
                Cnum: 1,
                Cprice: 135,
                Ctitle: 135
            }]
        }
    },
    methods: {
        ClickDown: function () {
            // alert("減少數量");
            if (this.$options.num > 0) {
                this.$options.num--
            }
        },
        ClickUp: function () {
            // alert("增加數量")
            this.$options.num++
        },
        ClickDelete: function () {
            alert("You delete this data")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
