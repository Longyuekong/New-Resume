<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Resume from './Resume.vue';

const router = useRouter();

// 默认配置
const defaultConfig = {
  name: '吴洋',
  avatar: '',
  jobTitle: 'Web前端开发工程师 | 深圳',
  phone: '13649506209',
  email: '627784964@qq.com',
  themeColor: '#00b38a',
  fontSize: 'medium',
  layout: 'normal',
  showInternship: true,
  showProjects: true,
  showSkills: true
};

// 配置状态
const config = ref({ ...defaultConfig });

// 从localStorage加载配置
const loadConfig = () => {
  const savedConfig = localStorage.getItem('resumeConfig');
  if (savedConfig) {
    try {
      config.value = { ...defaultConfig, ...JSON.parse(savedConfig) };
    } catch (e) {
      console.error('加载配置失败:', e);
    }
  }
};

// 保存配置到localStorage
const saveConfig = () => {
  try {
    localStorage.setItem('resumeConfig', JSON.stringify(config.value));
    alert('配置已保存！');
    // 触发storage事件通知其他页面
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('保存配置失败:', e);
    alert('保存失败，请重试');
  }
};

// 重置配置
const resetConfig = () => {
  if (confirm('确定要重置为默认配置吗？')) {
    config.value = { ...defaultConfig };
    localStorage.removeItem('resumeConfig');
    applyConfig();
    alert('已重置为默认配置');
  }
};

// 应用配置到页面
const applyConfig = () => {
  // 应用主题色
  if (config.value.themeColor) {
    document.documentElement.style.setProperty('--theme-color', config.value.themeColor);
  }
  
  // 应用字体大小
  const fontSizeMap = {
    small: '14px',
    medium: '16px',
    large: '18px'
  };
  if (config.value.fontSize && fontSizeMap[config.value.fontSize]) {
    document.documentElement.style.setProperty('--base-font-size', fontSizeMap[config.value.fontSize]);
  }
};

// 监听配置变化，实时应用
watch(config, () => {
  applyConfig();
}, { deep: true });

// 返回简历页
const goBack = () => {
  router.push('/');
};

onMounted(() => {
  loadConfig();
  applyConfig();
});
</script>

<template>
  <div class="config-page">
    <div class="config-container">
      <!-- 头部 -->
      <div class="config-header">
        <h1>简历配置</h1>
        <button class="back-btn" @click="goBack">返回简历</button>
      </div>

      <!-- 主体内容 -->
      <div class="config-content">
        <!-- 左侧配置表单 -->
        <div class="config-form">
          <!-- 基础信息 -->
          <div class="form-section">
            <h2>基础信息</h2>
            
            <div class="form-group">
              <label for="name">姓名</label>
              <input 
                type="text" 
                id="name" 
                v-model="config.name" 
                placeholder="请输入姓名"
              />
            </div>

            <div class="form-group">
              <label for="avatar">头像URL</label>
              <input 
                type="url" 
                id="avatar" 
                v-model="config.avatar" 
                placeholder="请输入头像图片链接"
              />
              <p class="form-hint">输入图片URL地址，留空则不显示头像</p>
            </div>

            <div class="form-group">
              <label for="jobTitle">求职意向</label>
              <input 
                type="text" 
                id="jobTitle" 
                v-model="config.jobTitle" 
                placeholder="例如：Web前端开发工程师"
              />
            </div>

            <div class="form-group">
              <label for="phone">联系电话</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="config.phone" 
                placeholder="请输入联系电话"
              />
            </div>

            <div class="form-group">
              <label for="email">电子邮箱</label>
              <input 
                type="email" 
                id="email" 
                v-model="config.email" 
                placeholder="请输入电子邮箱"
              />
            </div>
          </div>

          <!-- 样式配置 -->
          <div class="form-section">
            <h2>样式配置</h2>
            
            <div class="form-group">
              <label for="themeColor">主题色</label>
              <input 
                type="color" 
                id="themeColor" 
                v-model="config.themeColor"
              />
              <p class="form-hint">当前颜色：{{ config.themeColor }}</p>
            </div>

            <div class="form-group">
              <label>字体大小</label>
              <div class="radio-group">
                <div class="radio-item">
                  <input 
                    type="radio" 
                    id="fontSize-small" 
                    value="small" 
                    v-model="config.fontSize"
                  />
                  <label for="fontSize-small">小</label>
                </div>
                <div class="radio-item">
                  <input 
                    type="radio" 
                    id="fontSize-medium" 
                    value="medium" 
                    v-model="config.fontSize"
                  />
                  <label for="fontSize-medium">中</label>
                </div>
                <div class="radio-item">
                  <input 
                    type="radio" 
                    id="fontSize-large" 
                    value="large" 
                    v-model="config.fontSize"
                  />
                  <label for="fontSize-large">大</label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>简历排版</label>
              <div class="radio-group">
                <div class="radio-item">
                  <input 
                    type="radio" 
                    id="layout-compact" 
                    value="compact" 
                    v-model="config.layout"
                  />
                  <label for="layout-compact">紧凑</label>
                </div>
                <div class="radio-item">
                  <input 
                    type="radio" 
                    id="layout-normal" 
                    value="normal" 
                    v-model="config.layout"
                  />
                  <label for="layout-normal">正常</label>
                </div>
                <div class="radio-item">
                  <input 
                    type="radio" 
                    id="layout-loose" 
                    value="loose" 
                    v-model="config.layout"
                  />
                  <label for="layout-loose">宽松</label>
                </div>
              </div>
            </div>
          </div>

          <!-- 内容开关 -->
          <div class="form-section">
            <h2>内容显示</h2>
            
            <div class="form-group">
              <div class="checkbox-group">
                <div class="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="showInternship" 
                    v-model="config.showInternship"
                  />
                  <label for="showInternship">显示实习经历</label>
                </div>
                <div class="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="showProjects" 
                    v-model="config.showProjects"
                  />
                  <label for="showProjects">显示项目经验</label>
                </div>
                <div class="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="showSkills" 
                    v-model="config.showSkills"
                  />
                  <label for="showSkills">显示技能模块</label>
                </div>
              </div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="button-group">
            <button class="btn btn-secondary" @click="resetConfig">
              重置默认配置
            </button>
            <button class="btn btn-primary" @click="saveConfig">
              保存配置
            </button>
          </div>
        </div>

        <!-- 右侧预览区域 -->
        <div class="config-preview">
          <h3 class="preview-title">实时预览</h3>
          <div class="preview-wrapper">
            <Resume />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 配置页面特定样式已在 config.css 中定义 */
</style>

