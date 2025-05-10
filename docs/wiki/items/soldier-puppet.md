# Clay Soldier Puppet

Clay Soldier Puppets can be placed down to spawn Clay Soldiers.
If you have multiple Soldiers in one Hand they all will be placed down instantly.
Sneeking disables this behaviour.

## Obtaining

::: details Recipies
<recipe-crafting
slot_2 = "clay_ball"
slot_5 = "soul_sand"
result="clay_soldier" amount="4"/>
<hr class="recipe-divider">
<SoldierRecipe/>
:::

## Burned Clay Soldiers

<ImgInfo>
  <template v-slot:img>
    <Item name="bricked_clay_soldier"/>
  </template>
  <template v-slot:info>
    Drop from a burning Clay Soldier.
  </template>
</ImgInfo>


## Reviving

::: details Recipies
<recipe-crafting slot_4="bricked_clay_soldier" slot_5="ghast_tear"
result="clay_soldier"/>
<hr class="recipe-divider">
<recipe-smelting input="clay_soldier" result="bricked_clay_soldier" time="5" />
:::


