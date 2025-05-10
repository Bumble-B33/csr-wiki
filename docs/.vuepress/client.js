import { defineClientConfig } from 'vuepress/client'
import Item from './components/Item.vue'
import ImgInfo from './components/ImgInfo.vue'
import fire from './components/icon/IconFire.vue'
import crafting from './components/recipe/Crafting.vue'
import smelting from './components/recipe/smelting.vue'
import count from './components/tooltip/count.vue'
import item from './components/tooltip/item.vue'
import ItemSlider from './components/ItemSlider.vue'
import SoldierRecipe from './components/SoldierRecipe.vue'

export default defineClientConfig({
    enhance({ app }) {
        app.component('Item', Item)
        app.component('ImgInfo', ImgInfo)
        app.component('IconFire', fire)
        app.component('recipe-crafting', crafting)
        app.component('recipe-smelting', smelting)
        app.component('tooltip-count', count)
        app.component('tooltip-item', item)
        app.component('ItemSlider', ItemSlider)
        app.component('SoldierRecipe', SoldierRecipe)
    }
})