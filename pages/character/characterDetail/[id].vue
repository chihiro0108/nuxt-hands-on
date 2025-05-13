<script setup lang="ts">
import type { Character } from "@/interfaces";

const route = useRoute();
const characterList = useState<Map<number, Character>>("characterList", () => new Map());
const character = computed(() => {
    const id = Number(route.params.id);
    return characterList.value.get(id) as Character;
});

</script>

<template>
    <h1>キャラクター設定</h1>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li><NuxtLink v-bind:to="{name: 'character-characterList'}">キャラクターリスト</NuxtLink></li>
            <li>キャラクター詳細</li>
        </ul>
    </nav>
    <section>
        <h2>キャラクター詳細</h2>
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