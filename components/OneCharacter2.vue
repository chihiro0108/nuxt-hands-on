<script setup lang="ts">
interface Props {
    id: number;
    name: string;
    bounty: number;
}

//Emits型を定義
type Emits = {
    incrementBounty: [id: number];
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

// const bounty = ref(props.bounty);

const bountyUp = (): void => {
    emit('incrementBounty', props.id);
}
</script>

<template>
    <section class="box">
        <p>{{ name }}</p>
        <p>懸賞金：{{ bounty }}ベリー</p>
        <button v-on:click="bountyUp">懸賞金をアップ</button>
    </section>
</template>

<style scoped>
.box {
    border: 1px solid black;
    margin: 3px;
    padding: 10px;
}
</style>