# Common Values

This page provides an overview of commonly used values in Clay Soldiers Remake JSON files, including their formats, examples, and how to use them

## Color

In Clay Soldiers Remake, color values in JSON files can be specified in two formats:
- Hex Code: A string in the format `#RRGGBB`.
- Integer: A numeric representation of the hex code.

::: important
The `"` are required for hex-color to work, this `"color": "#RRGGBB"`,
however this `"color": #RRGGBB` would not work.
:::

### Example: Setting the Color Orange

For example, the color orange has the hex code <span style="color: #FFA500">`#FFA500`</span>.
When converted to an integer, <span style="color: #FFA500">`#FFA500`</span> becomes <span style="color: #FFA500">`16753920`</span>.
This can be represented in two ways:



::: code-tabs#color-examples

@tab Hex Code

```json:no-line-numbers
{
  "color": "#FFA500"
}
```

@tab Integer
```json:no-line-numbers
{
  "color": 16753920
}
```

:::
Both of these formats will produce the exact same color effect in game.

### Special Color: Jeb_

There is also a unique color option called `"jeb_"`.
When used, it creates a rgb effect.

```json:no-line-numbers
{
  "color": "jeb_"
}
```

## Chance

Chance values determine the likelihood of an action occurring. They are specified as:

- Number: A value between `0.0` (never happens) and `1.0` (always happens).
- String: You can use predefined values like `"never"` (equivalent to `0.0`) or `"always"` (equivalent to `1.0`).

### Examples

::: code-tabs#chance-examples

@tab Number

```json:no-line-numbers
{
  "cahnce": 0.5 // -> 50% 
}
```

@tab String
```json:no-line-numbers
{
  "cahnce": "never" // -> 0%
}
```

:::

## Time

Time values in Clay Soldiers Remake can be expressed in two formats:

- Ticks: An integer, where 1 second equals 20 ticks.
- Seconds: A string in the format `"<number>s"`.

Both formats are interchangeable and yield the same results.

::: info Conversion Note
1 second = 20 ticks.
:::

::: code-tabs#time-examples

### Examples

@tab Ticks

```json:no-line-numbers
{
  "time": 25 // -> 1,25 Seconds
}
```

@tab Seconds
```json:no-line-numbers
{
  "time": "3s" // -> 3 Seconds
}
```

:::