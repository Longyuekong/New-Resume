<script setup>
import Experience from './components/Experience.vue';
import { ref } from 'vue'
const userInfo = [
    {
        leftInfo: '男 / 1996.04',
        rightInfo: '13649506209',
    },
    {
        leftInfo: '本科 / 北方民族大学',
        rightInfo: '627784964@qq.com',
    },
    {
        leftInfo: '2018年毕业 / 5年工作经验',
        rightInfo: 'wyresume.top',
    },

]
// 为所有接入审核平台的业务制定安全合规，符合业务诉求可落地的执行标准，建立完善的全球内容安全管理体系，提高员工内容安全意识级别风险。消除内容安全风险
// 工作与技能
const jobSkillConfig = [
{
        title: '工作经历',
        experienceName: '时代微云科技有限公司',
        workTime: '2023.11 - 至今',
        tag: '在职',
        detail: [
            {
                detailTitle: '工作内容',
                descArr: [
                    '负责华东院BIM模型审查平台的开发与维护',
                ]
            }
        ]
    },
    {
        title: '',
        experienceName: '佰均成技术有限责任公司',
        workTime: '2019.10 - 2023.10',
        tag: '',
        detail: [
            {
                detailTitle: '工作内容',
                descArr: [
                    '负责OPPO内容审核，审核标准平台，考试平台的搭建、交互开发、维护和优化工作',
                    '负责OPPO主题快应用小游戏审核平台的重构',
                    '负责OPPO隐私安全平台以及广告负反馈H5（To C）的搭建、交互开发、维护和优化工作',
                ]
            }
        ]
    },
    {
        title: '',
        experienceName: '广州潮盟网络科技有限公司',
        workTime: '2018.10 - 2019.08',
        tag: '',
        detail: [
            {
                detailTitle: '工作内容',
                descArr: [
                    '负责公司客户管理模块的开发与维护',
                ]
            }
        ]
    },
    {
        title: '个人能力',
        experienceName: 'Web',
        workTime: '',
        tag: '熟悉',
        detail: [
            {
                detailTitle: '',
                descArr: [
                    '熟悉Vue(2x，3x)框架以及周边生态库',
                    '熟悉HTML5，CSS3，JavaScript(ES5/ES6/ES7)',
                    '熟悉大型项目开发流程，对需求管理，团队协作，代码Review,重构等工作有一定的实践',
                    '熟悉MVVM模型，了解现代框架原理'
                ]
            }
        ]
    },
    {
        title: '项目经历',
        experienceName: 'OPPO内容审核平台+标准平台+考试平台 ',
        workTime: '',
        tag: 'Vue2',
        detail: [
            {
                detailTitle: '项目描述',
                notSort: true,
                descArr: [
                    '负责全球内容产品（文本，图片，音视频）相关的审核能力开发，保障数据的准确性，审核的效率，后台的查询性能，视觉和交互的体验，数据统计等',
                ]
            },
            {
                detailTitle: '技术选型',
                notSort: true,
                descArr: [
                    'Vue2 + VueX + Element + Vue-router等',
                ]
            },
            {
                detailTitle: '主要工作',
                descArr: [
                    '从0到1完成项目的落地和上线，通过模板+配置json的方式，高效生成页面，解决业务快速接入的问题',
                    '结合业务逻辑与element组件库，封装业务组件（如table,form），支持组件配置化，减少重复冗余代码',
                    '通过路由懒加载，文件按需加载，图片懒加载，优化代码结构等方式提升用户体验'
                ]
            },
        ]
    },


]
// 项目经历
const experienceConfig = [
    {
        title: '',
        experienceName: 'OPPO资源后台重构',
        workTime: '',
        tag: 'Vue3 Vite',
        detail: [
            {
                detailTitle: '项目描述',
                notSort: true,
                descArr: [
                    '负责全球APK（手机，电视，手表）主题快应用小游戏相关的审核能力开发，提升全链路审核效率和质量',
                ]
            },
            {
                detailTitle: '技术选型',
                notSort: true,
                descArr: [
                    'Vue3x + Vite + Element-Plus + VueX等',
                ]
            },
            {
                detailTitle: '主要工作',
                descArr: [
                    '前后端分离，业务逻辑解耦',
                    '设计公共组件，高质量复用',
                    '正常迭代更新，优化代码结构'
                ]
            },
        ]
    },

    {
        title: '',
        experienceName: '隐私安全平台',
        workTime: '',
        tag: 'Vue3 + Vite',
        detail: [
            {
                detailTitle: '项目描述',
                notSort: true,
                descArr: [
                    '基本AI自动化能力，为开发者提供专业的隐私检测服务',
                ]
            },
            {
                detailTitle: '技术选型',
                notSort: true,
                descArr: [
                    'Vue3 + Vite +  VueX + Element-Plus等',
                ]
            },
            {
                detailTitle: '主要工作',
                descArr: [
                    '负责产品从0到1的开发，快速搭建平台',
                    '前端性能优化，提升用户体验',
                ]
            },
        ]
    },

    {
        title: '',
        experienceName: 'OPPO广告负反馈H5',
        workTime: '',
        tag: 'Vant Vue3 Vite',
        detail: [
            {
                detailTitle: '项目描述',
                notSort: true,
                descArr: [
                    '收集用户反馈问题，推进业务整改，提升用户体验',
                ]
            },
            {
                detailTitle: '技术选型',
                notSort: true,
                descArr: [
                    'Vue3x + Vite + Vant + VueX + Element-Plus等',
                ]
            },
            {
                detailTitle: '主要工作',
                notSort: true,
                descArr: [
                    '高保真还原UI设计稿，支持移动端适配',
                ]
            },
        ]
    },


]
const isSwitch = ref(true)
const exportPDF = () => {
    window.print()
}
</script>

<template>
    <div class="container">
        <div class="export-btn" @click="exportPDF">生成PDF</div>
        <div class="export-btn switch-btn" @click="isSwitch = !isSwitch">更换模板</div>
        <div class="section">
            <!-- 个人信息 -->
            <div class="header">
                <div class="title">
                    <div class="name">吴洋</div>
                    <div class="job">Web前端开发工程师 | 深圳</div>
                </div>
                <!-- 基本信息 -->
                <div v-for="(item, index) in userInfo" :key="index" class="user-info">
                    <div class="left-info">{{ item.leftInfo }}</div>
                    <div class="right-info">{{ item.rightInfo }}</div>
                </div>
            </div>
            <!-- 工作经历+项目经历 -->
            <div class="content" :class="isSwitch ? 'switch-temp' : ''">
                <Experience :experienceConfig="jobSkillConfig"></Experience>
                <Experience :experienceConfig="experienceConfig"></Experience>
            </div>
        </div>
    </div>
</template>

