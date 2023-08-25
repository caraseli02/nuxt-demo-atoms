<template>
    <div v-if="imgSize" :class="containerClasess">
        <img :style="{ width: imgSize, height: imgSize }" class="avatar-img" :src="imageUrl ?? imgPlaceholder" />
        <div class="avatar-text">
            <div class="avatar-text-title">
                {{ title }}</div>
            <div class="avatar-text-subtitle">
                {{ subtitle }} </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
    size?: "sm" | "xl"
    direction?: "row" | "col"
    imageUrl?: string
    title?: string
    subtitle?: string | Date
}>()

const imgSize = computed(() => {
    let sizeValue = "48px"; // Default size

    if (props.size === "sm") {
        sizeValue = "32px";
    } else if (props.size === "xl") {
        sizeValue = "84px";
    }

    return sizeValue;
})

const imgPlaceholder = computed(() => {
    let sizeValue = "https://picsum.photos/48/48"; // Default size

    if (props.size === "sm") {
        sizeValue = "https://picsum.photos/32/32";;
    } else if (props.size === "xl") {
        sizeValue = "https://picsum.photos/84/84";;
    }

    return sizeValue;
})

const containerClasess = computed(() => {
    return [
        'avatar-container',
        props.direction === 'row' ? 'flex-row' : 'flex-col',
        props.size === 'sm' && props.direction === 'row' ? 'align-center' : 'align-start',
]
})
</script>

<style scoped>
.avatar-container {
    width: fit-content;
    height: fit-content;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
}

.avatar-text {
    height: 48px;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
}

.flex-col {
    flex-direction: column;
}

.flex-row {
    flex-direction: row;
}

.align-start{
    align-items: flex-start;
}
.align-center{
    align-items: center;

}

.avatar-text-title {
    color: white;
    font-size: 14px;
    font-family: Anybody;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word
}

.avatar-text-subtitle {
    color: white;
    font-size: 10px;
    font-family: Anybody;
    font-weight: 400;
    line-height: 16px;
    word-wrap: break-word
}

.avatar-img {
    /* width: v-bind(imgSize);
    height: v-bind(imgSize); */
    border-radius: 9999px
}
</style>
