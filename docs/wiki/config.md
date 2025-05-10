# Game Settings & Configuration

This page explains how to adjust in-game rules and configuration files for the Clay Soldiers Mod.
Game rules can be changed on the fly using the `/gamerule` command, while config settings are modified via external files located in your world or config folders.

## Game Rules

These options can be set using Minecraft's `/gamerule` command. They control core Clay Soldier behaviors during gameplay.

| Key                    |     Values     | Default | Description                                                 |
|------------------------|:--------------:|--------:|-------------------------------------------------------------|
| `soldierDropThemSelf`  |  `[0 - 100]`   |    `50` | Chance (in %) for a Clay Soldier to drop itself when killed |
| `soldierDropInventory` | `true`/`false` |  `true` | If enabled, Clay Soldiers drop their inventory on death     |

## Configuration Settings

These are stored in config files and affect technical or gameplay mechanics. File location differs by mod loader:

| Key                     |     Values     | Default | Description                                                                      |
|-------------------------|:--------------:|--------:|----------------------------------------------------------------------------------|
| `claySoldierMenuModify` | `true`/`false` | `false` | Allows editing a Clay Soldier's inventory via the menu. May result in item loss. |
| `hamsterWheelCapacity`  |     `> 0`      |  `3000` | Total energy storage capacity of the Hamster Wheel Block                         |
| `hamsterWheelSpeed`     |     `> 0`      |     `1` | Energy generated per tick by the Hamster Wheel Block                             |

:::code-tabs#config-location

@tab NeoForge

```bash:no-line-numbers
└─ config
   └─ csr-server.toml
```


@tab Fabric

```bash:no-line-numbers
└─ config
   └─ csr.properties
```

:::

## Blueprint DataPack

A built-in datapack, can be enabled to allow soldiers to construct structures using Blueprints.

**Single Player**

Enable the datapack during world creation via:

`More` → `Datapacks` → `Clay Soldier: Blueprints`

:::warning
This datapack cannot be enabled or disabled after world creation.
:::

**Server**

Use the following IDs to activate the blueprint datapack on servers in the server properties:
```properties
initial-enabled-packs=<id>
```
Datapack IDs
:::code-tabs#config-location

@tab NeoForge

```:no-line-numbers
mod/csr:data/csr/datapacks/blueprint_pack
```

@tab Fabric

```:no-line-numbers
csr:blueprint_pack
```

:::

:::warning
This only works on initial world creation.
:::