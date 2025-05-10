# Creating Your Own Items

## Pack Layout

Before diving into creating custom items,
you should have a basic understanding of how resource packs and data packs are structured,
particularly the directory layout from the root folder to the `/data/` directories. You can refer to the
corresponding [Minecraft Wiki](https://minecraft.wiki/w/Data_pack) page for more information on setting up data packs.

To add custom items for Clay Soldiers to hold, wear, or interact with,
you'll be working with a data pack that
modifies [NeoForge’s Data Maps](https://docs.neoforged.net/docs/resources/server/datamaps/).

```bash:no-line-numbers
└─ data
   └─ (your data pack name)
      ├─ data-maps
      │  ├─ item
      │  │  ├─ soldier_holdable.json            # <- For items that soldiers can hold
      │  │  ├─ soldier_wearable.json            # <- For items that soldiers can wear
      │  │  └─ soldier_poi.json                 # <- For interactable items
      │  ├─ block
      │  │  └─ soldier_poi.json                 # <- For Blocks soldiers can interact
      │  └─ entity_type
      │     └─ soldier_vehicle_properties.json  # <- Properties for Clay Soldier Mounts
      ├─ csr
      │  ├─ clay_teams                          # <- For new Clay Soldier Teams 
      │  │  └─ ...  
      │  └─ soldier_item_type                   # <- For new Soldier Item Set Types   
      │     └─ ...
      └─ tags
         └─ item
            └─ ...        
```

- [Adding new Items and Armor](./items.md)
- [Adding interactable Items/Blocks](./pois.md)
- [Adding new Teams](./teams.md)
- [Modifying Item Set Types](./itemsettypes.md)
- [Tags](./tags.md)
- [Modifying Soldier Mounts Properties](./vehicle_properties.md)
- [Examples](./example.md)

---

- [Item Properties](./holdable-values.md)
- [Soldier Attributes](./soldier-properties.md)
- [Commonly used Values](./common-values.md)