# Config

To disable the auto-broadcasts set `auto-broadcasts-enabled` to false.

`auto-broadcast-delay-seconds` Sets the number of seconds between each broadcast.

To add broadcasts add a new section to the `options`.

To make them auto-broadcast add the ids of the `options` to the `broadcasts` list.

### Examples

To add a plain text broadcast follow the format below:

```
    title:
        layout-type: LEFT_AND_RIGHT
        text:
        - Line 1
        - Line 2
        - Line 3
        - Line 4
        - Line 5
        duration-seconds: 30
```

To add an item broadcast follow the format below:

```
    title:
        layout-type: LEFT
        text:
        - Line 1
        - Line 2
        - ETC
        - yanno
        duration-seconds: 30
        config-data:
            __class__: com.envyful.pixelmon.overlay.forge.config.type.ItemConfigData
            type: stone
            damage: 0
```

To add a Pokémon broadcast follow the format below:

```
        layout-type: RIGHT
        text:
        - test
        duration-seconds: 30
        config-data:
            __class__: com.envyful.pixelmon.overlay.forge.config.type.PixelmonConfigData
            spec: pikachu
            sprite: true
```

### Headings

Find the headings explained here.

`layout-type`

Options: `LEFT`, `RIGHT`, `LEFT_AND_RIGHT`

Sets where the item/pixelmon appear on the screen

`text`

Infinite list of strings.

Sets the text that appears in the broadcast

`duration-seconds`

An integer specifying how long the broadcast will appear on the screen

`spec`

The pokemon specification

`sprite`

If the pixelmon should be a sprite or the 3D image.
