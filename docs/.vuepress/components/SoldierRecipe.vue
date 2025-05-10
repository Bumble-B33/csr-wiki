<template>
  <div class=crafting-preview>
    <table class="crafting-grid">
      <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td><ItemSlider :items="dye" :size="32" /></td>
        <td><Item :name="'clay_soldier'" :size="32" /></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <div class=crafting-arrow>&#8594;</div>
    <div class="crafting-result" width="64px" height="64px">
      <ItemSlider  :items="result" :offset="-100"/>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import ItemSlider from "./ItemSlider.vue";

export default {
  components: {ItemSlider, Item},
  props: {
    dye: {
      type: Array,
      default: [
        'black_dye', 'blue_dye', 'brown_dye', 'cyan_dye', 'gray_dye', 'green_dye',
        'light_blue_dye', 'light_gray_dye', 'lime_dye', 'magenta_dye', 'orange_dye',
        'pink_dye', 'purple_dye', 'red_dye', 'white_dye', 'yellow_dye'
      ]
    },
    result: {
      type: Array,
      default: [
        'black_clay_soldier', 'blue_clay_soldier', 'brown_clay_soldier', 'cyan_clay_soldier', 'gray_clay_soldier', 'green_clay_soldier',
        'light_blue_clay_soldier', 'light_gray_clay_soldier', 'lime_clay_soldier', 'magenta_clay_soldier', 'orange_clay_soldier',
        'pink_clay_soldier', 'purple_clay_soldier', 'red_clay_soldier', 'white_clay_soldier', 'yellow_clay_soldier'
      ]
    }
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

.crafting-grid {
  border-collapse: collapse;
  border-radius: 10px;
  overflow: visible;
}
.crafting-grid tr {
  border: none;
  background-color: var(--vp-c-bg);
}
.crafting-grid td {
  border: 1px solid var(--vp-c-accent);
  background-color: var(--vp-c-control);
  width: 32px;
  height: 32px;
}
.crafting-grid td:first-child {
  border-left: none;
}
.crafting-grid td:last-child {
  border-right: none;
}
.crafting-grid tr:last-child td {
  border-bottom: none;
}
.crafting-grid tr:first-child td {
  border-top: none;
}
</style>