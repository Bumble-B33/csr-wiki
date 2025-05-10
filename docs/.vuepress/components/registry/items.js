/**
 * Returns a Map of the ItemObjects associated with the give name
 * @type {Map<String, {
 *  img: String,
 *  [damage: Number],
 *  [att_speed: Number],
 *  [armor: Number],
 *  [armor_thg: Number],
 *  [knockback: Number],
 *  [anmated: boolean],
 *  [type: String],
 * }>}
 */
export const itemList = new Map();

/**
 * @param name { String }
 * @returns {{
 *  img: String,
 *  [damage: Number]: *,
 *  [att_speed: Number]: *,
 *  [armor: Number]: *,
 *  [armor_thg: Number]: *,
 *  [knockback: Number]: *,
 *  [anmated: boolean]: *,
 *  [type: String]: *
 * }}
 */
export function getItem(name) {
    return itemList.get(name);
}

itemList.set("stick", {img: "/minecraft/items/stick"});
itemList.set("copper_ingot", {img: "/minecraft/items/copper_ingot"});
itemList.set("leather", {img: "/minecraft/items/leather"});
itemList.set("shears", {img: "/minecraft/items/shears"});
itemList.set("ghast_tear", {img: "/minecraft/items/ghast_tear"});
itemList.set("clay_ball", {img: "/minecraft/items/clay_ball"});
itemList.set("cake", {img: "/minecraft/items/cake"});

itemList.set("amethyst_shard", {img: "/minecraft/items/amethyst_shard"});
itemList.set("bamboo", {img: "/minecraft/items/bamboo"});
itemList.set("blaze_rod", {img: "/minecraft/items/blaze_rod"});
itemList.set("bowl", {img: "/minecraft/items/bowl"});
itemList.set("brick", {img: "/minecraft/items/brick"});
itemList.set("coal", {img: "/minecraft/items/coal"});
itemList.set("charcoal", {img: "/minecraft/items/charcoal"});
itemList.set("chorus_fruit", {img: "/minecraft/items/chorus_fruit"});
itemList.set("diamond", {img: "/minecraft/items/diamond"});
itemList.set("dragon_breath", {img: "/minecraft/items/dragon_breath"});
itemList.set("echo_shard", {img: "/minecraft/items/echo_shard"});
itemList.set("emerald", {img: "/minecraft/items/emerald"});
itemList.set("ender_pearl", {img: "/minecraft/items/ender_pearl"});
itemList.set("feather", {img: "/minecraft/items/feather"});
itemList.set("fermented_spider_eye", {img: "/minecraft/items/fermented_spider_eye"});
itemList.set("fire_charge", {img: "/minecraft/items/fire_charge"});
itemList.set("glass_bottle", {img: "/minecraft/items/glass_bottle"});
itemList.set("glass_pane", {img: "/minecraft/items/glass_pane"});
itemList.set("glistering_melon_slice", {img: "/minecraft/items/glistering_melon_slice"});
itemList.set("glowstone_dust", {img: "/minecraft/items/glowstone_dust"});
itemList.set("glow_ink_sac", {img: "/minecraft/items/glow_ink_sac"});
itemList.set("gold_ingot", {img: "/minecraft/items/gold_ingot"});
itemList.set("golden_apple", {img: "/minecraft/items/golden_apple"});
itemList.set("gunpowder", {img: "/minecraft/items/gunpowder"});
itemList.set("lily_pad", {img: "/minecraft/items/lily_pad"});
itemList.set("magma_cream", {img: "/minecraft/items/magma_cream"});
itemList.set("nether_star", {img: "/minecraft/items/nether_star"});
itemList.set("nether_wart", {img: "/minecraft/items/nether_wart"});
itemList.set("paper", {img: "/minecraft/items/paper"});
itemList.set("poisonous_potato", {img: "/minecraft/items/poisonous_potato"});
itemList.set("rabbit_hide", {img: "/minecraft/items/rabbit_hide"});
itemList.set("red_mushroom", {img: "/minecraft/items/red_mushroom"});
itemList.set("redstone", {img: "/minecraft/items/redstone"});
itemList.set("rotten_flesh", {img: "/minecraft/items/rotten_flesh"});
itemList.set("slime_ball", {img: "/minecraft/items/slime_ball"});
itemList.set("snowball", {img: "/minecraft/items/snowball"});
itemList.set("string", {img: "/minecraft/items/string"});
itemList.set("sugar", {img: "/minecraft/items/sugar"});
itemList.set("totem_of_undying", {img: "/minecraft/items/totem_of_undying"});
itemList.set("turtle_scute", {img: "/minecraft/items/turtle_scute"});
itemList.set("wheat", {img: "/minecraft/items/wheat"});
itemList.set("iron_ingot", {img: "/minecraft/items/iron_ingot"});
itemList.set("flint", {img: "/minecraft/items/flint"});
itemList.set("heart_of_the_sea", {img: "/minecraft/items/heart_of_the_sea"});
itemList.set("honey_bottle", {img: "/minecraft/items/honey_bottle"});
itemList.set("debug_stick", {img: "/minecraft/items/debug_stick", animated: true});


