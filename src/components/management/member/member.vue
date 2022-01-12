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
        <el-table :data="tables" style="width: 100%;font-size: 15px" :default-sort="{ prop: 'MemberID' }" row-style="height: 10vh" max-height="490">
            <!-- <el-table :data="memberArray" style="width: 100%;font-size: 15px" :default-sort="{ prop: 'MemberID' }" row-style="height: 10vh" max-height="490"> -->
            <el-table-column prop="MemberID" label="會員ID" min-width="15%" align="center" sortable></el-table-column>
            <el-table-column prop="Name" label="會員名稱" min-width="25%" align="center" sortable></el-table-column>
            <el-table-column prop="Account" label="帳號" min-width="25%" align="center"></el-table-column>
            <el-table-column prop="Email" label="信箱" min-width="25%" align="center"></el-table-column>
            <el-table-column label="是否為管理員" min-width="15%" align="center">
                <template v-slot="scope">
                    <!-- <el-tag :type="(scope.row.isAdmin === 1) ? 'success' : 'danger'" size="medium">{{ changeIsAdminChinese(scope.row.isAdmin) }}</el-tag> -->
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
                        <el-tag :type="(scope.row.isBan === 0) ? 'success' : 'danger'" size="medium">{{ changeStatusChinese(scope.row.isBan) }}</el-tag>
                    </template>
                    <template v-else-if="scope.row.click">
                        <el-select v-model="scope.row.isBan" placeholder="Select" size="medium">
                            <el-option v-for="item in statusArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </template>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="13%" align="center">
                <template #default="scope">
                    <el-button size="mini" @click="(scope.row.click = true)" v-show="!scope.row.click">編輯</el-button>
                    <el-button size="mini" @click="(scope.row.click = false) & clickSave(scope.$index, scope.row.MemberID, scope.row.isAdmin, scope.row.isBan)" v-show="scope.row.click">儲存</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align: center">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[50, 100, 150]" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="this.memberArray.total" />
        </div>
    </el-main>
</el-container>
</template>

<script>
import {
    ref
} from 'vue'
import memberController from "./member.controller"
import memberService from '../../../services/admin/user.service'

export default {
    name: 'member',
    setup() {
        return {
            statusArray: ref([{
                    value: 1,
                    label: '停權',
                },
                {
                    value: 0,
                    label: '正常',
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
            memberArray: [],
            currentPage: 1,
            pageSize: 50,
        }
    },
    methods: memberController,
    computed: {
        tables: function () {
            var search = this.search;
            if (search) {
                return this.memberArray.result.filter(function (dataNews) {
                    return Object.keys(dataNews).some(function (key) {
                        return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.memberArray.result
        }
    },
    mounted() {
        this.eventBus.emit('routeChanged');
        memberService.getAllMembers().then(data => {
            this.memberArray = data
        })
    }
}
</script>

<style scoped lang="scss" src="./member.scss"></style>
