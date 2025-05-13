<template>
  <div class="item-wrapper">
    <tooltip-item v-if="getType === 'normal'"
                  :item_name="generateName"
                  :rarity="getItemSource.rarity"
                  :attack_damage="getItemSource.damage"
                  :attack_speed="getItemSource.att_speed"
                  :armor_v="getItemSource.armor"
                  :armor_thougness="getItemSource.armor_thg"
                  :knockback_resistance="getItemSource.knockback"
                  :lore="getItemSource.lore"
                  :img_size="size" :xoffset="offset" :yoffset="yOffset">
      <img :src="getImg" class="item-img" :alt="name + ' is not found'" decoding="async" loading="lazy"/>
    </tooltip-item>

    <tooltip-smithing v-if="getType === 'smithing'" :item_name="generateName"
                      :description="getItemSource.description" :applies_to="getItemSource.applies_to"
                      :ingredient="getItemSource.ingredient"
                      :img_size="size" :xoffset="offset">
      <img :src="getImg" class="item-img" :alt="name + ' is not found'" decoding="async" loading="lazy"/>
    </tooltip-smithing>
  </div>
</template>

<script>
import {getItem} from "./registry/items.js"


export default {
  props: {
    name: String,
    offset: {
      type: Number,
      default: 0
    },
    yOffset: {
      type: String,
      default: "0"
    },
    size: {
      type: [String, Number],
      default: "64px"
    }
  },
  computed: {
    getType: function () {
      const item = getItem(this.name);
      if (item !== undefined && item.type !== undefined) {
        return item.type
      }
      return "normal";
    },
    getItemSource: function () {
      const item = getItem(this.name);
      if (item !== undefined) {
        return item
      }
      return {img: "/minecraft/items/missing"};
    },
    getImg: function () {
      if (this.getItemSource.animated) {
        return `/csr-wiki/images${this.getItemSource.img}.gif`;
      }
      return `/csr-wiki/images${this.getItemSource.img}.png`;
    },
    generateName: function () {
      const names = this.name.split("_");
      let newName = ""
      names.forEach(nm => {
        newName = newName + nm.charAt(0).toUpperCase() + nm.slice(1) + " ";
      });
      return newName.slice(0, -1);
    }
  }
}
</script>

<style scoped>
.item-wrapper {
  width: v-bind(size);
  height: v-bind(size);
}
.item-img {
  width: v-bind(size);
  height: auto;
}
</style>