<template>
<div>
    <div>
        <div>
            <el-row class="header" justify="left">
                <div margin-top="20px">
                    <el-text style="font-size: 25px;font-weight: bold">商品管理</el-text>
                </div>
            </el-row>

            <el-tabs type="card" style="margin-bottom: 45px;">
                <el-tab-pane>
                    <template #label>
                        <span class="el-icon-sold-out">
                            修改商品
                        </span>
                    </template>
                    修改商品(可以刪除商品跟改變商品狀態)
                    #需要加上換頁面或是無窮無窮滾動</el-tab-pane>
                <el-tab-pane>
                    <template #label>
                        <span class="el-icon-sell">
                            新增商品
                        </span>
                    </template>
                    新增商品(上架商品)
                    #需要加上換頁面或是無窮無窮滾動</el-tab-pane>
            </el-tabs>

            <!-- <el-tabs :tab-position="tabPosition" style="height: 200px">
                <el-tab-pane label="soldOut">修改</el-tab-pane>
                <el-tab-pane label="sell">新增</el-tab-pane>
            </el-tabs> -->

            <!-- <el-tabs type="border-card">
                <el-tab-pane label="User">User</el-tab-pane>
                <el-tab-pane label="Config">Config</el-tab-pane>
                <el-tab-pane label="Role">Role</el-tab-pane>
                <el-tab-pane label="Task">Task</el-tab-pane>
            </el-tabs> -->

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'product',
    data() {
        return {
            tabPosition: 'soldOut',
        }
    }
}
</script>

<style scoped lang="scss" src="./product.scss"></style>
