# Item Set Types

tem Set Types are used to easily spawn custom items for Clay Soldiers.
They work in conjunction with the [`/csr items`](../wiki/commands.md#csr-items) command. 

## Adding Items to Existing Types

To add items to a predefined type, simply include them in the corresponding item tag:

| Key            | Tag                               |
|----------------|-----------------------------------|
| csr:basic      | csr:clay_soldier_items/basic      |
| csr:ranged     | csr:clay_soldier_items/ranged     |
| csr:tank       | csr:clay_soldier_items/tank       |
| csr:armored    | csr:clay_soldier_items/armored    |
| csr:specialist | csr:clay_soldier_items/specialist |
| csr:support    | csr:clay_soldier_items/supportive |
| csr:diver      | csr:clay_soldier_items/diver      |
| csr:arsonist   | csr:clay_soldier_items/arsonist   |
| csr:magician   | csr:clay_soldier_items/magician   |
| csr:royalty    | csr:clay_soldier_items/royalty    |
| csr:fashion    | csr:clay_soldier_items/fashion    |
| csr:kingdom    | csr:clay_soldier_items/kingdom    |

## Creating a Custom Item Type

To define your own item type, create a .json file inside the following directory structure of your data pack:

```bash:no-line-numbers
└─ data
   └─ (your data pack name)
      └─ csr
         └─ soldier_item_type
            └─ (your_type_name).json                 
```

The file must contain a generator and a tag that it pulls items from.

JSON Structure
```json::no-line-numbers
{
  "generator": genrator,
  "tag": tag
}
```

- **generator** – Determines how items are selected from the tag.
- **tag** – The item tag used as the source pool.


Generators selected the upt to give amount of items specified in the command from the tag.
Available Generators are:

| Generator                | Description                                                                                        |
|--------------------------|----------------------------------------------------------------------------------------------------|
| `csr:default`            | Selects the specified number of items randomly from the tag. Items can be selected multiple times. |
| `csr:one_of_each`        | Selects up to the specified number of unique items. No duplicates.                                 |
| `csr:one_of_each_no_tag` | Like `one_of_each, but excluded from the `csr:combined_defaulted` generator.                       |
| `csr:combined_defaulted  | Selects the given amounts of items from all item types.                                            |

## Example

```json
{
  "generator": "csr:default",
  "tag": "csr:clay_soldier_items/armored"
}
```