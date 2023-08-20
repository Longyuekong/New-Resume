<script setup>
import Experience from './components/Experience.vue';
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
const experienceConfig = [
    {
        title:'工作经历',
        experienceName:'OPPO',
        workTime:'2018.5 - 2019.09',
        tag:'在职',
        detail:[
            {
                detailTitle:'项目经历',
                descArr:[
                    '1111',
                    '2222',
                    '33333'
                ]
            }
        ]
    },
    {
        title:'',
        experienceName:'OPPO',
        workTime:'2018.5 - 2019.09',
        tag:'在职',
        detail:[
            {
                detailTitle:'项目经历',
                descArr:[
                    '1111',
                    '2222',
                    '33333'
                ]
            }
        ]
    },
]
</script>

<template>
   <div class="container">
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
        <Experience :experienceConfig="experienceConfig"></Experience>
    </div>
   </div>
</template>

<style scoped>

</style>
