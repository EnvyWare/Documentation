# Config

The hunt configs have been moved recently to the directory, and sub-directories, found at `config/EnvyHunt/hunts/` and the defaults found in `config/EnvyHunt/hunts/defaults`. In the defaults directory you will find two examples, both using the `randomnonblockedspecies` spec with one being a standard hunt, and the other being a shiny hunt.

## Main config

The main config, found in `config/EnvyHunt/config.yml`, contains the blocked species list used for the `randomnonblockedspecies` spec and also a setting determining if catches should count towards multiple hunts.

<details>

<summary>Default Config</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

blocked-species:
- articuno
- zygarde
- nidorina
catches-count-for-multiple-hunts: false
```

</details>

<details>

<summary>Commented Default config</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

# The list of case sensitive species names
blocked-species:
- Articuno
- Zygarde
- Nidorina
# True if catches should count for multiple hunts
catches-count-for-multiple-hunts: false
```

</details>

## GUI Config

<details>

<summary>GUIs Config</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

hunt-u-i:
    gui-settings:
        title: Example
        height: 3
        fill-type: BLOCK
        filler-items:
            one:
                enabled: true
                type: minecraft:black_stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    next-page:
        enabled: true
        type: pixelmon:right_trade_holder
        amount: '1'
        name: Next page
        flags: []
        lore:
        - NEXT PAGE!
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 5
                y: 0
        requires-permission: false
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
    previous-page:
        enabled: true
        type: pixelmon:left_trade_holder
        amount: '1'
        name: Previous page
        flags: []
        lore:
        - PREVIOUS PAGE!
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 4
                y: 0
        requires-permission: false
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
    pages: 1

```

</details>

## Hunt Example

Here you can find an example config for a hunt that would be placed in the `config/EnvyHunt/hunts/` directory.

An important setting to take note of is the `enabled` setting which determines is a hunt should be active or not. This exists because deleting the defaults will not work, they will always re-appear on server reboot, therefore setting this to "false" will stop them from appearing. However, it is important to note you can also edit these if you wanted to do that rather than just disabling them.

<details>

<summary>Hunt Example Config</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

enabled: true
play-particles: true
custom-colour: true
page: 1
requires-permission: true
start-commands:
- broadcast Example hunt is now begining!
timeout-commands:
- broadcast Example hunt ran out of time!
requirement-specs:
- random
- randomivpercent:10-20
- randomability:stickyhold,cursedbody,shadowshield
- randomgender
- randomgrowths:Ordinary,Huge,Giant:2
- randomnatures:hardy,serious,quirky,bashful:3
- randomnonblockedspecies
- randomivpercent:10-20
- randomability:stickyhold,cursedbody,shadowshield
- randomgender
- randomgrowths:Ordinary,Huge,Giant:2
- randomnatures:hardy,serious,quirky,bashful:3
rewards:
    guaranteed-reward:
        display-name: Example Display Name
        commands:
        - broadcast Example hunt was completed by %player%
        messages: []
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    display-name: Example Display Name
                    commands:
                    - broadcast Example hunt was completed by %player%
                    messages: []
            '1':
                weight: 1.0
                object:
                    display-name: Example Display Name
                    commands:
                    - broadcast Example hunt was completed by %player%
                    messages: []
reward-specs:
- maxivs
- maxivs
persistent: false
max-duration-minutes: 30
display-item:
    enabled: true
    type: pixelmon:pixelmon_sprite
    amount: '1'
    name: This is the example
    flags: []
    lore:
    - '&fRequirements: '
    - '&a > %species% '
    - '&a > %ivs%'
    - '&a > %ability%'
    - '&a > %gender%'
    - '&a > %growth_1%'
    - '&a > %growth_2%'
    - '&a > %nature_1%'
    - '&a > %nature_2%'
    - '&a > %nature_3%'
    enchants: {}
    nbt:
        form:
            type: string
            data: '%default_form%'
            sub-data: {}
        gender:
            type: byte
            data: '0'
            sub-data: {}
        ndex:
            type: short
            data: '%dex_number%'
            sub-data: {}
        palette:
            type: string
            data: none
            sub-data: {}
    positions:
        '0':
            x: 1
            y: 1
    requires-permission: false
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
allow-reward-u-i: true
reward-u-i:
    gui-settings:
        title: Example
        height: 3
        fill-type: BLOCK
        filler-items:
            one:
                enabled: true
                type: minecraft:black_stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    next-page:
        enabled: true
        type: pixelmon:right_trade_holder
        amount: '1'
        name: Next page
        flags: []
        lore:
        - NEXT PAGE!
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 5
                y: 0
        requires-permission: false
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
    previous-page:
        enabled: true
        type: pixelmon:left_trade_holder
        amount: '1'
        name: Previous page
        flags: []
        lore:
        - PREVIOUS PAGE!
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 4
                y: 0
        requires-permission: false
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
    pages: 1
reward-display-items:
    '1':
        enabled: true
        type: minecraft:diamond
        amount: '1'
        name: Example reward
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 1
                y: 1
        requires-permission: false
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
id: example
particles: flame
colour: '#c7f2cb'
permission: envy.hunt.example

```

