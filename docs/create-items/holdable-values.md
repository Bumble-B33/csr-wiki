# Item Properties

## Properties

Properties define specific attributes or behaviors that a soldier exhibits while carrying an item.
They consist of a key-value pair where the key represents a `Soldier Property Type`
and the `Value` specifies the associated attribute.

```json:no-line-numbers
"properties": {
  "propertykey1": value1,
  "propertykey2": value2,
  ...
}
```

::: info
For a comprehensive list of all possible [Properties](./soldier-properties.md) and their descriptions,
please refer to the properties documentation.
:::

## Slots

Slots determine where a soldier can hold or wear an item.
There are currently 8 different slots available for soldiers,
including their hands, armor slots, and backpacks.

| Slot        | Name                 |
|-------------|----------------------|
| `Mainhand`  | `"mainhand"`         |
| `Offhand`   | `"offhand"`          |
| `Head`      | `"head"`             |
| `Chest`     | `"chest"`            |
| `Legs`      | `"legs"`             |
| `Feet`      | `"feet"`             |
| `Cape`      | `"cape"`             |
| `Backpack1` | `"backpack"`         |
| `Backpack2` | `"backpack_passive"` |

To set a soldier to hold an item in a specific slot, use the following syntax:

```json:no-line-numbers
"slot": "mainhand"
```

It’s also possible to have the same item occupy multiple slots:

```json:no-line-numbers
"slots": [
  "backpack",
  "backpack_passive"
]
```

If you want a soldier to hold an item in either hand, you can simplify it as:

```json:no-line-numbers
"slot": "hands"
```

## Pickup Priority

Pickup Priority determines the importance of an item when soldiers choose what to pick up. Higher values mean the soldier will prioritize that item over others, even dropping items with lower priorities to hold it.

Pickup priorities can range from `-10` to `10`. You can use numeric values or predefined ones:

| Name        | Json          | Value |
|-------------|---------------|------:|
| `Low`       | `"low"`       |     1 |
| `Normal`    | `"normal"`    |     3 |
| `High`      | `"high"`      |     5 |
| `Very High` | `"very_high"` |    10 |

Example using a predefined value:
```json:no-line-numbers
"pick_priority": "low"
```

Example using a custom value:
```json:no-line-numbers
"pick_priority": 6
```

It is recommended to use the predefined values.

::: tip
This is an optional value, if it is not set it will be set to `Normal`.
:::

## Drop Rate

The drop rate determines how likely a soldier is to drop an item when it dies.
Drop rates range from `0.0` (never drops) to `1.0` (always drops). Predefined values are available:

| Name     | Json       | Value |
|----------|------------|------:|
| `Always` | `"always"` |   1.0 |
| `Normal` | `"normal"` |   0.5 |
| `Nerver` | `"never"`  |   0.0 |

Example using a predefined value:
```json:no-line-numbers
"drop_rate": "always"
```

Example using a custom value:
```json:no-line-numbers
"drop_rate": 0.7
```

It is recommended to use the predefined values.

::: tip
This is an optional value, if it is not set it will be set to `Normal`.
:::

## Pickup Functions

Pickup Functions define actions that are executed once when a soldier picks up an item.
They are structured as a list of function objects:

```json:no-line-numbers
"on_pick": [
    {
        "type": ...
        ...
    },
    {
    ...
    }
]
```

### Dye Functions

Dye functions change the secondary color of the soldier when they pick up an item.
The key is `csr:dye_soldier`. You can specify either a color value or a color getter function,
and optionally whether to overwrite the current color.

::: code-tabs#dye-example

@tab Static Color
```json:no-line-numbers
{
    "type": "csr:dye_soldier",
    "dye": {
        "color": 8339378, // Integer value of the color (e.g., 7F3FB2 in hex)
        "overwrite": true
    }
}
```

@tab Dynamic Color
```json:no-line-numbers
{
    "type": "csr:dye_soldier",
    "dye": {
        "color": "from_item" // Only works if the item itself is a dye
    }
}
```

:::

### Set Item