itemList.set("cactus", {img: "/minecraft/blocks/cactus"});
itemList.set("clay", {img: "/minecraft/blocks/clay"});
itemList.set("command_block", {img: "/minecraft/blocks/command_block"});
itemList.set("diamond_block", {img: "/minecraft/blocks/diamond_block"});
itemList.set("glass", {img: "/minecraft/blocks/glass"});
itemList.set("gold_block", {img: "/minecraft/blocks/gold_block"});
itemList.set("gravel", {img: "/minecraft/blocks/gravel"});
itemList.set("skeleton_skull", {img: "/minecraft/blocks/skeleton_skull"});
itemList.set("stone", {img: "/minecraft/blocks/stone"});
itemList.set("tnt", {img: "/minecraft/blocks/tnt"});
itemList.set("wither_skeleton_skull", {img: "/minecraft/blocks/wither_skeleton_skull"});
itemList.set("snow_block", {img: "/minecraft/blocks/snow_block"});
itemList.set("soul_sand", {img: "/minecraft/blocks/soul_sand"});
itemList.set("grass_block", {img: "/minecraft/blocks/grass_block"});
itemList.set("mycelium", {img: "/minecraft/blocks/mycelium"});
itemList.set("end_rod", {img: "/minecraft/blocks/end_rod"});


itemList.set("black_dye", {img: "/minecraft/dyes/black_dye"});
itemList.set("blue_dye", {img: "/minecraft/dyes/blue_dye"});
itemList.set("brown_dye", {img: "/minecraft/dyes/brown_dye"});
itemList.set("cyan_dye", {img: "/minecraft/dyes/cyan_dye"});
itemList.set("gray_dye", {img: "/minecraft/dyes/gray_dye"});
itemList.set("green_dye", {img: "/minecraft/dyes/green_dye"});
itemList.set("light_blue_dye", {img: "/minecraft/dyes/light_blue_dye"});
itemList.set("light_gray_dye", {img: "/minecraft/dyes/light_gray_dye"});
itemList.set("lime_dye", {img: "/minecraft/dyes/lime_dye"});
itemList.set("magenta_dye", {img: "/minecraft/dyes/magenta_dye"});
itemList.set("orange_dye", {img: "/minecraft/dyes/orange_dye"});
itemList.set("pink_dye", {img: "/minecraft/dyes/pink_dye"});
itemList.set("purple_dye", {img: "/minecraft/dyes/purple_dye"});
itemList.set("red_dye", {img: "/minecraft/dyes/red_dye"});
itemList.set("white_dye", {img: "/minecraft/dyes/white_dye"});
itemList.set("yellow_dye", {img: "/minecraft/dyes/yellow_dye"});