</details>

<details>

<summary>Commented Hunt Example Config</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

# The setting to determine if this hunt should be enabled
# This exists because deleting the defaults will not work
enabled: true
# If particles should spawn on the valid hunt pokemon
play-particles: true
# If the pokemon should render with a custom colour
custom-colour: true
# The page of the main hunts GUI the display item will show up on(starting from 1)
page: 1
# If the hunt requires a permission to participate in
requires-permission: true
# Commands to execute when the hunt begins
start-commands:
- broadcast Example hunt is now begining!
# Commands to execute when the hunt finishes due to no one completing it
timeout-commands:
- broadcast Example hunt ran out of time!
# The specs used for checking if the caught pokemon is valid for the hunt
requirement-specs:
- randomnonblockedspecies
- randomivpercent:10-20
- randomability:stickyhold,cursedbody,shadowshield
- randomgender
- randomgrowths:Ordinary,Huge,Giant:2
- randomnatures:hardy,serious,quirky,bashful:3
# The rewards to give out
rewards:
    guaranteed-reward:
        display-name: Example Display Name
        commands:
        - broadcast Example hunt was completed by %player%
        messages: []
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    display-name: Example Display Name
                    commands:
                    - broadcast Example hunt was completed by %player%
                    messages: []
            '1':
                weight: 1.0
                object:
                    display-name: Example Display Name
                    commands:
                    - broadcast Example hunt was completed by %player%
                    messages: []
# The specs to apply to the pokemon caught if it is correct for the hunt
reward-specs:
- maxivs
# If the hunt should persist between catches
persistent: false
# The maximum duration before it times out
max-duration-minutes: 30
# The item to display in the GUI
display-item:
    enabled: true
    type: pixelmon:pixelmon_sprite
    amount: '1'
    name: This is the example
    flags: []
    lore:
    - '&fRequirements: '
    - '&a > %species% '
    - '&a > %ivs%'
    - '&a > %ability%'
    - '&a > %gender%'
    - '&a > %growth_1%'
    - '&a > %growth_2%'
    - '&a > %nature_1%'
    - '&a > %nature_2%'
    - '&a > %nature_3%'
    enchants: {}
    nbt:
        form:
            type: string
            data: '%default_form%'
            sub-data: {}
        gender:
            type: byte
            data: '0'
            sub-data: {}
        ndex:
            type: short
            data: '%dex_number%'
            sub-data: {}
        palette:
            type: string
            data: none
            sub-data: {}
    positions:
        '0':
            x: 1
            y: 1
    requires-permission: false
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
# If clicking the display item should open the reward UI
allow-reward-u-i: true
# The reward UI settings
reward-u-i:
    gui-settings:
        title: Example
        height: 3
        fill-type: BLOCK
        filler-items:
            one:
                enabled: true
                type: minecraft:black_stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    next-page:
        enabled: true
        type: pixelmon:right_trade_holder
        amount: '1'
        name: Next page
        flags: []
        lore:
        - NEXT PAGE!
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 5
                y: 0
        requires-permission: false
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
    previous-page:
        enabled: true
        type: pixelmon:left_trade_holder
        amount: '1'
        name: Previous page
        flags: []
        lore:
        - PREVIOUS PAGE!
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 4
                y: 0
        requires-permission: false
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
    pages: 1
# The display items to show in the reward UI
reward-display-items:
    '1':
        enabled: true
        type: minecraft:diamond
        amount: '1'
        name: Example reward
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 1
                y: 1
        requires-permission: false
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
# The ID for the hunt
id: example
# The particles to use
particles: flame
# The colour to set the pokemon
colour: '#c7f2cb'
# The permission for the player to participate
permission: envy.hunt.example

```

</details>
