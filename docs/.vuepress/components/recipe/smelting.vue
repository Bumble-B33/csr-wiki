<template>
  <div class="crafting-preview">
    <div class="smelting-input">
      <Item :name="input"/>
      <tooltip-item v-if="time" :item_name="time + 's'">
        <IconFire/>
      </tooltip-item>
      <icon-fire v-else/>
    </div>
    <div class=crafting-arrow>&#8594;</div>
    <div class="crafting-result">
      <Item :name="result" :offset="-100"/>
    </div>
  </div>
</template>

<script>
import Item from "../Item.vue";

export default {
  components: {Item},
  props: {
    input: {
      type: String,
    },
    result: {
      type: String,
    },
    time: [Number, String]
  }
}
</script>

<style scoped>
.crafting-preview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 519px;
  margin-inline: auto;
}

.crafting-arrow {
  color: var(--vp-c-accent);
  font-size: 40px;
  font-weight: 100;
}

.crafting-result {
  border: 1px solid var(--vp-c-accent);
  border-radius: 5px;
  padding: 4px;
  width: 64px;
  height: 64px;
}

.smelting-input {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 196px;
  height: 196px;
}

.smelting-input img {
  width: 48px;
  height: 48px;
  border-radius: 7px
}

.smelting-input svg {
  fill: var(--vp-c-accent);
}
</style>
