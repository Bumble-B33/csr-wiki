<template>
  <div class="image-slider">
    <tooltip-item :item_name="generateName" :attack_damage="getItemSource.damage"
                  :attack_speed="getItemSource.att_speed" :armor_v="getItemSource.armor"
                  :armor_thougness="getItemSource.armor_thg" :knockback_resistance="getItemSource.knockback"
                  :lore="getItemSource.lore"
                  :img_size="size" :xoffset="offset">
      <img :src="getImg" class="slider-image" :alt="'Item could not be found'" decoding="async" loading="lazy"/>
    </tooltip-item>
  </div>
</template>

<script>
import {getItem} from "./registry/items.js"

export default {
  name: "ItemSlider",
  props: {
    items: {
      type: Array,
      required: true,
    },
    size: {
      type: [String, Number],
      default: "64px"
    },
    interval: {
      type: Number,
      default: 3000, // Interval in milliseconds
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    getItemSource: function () {
      const item = getItem(this.items[this.currentIndex]);
      if (item !== undefined) {
        return item;
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
      const splittedNames = this.items[this.currentIndex].split("_");
      let newName = ""
      splittedNames.forEach(nm => {
        newName = newName + nm.charAt(0).toUpperCase() + nm.slice(1) + " ";
      });
      return newName.slice(0, -1);
    }
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.nextImage();
      }, this.interval);
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
};
</script>

<style scoped>
.image-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: v-bind(size);
  height: v-bind(size);
  position: relative;
}

.slider-image {
  width: v-bind(size);
  height: auto;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}
</style>