Set an `Item` in a [`Slot`](#slots).
The key is `csr:set_item`, an `Item` and a `Slot` are required.
Additionally an `Operation` can be specified, possible operations are:

This function sets an item in a specified [slot](#slots) when picked up.
The key is `csr:set_item`, and it requires an item and a slot.
Additionally, you can specify an operation (`Replace` or `Drop`), with `Drop` being the default.

| Name      | Json        |
|-----------|-------------|
| `Replace` | `"replace"` |
| `Drop`    | `"drop"`    |


```json:no-line-numbers
{
    "type": "csr:set_item",
    "function": {
        "item": {
            "count": 1,
            "id": "minecraft:coal_block"
        },
        "slot": "feet",
        "operation": "drop"
    }
}
```

### Effect Function

The effect function applies a status effect to the soldier. The key is `csr:apply_effect`,
and it requires an effect type, duration, amplifier, and an operation.
Available operations include:

| Name       | Json         | Description                                         |
|------------|--------------|-----------------------------------------------------|
| `Add`      | `"add"`      | Adds the `Effect` to the Soldier                    |
| `Increase` | `"increase"` | Increase `Effect` by the `duration` and `amplifier` |
| `Remove`   | `"remove"`   | Removes the `Effect` from the soldier.              |


::: code-tabs#effect-example

@tab Adding Effect
```json:no-line-numbers
{
    "type": "csr:apply_effect",
    "effect": {
        "amplifier": 2,
        "duration": 10000,
        "effect": "minecraft:slow_falling",
        "operation": "add"
    }
}
```

@tab Removing Effect
```json:no-line-numbers
{
    "type": "csr:apply_effect",
    "effect": {
        "effect": "minecraft:poison",
        "operation": "remove"
    }
}
```
:::


### Conversion Function

Converts the soldier into another type.
The key is `csr:conversion`, and it requires a `Type` and optional additional data.

| Name      | Json                         | Description                                                                               |
|-----------|------------------------------|-------------------------------------------------------------------------------------------|
| `Normal`  | `"csr:clay_soldier"`         | Converts the Soldier to a Normal [Clay Soldier](../wiki/clay-soldiers)                  |
| `Zombie`  | `"csr:zombie_clay_soldier"`  | Converts the Soldier to a [Zombie Clay Soldier](../wiki/clay-soldiers#zombie-soldier)   |
| `Vampire` | `"csr:vampire_clay_soldier"` | Converts the Soldier to a [Vampire Clay Soldier](../wiki/clay-soldiers#vampire-soldier) |

The `Additional Data`depends on the `Type`.

| For       | Tag                                      | Description                                  |
|-----------|------------------------------------------|----------------------------------------------|
| `Normal`  | <span class="table-text-center">-</span> | <span class="table-text-center">-</span>     |
| `Zombie`  | `"Curable"` either `0` ore `1`           | `1` means Zombie can be cured, `0` it can't  |
| `Vampire` | `"Alpha"` either `0` ore `1`             | `1` means Vampire is an Alpha, `0` it is not |


::: code-tabs#conversion-example

@tab Zombie
```json:no-line-numbers
{
    "type": "csr:conversion",
    "function": {
        "type": "csr:zombie_clay_soldier",
    }
}
```

@tab Vampire
```json:no-line-numbers
{
    "type": "csr:conversion",
    "function": {
        "type": "csr:vampire_clay_soldier",
        "additional_data": {
            "Alpha": 1
        }
    }
}
```
:::

## Predicate

A predicate tests whether certain properties of the item should be applied to the soldier carrying it.
Predicates consist of a `Type` and associated values. They are structured as follows:

```json:no-line-numbers
"predicate": {
  "type": ...
  ...
}
```

::: info
`Predicates` do not test whether the Soldier can pick up the Item.
:::

If no predicate is specified, it defaults to `Always True`.


**The possible `Types` are as follows:**

### Always True

This predicate always returns `true`. It’s used as a default when no other conditions are specified.
```json:no-line-numbers
"predicate": {
  "type": "csr:always_true",
  "test": {}
}
```


### Has Custom Color

Returns `true` if the soldier has a custom color. No additional properties are required.
The key is `csr:has_custom_color`.

```json:no-line-numbers
"predicate": {
  "type": "csr:has_custom_color",
  "test": {}
}
```

### Item Predicate

Tests whether the soldier is holding a specific item in a given [slot](#slots).
There are two special slots
* `"any"` which tests all slots if they contain the item
* `"suitalbe"` which test if the soldier could hold the item in any slot

:::code-tabs#item-predicate#examples

@tab Normal Slot
```json:no-line-numbers
"predicate": {
  "type": "csr:has_item",
  "test": {
    "item": "minecraft:stick",
     "slot": "mainhand"
  }
}
```

@tab Special Slot
```json:no-line-numbers
"predicate": {
  "type": "csr:has_item",
  "test": {
    "item": "minecraft:paper",
    "slot": "suitable"
  }
}
```
:::

### Logic Predicate

Tests a list of other predicates using logical operations `Any`, `All`, `None`, or `Not`.
The key is `csr:logic`, and an `Operation` and a list of `Predicates`is required.


| Name   | Json     |  Value  |
|--------|----------|:-------:|
| `Any`  | `"any"`  |   or    |
| `All`  | `"all"`  |   and   |
| `None` | `"none"` | and not |
| `Not`  | `"not"`  |   not   |

```json:no-line-numbers
"predicate": {
  "type": "csr:logic",
  "test": {
    "operation": "any",
    "predicate": [
      {
        "type": "csr:has_item",
        "test": {
          "item": "minecraft:stick",
          "slot": "mainhand"
        }
      },
      {
      ...
      }  
    ]
  }
}
```

### Effect Predicate

Tests whether the soldier has a specific effect.
The key is `csr:has_effect`, an effect is required. Optional properties include minimum duration and amplifier.

```json:no-line-numbers
"predicate": {
  "type": "csr:has_effect",
  "test": {
    "effect": "minecraft:conduit_power"
  }
}
```

::: warning
The `Effect Preciate` is only tested when a soldier picks up the item or the Inventory changes.
This should only be used on permanent effects.
It is generally recommend to use this only for [Item POIs](./pois.md)
:::

### Soldier Property Predicate

Tests whether a certain Property matches a certain condition.
The key is `csr:holdable_property`, a `Property` and `Test`are required.\
The possible `Tests` are:

| Name       | Json         | Description                                       |
|------------|--------------|---------------------------------------------------|
| `Increase` | `"increase"` | Test if the `Property` was increased              |
| `Decrease` | `"decrease"` | Test if the `Property` was decreased              |
| `Exist`    | `"exist"`    | Test if the `Property` was increased or decreased |

Example for checking if a property is increased:
```json:no-line-numbers
"predicate": {
  "type": "csr:holdable_property",
  "test": {
    "property": "set_on_fire",
    "test_type": "increase"
  }
}
```

**Advanced Test**

There are also 2 Advanced test that can be done. These require an additional `Value`, an Integer. 

| Name       | Json         | Description                                      |
|------------|--------------|--------------------------------------------------|
| `Count`    | `"count"`    | Test if the `Property` is at least a given Value |
| `Exatly`   | `"exactly"`  | Test if the `Property` is exactly a give Value   |

[Click here](./soldier-property-int.md) to see how `Properties` convert to integers.

```json:no-line-numbers
"predicate": {
  "type": "csr:holdable_property",
  "test": {
    "property": "attack_type",
    "test": "exactly",
    "value": 6
  }
}
```
This test whether the Soldier does have an [`Attack Type`](soldier-properties.md#attack-type) of `Zombier`.

## Removal Condition

The **removal condition** determines if and when an item held by a soldier should be used up or destroyed. It is defined as a key-value pair where:

* The `key` represents the Remove Type, which specifies the context or action triggering the item's removal.
* The `value` specifies additional conditions, such as a chance or specific criteria for removal.

If no removal condition is defined, the item will not be removed by default.

**Structure**
```json:no-line-numbers
"removal_condition": {
  "key1": condition1,
  "key2": condition2,
  ...
}
```

### On Use

The **On Use** condition applies when the item is actively used by a soldier.
This includes actions such as, Melee Attacks, Apply Helpful Effects, Ranged Attacks

The key for melee actions is `melee_use` and for ranged actions is `ranged_use`. The condition requires a `chance` value, which is a number between `0.0` (never removed) and `1.0` (always removed).

:::code-tabs#on-use-examples

@tab Melee
```json:no-line-numbers
"removal_condition": {
  "melee_use": 0.5
}
```

@tab Ranged
```json:no-line-numbers
"removal_condition": {
  "ranged_use": "always"
}
```
:::

### On Hurt

The On Hurt condition triggers when the soldier holding/wearing the item is damaged.
The key is `on_hurt`. Additional options include:
* **Chance:** Specifies the likelihood of the item being removed, with a value between `[0.0 - 1.0]`.
* **Condition:** A predicate using the [Damage Source Properties Predicate](https://minecraft.wiki/w/Predicate#condition_damage_source_properties), the same as the one used in Minecraft advancements.

```json:no-line-numbers
"removal_condition": {
  "on_hurt": {
    "condition": {
      "tags": [
        {
          "expected": true,
          "id": "minecraft:is_explosion"
        }
      ]
    },
    "chance": 1
  }
}
```

### On Teleport

The On Teleport condition triggers when the soldier teleports. The key is `on_teleport`.
Additional options include:
* **Chance:** Specifies the likelihood of the item being removed, with a value between `[0.0 - 1.0]`.
* **Type:** type of teleportation, possible types are:

  | Type          | Description                                                                  |
  |---------------|------------------------------------------------------------------------------|
  | `"to_target"` | Called when [teleporting to its target](soldier-properties.md#teleportation) |
  | `"to_safty"`  | Called when [teleporting to safety](soldier-properties.md#teleportation)     |
  | `"to_owner"`  | Called when [teleporting to owner](soldier-properties.md#teleport-to-owner)  |


```json:no-line-numbers
"removal_condition": {
  "on_teleport": {
    "chance": 0.2,
    "teleportation_type": "to_target"
  }
}
```

### On Escape

The On Escape condition triggers when the soldier does a [spectacular escape](soldier-properties.md#evacuation-property).
Additional options include:
* **Chance:** Specifies the likelihood of the item being removed, with a value between `[0.0 - 1.0]`.

```json:no-line-numbers
"removal_condition": {
  "on_escape": 1
}
```