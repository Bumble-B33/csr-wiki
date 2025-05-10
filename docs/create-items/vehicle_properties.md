# Soldier Vehicle Properties

This file allows you to define additional behavior and attribute modifiers for Clay Soldiers when they are riding specific mobs.

```bash:no-line-numbers
└─ data
   └─ (your data pack name)
      └─ data-maps
         └─ entity_type
            └─ soldier_vehicle_properties.json
```

The base structure for `soldier_vehicle_properties.json` is:

```json:no-line-numbers
{
  "values": {
    "modid:entity_type": {
        "properties": {
            ...
        },
        "predicate": {
            ...
        }
     },
    ...
  }
}
```

For Properties only [Soldier Attributes](./soldier-properties.md) are allowed, but the following cannot be used in vehicle properties:

* [`throwable`](./soldier-properties.md#throwable)
* [`evacuation`](./soldier-properties.md#evacuation-property)
* [`attack_type`](./soldier-properties.md#attack-type)

The [predicate](./holdable-values.md#predicate) test whether this mount can be ridden by a Clay Soldier. 


::: important 
The predicate does not define which mobs can be selected to be ridden only whether the given mob can currently be ridden by the Clay Soldier
:::

## Example

```json
{
  "values": {
    "csr:clay_pegasus": {
      "properties": {
        "attack_range": 0.25,
        "heavy": 0.25
      }
    },
    "minecraft:endermite": {
      "properties": {
        "teleport_to_owner": {},
        "teleportation": {}
      }
    }
  }
}
```