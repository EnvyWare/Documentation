# GUI

> **INFO** \
> Refer to [this page](https://wiki.envyware.co.uk/general-help/general-config/config-interfaces) for help on filler type and filler items.

<details>

<summary>Default GUI</summary>

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
    pages: 1

```

</details>
