<template>
<div>
    <div>
        <div>
            <p>
                <el-text style="font-size: 35px">會員管理</el-text>
            </p>

            <el-row class="product-detail">
                <el-col :span="3"></el-col>
                <el-col :span="18" class="pro_desciptions">
                    <el-table :data="memberArray" style="width: 100%;font-size: 15px">
                        <el-table-column prop="memberID" label="會員ID" min-width="10%" align="center"></el-table-column>
                        <el-table-column prop="name" label="會員名稱" min-width="25%" align="center"></el-table-column>
                        <el-table-column prop="account" label="帳號" min-width="25%" align="center"></el-table-column>
                        <el-table-column prop="email" label="信箱" min-width="25%" align="center"></el-table-column>
                        <el-table-column label="是否為管理員" min-width="15%" align="center">
                            <template v-slot="scope">
                                <el-text>{{ checkIsAdmin(scope.row.isAdmin) }}</el-text>
                            </template>
                        </el-table-column>
                        <el-table-column label="狀態" min-width="13%" align="center">
                            <template v-slot="scope" v-if="this.isEdit & !this.isSave">
                                <el-tag :type="(scope.row.status === 1) ? 'success' : 'danger'">{{ changeStatusChinese(scope.row.status) }}</el-tag>
                            </template>
                            <template v-slot="scope" v-else-if="!this.isEdit & this.isSave">
                                <el-select v-model="scope.row.status" placeholder="Selete">
                                    <el-option v-for="item in statusArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" min-width="13%" align="center">
                            <template #default="scope">
                                <el-button size="mini" @click="clickEdit(scope.$index, scope.row) & (this.isSave = true) & (this.isEdit = false) & (this.isDelete = true)" v-show="this.isEdit">編輯</el-button>
                                <el-button size="mini" @click="(this.isSave = false) & (this.isEdit = true) & (this.isDelete = false)" v-show="this.isSave">儲存</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="3"></el-col>
            </el-row>

            <ul>
                <!-- <el-table-column label="操作" min-width="15%" align="center">
                    <template v-slot="scope">
                        <el-button type="text" class="el-icon-delete" style="font-size: 18px;" @click="setIndex(scope.$index) & (dialogVisible = true)"></el-button>
                        <el-dialog v-model="dialogVisible" width="30%">
                            <span>您確定要將此商品從購物車中移除嗎?</span>
                            <template #footer>
                                <span class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取消</el-button>
                                    <el-button type="primary" @click="deleteProduct()">確定</el-button>
                                </span>
                            </template>
                        </el-dialog>
                    </template>
                </el-table-column> -->
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import memberManagementController from "./memberManagement.controller";
export default {
    name: 'memberManagement',
    setup() {
        return {
            statusArray: ref([{
                    value: 1,
                    label: '正常',
                },
                {
                    value: 0,
                    label: '停權',
                }
            ]),
            value: ref(''),
        }
    },
    data() {
        return {
            productOfChecked: [],
            deleteIndex: 0,
            isEdit: true,
            isSave: false,
            isDelete: false,
            memberArray: [{
                memberID: 1,
                email: 'adm01@gmail.com',
                name: 'adm01',
                account: 'adm01',
                password: 'adm01',
                address: 'Taipei',
                isAdmin: 1,
                status: 1
            }, {
                memberID: 2,
                email: 'test01@gmail.com',
                name: 'test01',
                account: 'test01',
                password: 'test01',
                address: 'Taipei',
                isAdmin: 0,
                status: 0
            }, {
                memberID: 3,
                email: 'admin02@gmail.com',
                name: 'admin02',
                account: 'admin02',
                password: 'admin02',
                address: 'Taipei',
                isAdmin: 1,
                status: 0
            }, {
                memberID: 4,
                email: 'admin03@gmail.com',
                name: 'admin03',
                account: 'admin03',
                password: 'admin03',
                address: 'Taipei',
                isAdmin: 1,
                status: 1
            }, {
                memberID: 5,
                email: 'test02@gmail.com',
                name: 'test02',
                account: 'test02',
                password: 'test02',
                address: 'Taipei',
                isAdmin: 0,
                status: 0
            }, {
                memberID: 5,
                email: 'test03@gmail.com',
                name: 'test03',
                account: 'test03',
                password: 'test03',
                address: 'Taipei',
                isAdmin: 0,
                status: 1
            }]
        }
    },
    methods: memberManagementController,
    computed: {}
}
</script>

<style scoped lang="scss" src="./memberManagement.scss"></style>
