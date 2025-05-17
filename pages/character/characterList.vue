<script setup lang="ts">
import type { Character } from "@/interfaces";

definePageMeta({
    layout: "character",
});

const PAGE_TITLE = "キャラクターリスト";
useHead({
    title: PAGE_TITLE,
});

const characterList = useState<Map<number, Character>>("characterList", () => new Map());
</script>

<template>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li>{{ PAGE_TITLE }}</li>
        </ul>
    </nav>
    <section>
      <ul>
        <h2>{{ PAGE_TITLE }}</h2>
        <p>
          追加は<NuxtLink v-bind:to="{name: 'character-characterAdd'}">こちら</NuxtLink>から
        </p>
      </ul>
      <p>
        追加はこちらから
      </p>
    </section>
      <ul>
        <li v-for="[id, character] in characterList" :key="id">
            <NuxtLink v-bind:to="{name: 'character-characterDetail-id', params: {id: id}}">No:{{id}} {{ character.name }}</NuxtLink>
        </li>
      </ul>
</template>