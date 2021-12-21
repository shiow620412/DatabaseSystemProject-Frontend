<template>
<el-container>
    <el-header height="40px">
        <el-text style="font-size: 25px;font-weight: bold">會員管理</el-text>
    </el-header>
    <el-main>
        <div style="margin-bottom: 10px" align="right">
            <el-text style="font-size: 18px;font-weight: bold">搜尋: &nbsp;&nbsp;</el-text>
            <el-input style="width: 250px" placeholder="Search" class="search" v-model="search"></el-input>
        </div>
        <el-table :data="tables" style="width: 100%;font-size: 15px" :default-sort="{ prop: 'memberID' }" row-style="height: 10vh" max-height="490">
            <el-table-column prop="memberID" label="會員ID" min-width="15%" align="center" sortable></el-table-column>
            <el-table-column prop="name" label="會員名稱" min-width="25%" align="center" sortable></el-table-column>
            <el-table-column prop="account" label="帳號" min-width="25%" align="center"></el-table-column>
            <el-table-column prop="email" label="信箱" min-width="25%" align="center"></el-table-column>
            <el-table-column label="是否為管理員" min-width="15%" align="center">
                <template v-slot="scope">
                    <template v-if="!scope.row.click">
                        <el-tag :type="(scope.row.isAdmin === 1) ? 'success' : 'danger'" size="medium">{{ changeIsAdminChinese(scope.row.isAdmin) }}</el-tag>
                    </template>
                    <template v-else-if="scope.row.click">
                        <el-select v-model="scope.row.isAdmin" placeholder="Select" size="medium" style="width: 60px">
                            <el-option v-for="item in isAdminArray" :key="item.value1" :label="item.label" :value="item.value1"></el-option>
                        </el-select>
                    </template>
                </template>
            </el-table-column>
            <el-table-column label="狀態" min-width="13%" align="center">
                <template v-slot="scope">
                    <template v-if="!scope.row.click">
                        <el-tag :type="(scope.row.status === 1) ? 'success' : 'danger'" size="medium">{{ changeStatusChinese(scope.row.status) }}</el-tag>
                    </template>
                    <template v-else-if="scope.row.click">
                        <el-select v-model="scope.row.status" placeholder="Select" size="medium">
                            <el-option v-for="item in statusArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </template>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="13%" align="center">
                <template #default="scope">
                    <el-button size="mini" @click="(scope.row.click = true)" v-show="!scope.row.click">編輯</el-button>
                    <el-button size="mini" @click="(scope.row.click = false) & clickSave(scope.$index)" v-show="scope.row.click">儲存</el-button>
                    <!-- <el-button size="mini" @click="clickEdit(scope.$index, scope.row) & (this.isSave = true) & (this.isEdit = false) & (this.isDelete = true)" v-show="this.isEdit">編輯</el-button>
                            <el-button size="mini" @click="(this.isSave = false) & (this.isEdit = true) & (this.isDelete = false)" v-show="this.isSave">儲存</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10,15]" :page-size="pageSize" layout="total,jumper,prev, pager, next,size" :total="files_count">
        </el-pagination>
    </el-main>
</el-container>
</template>

<script>
import {
    ref
} from 'vue'
import memberController from "./member.controller";
// import memberManagementService from '../../services/memberManagement.service'
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
            search: '',
            memberArray: [{
                memberID: 1,
                name: 'admin01',
                account: 'admin01',
                email: 'adm01@gmail.com',
                isAdmin: 1,
                status: 1,
                click: false
            }, {
                memberID: 2,
                name: 'test01',
                account: 'test01',
                email: 'test01@gmail.com',
                isAdmin: 0,
                status: 0,
                click: false
            }, {
                memberID: 3,
                name: 'admin02',
                account: 'admin02',
                email: 'admin02@gmail.com',
                isAdmin: 1,
                status: 0,
                click: false
            }, {
                memberID: 4,
                name: 'admin03',
                account: 'admin03',
                email: 'admin03@gmail.com',
                isAdmin: 1,
                status: 1,
                click: false
            }, {
                memberID: 5,
                name: 'test02',
                account: 'test02',
                email: 'test02@gmail.com',
                isAdmin: 0,
                status: 0,
                click: false
            }, {
                memberID: 6,
                name: 'test03',
                account: 'test03',
                email: 'test03@gmail.com',
                isAdmin: 0,
                status: 1,
                click: false
            }, {
                memberID: 7,
                name: 'test07',
                account: 'test07',
                email: 'test07@gmail.com',
                isAdmin: 0,
                status: 1,
                click: false
            }, {
                memberID: 8,
                name: 'admin08',
                account: 'admin08',
                email: 'admin08@gmail.com',
                isAdmin: 1,
                status: 0,
                click: false
            }]
        }
    },
    methods: memberController,
    computed: {
        tables: function () {
            var search = this.search;
            if (search) {
                return this.memberArray.filter(function (dataNews) {
                    return Object.keys(dataNews).some(function (key) {
                        return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.memberArray
        }
    },
    mounted() {
        // memberManagementService.getMember
    }
}
</script>

<style scoped lang="scss" src="./member.scss"></style>
