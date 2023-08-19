<script setup>
const userInfo = [
    {
        leftInfo:'男 / 1996.04',
        rightInfo:'xxx.com / 在线简历',
    },
    {
        leftInfo:'本科 / 北方民族大学',
        rightInfo:'627784964@qq.com',
    },
    {
        leftInfo:'5年工作经验',
        rightInfo:'13649506209',
    },
    
]
const jobInfo = [
    {
        title:'工作经历',
        company:'公司名称',
        workTime:'2018.5 - 2019.09',
        tag:'工作',
        detail:[
            '负责开发公司（PC及移动端）的前端功能及交互效果的实现',
            '配合后台工程师一起研讨技术实现方案，进行应用及系统整合',
            '根据UI设计稿进行前端高保真实现'
        ]
    }
]
</script>

<template>
    <!-- 个人信息 -->
    <div class="header">
        <div class="title" >
            <div class="name">吴洋</div>
            <div class="job">Web前端开发工程师 | 深圳</div>
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
        <div 
        v-for="(item,index) in jobInfo" 
        :key="index"
        >
            <div>{{item.title}}</div>
            <div>
                <div>
                    <div>{{item.company}}</div>
                    <div>{{item.workTime}}</div>
                </div>
                <div>{{ item.tag }}</div>
            </div>
            <div
            v-for="detailItem in jobInfo.detail"
            :key="detailItem"
            >
                <div>原点</div>
                <div>{{detailItem}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
