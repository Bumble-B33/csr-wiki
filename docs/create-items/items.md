# Custom Items

## Creating Items That Soldiers Can Hold

To create items that soldiers can hold, you need to modify the `soldier_holdable.json` file.

```bash:no-line-numbers
└─ data
   └─ (your data pack name)
      └─ data-maps
        └─ item
           └─ soldier_holdable.json
```

Here's the basic structure:

```json:no-line-numbers
{
  "values": {
    "modid:item_name": {            // For Vanilla Minecraft Items ModId is 'minecraft'
      "properties": {
        ...
      },
      "slot": name,                 // Defines which slot the item is held in (e.g., mainhand or offhand)
      "pick_priority": number,      // (Optional) Determines priority when soldiers pick up items
      "drop_rate": number,          // (Optional) Chance that the soldier will drop the item on death
      "predicate": test,            // (Optional) Conditions under which the item can be held
      "on_pick": [
        functions...                // (Optional) Define custom functions for when the item is picked up 
      ]
      "removal_condition": {        // (Optional) Define custom conditions for when the item is destroyed
        ...
      }
    },
    ...
  }
}
```

::: important
Ensure that your item is added to the `"clay_soldier_holdable"` tag, otherwise soldiers won’t pick up the item.

Putting your item under the `"clay_soldier_weapon"` tag, makes them swing it on attack.
:::

::: info
More details on properties and values, can be found [here](./holdable-values.md).
:::

## Example: Adding a Stick

Let's look at an Example. If we want soldiers to hold a stick and deal extra damage, we can define it like this:

```json:no-line-numbers
{
  "values": {
    "minecraft:stick": {
      "properties": {
        "csr:damage": 2.0 // Increases the soldier's damage when holding a stick
      },
      "slot": "mainhand" //  The stick should be held in the main hand only 
      // We dont need to mention other values as we want to leave as the default value
    },
    // Some other items...
  }
}
```

::: tip
You can find more examples of [items](example.md) implemented by the Clay Soldiers mod for inspiration.
:::

## Creating Items That Soldiers Can Wear

To create wearable items, modify the `soldier_wearable.json` file.
```bash:no-line-numbers
└─ data
   └─ (your data pack name)
      └─ data-maps
        └─ item
           └─ soldier_wearable.json
```

::: important
This is only visual, all properties like protection, should be added
via [Holdable Items](#creating-items-that-soldiers-can-hold)
:::

Here's the basic structure:
```json:no-line-numbers
{
  "values": {
    "armor": {
      "slot": {
        "model": id     // (Optional) The id of the armor model
        "color": color  // (Optional) The color model. 
        "trims: [
            ...         // (Opional) List of trims to apply
        ]
      }
    },
    "accessories": {
      ...
    }
  },
  ...
}
```

### Example

Let's look at how we could make a Gold Ingot acts as helmet.
First we create a Holdable Item, also don't forget to tag the Item:

::: details
```json:no-line-numbers
"minecraft:gold_ingot": {
  "properties": {
    "protection": 1.0
  },
  "slot": "head"
}
```
:::

Now we make the visuals for the item. We modify the `soldier_wearable.json`
```json:no-line-numbers
{
  "values": {
    "minecraft:gold_ingot": {
      "armor": {
        "head": { // <- The Slot this Item acts as Armor
          "model": "minecraft:golden_helmet" // The armor model we want to copy
        }
      }  
    },
    ...
  }
}
```

You can specify other [`Slots`](./holdable-values.md#slots) such as `head`, `chest`, `legs`, `feet`. An item can even be
worn in multiple slots by adding multiple entries:
Additionally we can also color armor pieces

```json:no-line-numbers
"armor": {
  "chest": {
    "model": "minecraft:leather_chestplate",
    "color": "#1D1D21" // RGB color
  },
  "feet": {
    "copy_model": "minecraft:leather_boots",
    "color": 1908001 // RGB color in integer format, same as (RGB 1D1D21)
  }
}
```

::: info
Learn more about Color [here](common-values)
:::

### Adding Armor Trims

You can also add trims to armor pieces:
::: code-tabs#armor-examples

@tab Suit

```json:no-line-numbers
"chest": {
  model": "minecraft:chainmail_chestplate",
  "trims": [
    {
      "material": "minecraft:gold",
      "pattern": "minecraft:shaper"
    },
    {
      "material": "minecraft:gold",
      "pattern": "minecraft:vex",
    }
  ],
}
```

@tab Glasses

```json::no-line-numbers
"head": {
  "model": "minecraft:iron_helmet",
  "trim_only": true, // When set to true the armor copy will not be displayed
  "trims": [
    {
      "material": "minecraft:quartz",
      "pattern": "minecraft:eye"
    },
    {
      "material": "minecraft:netherite",
      "pattern": "minecraft:spire"
    }
  ]  
}
```

:::

### Creating an Accessory

Accessories are visually displayed items that are not considered armor, such as capes.

::: code-tabs#accessories-simple

@tab Cape

```json:no-line-numbers
"minecraft:rabbit_hide": {
  "accessories": {
    "cape": {
      "texture_location": "csr:textures/entity/clay_soldier/paper_cape.png",
      "color": 8339378 // Optionally we could add a color.
    }
  }
}
```

@tab Skull

```json:no-line-numbers
"minecraft:skeleton_skull": {
  "accessories": {
    "skull": {
      "item": "minecraft:skeleton_skull"
    }
  }
}
```

@tab Snorkel

```json:no-line-numbers
"accessories": {
  "snorkel": "csr:textures/entity/clay_soldier/bamboo_stick.png" // <- Texture of the Snorkel
}
```

@tab Shield

```json:no-line-numbers
"accessories": {
  "shield": "csr:textures/entity/clay_soldier/clay_shield.png"
}
```

@tab Glider

```json:no-line-numbers
"accessories": {
  "glider": "minecraft:rabbit_hide" // <- the Item we use as a Glider
}
```


@tab Wrapped
```json:no-line-numbers
"accessories": {
  "string": "csr:textures/entity/clay_soldier/wrapped.png"
}
```

:::