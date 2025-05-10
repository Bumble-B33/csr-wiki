# Creating Soldier POIs

Points of Interest (POIs) are blocks or items that soldiers interact with to gain effects, rather than picking them up.

```bash:no-line-numbers
└─ data
   └─ (your data pack name)
      └─ data-maps
         ├─ item
         │  └─ soldier_poi.json          # <- For interactable items
         └─ block
            └─ soldier_poi.json          # <- For Blocks soldiers can interact
      
```

Whether an interactable Item or Block is created is determent by folder. 

The base structure for `soldier_poi.json` is:

```json:no-line-numbers
{
  "values": {
    "modid:item_name": {
      "effect": [
        // Effects to apply when a soldier interacts with this item
      ],
      "predicate": {
        // Conditions under which this item can be used as a POI
      },
      "break_chance": number // Likelihood of the item breaking after use (0.0 - 1.0)
    },
    ...
  }
}
```

The `effect` is a [Pick Function](holdable-values.md#pickup-functions)
and the `predicate` is the same [Predicate](holdable-values.md#predicate) as for Items.
The `break_chance` describes how like it is the item breaks after a Soldier uses it. It is between `[0.0 - 1.0]`.
A value of `0.0` means it will never break, while `1.0` ensures it always breaks.

::: danger
Always ensure that the `Predicate` checks if the `Effect` is not already applied. Otherwise, soldiers may get stuck
repeatedly interacting with the same POI.
:::

### Examples

::: code-tabs#poi-examples

@tab Item

```json:no-line-numbers
If you want soldiers to gain the Conduit Power effect
when interacting with a Heart of the Sea item,
use the following definition:
We would put this under the item directory.


"minecraft:heart_of_the_sea": {
  "effect": [
    {
      "type": "csr:apply_effect",
      "effect": {
        "duration": 360,
        "effect": "minecraft:conduit_power",
        "operation": "add"
      }
    }
  ],
  "predicate": {
    "type": "csr:logic",
    "predicate": {
      "operation": "not",
      "predicate": {
      "type": "csr:has_effect",
      "predicate": {
        "effect": "minecraft:conduit_power"
      }
    }
  }
  "break_chance": 0.0 // This item will never break when used
}
```

@tab Block

```json:no-line-numbers
If you want soldiers to transform into Wraiths
when interacting with a Dragon Egg,
here’s how you can define it. Place this under the block directory.

Since Wraiths cannot interact with POIs,
there's no need to check whether the soldier is already a Wraith,
so we can set the predicate to Always True


"minecraft:dragon_egg": {
  "effect": [
    {
      "type": "csr:conversion",
      "function": {
        "type": "csr:clay_wraith",
        "additional_data": {
          "LifeTicks": 420,
          "WraithAttacks": {
            "type": "csr:lightning_attack",
            "attack_properties": {
              "attack_type": "melee",
              "damage": 2.0
            }
          }
        }
      }
    }
  ],
    "predicate": {
      "type": "csr:always_true",
      "predicate": {}
    }
}
```
:::