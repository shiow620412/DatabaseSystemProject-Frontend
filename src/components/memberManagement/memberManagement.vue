<template>
<div>
    <div class="cart-header">
        <div class="cart-header-content">
            <p>
                <el-text style="font-size: 35px">會員管理</el-text>
            </p>
            <ul>
                <el-table :data="memberArray" style="width: 100%;font-size: 15px">
                    <el-table-column prop="memberID" label="會員ID" min-width="10%" align="center"></el-table-column>
                    <el-table-column prop="name" label="會員名稱" min-width="30%" align="center"></el-table-column>
                    <el-table-column prop="account" label="帳號" min-width="35%" align="center"></el-table-column>
                    <el-table-column prop="password" label="密碼" min-width="15%" align="center"></el-table-column>
                    <el-table-column prop="email" label="信箱" min-width="35%" align="center"></el-table-column>
                    <el-table-column prop="address" label="住址" min-width="20%" align="center"></el-table-column>
                    <el-table-column label="是否為管理員" min-width="20%" align="center">
                        <template v-slot="scope">
                            <el-text>{{ test(scope.row.isAdmin) }}</el-text>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="狀態" min-width="20%" align="center"></el-table-column>
                    <el-table-column label="操作" min-width="45%" align="center">
                        <template #default="scope">
                            <el-button size="mini" @click="clickEdit(scope.$index, scope.row) & (this.isSave = true) & (this.isEdit = false) & (this.isDelete = true)" v-show="this.isEdit">編輯</el-button>
                            <el-button size="mini" type="danger" @click="(this.isSave = false) & (this.isEdit = true) & (this.isDelete = false)" v-show="this.isDelete">刪除</el-button>
                            <el-button size="mini" @click="(this.isSave = false) & (this.isEdit = true) & (this.isDelete = false)" v-show="this.isSave">儲存</el-button>
                        </template>
                    </el-table-column>
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
                </el-table>
            </ul>
        </div>
    </div>

    <!-- <ul>
        <p>
            <el-button>會員管理</el-button>
        </p>
        <p>
            <el-button>商品上下架管理</el-button>
        </p>
    </ul> -->
</div>
</template>

<script>
import memberManagementController from "./memberManagement.controller";
export default {
    name: 'memberManagement',
    data() {
        return {
            productOfChecked: [],
            deleteIndex: 0,
            isEdit: true,
            isSave: false,
            isDelete: false,
            memberArray: [{
                memberID: 1,
                email: 'test@gmail.com',
                name: 'adm01',
                account: 'adm01',
                password: 'adm01',
                address: 'Taipei',
                isAdmin: 1,
                status: 'Normal'
            }, {
                memberID: 1,
                email: 'test@gmail.com',
                name: 'test01',
                account: 'test01',
                password: 'test01',
                address: 'Taipei',
                isAdmin: 0,
                status: 'Suspension'
            }],
        }
    },
    methods: memberManagementController,
    computed: {}
}
</script>

<style scoped lang="scss" src="./memberManagement.scss"></style>
