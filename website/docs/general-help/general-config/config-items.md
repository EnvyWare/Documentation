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

### Pixelmon UI Elements

Pixelmon UI elements are a special item that allows you to display any sprite that exists on the client in the GUI. 
There are plenty of of different properties you can add to the item's NBT to change the appearance of the sprite,
such as the position, scale, and rotation. Below I will document all the keys, what they do, and the accepted ranges 
and provide an example ConfigItem with a Pixelmon UI element.

#### Keys
##### UIImage
Key: `UIImage` \
Type: `String` \
Description: \
This is the resource location path of the sprite you want to display. \
Example: `pixelmon:textures/gui/uielements/discord.png` \
Default: `` 

##### UIHoverImage
Key: `UIHoverImage` \
Type: `String` \
Description: \
This is the resource location path of the sprite you want to display when the player holds their
mouse over the item in the GUI. \
Example: `pixelmon:textures/gui/uielements/discord.png`
Default: ``

##### UIText
Key: `UIText` \
Type: `String` \
Description: \
This is the text that will be displayed on the item. \
Example: `&aClick me!` \
Default: ``

##### UIHoverText
Key: `UIHoverText` \
Type: `String` \
Description: \
This is the text that will be displayed when the player holds their mouse over the item in the GUI. \
Example: `&aClick me!` \
Default: ``

#### UITextJustification
Key: `UITextJustification` \
Type: `Short` \
Description: \
This is the justification of the text. Which means that the text from the UIText and UIHoverText value is either aligned
to the right, center or left based on the value. Anything less than 0 is right, 0 is center, and anything greater than 0 is left. \
Example: `0` \
Default: `-1` \
Range: [-Infinity, Infinity]

#### UITextScale
Key: `UITextScale` \
Type: `Float` \
Description: \
This is the scale of the text from both UIText and UIHoverText values. It defaults to 12.0. \
Example: `12.0` \
Range: [0, Infinity]

#### UIXOffset
Key: `UIXOffset` \
Type: `Int` \
Description: \
The number of pixels the image is offset from the left side of the item. \
Example: `10` \
Default: `0` \
Range: [0, Infinity]

#### UIYOffset
Key: `UIYOffset` \
Type: `Int` \
Description: \
The number of pixels the image is offset from the top of the item. \
Example: `10` \
Default: `0` \
Range: [0, Infinity]

####  UIXOverride
Key: `UIXOverride` \
Type: `Int` \
Description: \
The X position of the image to render it at. If not set the image renders at the slot of the item in the 
GUI. \
Example: `10` \
Default: `None` \
Range: [0, Infinity]

#### UIYOverride
Key: `UIYOverride` \
Type: `Int` \
Description: \
The Y position of the image to render it at. If not set the image renders at the slot of the item in the
GUI. \
Example: `10` \
Default: `None` \
Range: [0, Infinity]

#### UIZLevel
Key: `UIZLevel` \
Type: `Int` \
Description: \
The Z level of the sprite on the UI. The higher the number the more it will render on top of other sprites. \
Example: `10` \
Default: `0` \
Range: [0, 255]

#### UIImageWidth
Key: `UIImageWidth` \
Type: `Int` \
Description: \
The width, in pixels, the sprite will be rendered to.
Example: `16` \
Default: `16` \
Range: [0, 255]

#### UIImageHeight
Key: `UIImageHeight` \
Type: `Int` \
Description: \
The height, in pixels, the sprite will be rendered to.
Example: `16` \
Default: `16` \
Range: [0, 255]

#### UIImageU
Key: `UIImageU` \
Type: `Float` \
Description: \
The u value of the sprite to render. This means the x position of the sprite in the texture file. \
Example: `0.0`  \
Default: `0.0` \
Range: [0, 255]

#### UIImageV
Key: `UIImageV` \
Type: `Float` \
Description: \
The v value of the sprite to render. This means the y position of the sprite in the texture file. \
Example: `0.0`  \
Default: `0.0` \
Range: [0, 255]

#### UIImageScaleX
Key: `UIImageScaleX` \
Type: `Float` \
Description: \
The scale of the sprite on the x-axis. \
Example: `1.0` \
Default: `1.0` \
Range: [0, Infinity]

#### UIImageScaleY
Key: `UIImageScaleY` \
Type: `Float` \
Description: \
The scale of the sprite on the y-axis. \
Example: `1.0` \
Default: `1.0` \
Range: [0, Infinity]

#### UIRotation
Key: `UIRotation` \
Type: `Float` \
Description: \
The rotation of the sprite in degrees. \
Example: `0.0` \
Default: `0.0` \
Range: [-360, 360]

#### UIImageR
Key: `UIImageR` \
Type: `Float` \
Description: \
The red color value of the sprite. \
Example: `1.0` \
Default: `1.0` \
Range: [0, 1]

#### UIImageG
Key: `UIImageG` \
Type: `Float` \
Description: \
The green color value of the sprite. \
Example: `1.0` \
Default: `1.0` \
Range: [0, 1]

#### UIImageB
Key: `UIImageB` \
Type: `Float` \
Description: \
The blue color value of the sprite. \
Example: `1.0` \
Default: `1.0` \
Range: [0, 1]

#### UIImageA
Key: `UIImageA` \
Type: `Float` \
Description: \
The alpha value of the sprite. Which means how transparent the sprite is. \
Example: `1.0` \
Default: `1.0` \
Range: [0, 1]

#### UIImageHR
Key: `UIImageHR` \
Type: `Float` \
Description: \
The red color value of the sprite when hovered over. \
Example: `1.0` \
Default: `1.0` \
Range: [0, 1]

#### UIImageHG
Key: `UIImageHG` \
Type: `Float` \
Description: \
The green color value of the sprite when hovered over. \
Example: `1.0` \
Default: `1.0` \
Range: [0, 1]

#### UIImageHB
Key: `UIImageHB` \
Type: `Float` \
Description: \
The blue color value of the sprite when hovered over. \
Example: `1.0` \
Default: `1.0` \
Range: [0, 1]

#### UIImageHA
Key: `UIImageHA` \
Type: `Float` \
Description: \
The alpha value of the sprite when hovered over. Which means how transparent the sprite is. \
Example: `1.0` \
Default: `1.0` \
Range: [0, 1]

### Example
Here is an example of a ConfigItem with a Pixelmon UI element.


```yaml
            one:
                enabled: true
                type: pixelmon:ui_element
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
                    UIImage: 
                       type: 'string'
                       data: 'pixelmon:textures/gui/uielements/tile_0167.png'
                       sub-data: {}
```

![img.png](/img/example_icon.png)