---
description: Items in the config
---

# Config Items

You will find two types of items in the config files. One has properties such as "position" and "permissions" and the other is a more simplistic type that is used for filling out background items.

### Config Item

Here you can find a commented and uncommented example of a simple config item

<details>

<summary>Uncommented</summary>

```yaml
            one:
                enabled: true
                type: minecraft:black_stained_glass_pane
                amount: '1'
                name: 'Hello'
                flags:
                  - HIDE_ENCHANTS
                  - HIDE_MODIFIERS
                  - HIDE_UNBREAKABLE
                  - HIDE_CAN_DESTROY
                  - HIDE_CAN_PLACE
                lore:
                  - 'Hello'
                enchants:
                    one:
                       enchant: 'minecraft:unbreaking'
                       level: '1'
                nbt:
                    example_tag: 
                       type: 'nbt'
                       sub-data: 
                         example_sub_tag:
                           type: 'string'
                           data: 'Hello'
```

</details>

<details>

<summary>Commented</summary>

```yaml
            one:
                enabled: true # If this is false the item won't show up in the GUI
                type: minecraft:black_stained_glass_pane # The minecraft item type (use f3 + h to see these in game)
                amount: '1' # The amount of the item
                name: 'Hello' # The display name
                flags: # The item flags (all of which can be seen here)
                  - HIDE_ENCHANTS
                  - HIDE_MODIFIERS
                  - HIDE_UNBREAKABLE
                  - HIDE_CAN_DESTROY
                  - HIDE_CAN_PLACE
                lore:
                  - 'Hello' # The lore that appears under the name - Set this to [] to have no lore
                enchants: # The enchants to add to the item
                    one:
                       enchant: 'minecraft:unbreaking'
                       level: '1'
                nbt: # The NBT on the item
                    example_tag: 
                       type: 'nbt' # The type of dat the nbt tag has
                       sub-data: # Sub data is for the 'nbt' type only
                         example_sub_tag:
                           type: 'string'
                           data: 'Hello' # The data
```

</details>

### Extended Config item

This is the more common of the two as it allows for permission checks, and positioning in the GUI.

Here you can find a commented and uncommented example of an extended config item

<details>

<summary>Uncommented</summary>

```yaml
button:
        enabled: true
        type: minecraft:diamond
        amount: '1'
        name: '&aView leaderboard'
        flags:
           - HIDE_ENCHANTS
           - HIDE_MODIFIERS
           - HIDE_UNBREAKABLE
           - HIDE_CAN_DESTROY
           - HIDE_CAN_PLACE
        lore:
           - 'Hello'
        enchants:
           one:
             enchant: 'minecraft:unbreaking'
             level: '1'
        nbt:
          example_tag: 
            type: 'nbt'
            sub-data:
              example_sub_tag:
                type: 'string'
                data: 'Hello'
        positions:
            '0':
                x: 2
                y: 1
        requires-permission: false
        permission: ''
        close-on-click: false 
        commands-executed: []
        else-item:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            name: ' '
            flags: []
            lore: []
            enchants: {}
            nbt: {}
```

</details>

<details>

<summary>Commented</summary>

```yaml
button:
        enabled: true # If this is false it won't show up in the GUI
        type: minecraft:diamond # The minecraft item type (use f3 + h to see these in game)
        amount: '1' # The amount of the item
        name: '&aView leaderboard' # The name of the item
        flags: # The item flags (all of which can be seen here)
           - HIDE_ENCHANTS
           - HIDE_MODIFIERS
           - HIDE_UNBREAKABLE
           - HIDE_CAN_DESTROY
           - HIDE_CAN_PLACE
        lore:
           - 'Hello' # The lore that appears under the name - Set this to [] to have no lore
        enchants: # The enchants to add to the item
           one:
             enchant: 'minecraft:unbreaking'
             level: '1'
        nbt: # The NBT on the item
          example_tag: 
            type: 'nbt' # The type of dat the nbt tag has
            sub-data: # Sub data is for the 'nbt' type only
              example_sub_tag:
                type: 'string'
                data: 'Hello' # The data
        positions: # The positions this item will show up in
            '0':
                x: 2 # The x position of the item (going from 0 to 8)
                y: 1 # The y position of the item (going from 0 to the height - 1)
        requires-permission: false # If the item requires a permission to be seen
        permission: '' # the permission - only used if `required-permission` is true
        close-on-click: false # if the GUI will close when clicked
        commands-executed: [] # The commands executed when the item is clicked
        else-item: # The item shown if the player doesn't meet the permission requriement
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            name: ' '
            flags: []
            lore: []
            enchants: {}
            nbt: {}
```

</details>

