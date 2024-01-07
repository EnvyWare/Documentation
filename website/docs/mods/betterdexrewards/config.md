# Config

<details>

<summary>config.yml with explanatory comments</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

database: # sql database details
    pool-name: BetterDexRewards
    ip: 0.0.0.0
    port: 3306
    username: admin
    password: password
    database: servername
config-interface: # GUI information
    title: BetterDexRewards # gui name
    height: 6 # gui height
    fill-type: BLOCK # Fill style (https://github.com/Pixelmon-Development/API/wiki/GUI-Settings)
    filler-items:
        one: # the background item
            type: minecraft:stained_glass_pane
            amount: 1
            damage: 15
            name: ' '
            lore: []
reward-stages: # The stages players get rewards at
    one:
        x-pos: 1 # gui pos of the display item
        y-pos: 1 # gui pos of the display item
        display-item: # display item normally
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            name: ' '
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        complete-item: # display item when complete
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            name: ' '
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        to-claim-item: # Display item when needs claiming
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            name: ' '
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        required-percentage: 1.0 # Percentage required to complete this rank
        rewards:
            guaranteed-reward:
                commands:
                - give %player% minecraft:diamond 1
                messages:
                - You've completed 1% of the dex!
            reward-rolls-min: 1
            reward-rolls-max: 1
            rewards:
                entries:
                    '0':
                        weight: 1.0
                        object:
                            commands:
                            - Hey %player%
                            messages:
                            - Hey %player%
claim-reminder-message: # Message sent to remain the player they've not claimed their reward yet
- '&#x26;e&#x26;l(!) &#x26;eYou have a PokeDex reward level you can claim!'
claim-update-message: # Message sent upon a new level being able to be claimed
- '&#x26;e&#x26;l(!) &#x26;eYou have a new PokeDex reward level you can claim!'
```

</details>

<details>

<summary>guis.yml</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

main-u-i:
    gui-settings:
        title: BetterDexRewards
        height: 3
        fill-type: BLOCK
        filler-items:
            one:
                enabled: true
                type: minecraft:black_stained_glass_pane
                amount: '1'
                damage: '0'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    percentage-item:
        enabled: true
        type: pixelmon:poke_ball
        amount: '1'
        damage: '0'
        name: '&eCurrent PokeDex Percentage'
        flags: []
        lore:
        - '&eComplete: &a%percentage%'
        enchants: {}
        nbt:
            tooltip:
                type: string
                data: ''
        positions:
            first:
                x: 1
                y: 1
        requires-permission: false
        close-on-click: false
        commands-executed: []
    missing-item:
        enabled: true
        type: pixelmon:pokeradar
        amount: '1'
        damage: '0'
        name: '&eMissing Pokemon'
        flags: []
        lore:
        - ''
        enchants: {}
        nbt:
            ndex:
                type: short
                data: '201'
        positions:
            first:
                x: 5
                y: 1
        requires-permission: false
        close-on-click: false
        commands-executed: []
    ranks-item:
        enabled: true
        type: pixelmon:master_ball
        amount: '1'
        damage: '0'
        name: '&ePokeDex Ranks'
        flags: []
        lore:
        - ''
        enchants: {}
        nbt: {}
        positions:
            first:
                x: 3
                y: 1
        requires-permission: false
        close-on-click: false
        commands-executed: []
    info-item:
        enabled: true
        type: minecraft:paper
        amount: '1'
        damage: '0'
        name: Info
        flags: []
        lore:
        - ''
        enchants: {}
        nbt: {}
        positions:
            first:
                x: 7
                y: 1
        requires-permission: false
        close-on-click: false
        commands-executed: []
missing-pokemon-u-i:
    gui-settings:
        title: BetterDexRewards
        height: 6
        fill-type: BLOCK
        filler-items:
            one:
                enabled: true
                type: minecraft:black_stained_glass_pane
                amount: '1'
                damage: '0'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    missing-pokemon-positions:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - 14
    - 15
    - 16
    - 17
    - 18
    - 19
    - 20
    - 21
    - 22
    - 23
    - 24
    - 25
    - 26
    - 27
    - 28
    - 29
    - 30
    - 31
    - 32
    - 33
    - 34
    - 35
    back-button:
        enabled: true
        type: pixelmon:eject_button
        amount: '1'
        damage: '0'
        name: '&eBack'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            first:
                x: 4
                y: 5
        requires-permission: false
        close-on-click: false
        commands-executed: []
    previous-page-button:
        enabled: true
        type: pixelmon:trade_holder_left
        amount: '1'
        damage: '0'
        name: '&ePrevious Page'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            first:
                x: 0
                y: 5
        requires-permission: false
        close-on-click: false
        commands-executed: []
    next-page-button:
        enabled: true
        type: pixelmon:trade_holder_left
        amount: '1'
        damage: '0'
        name: '&eNext Page'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            first:
                x: 8
                y: 5
        requires-permission: false
        close-on-click: false
        commands-executed: []
    missing-pokemon-item:
        enabled: true
        type: pixelmon:ui_element
        amount: '1'
        damage: '0'
        name: '&e%pokemon% §f- %pokedex%'
        flags: []
        lore:
        - '&eBiomes'
        - '&f%biomes%'
        - ' '
        - '&eTimes: %spawn_times%'
        - '&eCatch Rate: '
        - '%catch_rate%'
        enchants: {}
        nbt:
            UIImage:
                type: string
                data: '%sprite%'
            UIImageR:
                type: float
                data: '0'
            UIImageG:
                type: float
                data: '0'
            UIImageB:
                type: float
                data: '0'
            UIImageA:
                type: float
                data: '1'
rank-u-i:
    gui-settings:
        title: BetterDexRewards
        height: 6
        fill-type: BLOCK
        filler-items:
            one:
                enabled: true
                type: minecraft:black_stained_glass_pane
                amount: '1'
                damage: '0'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    back-button:
        enabled: true
        type: pixelmon:eject_button
        amount: '1'
        damage: '0'
        name: '&eBack'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            first:
                x: 4
                y: 5
        requires-permission: false
        close-on-click: false
        commands-executed: []

```

</details>

## Reward Format

Configuring rewards uses the generic [EnvyWare API Rewards format](https://github.com/EnvyWare/API/wiki/Rewards/)

## Missing Pokemon Sprite Fix

<details>

<summary>If the Missing Pokemon screen shows the Pokemon silhouettes scaled incorrectly, edit the <code>nbt</code> section of <code>missing-pokemon-item</code> in your <code>guis.yml</code> to this to resolve it</summary>

```yaml
nbt:
            UIImage:
                type: string
                data: '%sprite%'
                sub-data: {}
            UIImageHeight:
                type: short
                data: 32
                sub-data: {}
            UIImageWidth:
                type: short
                data: 32
                sub-data: {}
            UIImageScaleX:
                type: float
                data: 0.7
                sub-data: {}
            UIImageScaleY:
                type: float
                data: 0.7
                sub-data: {}
            UIXOffset:
                type: short
                data: -2
                sub-data: {}
            UIYOffset:
                type: short
                data: -5
                sub-data: {}
            UIImageR:
                type: float
                data: '0'
                sub-data: {}
            UIImageG:
                type: float
                data: '0'
                sub-data: {}
            UIImageB:
                type: float
                data: '0'
                sub-data: {}
            UIImageA:
                type: float
                data: '1'
                sub-data: {}
```



</details>

