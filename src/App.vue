<script setup>
const userInfo = [
    {
        leftInfo:'男/1996.04',
        rightInfo:'xxx.com/在线简历',
    },
    {
        leftInfo:'本科/北方民族大学',
        rightInfo:'627784964@qq.com',
    },
    {
        leftInfo:'5年工作经验',
        rightInfo:'13649506209',
    },
    
]
</script>

<template>
    <!-- 个人信息 -->
    <div class="header">
        <div class="title" >
            <div class="name">吴洋</div>
            <div class="job">Web前端开发工程师|深圳</div>
        </div>
        <!-- 基本信息 -->
        <div 
        v-for="(item,index) in userInfo"
         :key="index"
         class="user-info"
         >
            <div class="left-info">{{ item.leftInfo }}</div>
            <div class="right-info">{{ item.rightInfo }}</div>
        </div>
    </div>
    <!-- 工作经历+项目经历 -->
    <div class="content">
        <div>
            <div>工作经历</div>
                <div>
                    <div>公司名称</div>
                    <div>2019-22 --- xxxx</div>
                </div>
                <!-- 工作内容 -->
                <div>
                    <div>负责开发公司（PC及移动端）的前端功能及交互效果的实现</div>
                    <div>配合后台工程师一起研讨技术实现方案，进行应用及系统整合</div>
                    <div>根据UI设计稿进行前端高保真实现</div>
                </div>
        </div>
    </div>
</template>

<style scoped>

</style>
