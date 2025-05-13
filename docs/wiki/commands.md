# Commands

This page covers all custom commands added.
These commands can be used to spawn pre-configured item sets, assign teams.

For general information on how Minecraft commands work, refer to the
[Minecraft Wiki - Commands](https://minecraft.wiki/w/Commands)

All Clay Soldier commands start with `/csr`.

## /csr items

Spawns a randomized set of items on the ground,
based on the chosen item set type.
This is useful for quickly equipping soldiers without manually selecting items.

```bash::no-line-numbers
/csr items <set> <amount> [uniform]
```

Parameters: 
- `<set>` - The item set category to use [see table below](#available-item-sets).
- `<amount>` - How many items to spawn.
- `[uniform]` _(optional)_ - If this is included, the same item(s) will be spawned every time, instead of random selections.

### Example

```mcfunction:no-line-numbers
/csr items csr:basic 12
```
Spawns 12 of the same basic items.

### Available Item Sets

| Key              | Description                     | Items                                                                                                                                                       |
|------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `csr:basic`      | Basic Items                     | Stick, Sharpened Stick, Bone, Blaze Rod, Shears, Snowball, Gravel, Bowl                                                                                     |
| `csr:ranged`     | Ranged Weapons                  | Snowball, Fire Charge, Slime Ball, Gravel                                                                                                                   |
| `csr:tank`       | Items for tanky soldiers        | Nether Star, Brick, Cactus, Bowl                                                                                                                            |
| `csr:armored`    | Armor Items                     | Lily Pad, Red Mushroom, Leather, Glass Pane, Paper, Brick, Turtle Scute, Cactus, String                                                                     |
| `csr:specialist` | Special effect tools            | Slime Ball, Glass Bottle, Sugar, Emerald, Redstone, Firework Rocket, Red Mushroom, Glass Pane, String, Feather, Rabbit Hide                                 |
| `csr:supportive` | Healing/Support items           | Golden Apple, Totem of Undying, Glistering Melon Slice                                                                                                      |
| `csr:diver`      | Items for underwater combat     | Glass Bottle, Lily Pad, Bamboo, Turtle Scute                                                                                                                |
| `csr:arsonist`   | Fire and Explosion related Gear | Blaze Rod, Any Coal, Fire Charge, Gunpowder, Tnt, Magma Cream, Poisonous Potato, Firework Rocket, Blaze Powder                                              |
| `csr:magician`   | Magical Items                   | Poisonous Potato, Emerald, Amethyst Shard, Glowstone Dust, Glow Ink Sac, Dragon Breath, Totem of Undying, Echo Shard, Chorus Fruit, (Wither) Skeleton Skull |
| `csr:royalty`    | Items for Royalty               | Diamond, Gold Ingot                                                                                                                                         |
| `csr:fashion`    | Fashion accessories             | Any Glass Pane, Paper                                                                                                                                       |
| `csr:kingdom`    | Full army loadout               | Random items selected from all sets above                                                                                                                   |

## /csr team set

*Assigns a team to a soldier or a soldier item.*
This command allows you to manually assign team colors to either spawned entities or soldier dolls in your inventory.

```bash::no-line-numbers
/csr team set <targets>|item <team>
```
Parameters

- `<targets>` - A selector or list of entities
- `item` - Targets the item in your main hand or offhand. Must be a Clay Soldier Doll.
- `<team>` - The ID of the team you want to assign

### Examples

::: code-tabs#set-team-examples

@tab Targets
```mcfunction::no-line-numbers
/csr team set @e csr:blue
```

@tab Item
```mcfunction::no-line-numbers
/csr team set item csr:amethyst
```

:::

## /csr team loyalty

This command lets you view or change which player a Clay Soldier team is loyal to.
Loyalty affects team behavior such as following and defending the player.

### Show

Displays which player each Clay Soldier team is currently loyal to.

```bash::no-line-numbers
/csr team loyalty
```

### Set

Assigns a player as the loyal leader of a specific Clay Soldier team. 

```bash::no-line-numbers
/csr team loyalty set <team> <player>
```

Parameters:
- `<team>` - The id of the Clay Soldier Team.
- `<player>` - The Player.


### Remove

Removes the player loyalty from the specified team.
The team will no longer follow or assist any player.

```bash::no-line-numbers
/csr team loyalty remove <team>
```

Parameters:
- `<team>` - The id of the Clay Soldier Team.
