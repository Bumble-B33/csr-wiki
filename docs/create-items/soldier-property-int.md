# Integer Value of Properties

Each property a Soldier can be represented as an Integer, this Value is dynamic, that means it changes based on the strength of the `Property`.

Every `Boolean Proerty` converts to `0` if it is false and `1` if it is true.
This is for Properties like `Can Swim`, `Glowing`, ...

Every `List Property` converts to the Number of Elements in the List.
For Example Like `Death Cloud Property`, `Special Attacks`, `Attribute Property`, ...
The `Effetc Immunity/Peristence` is included here as well.

Any `Number Property` will have matching sign. Examples are `Damage`, `Set On Fire`, `Protections`, ... 

There are also some unique `Properties` listed below.

## Attack Type

| Name        | Value |                                                          
|-------------|:-----:|
| `Normal`    |  `0`  |
| `Pacifist`  |  `1`  |
| `Agressive` |  `2`  | 
| `Support`   |  `3`  | 
| `King`      |  `4`  |
| `Queen`     |  `5`  |
| `Zombie`    |  `6`  |
| `Vampire`   |  `7`  |

## Damage Block

Returns `1` if there is any damage block, `0` otherwise.

## Ranged Attack Type

Returns a value greater than `0` if there is any ranged attack helping or harmful, `0` otherwise.

## Revive Type

Returns `1` if the Soldier can revive other Soldiers, `0` otherwise.

## Wraith Property

Returns the duration of the spawned Wraith.