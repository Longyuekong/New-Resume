<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    experienceConfig: {
        type: Object,
        default: () => {
            return {}
        }
    }
})
const { experienceConfig } = toRefs(props)
</script>

<template>
    <div v-for="(item, index) in experienceConfig" :key="index" class="experience">
        <div v-if="item.title" class="title-box">
            <div class="line"></div>
            <div class="title-name">{{ item.title }}</div>
            <div class="line"></div>
        </div>
        <div class="work-header">
            <div class="work-box">
                <div class="work-title">{{ item.experienceName }}</div>
                <div v-if="item.workTime" class="time">{{ item.workTime }}</div>
            </div>
            <div v-show="item.tag" class="tag" :class="item.workTime ? 'work-bottom': ''">{{ item.tag }}</div>
        </div>
        <div v-if="item.detail.length" class="detail">
            <div v-for="detailItem in item.detail" :key="detailItem" class="detail-box">
                <div v-if="detailItem.detailTitle" class="detail-title">{{ detailItem.detailTitle }}：</div>
                <div v-if="detailItem.descArr.length" class="desc">
                    <div v-for="(descItem, descIndex) in detailItem.descArr" :key="descItem" class="desc-box">
                        <div v-show="!detailItem.notSort">{{ descIndex + 1 }}、</div>
                        <div>{{ descItem }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

