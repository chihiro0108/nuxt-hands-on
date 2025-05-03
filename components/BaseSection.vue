<script setup lang="ts">
import type {Character} from "@/interfaces";


const characterList = useState<Map<number, Character>>("characterList");


const totalBounty = computed(
  (): number => {
    let total = 0;
    for(const character of characterList.value.values()) {
      total += character.bounty;
    }
    return total;
  }
)
</script>

<template>
  <section>
    <h1>キャラクターリスト</h1>
    <p>懸賞金の合計：{{ totalBounty }}ベリー</p>
    <OneCharacter3 
      v-for="id in characterList.keys()"
      v-bind:key="id"
      v-bind:id="id" />
  </section>
</template>