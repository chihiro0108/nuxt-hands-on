<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
//型定義をインポートする時は　import type
import type {Character} from "@/interfaces";

const SITE_TITLE = "ワンピース";
definePageMeta({
    layout: "character",
});

useHead({
    titleTemplate: (titleChunk: string | undefined): string => {
        return titleChunk != undefined ? `${titleChunk} | ${SITE_TITLE}` : SITE_TITLE;
    },
});
//キャラクターリストデータ
useState<Map<number, Character>>(
  "characterList", //ステート名
  (): Map<number, Character> => {
  const characterListInit = new Map<number, Character>();
  characterListInit.set(1, { id: 1, name: 'ルフィ', bounty: 10000000 });
  characterListInit.set(2, { id: 2, name: 'ゾロ', bounty: 6000000 });
  return characterListInit;
  }
);
</script>

<style>
main {
  border: black 5px solid;
  padding: 10px;
}
#breadcrumbs {
  display: inline;
  list-style-type: none;
}
#breadcrumbs ul {
  padding-left: 0px;
}
#breadcrumbs ul li {
  padding-left: 0px;
}
#breadcrumbs ul li::before {
  content: ">";
}
#breadcrumbs ul li:first-child::before {
  content: none;
}
</style>
