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

// 工作与技能
const jobSkillConfig = [
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
    {
        title:'技能',
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
// OPPO内容审核 审核标准平台 考试平台
// 三品牌全业务内容质量与安全工作，通过标准，流程，审核能力等多种手段，确保内容安全零风险
// 隐私安全平台
// 基本AI和自动化能力，为开发者提供专业的隐私检测服务，协助开发者进行低成本高效率的隐私安全检测，实时监控最新隐私政策，建立开发者快速反馈绿色通道，为创建绿色应用生态专业护航
// OPPO 广告负反馈H5
// 负责全球APK（手机，电视，手表）主题快应用小游戏相关的审核能力开发，保障数据的准确性，全链路的审核效率和质量
// 负责全球内容产品（文本，图片，音视频）相关的审核能力开发，保障数据的准确性，审核的效率，后台的查询性能，视觉和交互的体验，数据统计等
// 为所有接入审核平台的业务制定安全合规，符合业务诉求可落地的执行标准，建立完善的全球内容安全管理体系，提高员工内容安全意识级别风险。消除内容安全风险
// 项目经历
const experienceConfig = [
    {
        title:'项目经历',
        experienceName:'OPPO',
        workTime:'2018.5 - 2019.09',
        tag:'在职',
        detail:[
            {
                detailTitle:'项目描述',
                descArr:[
                    '1111',
                    '2222',
                    '33333'
                ]
            },
            {
                detailTitle:'主要工作',
                descArr:[
                    '1111',
                    '2222',
                    '33333'
                ]
            },
        ]
    },

]
const exportPDF = ()=>{
    window.print()
}
</script>

<template>
    <div class="export-btn" @click="exportPDF">生成PDF</div>
<div class="container">
    <div  class="section">
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
        <div >
        <Experience :experienceConfig="jobSkillConfig"></Experience>
        </div>
        <div >
        <Experience :experienceConfig="experienceConfig"></Experience>
        </div>
    </div>
   </div>
</div>
</template>

<style scoped>

</style>
