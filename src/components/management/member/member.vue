<template>
<div>
    <div>
        <div>
            <el-row class="header" justify="center">
                <div margin-top="20px">
                    <el-text style="font-size: 25px;font-weight: bold">會員管理</el-text>
                </div>
            </el-row>
            <el-row>
                <el-table :data="memberArray" style="width: 100%;font-size: 15px" :default-sort="{ prop: 'memberID' }" row-style="height: 8vh">
                    <el-table-column prop="memberID" label="會員ID" min-width="15%" align="center" sortable></el-table-column>
                    <el-table-column prop="name" label="會員名稱" min-width="25%" align="center" sortable></el-table-column>
                    <el-table-column prop="account" label="帳號" min-width="25%" align="center"></el-table-column>
                    <el-table-column prop="email" label="信箱" min-width="25%" align="center"></el-table-column>
                    <el-table-column label="是否為管理員" min-width="15%" align="center">
                        <template v-slot="scope" v-if="this.isEdit & !this.isSave">
                            <el-tag :type="(scope.row.isAdmin === 1) ? 'success' : 'danger'" size="medium">{{ changeIsAdminChinese(scope.row.isAdmin) }}</el-tag>
                        </template>
                        <template v-slot="scope" v-else-if="!this.isEdit & this.isSave">
                            <el-select v-model="scope.row.isAdmin" placeholder="Selete" size="medium" style="width: 60px">
                                <el-option v-for="item in isAdminArray" :key="item.value1" :label="item.label" :value="item.value1"></el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column label="狀態" min-width="13%" align="center">
                        <template v-slot="scope" v-if="this.isEdit & !this.isSave">
                            <el-tag :type="(scope.row.status === 1) ? 'success' : 'danger'" size="medium">{{ changeStatusChinese(scope.row.status) }}</el-tag>
                        </template>
                        <template v-slot="scope" v-else-if="!this.isEdit & this.isSave">
                            <el-select v-model="scope.row.status" placeholder="Selete" size="medium">
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
import memberController from "./member.controller";
export default {
    name: 'member',
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
            isAdminArray: ref([{
                    value1: 1,
                    label: '是'
                },
                {
                    value1: 0,
                    label: '否'
                }
            ]),
            value1: ref(''),
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
                name: 'admin01',
                account: 'admin01',
                email: 'adm01@gmail.com',
                isAdmin: 1,
                status: 1
            }, {
                memberID: 2,
                name: 'test01',
                account: 'test01',
                email: 'test01@gmail.com',
                isAdmin: 0,
                status: 0
            }, {
                memberID: 3,
                name: 'admin02',
                account: 'admin02',
                email: 'admin02@gmail.com',
                isAdmin: 1,
                status: 0
            }, {
                memberID: 4,
                name: 'admin03',
                account: 'admin03',
                email: 'admin03@gmail.com',
                isAdmin: 1,
                status: 1
            }, {
                memberID: 5,
                name: 'test02',
                account: 'test02',
                email: 'test02@gmail.com',
                isAdmin: 0,
                status: 0
            }, {
                memberID: 6,
                name: 'test03',
                account: 'test03',
                email: 'test03@gmail.com',
                isAdmin: 0,
                status: 1
            }]
        }
    },
    methods: memberController,
    computed: {}
}
</script>

<style scoped lang="scss" src="./member.scss"></style>
