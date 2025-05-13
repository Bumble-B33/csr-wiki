# Soldier Attributes

Properties define various attributes and behaviors of a soldier when they hold or use a specific item.
Each property has a unique key and an associated value that dictates its effect on the soldier.
Below is a detailed breakdown of each property:

## Damage

This property increases the damage dealt by the soldier.
The key is `"damage"`, and the value can be any number. The default value is `0`.
```json:no-line-numbers
"damage": 1.25
```

## Attack Range

Increases the soldier's attack range. The key is `"attack_range"` and the value can be any `number`.
The default value is `0`
```json:no-line-numbers
"attack_range": 0.1
```

## Throwable

Indicates whether the item can be thrown by the soldier. The key is `"throwable"`, and possible values include:

| Name       | Json        | Description                              |
|------------|-------------|------------------------------------------|
| `None`     | `"none"`    | This `Item`cannot be thrown              |
| `Harmfull` | `"harmful"` | This `Item`can only be thrown at enemies |
| `Helping`  | `"helping"` | This `Item`can only be thrown at allies  |

If the item is throwable, the damage is affected by the [Damage](#damage) property,
and it can also apply [Set on  Fire](#set-on-fire) and [Special Ranged Attacks](#special-attacks-and-counter-attacks).

The default value is `None`
```json:no-line-numbers
"throwable": "harmful"
```

::: important
For items with `Helping` as the throwable value, make sure to set the [`AttackType`](#attack-type) to `Support` otherwise, the soldier won’t be able to target allies correctly.
:::

## Protection

Increases the armor value of the soldier. The key is `"protection"`, and the value can be any positive number. The default value is `0`.
```json:no-line-numbers
"protection": 1.3
```

## Explosion Resistance

Increases the resistance against explosions of the soldier. The key is `"explosion_resistance"`, and the value can be any positive number. The default value is `0`.
```json:no-line-numbers
"explosion_resistance": 14.3
```

## Heavy

Increases the armor of toughness the Soldier. The key is `"heavy"` and the value can be any number.
The default value is `0`
```json:no-line-numbers
"heavy": 2.0
```

## Damage Block

This property allows the soldier to block a certain amount of damage received.
The key is `"damage_block"`. It consists of the damage amount to block, a chance of blocking, and an optional "pierceable" flag.

```json:no-line-numbers
"damage_block": {
  "amount": 2.0,
  "chance": 0.5,
}
```

## Set on fire

Ignites the target on attack. The key is `"set_on_fire"` and the value can be any positive whole number representing the duration in ticks.
The default value is `0`.
```json:no-line-numbers
"set_on_fire": 1
```

## See Invisibility

Determines whether the soldier can see invisible enemies.
The key is `"see_invisibility"`, and the value can be `true` or `{}`.
There is no default value as this property is active when present otherwise not.
```json:no-line-numbers
"see_invisibility": true
```

## Can Swim

Indicates whether the soldier can swim. The key is `"can_swim"` and the value can be any `true` or `{}`.
There is no default value as this property is active when present otherwise not.
```json:no-line-numbers
"can_swim": true
```

## Gliding

Enables the soldier to glide, preventing fall damage. The key is `"glide"` and the value can be any `true` or `{}`.
There is no default value as this property is active when present otherwise not.
```json:no-line-numbers
"glide": true
```
::: info
For visual gliding effect the item needs to be a [Gliding Accessory](./items#creating-an-accessory)
:::

## Invisible

Makes the soldier invisible. The key is `"invisible"` and the value can be any `true` or `{}`.
There is no default value as this property is active when present otherwise not.
```json:no-line-numbers
"invisible": true
```

## Glowing

Determines if the soldier emits light, making it glow in dark areas. The key is `"glowing"` and the value can be any `true` or `{}`.
There is no default value as this property is active when present otherwise not.
```json:no-line-numbers
"glowing": true
```

## Glow Outline

Adds a glowing outline around the soldier, similar to the "Glowing" effect. The key is `"glow_outline"` and the value can be any `true` or `{}`.
There is no default value as this property is active when present otherwise not.
```json:no-line-numbers
"glow_outline": true
```

## Teleport to Owner

If ths Soldier is loyal to a player it can now teleport to it.
The key is `"teleport_to_owner"` and the value can be any `true` or `{}`.
There is no default value as this property is active when present otherwise not.
```json:no-line-numbers
"teleport_to_owner": true
```

## Teleportation

Teleportation allows the Soldier to teleport to any target that is attacking it or
to teleport away from any danger.
The key is `"teleportation"` and the value can be any `true` or `{}`.
There is no default value as this property is active when present otherwise not.
```json:no-line-numbers
"teleportation": true
```

## Evacuation Property

The evacuation property allows the soldier to escape from any danger in a stylish fashion.
The property is triggered when the soldier health falls below one third of its max health.
The key is `"evacuation"`. The possible values are as follows:

| Name       | Json         | Value                                                 |
|------------|--------------|-------------------------------------------------------|
| `None`     | `"none"`     | Nothing Special                                       |
| `Firework` | `"firework"` | Allows the soldier to escape riding a firework rocket |

```json:no-line-numbers
"evacuation": "firework"
```

## Breath Hold

Specifies the time a soldier can hold its breath underwater. The key is `"breath_hold"` and the value is a whole number.
There are predefined values

| Name      | Json         | Value                                    |
|-----------|--------------|------------------------------------------|
| `None`    | `"none"`     | Soldier cannot breathe underwater at all |
| `Normal`  | `"normal"`   | Default breath-holding time              |
| `Inifine` | `"infinite"` | Soldier can hold its breath indefinitely |

::: code-tabs#breath-hold-examples

@tab Number
```json:no-line-numbers
"breath_hold": 35
```

@tab Predefined
```json:no-line-numbers
"breath_hold": "infinite"
```

:::

## Size 

Modifies the size of the soldier.
The key is `"size"` and the value can be any `positive number`.
The default value is `1.0`. The maximum size increase any soldier can have is `3.0`.

```json:no-line-numbers
"size": 2.35
```

## Death Explosion

Defines the explosion power when a soldier dies.
The key is `"death_exploder"` and the value can be any `positive number`.
The default value is `0.0`.

```json:no-line-numbers
"counter_attack": 1.1
```

## Death Cloud
Spawns an Area Effect Cloud when the soldier dies.
The key is `"death_cloud"`.  It can accept a single death cloud or a list of them.
Each cloud can have an effect, amplifier, and duration.

::: code-tabs#json

@tab Single
```json:no-line-numbers
"death_cloud": {
  "amplifier": 1,
  "duration": 30,
  "effect": "minecraft:poison"
}
```

@tab Multiple
```json:no-line-numbers
"death_cloud": [
  {
    "amplifier": 2,
    "duration": 1,
    "effect": "minecraft:instant_damage"
  },
  {
    "amplifier": 2,
    "duration": 100,
    "effect": "minecraft:weakness"
  }
]
```
:::

## Attributes

Defines a set of attributes for the item
The key is `"attributes"`. Contains a list of `Attributes` that consist of
an Identifier and a Modifier. A Modifier consist of an amount, an id, and an operation.
The amount can be any `number`, 
the id should be unique to this `Item` all in lower case, underscores instead of spaces.
Optionally it can be prefixed with `"modid:"`.

| Name              | Json Key                 | Value                      |
|-------------------|--------------------------|----------------------------|
| `Add Value`       | `"add_value"`            | Adds a flat value          |
| `Multiplie Base`  | `"add_multiplied_base"`  | Multiplies the base value  |
| `Multiplie Total` | `"add_multiplied_total"` | Multiplies the total value |

```json:no-line-numbers
"attributes": {
  "minecraft:generic.max_health": {
    "amount": 30.0,
    "id": "soldier_com_health",
    "operation": "add_value"
  },
  "minecraft:generic.movement_speed": {
    "amount": -0.2,
    "id": "unique_name_slow",
    "operation": "add_multiplied_total"
  }
}
```

## Immunity and Persistence
Determines whether a soldier is immune to a certain effect or if the effect cannot be removed.

The key is `"immunity"`. The value is a Map with the effect and type.

| Name        | Json Key       |
|-------------|----------------|
| `Immuner`   | `"immune"`     |
| `Persitent` | `"persistent"` |

```json:no-line-numbers
"immunity": {
  "minecraft:poison": "immune",
  "minecraft:regeneration": "persistent",
  "minecraft:weakness": "immune",
}
```

## Attack Type

Describes the soldier’s attack behavior.
The key is `attack_type` and the default value is `Normal`.

| Name        | Json          | Description                                                   |
|-------------|---------------|---------------------------------------------------------------|
| `Normal`    | `"normal"`    | This is normal attack behaviour of soldiers. Nothing special. |
| `Pacifist`  | `"pacifist"`  | Soldier doesn't attack. However they can do work now.         |
| `Agressive` | `"agressive"` | Soldier attacks everyone, even team members                   |
| `Support`   | `"support"`   | Can’t attack, but helps allied                                |
| `King`      | `"king"`      | Commands other soldiers to attack the same target.            |
| `Queen`     | `"queen"`     | Other soldiers will try to protect the Queen.                 |
| `Zombie`    | `"zombie"`    | Behaves like a zombie                                         |
| `Vampire`   | `"vampire"`   | Behaves like a vampire                                        |

The `King` and `Queen` attack types will cause the soldier to attack rival kings or queens of the same team.

```json:no-line-numbers
"attack_type": "support"
```

::: info
The `AttackType` `Zombie`/`Vampire`does not turn a Soldier into a Zombie/Vampire
:::

## Revive Property
This property allows a soldier to revive other fallen soldiers.
The key is `"revive_other"`. The Value has a `type`, a `priority`, a `chance`and a `cooldown`.
The possible types are as follows:

| Name            | Json Key          | Description                                             |
|-----------------|-------------------|---------------------------------------------------------|
| `None`          | `"none"`          | No revive.                                              |
| `Necrotic`      | `"necrotic"`      | Revive as a curable Zombie                              |
| `Dark Necrotic` | `"dark_necrotic"` | Revive as an incurable Zombie                           |
| `Medic`         | `"medic"`         | Revive a burned Soldier on the same team to half health |
| `Angel`         | `"angel"`         | Revive a Soldier on the same team                       |
| `Spritual`      | `"spiritual"`     | Convert fallen Soldiers of the same team into Wraiths   |

The `priority` is a whole number dictates in which order revives are attempted.
The `chance` determines the likelihood of a successful revival
and the `cooldown` is a non-negative number specifies how long the soldier must wait before reviving again

```json:no-line-numbers
"revive_other": {
  "type": "necrotic",
  "chance": 0.5,
  "cooldown": 20,
  "priority": 1
}
```

## Special Attacks and Counter Attacks

Special attacks are triggered when a soldier attacks.
Counter-attacks activate when the soldier is attacked.
These properties can either be a single effect or a list of effects.

The key is `"special_attack"` for single effect or `"special_attacks"` for multiplier effects.
For counter-attacks, use `"counter_attack"` or `"counter_attacks"`.

All effects have a `Type` and the possible `Types` are as follows:

| Name           | Json                 | Description                                                                 | Additional Values           |
|----------------|----------------------|-----------------------------------------------------------------------------|-----------------------------|
| `Thorns`       | `"thorns"`           | 75% Chance to do the bonus damage                                           | -                           |
| `Sneek Attack` | `"sneak_attack"`     | Deals bonus damage when the user is invisible                               | -                           |
| `Lightning`    | `"lightning_attack"` | Strikes a lightning on use                                                  | -                           |
| `Effect`       | `"effect"`           | Applies an MobEffect when used                                              | effect, duration, amplifier |
| `Critical Hit` | `"critical_hit"`     | Chance to deal bonus damage                                                 | chance                      |
| `Smite`        | `"smite"`            | Bonus damage to Undead Mobs and cures zombies and vampires of the same team | -                           |

`Attack Properties` always hava an `Attack Type` and `Damage`.

Possible `Attack Types` are:

| Name               | Json                 | Description                  |
|--------------------|----------------------|------------------------------|
| `Melee`            | `"melee"`            | For Melee (Counter) Attacks  |
| `Ranged`           | `"ranged"`           | For Ranged (Counter) Attacks |
| `Melee and Ranged` | `"melee_and_ranged"` | For both                     |


::: code-tabs#json 

@tab Special Attack
```json:no-line-numbers
"special_attack": {
  "type": "sneak_attack",
  "attack_properties": {
    "attack_type": "melee",
      "damage": 0.5
    }
  }
}
```

@tab Special Attacks
```json:no-line-numbers
"special_attack": [
  {
    "type": "effect",
    "attack_properties": {
      "attack_type": "melee",
      "amplifier": 2,
      "duration": 600,
      "effect": "minecraft:blindness"
    }
  },
  {
    "type": "critical_hit",
    "attack_properties": {
      "attack_type": "ranged",
      "damage": 2.0,
      "chance": 0.25
    }
  }
]
```

@tab Counter Attack
```json:no-line-numbers
"counter_attack": {
  "type": "thorns",
  "attack_properties": {
    "attack_type": "melee_and_ranged",
    "damage": 1.0
  }
}
```

:::



## Wraith
his property allows a soldier to turn into a wraith on death, haunting others.
The key is `"wraith"`. The Value consist of a duration, an optional field of damage and an optional list of [Special Attacks](#special-attacks-and-counter-attacks)

```json:no-line-numbers
"wraith": {
  "attack_effect": {
    "type": "csr:smite",
    "attack_properties": {
      "attack_type": "melee",
      "damage": 1.0
    }
  },
  "duration": 6,
  "damage": 1.1
}
```

::: important
Only `Melee` and `Melee and Ranged` special attacks will be used.
:::