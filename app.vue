<template>
  <section>
    <h1>キャラクターリスト</h1>
    <p>総賞金：{{ totalBounty }}ベリー</p>
    <OneCharacter2 v-for="[id, character] in characterList" :key="character.id" :id="id" :name="character.name" :bounty="character.bounty"
    v-on:incrementBounty="onIncreaseBounty" />
  </section>
</template>

<script setup lang="ts">
const characterListInit = new Map<number, Character>();
characterListInit.set(1, { id: 1, name: 'ルフィ', bounty: 10000000 });
characterListInit.set(2, { id: 2, name: 'ゾロ', bounty: 6000000 });
const characterList = ref(characterListInit)

const totalBounty = computed(
  (): number => {
    let total = 0;
    for(const character of characterList.value.values()) {
      total += character.bounty;
    }
    return total;
  }
)

const onIncreaseBounty = (id: number): void => {
  const character = characterList.value.get(id);
  if(character !== undefined) {
    character.bounty += 1000;
  }
}

interface Character {
    id: number;
    name: string;
    bounty: number;
}

</script>

<style>
section {
  border: blue 5px solid;
  margin: 10px;
}
</style>
