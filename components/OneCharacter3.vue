<script setup lang="ts">
import type {Character} from "@/interfaces";
interface Props {
    id: number;
}

const props = defineProps<Props>();

const characterList = useState<Map<number, Character>>("characterList");

const character = characterList.value.get(props.id) as Character;


const bountyUp = (): void => {
    character.bounty += 1000;
}
</script>

<template>
    <section class="box">
        <p>{{ character.name }}</p>
        <p>懸賞金：{{ character.bounty }}ベリー</p>
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