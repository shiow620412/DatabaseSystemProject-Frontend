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

            <div v-show='false'>{{ newCommdity = CreateItem() }}</div>
            <div v-if="newCommdity.length != 0">
                <div v-for="(te, index) in newCommdity" :key=index>
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
                                <i class="fa fa-minus text-danger" type="button" @click="ClickDown(index)"></i>
                                <h5><input type="text" class="text-grey mt-1 mr-1 ml-1 text-center" size="1" v-model.number="te.Cnum" @keyup.enter="CheckInventory(index, te.Cnum, te.Inventory)"></h5>
                                <i class="fa fa-plus text-success" type="button" @click="ClickUp(index, te.Inventory)"></i>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <h5 class="text-grey text-center">${{ te.Cprice }}</h5>
                        </div>
                        <div class="col-md-2">
                            <h5 class="text-grey text-center">${{ te.Cnum * te.Cprice }}</h5>
                        </div>
                        <div class="col-md-2"><i class="fa fa-trash mb-1 text-danger" type="button" @click="ClickDelete(index)"></i></div>
                        <div class="d-flex flex-row-reverse product-desc" v-if="te.Inventory < 10">
                            <div class="size mr-1"><span class="text-grey">此商品剩下 {{ te.Inventory }} 個!</span></div>
                        </div>
                        <div class="d-flex flex-row-reverse product-desc" v-else-if="te.Inventory >= 10">
                            <div class="size mr-1"><span class="text-grey">&nbsp;</span></div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                    <button class="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">付款</button>
                </div>
            </div>
            <div v-else>
                <p>未將任何商品加入購物車!!</p>
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
            }],
            stocket: [{
                Cname: 'T-shirt',
                Inventory: 5
            }, {
                Cname: 'Tableware',
                Inventory: 15
            }, {
                Cname: 'Book',
                Inventory: 35
            }, {
                Cname: 'Bag',
                Inventory: 3
            }, {
                Cname: 'Pencil Box',
                Inventory: 2
            }]
        }
    },
    methods: {
        ClickDown: function (num) {
            // alert("減少數量");
            if (this.commodity[num].Cnum == 1) {
                if (confirm("確定要將此商品從購物車中移除?")) {
                    this.commodity.splice(num, 1)
                }
            } else if (this.commodity[num].Cnum > 1) {
                this.commodity[num].Cnum--
            }
        },
        ClickUp: function (num, maxCt) {
            // alert("增加數量")
            if (this.commodity[num].Cnum < maxCt) {
                this.commodity[num].Cnum++
            } else {
                alert('此商品的數量只剩下 ' + maxCt + ' 個!')
            }
        },
        ClickDelete: function (num) {
            if (confirm("確定要將此商品從購物車中移除?")) {
                this.commodity.splice(num, 1)
            }
        },
        CheckInventory: function (num, cyNum, maxCt) {
            if (cyNum > maxCt) {
                alert('此商品的數量只剩下 ' + maxCt + ' 個!')
                this.commodity[num].Cnum = maxCt
            }
        },
        CreateItem: function () {
            let newCS = [{}]
            newCS.pop()
            for (let i = 0; i < this.commodity.length; i++) {
                if (this.commodity[i].Cname == this.stocket[i].Cname) {
                    newCS.push(this.commodity[i])
                    newCS[i].Inventory = this.stocket[i].Inventory
                }
            }
            return newCS
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
