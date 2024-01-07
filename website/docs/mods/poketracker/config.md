# Config

## Config

Example Config:

<details>

<summary>Default config text</summary>

```
trackers:
    legendaries:
        name: legendaries
        spec: boss:true
        max-stored: 4
        blacklist:
        - hoopa
        display-item:
            x-pos: 1
            y-pos: 1
            enabled: true
            type: pixelmon:ui_element
            amount: 1
            damage: 0
            name: '&bLast Legendaries'
            lore:
            - '&8• &6%poketracker_pokemon_legendaries_1%&8 - &f%poketracker_time_legendaries_1%
                &8[&f%poketracker_status_legendaries_1%&8]'
            - '&8• &6%poketracker_pokemon_legendaries_2%&8 - &f%poketracker_time_legendaries_2%
                &8[&f%poketracker_status_legendaries_2%&8]'
            - '&8• &6%poketracker_pokemon_legendaries_3%&8 - &f%poketracker_time_legendaries_3%
                &8[&f%poketracker_status_legendaries_3%&8]'
            - '&8• &6%poketracker_pokemon_legendaries_4%&8 - &f%poketracker_time_legendaries_4%
                &8[&f%poketracker_status_legendaries_4%&8]'
            nbt:
                UIImage:
                    type: string
                    data: pixelmon:textures/gui/uielements/flatcat.png
    ultrabeast:
        name: ultrabeast
        spec: isUB:1
        max-stored: 3
        blacklist:
        - hoopa
        display-item:
            x-pos: 3
            y-pos: 1
            enabled: true
            type: pixelmon:ui_element
            amount: 1
            damage: 0
            name: '&bLast UltraBeasts'
            lore:
            - '&8• &6%poketracker_pokemon_ultrabeast_1%&8 - &f%poketracker_time_ultrabeast_1%
                &8[&f%poketracker_status_ultrabeast_1%&8]'
            - '&8• &6%poketracker_pokemon_ultrabeast_2%&8 - &f%poketracker_time_ultrabeast_2%
                &8[&f%poketracker_status_ultrabeast_2%&8]'
            - '&8• &6%poketracker_pokemon_ultrabeast_3%&8 - &f%poketracker_time_ultrabeast_3%
                &8[&f%poketracker_status_ultrabeast_3%&8]'
            nbt:
                UIImage:
                    type: string
                    data: pixelmon:textures/gui/uielements/flatcat.png
```

</details>

<details>

<summary>Default config text with explanatory comments</summary>

```
trackers: # All the trackers
    legendaries:
        name: legendaries # The name of the tracker (important for FPAPI)
        spec: boss:true # The spec required for this tracker
        max-stored: 4 # The number to record
        blacklist: # The spec blacklist of pokemon
        - hoopa
        display-item: # The GUI display
            x-pos: 1 # X pos in GUI
            y-pos: 1 # Y pos in GUI
            enabled: true # If it's enabled in the GUI
            type: pixelmon:ui_element # The item type
            amount: 1 # The amount of the item
            damage: 0 # The damage
            name: '&bLast Legendaries' # The name of the item
            lore: # The lore of the item - placeholders coming from FPAPI
            - '&8• &6%poketracker_pokemon_legendaries_1%&8 - &f%poketracker_time_legendaries_1%
                &8[&f%poketracker_status_legendaries_1%&8]'
            - '&8• &6%poketracker_pokemon_legendaries_2%&8 - &f%poketracker_time_legendaries_2%
                &8[&f%poketracker_status_legendaries_2%&8]'
            - '&8• &6%poketracker_pokemon_legendaries_3%&8 - &f%poketracker_time_legendaries_3%
                &8[&f%poketracker_status_legendaries_3%&8]'
            - '&8• &6%poketracker_pokemon_legendaries_4%&8 - &f%poketracker_time_legendaries_4%
                &8[&f%poketracker_status_legendaries_4%&8]'
            nbt: # The nbt of the item
                UIImage:
                    type: string
                    data: pixelmon:textures/gui/uielements/flatcat.png
    ultrabeast:
        name: ultrabeast
        spec: isUB:1
        max-stored: 3
        blacklist:
        - hoopa
        display-item:
            x-pos: 3
            y-pos: 1
            enabled: true
            type: pixelmon:ui_element
            amount: 1
            damage: 0
            name: '&bLast UltraBeasts'
            lore:
            - '&8• &6%poketracker_pokemon_ultrabeast_1%&8 - &f%poketracker_time_ultrabeast_1%
                &8[&f%poketracker_status_ultrabeast_1%&8]'
            - '&8• &6%poketracker_pokemon_ultrabeast_2%&8 - &f%poketracker_time_ultrabeast_2%
                &8[&f%poketracker_status_ultrabeast_2%&8]'
            - '&8• &6%poketracker_pokemon_ultrabeast_3%&8 - &f%poketracker_time_ultrabeast_3%
                &8[&f%poketracker_status_ultrabeast_3%&8]'
            nbt:
                UIImage:
                    type: string
                    data: pixelmon:textures/gui/uielements/flatcat.png
```

</details>

## GUIs

Example Config:

<details>

<summary>Default config text</summary>

```
gui-settings:
    title: Pokemon Tracker
    height: 6
    fill-type: BLOCK
    filler-items:
        one:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: 1
            damage: 15
            name: ' '
            lore: []
            nbt: {}
```

</details>

<details>

<summary>Default config text with explanatory comments</summary>

```
gui-settings: # GUI settings for main GUI https://github.com/Pixelmon-Development/API/wiki/GUI-Settings
    title: Pokemon Tracker
    height: 6
    fill-type: BLOCK
    filler-items:
        one:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: 1
            damage: 15
            name: ' '
            lore: []
            nbt: {} 
```

</details>

## Locale

<details>

<summary>Default config text</summary>

```
reloaded-configs: '&e&l(!) &eReloaded configs'
```

</details>

<details>

<summary>Default config text with explanatory comments</summary>

```
reloaded-configs: '&e&l(!) &eReloaded configs' # Message sent when the configs are reloaded
```

</details>

###
