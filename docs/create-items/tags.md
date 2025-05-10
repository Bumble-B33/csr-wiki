# Tags

Tags are used by Minecraft to group Items and other stuff together for various purposes.
This page covers how to create tags and all tags added by this mod and their purpose.

## Creating/Appending a Tag
For creating or appending a Tag see [Minecraft Wiki - Tags](https://minecraft.wiki/w/Tag).

## Clay Soldier Tags

```bash:no-line-numbers
└─ data
   └─ (your data pack name)
      └─ tags
         └─ item
            ├─ clay_soldier_holdable.json        
            ├─ clay_soldier_armor.json        
            ├─ clay_soldier_weapon.json        
            ├─ soldier_poi.json        
            ├─ clay_horse_armor.json        
            ├─ clay_wax.json  
            ├─ clay_food.json        
            └─ clay_soldier_items
               ├─ armored.json
               ├─ arsonist.json
               ├─ basic.json
               ├─ diver.json
               ├─ fashion.json
               ├─ ranged.json
               ├─ specialist.json
               ├─ supprotive.json
               ├─ tank.json
               └─ royalty.json
```

| Tag                          | Description                                                                                                                                                                                  |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `clay_soldier_holdable.json` | Any Item that can be held by a Clay Soldier, this automaticly includes `clay_soldier_armor.json` and `clay_soldier_weapon.json`, Items will also appear in `Clay Soldier Items` Creative Tab |
| `clay_soldier_armor.json`    | Any Item that can be worn by a Clay Soldier,                                                                                                                                                 |
| `clay_soldier_weapon.json`   | Items under this tag will cause the Clay Soldier to swing its arm when attacking                                                                                                             |
| `soldier_poi.json`           | Any Item that can be interacted with by a Clay Soldier, Items will also appear in `Clay Soldier Items` Creative Tab                                                                          |
| `clay_horse_armor.json`      | Any Item that can be worn by [Clay Horses](../wiki/mounts.md), Items will also appear in `Clay Soldier Items` Creative Tab                                                                   |
| `clay_wax.json`              | Any Item that can be used to wax a Clay Soldier                                                                                                                                              |
| `clay_food.json`             | Any Item that can be feed to a Clay Soldier to heal them                                                                                                                                     |
| `clay_soldier_items/*`       | Any Tag under `clay_soldier_items` is used for an [Item Set Type](./itemsettypes.md)                                                                                                         |