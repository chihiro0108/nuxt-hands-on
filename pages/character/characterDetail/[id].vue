<script setup lang="ts">
import type { Character } from "@/interfaces";

definePageMeta({
    layout: "character",
});

const PAGE_TITLE = "キャラクター詳細情報";
useHead({
    title: PAGE_TITLE,
});

const route = useRoute();
const characterList = useState<Map<number, Character>>("characterList", () => new Map());
const character = computed(() => {
    const id = Number(route.params.id);
    return characterList.value.get(id) as Character;
});

</script>

<template>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li><NuxtLink v-bind:to="{name: 'character-characterList'}">キャラクターリスト</NuxtLink></li>
            <li>{{ PAGE_TITLE }}</li>
        </ul>
    </nav>
    <section>
        <h2>{{ PAGE_TITLE }}</h2>
        <table>
            <tbody>
                <tr>
                    <td>No:</td>
                    <td>{{character.id}}</td>
                </tr>
                <tr>
                    <td>名前:</td>
                    <td>{{character.name}}</td>
                </tr>
                <tr>
                    <td>懸賞金:</td>
                    <td>{{character.bounty}}ベリー</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>