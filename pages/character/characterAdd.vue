<script setup lang="ts">
import type { Character } from "@/interfaces";

definePageMeta({
    layout: "character",
});

const PAGE_TITLE = "キャラクター追加";
useHead({
    title: PAGE_TITLE,
});

const router = useRouter();

//router.push() => 指定の場所へ
//router.back() => 履歴上の１つ前の画面へ

const characterList = useState<Map<number, Character>>("characterList", () => new Map());

//入力データと同期させるためにreactiveを使用
const character: Character = reactive({
    id: 3,
    name: "",
    bounty: 0,
});

const onAdd = (): void => {
    characterList.value.set(character.id, character);
    router.push({name: "character-characterList"});
};

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
        <p>
            情報を入力し、登録ボタンをクリックしてください。
        </p>
        <form v-on:submit.prevent="onAdd">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label for="addId">No:</label>
                        </td>
                        <td>
                            <input type="number" id="addId" v-model.number="character.id" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="addName">名前:</label>
                        </td>
                        <td>
                            <input type="text" id="addName" v-model="character.name" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="addBounty">懸賞金:</label>
                        </td>
                        <td>
                            <input type="number" id="addBounty" v-model.number="character.bounty" required />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br>
            <button type="submit">登録</button>
        </form>
    </section>
</template>