<script setup>
import Experience from "./components/Experience.vue";
import { ref } from "vue";
const userInfo = [
  {
    leftInfo: "男 / 1996.04",
    rightInfo: "13649506209",
  },
  {
    leftInfo: "本科 / 北方民族大学",
    rightInfo: "627784964@qq.com",
  },
  {
    leftInfo: "2018年毕业 / 7年工作经验",
    // rightInfo: 'wyresume.top',
    rightInfo: "",
  },
];
// 为所有接入审核平台的业务制定安全合规，符合业务诉求可落地的执行标准，建立完善的全球内容安全管理体系，提高员工内容安全意识级别风险。消除内容安全风险
// 工作与技能
const jobSkillConfig = [
  {
    title: "工作经历",
    experienceName: "时代微云科技有限公司",
    workTime: "2023.10 - 至今",
    tag: "在职",
    detail: [
      {
        detailTitle: "工作内容",
        descArr: [
          "负责深圳市规划报建BIM辅助报建系统的开发与维护",
          "负责华东院BIM数字化交付平台，BIM模型审查平台的开发与维护",
          "负责华东院永嘉抽蓄项目的开发与维护",
        ],
      },
    ],
  },
  {
    title: "",
    experienceName: "佰均成技术有限责任公司",
    workTime: "2019.10 - 2023.10",
    tag: "",
    detail: [
      {
        detailTitle: "工作内容",
        descArr: [
          "负责OPPO内容审核，考试平台的搭建、交互开发、维护和优化工作",
          "负责OPPO主题快应用小游戏审核平台的重构",
          "负责OPPO隐私安全平台以及广告负反馈H5（To C）的搭建、交互开发、维护和优化工作",
        ],
      },
    ],
  },
  {
    title: "个人能力",
    experienceName: "Web",
    workTime: "",
    tag: "",
    detail: [
      {
        detailTitle: "",
        descArr: [
          "框架与生态：熟练 Vue 2.x/3.x 技术栈以及周边生态库，主导过中大型项目架构设计与落地，基于uniapp完成跨端开发，对移动端h5，小程序适配调优有一定了解。",
          "基础与工程化：熟练 HTML5、CSS3、JavaScript（ES6+），熟练 Vite、Webpack 等构建工具，熟悉浏览器渲染机制与性能优化，可高效处理复杂交互与兼容性问题。",
          "项目与团队赋能：主导大型企业级项目全流程开发，擅长需求拆解、CI/CD 搭建与代码规范落地；通过 Code Review、技术重构提升代码质量，具备团队合作、新人带教、推动团队技术迭代的经验。",
          "原理与技术选型：深入理解 MVVM 模式及现代框架底层原理，可结合业务场景完成技术选型与方案设计，对前端工程化、性能优化有成熟实践。",
        ],
      },
    ],
  },
  {
    title: "项目经历",
    experienceName: "深圳市规划报建BIM辅助报建系统",
    workTime: "",
    tag: "Vue3 + 大象云BIM模型 + Antd + vite + pinia",
    detail: [
      {
        detailTitle: "项目描述",
        notSort: true,
        descArr: [
          "基于BIM技术搭建规划报建BIM辅助审查系统，支撑房建类建设项目工程规划许可的业务场景，实现部分刚性业务指标的BIM辅助审查，完成从报建端提交合标的IFC模型文件到生成BIM审查报告的专业创新试点，以达到提高审批效率，优化审批流程，提升模型质量的建设目标。",
        ],
      },
      {
        detailTitle: "主要工作",
        descArr: [
          "负责大象云 BIM 图形引擎与业务系统的深度集成及二次开发，实现了 IFC 模型的高精度展示、交互联动、自定义绘制等核心功能，支撑模型审查、报建等业务场景的可视化审查。",
          "设计动态节点算法（关联审查项与构件的映射关系）以及通过缓存机制，实现审查项与构件的快速联动；同时优化模型渲染流程（云渲染），解决低性能设备端卡顿问题，保障复杂场景下交互流畅度，确保操作响应延迟≤500ms。",
          "负责报建端（面向用户的 BIM 模型报建入口）与审查端（深圳规自局监管审核）两大平台的全链路开发, 通过拆分报建流程，抽离公共组件，解耦业务逻辑，支持用户快速报建和审查效率提升",
        ],
      },
    ],
  },
];
// 项目经历
const experienceConfig = [
  {
    title: "",
    experienceName: "BIM数字化交付平台 + BIM模型审查平台 + 永嘉抽蓄项目",
    workTime: "",
    tag: "Vue3 +VueX +webpack + 凤岭组件库",
    detail: [
      {
        detailTitle: "项目描述",
        notSort: true,
        descArr: [
          "支持在线提交IFC模型并智能解析楼层信息，实现版本对比与审批协同；基于地方标准参数化审查规则，自动校核容积率等核心指标；实现模型与项目数据双向绑定及全流程追踪；深度集成国土空间平台并严格权限管控；线上维护可读规则库，自动解析规范标准，显著提升审查效率与精度。",
        ],
      },
      {
        detailTitle: "主要工作",
        descArr: [
          "主导模型合规审查、设计协同、业务规则、项目配置等核心模块开发",
          "专项场景定制化解决抽蓄施工进度、机电院模型切分、算量等特定业务场景，完成定制化模块开发与现有功能改造，满足专业场景的深度业务需求。",
        ],
      },
    ],
  },
  {
    title: "",
    experienceName: "OPPO资源后台重构",
    workTime: "",
    tag: "Vue3+Vite+Pinia+Element-Plus+Mock+ESLint",
    detail: [
      {
        detailTitle: "项目描述",
        notSort: true,
        descArr: [
          "负责支撑全球 APK（手机 / 电视 / 手表）主题、快应用及小游戏的审核能力重构与开发，通过技术升级与架构优化，显著提升全链路审核效率与内容质量，服务全球 100 + 地区的审核业务场景，保障内容安全与合规性。",
        ],
      },
      {
        detailTitle: "主要工作",
        descArr: [
          "主导前后端分离架构落地，严格遵循 RESTful 规范制定标准化接口文档与交互契约，明确前后端分工边界。引入 Mock Server 搭建接口模拟服务，支持前端独立开发调试，配合接口自动化校验机制，将跨团队联调周期缩短 30%，",
          "围绕审核核心场景设计并落地高复用性公共组件库，覆盖动态校验表单、多维度筛选表格、全局权限控制弹窗等高频使用模块。基于 Vue3 Composition API 封装可复用业务逻辑，结合 Element-Plus 做定制化二次开发，统一多业务线交互规范，提升页面开发效率",
          "构建 ESLint+Prettier+Husky 代码强规范体系，通过提交拦截管控代码质量；完成老旧模块重构优化，核心页面加载速度提升 20%，沉淀标准化开发规范。",
        ],
      },
    ],
  },

  {
    title: "",
    experienceName: "隐私安全平台",
    workTime: "",
    tag: "Vue3+Vite+Pinia+Echarts+AI自动化检测",
    detail: [
      {
        detailTitle: "项目描述",
        notSort: true,
        descArr: [
          "该平台是面向 OPPO 全球生态开发者的隐私合规检测服务平台，依托 AI 自动化检测能力，可深度扫描 APP 的权限调用、数据收集、第三方 SDK 嵌入等行为，精准识别超范围权限申请、违规数据传输等隐私合规风险，输出符合 GDPR、《个人信息保护法》等全球主流法规的专业检测报告，帮助开发者快速定位并修复隐私问题，大幅降低人工审核成本，保障产品上线合规性。",
        ],
      },
      {
        detailTitle: "主要工作",
        descArr: [
          "主导平台 AI 智能审核模块的前端开发，深度对接公司内部 AI 检测 API 平台，实现检测任务一键发起、AI 检测结果实时拉取与可视化解析功能。支持开发者查看风险项详情、溯源分析及合规修复建议，保障检测流程高效运转，支撑日均千级检测任务稳定处理。",
          "针对 AI 检测报告的大数据量渲染场景，采用虚拟列表、异步加载等方案优化页面性能；通过 Vite 构建优化、代码分割与 Tree Shaking 减少包体积；同时优化风险项可视化交互，通过风险等级高亮、图表化展示提升开发者对合规问题的理解效率，降低修复成本。",
        ],
      },
    ],
  },
  {
    title: "",
    experienceName: "OPPO内容审核平台+考试平台",
    workTime: "",
    tag: "Vue2+Typescript+Vuex+ElementUI+Echarts",
    detail: [
      {
        detailTitle: "项目描述",
        notSort: true,
        descArr: [
          "负责全球内容产品（文本，图片，音视频）相关的审核能力开发，保障数据的准确性，审核的效率，后台的查询性能，视觉和交互的体验，数据统计等",
        ],
      },
      {
        detailTitle: "主要工作",
        descArr: [
          "从 0 到 1 项目落地：主导项目全流程上线，搭建「模板 + JSON 配置」的低代码页面生成方案，将新业务页面接入周期从 7 天缩短至 1-2 天，高效支撑全球多地区业务快速上线。",
          "组件化能力建设：基于 Element 封装配置化业务组件库（表格、表单等），通过 JSON 驱动组件渲染，降低重复代码率 40%，统一多业务线交互体验。",
          "代码层面性能与体验优化：通过路由懒加载、资源按需加载、图片懒加载实现代码分割，结合 Tree Shaking 清理冗余代码，同时重构老旧代码结构提升可维护性，支撑日均百万级审核请求稳定运行。",
        ],
      },
    ],
  },

  {
    title: "",
    experienceName: "OPPO广告负反馈H5",
    workTime: "",
    tag: "Uniapp + Vant+ Vue3 + pinia",
    detail: [
      {
        detailTitle: "项目描述",
        notSort: true,
        descArr: [
          "服务 OPPO 内容平台的轻量化用户反馈工具，助力运营团队快速定位广告违规和内容问题，提升用户体验与广告内容合规性。",
        ],
      },
      {
        detailTitle: "主要工作",
        descArr: [
          "基于 UniApp 跨端架构开发核心反馈模块，通过 Pinia 实现多端状态同步，针对低版本 WebView 优化事件绑定逻辑，支持图片 / 文字多类型反馈提交",
          "针对 UniApp 编译后的 H5 包在低版本 WebView 中的加载瓶颈，增加移除冗余依赖、开启资源分包懒加载、替换 Base64 图片为 CDN 链接等方案",
        ],
      },
    ],
  },
];
const isSwitch = ref(true);
const exportPDF = () => {
  window.print();
};
</script>

<template>
  <div class="container">
    <div class="export-btn" @click="exportPDF">生成PDF</div>
    <div class="export-btn switch-btn" @click="isSwitch = !isSwitch">
      更换模板
    </div>
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
