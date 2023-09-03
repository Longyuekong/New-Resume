<script setup>
import Experience from './components/Experience.vue';
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

// 工作与技能
const jobSkillConfig = [
    {
        title: '工作经历',
        experienceName: 'OPPO',
        workTime: '2019.10 - 至今',
        tag: '在职',
        detail: [
            {
                detailTitle: '工作内容',
                descArr: [
                    '负责OPPO内容审核，审核标准平台，考试平台的搭建、交互开发、维护和优化工作',
                    '负责OPPO隐私安全平台以及广告负反馈H5（To C）的搭建、交互开发、维护和优化工作',
                    '负责OPPO主题快应用小游戏审核平台的重构'
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
                    '熟练掌握Vue(2x，3x)框架以及周边生态库',
                    '熟悉HTML5，CSS3，JavaScript(ES5/ES6/ES7)',
                    '熟悉git使用，多人协作开发流程，抽离业务逻辑，封装公共组件'
                ]
            }
        ]
    },
    // {
    //     title: '',
    //     experienceName: 'Web',
    //     workTime: '',
    //     tag: '了解',
    //     detail: [
    //         {
    //             detailTitle: '',
    //             notSort: true,
    //             descArr: [
    //                 '了解React设计思想，HTTP协议，Node.js等技术',
    //             ]
    //         }
    //     ]
    // },
    {
        title: '项目经历',
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
   
]
// OPPO内容审核 审核标准平台 考试平台
// 三品牌全业务内容质量与安全工作，通过标准，流程，审核能力等多种手段，确保内容安全零风险
// 
// 基本AI和自动化能力，为开发者提供专业的隐私检测服务，协助开发者进行低成本高效率的隐私安全检测，实时监控最新隐私政策，建立开发者快速反馈绿色通道，为创建绿色应用生态专业护航
// OPPO 广告负反馈H5
// 负责全球APK（手机，电视，手表）主题快应用小游戏相关的审核能力开发，保障数据的准确性，全链路的审核效率和质量
// 负责全球内容产品（文本，图片，音视频）相关的审核能力开发，保障数据的准确性，审核的效率，后台的查询性能，视觉和交互的体验，数据统计等
// 为所有接入审核平台的业务制定安全合规，符合业务诉求可落地的执行标准，建立完善的全球内容安全管理体系，提高员工内容安全意识级别风险。消除内容安全风险
// 项目经历
const experienceConfig = [
{
        title: '项目经历',
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
        experienceName: 'OPPO内容审核 审核标准平台 考试平台',
        workTime: '',
        tag: 'Vue2',
        detail: [
            {
                detailTitle: '项目描述',
                notSort: true,
                descArr: [
                    '管理三品牌全业务内容质量与安全工作，通过标准，流程，审核能力等多种手段，确保内容安全零风险',
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
                    '参与平台搭建，负责多个模块，满足业务方审核需求',
                    '采用模板动态配置方式，快速支持业务接入审核',
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
const exportPDF = () => {
    window.print()
}
</script>

<template>
    <div class="container">
    <div class="export-btn" @click="exportPDF">生成PDF</div>
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
            <div class="content">
                <div>
                    <Experience :experienceConfig="jobSkillConfig"></Experience>
                </div>
                <div>
                    <Experience :experienceConfig="experienceConfig"></Experience>
                </div>
            </div>
        </div>
    </div>
</template>

