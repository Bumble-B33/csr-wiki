# Adding new Teams

To add new teams, you need to define them in the `teams.json` file.

```bash:no-line-numbers
└─ data
   └─ (your data pack name)
      └─ csr
         └─ clay_teams                     
            └─ your_team.json
```

The structure for team entry is as follows:

```json:no-line-numbers
{
  "name": name, 
  "color": number,
  "from": item,
  "propeties": {
    ...
  }
}
```

| Key            | Description                                                                                       | Required |
|----------------|---------------------------------------------------------------------------------------------------|:--------:|
| `name`         | The Name of the team.                                                                             |   Yes    |
| `color`        | The color representing the team, specified as an integer or a hex color code.                     |   Yes    |
| `from`         | The item used to craft this team.                                                                 |    No    |
| `properties`   | Additional [properties](./soldier-properties.md) that grant unique bonuses or traits to the team. |    No    |

::: danger
Remove Teams after a World was already loaded can cause some issues.
:::

**Example: Adding a Purple Team**

Here's an example of adding a new Purple Team that is crafted from an amethyst shard and is always invisible. The hex
color code
<span style="color: #9400D3">`#9400D3`</span>.

In the `amethyst.json` file:

```json:no-line-numbers
{
  "name": "Amethyst",
  "color": "#9400D3",
  "from": "amethyst_shard",
  "properties": {
    "invisible": true
  }
}
```