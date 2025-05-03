<template>
  <BaseSection />
</template>

<script setup lang="ts">
//型定義をインポートする時は　import type
import type {Character} from "@/interfaces";
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
section {
  border: blue 5px solid;
  margin: 10px;
}
</style>