itemList.set("black_stained_glass_pane", {img: "/minecraft/stained_glass/black_stained_glass"});
itemList.set("blue_stained_glass_pane", {img: "/minecraft/stained_glass/blue_stained_glass"});
itemList.set("brown_stained_glass_pane", {img: "/minecraft/stained_glass/brown_stained_glass"});
itemList.set("cyan_stained_glass_pane", {img: "/minecraft/stained_glass/cyan_stained_glass"});
itemList.set("gray_stained_glass_pane", {img: "/minecraft/stained_glass/gray_stained_glass"});
itemList.set("green_stained_glass_pane", {img: "/minecraft/stained_glass/green_stained_glass"});
itemList.set("light_blue_stained_glass_pane", {img: "/minecraft/stained_glass/light_blue_stained_glass"});
itemList.set("light_gray_stained_glass_pane", {img: "/minecraft/stained_glass/light_gray_stained_glass"});
itemList.set("lime_stained_glass_pane", {img: "/minecraft/stained_glass/lime_stained_glass"});
itemList.set("magenta_stained_glass_pane", {img: "/minecraft/stained_glass/magenta_stained_glass"});
itemList.set("orange_stained_glass_pane", {img: "/minecraft/stained_glass/orange_stained_glass"});
itemList.set("pink_stained_glass_pane", {img: "/minecraft/stained_glass/pink_stained_glass"});
itemList.set("purple_stained_glass_pane", {img: "/minecraft/stained_glass/purple_stained_glass"});
itemList.set("red_stained_glass_pane", {img: "/minecraft/stained_glass/red_stained_glass"});
itemList.set("white_stained_glass_pane", {img: "/minecraft/stained_glass/white_stained_glass"});
itemList.set("yellow_stained_glass_pane", {img: "/minecraft/stained_glass/yellow_stained_glass"});

itemList.set("clay_brush_command", {img: "/items/clay_brush_command"});
itemList.set("clay_brush_poi", {img: "/items/clay_brush_poi"});
itemList.set("clay_brush_work", {img: "/items/clay_brush_work"});

itemList.set("clay_cookie", {img: "/items/clay_cookie"});
itemList.set("clay_goggles", {img: "/items/clay_goggles", armor: 1});
itemList.set("clay_disruptor", {img: "/items/clay_disruptor"});

itemList.set("shear_blade", {img: "/items/shear_blade", damage: 5, att_speed: 1.6});
itemList.set("sharpened_stick", {img: "/items/sharpened_stick", damage: 4, att_speed: 1.6});

itemList.set("cake_horse", {img: "/mounts/cake_horse"});
itemList.set("grass_horse", {img: "/mounts/grass_horse"});
itemList.set("snow_horse", {img: "/mounts/snow_horse"});
itemList.set("mycelium_horse", {img: "/mounts/mycelium_horse"});
itemList.set("cake_pegasus", {img: "/mounts/cake_pegasus"});
itemList.set("grass_pegasus", {img: "/mounts/grass_pegasus"});
itemList.set("snow_pegasus", {img: "/mounts/snow_pegasus"});
itemList.set("mycelium_pegasus", {img: "/mounts/mycelium_pegasus"});

itemList.set("clay_soldier", {img: "/soldiers/clay_soldier"});
itemList.set("black_clay_soldier", {img: "/soldiers/black_clay_soldier"});
itemList.set("blue_clay_soldier", {img: "/soldiers/blue_clay_soldier"});
itemList.set("brown_clay_soldier", {img: "/soldiers/brown_clay_soldier"});
itemList.set("cyan_clay_soldier", {img: "/soldiers/cyan_clay_soldier"});
itemList.set("gray_clay_soldier", {img: "/soldiers/gray_clay_soldier"});
itemList.set("green_clay_soldier", {img: "/soldiers/green_clay_soldier"});
itemList.set("light_blue_clay_soldier", {img: "/soldiers/light_blue_clay_soldier"});
itemList.set("light_gray_clay_soldier", {img: "/soldiers/light_gray_clay_soldier"});
itemList.set("lime_clay_soldier", {img: "/soldiers/lime_clay_soldier"});
itemList.set("magenta_clay_soldier", {img: "/soldiers/magenta_clay_soldier"});
itemList.set("orange_clay_soldier", {img: "/soldiers/orange_clay_soldier"});
itemList.set("pink_clay_soldier", {img: "/soldiers/pink_clay_soldier"});
itemList.set("purple_clay_soldier", {img: "/soldiers/purple_clay_soldier"});
itemList.set("red_clay_soldier", {img: "/soldiers/red_clay_soldier"});
itemList.set("white_clay_soldier", {img: "/soldiers/white_clay_soldier"});
itemList.set("yellow_clay_soldier", {img: "/soldiers/yellow_clay_soldier"});
itemList.set("bricked_clay_soldier", {img: "/soldiers/bricked_clay_soldier"});

itemList.set("hamster_wheel", {img: "/hamster_wheel"});