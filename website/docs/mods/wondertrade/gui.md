# GUI

<details>

<summary>Default GUI File</summary>

```yaml
# © EnvyWare Ltd Software 2022

# For assistance visit https://discord.envyware.co.uk

select-pokemon-u-i:
    gui-settings:
        title: WonderTrade
        height: 5
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
    level-too-low-item:
        enabled: true
        type: minecraft:red_stained_glass_pane
        amount: '1'
        name: '&c&lLevel too low'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
    untradeable-item:
        enabled: true
        type: minecraft:red_stained_glass_pane
        amount: '1'
        name: '&c&lUntradeable'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
    click-to-confirm-button:
        enabled: true
        type: minecraft:lime_stained_glass_pane
        amount: '1'
        name: '&a&lClick to confirm'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 7
                y: 2
        requires-permission: false
        close-on-click: false
        commands-executed: []
    no-pokemon-in-slot-item:
        enabled: true
        type: minecraft:barrier
        amount: '1'
        name: '&c&lNo Pokemon in this slot'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
    none-selected-item:
        enabled: true
        type: minecraft:barrier
        amount: '1'
        name: '&c&lNone selected'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 5
                y: 2
        requires-permission: false
        close-on-click: false
        commands-executed: []
    sprite-config:
        name: '&b%species_name% %nickname%'
        lore:
        - '&7Level: &b%level%'
        - '&7Shiny: &b%shiny%'
        - '&7Palette: &b%palette%'
        - '&7Gender: %gender%'
        - '&7Breedable: %breedable%'
        - '&7Friendship: %friendship%'
        - '&7Nature: &b%nature%'
        - '&7Form: &b%form%'
        - '&7Growth: &b%size%'
        - '&7Ability: &b%ability%'
        - '&7Friendship: &b%friendship%'
        - '&7Untradeable: &b%untradeable%'
        - ' '
        - '&7IVs (&b%iv_percentage%%&7):'
        - '    §7HP: %iv_hp% §d| §7Atk: %iv_attack% §d| §7Def: %iv_defence%'
        - '    §7SAtk: %iv_spattack% §d| §7SDef: %iv_spdefence% §d| §7Spd: %iv_speed%'
        - ' '
        - '&7EVs:'
        - '    §7HP: &b%ev_hp% §d| §7Atk: &b%ev_attack% §d| §7Def: &b%ev_defence%'
        - '    §7SAtk: &b%ev_spattack% §d| §7SDef: &b%ev_spdefence% §d| §7Spd: &b%ev_speed%'
        - ' '
        - '&7Moves:'
        - '    &b%move_1%'
        - '    &b%move_2%'
        - '    &b%move_3%'
        - '    &b%move_4%'
        - ' '
        - '%mew_cloned%'
        - '%trio_gemmed%'
        untrdeable-true-format: '&aTRUE'
        untradeable-false-format: '&cFALSE'
        ability-format: '%ability_name% %ability_ha%'
        ha-format: '&7(&c&lHA&7)'
        male-format: '&bMale'
        female-format: '&dFemale'
        none-format: '&fNONE'
        shiny-true-format: '&aTRUE'
        shiny-false-format: '&cFALSE'
        unbreedable-true-format: '&aTRUE'
        unbreedable-false-format: '&cFALSE'
        mew-cloned-format: '&7Times Cloned: %cloned%'
        gemmed-format: '&7Gemmed: %gemmed%'
        nature-format: '%nature_name% %mint_nature%'
        mint-nature-format: '&7(%mint_nature_name%&7)'
        normal-iv-colour: '&b'
        hyper-iv-colour: '&e'
    enchant-selected-pokemon: true
    selected-sprite-pos: 23
admin-u-i:
    gui-settings:
        title: WonderTrade
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
    page-positions:
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
    next-page-button:
        enabled: true
        type: pixelmon:trade_holder_right
        amount: '1'
        damage: '0'
        name: '&aNext Page'
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
    previous-page-button:
        enabled: true
        type: pixelmon:trade_holder_left
        amount: '1'
        damage: '0'
        name: '&aPrevious Page'
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
    sprites:
        name: '&b%species_name% %nickname%'
        lore:
        - '&7Level: &b%level%'
        - '&7Shiny: &b%shiny%'
        - '&7Palette: &b%palette%'
        - '&7Gender: %gender%'
        - '&7Breedable: %breedable%'
        - '&7Friendship: %friendship%'
        - '&7Nature: &b%nature%'
        - '&7Form: &b%form%'
        - '&7Growth: &b%size%'
        - '&7Ability: &b%ability%'
        - '&7Friendship: &b%friendship%'
        - '&7Untradeable: &b%untradeable%'
        - ' '
        - '&7IVs (&b%iv_percentage%%&7):'
        - '    §7HP: %iv_hp% §d| §7Atk: %iv_attack% §d| §7Def: %iv_defence%'
        - '    §7SAtk: %iv_spattack% §d| §7SDef: %iv_spdefence% §d| §7Spd: %iv_speed%'
        - ' '
        - '&7EVs:'
        - '    §7HP: &b%ev_hp% §d| §7Atk: &b%ev_attack% §d| §7Def: &b%ev_defence%'
        - '    §7SAtk: &b%ev_spattack% §d| §7SDef: &b%ev_spdefence% §d| §7Spd: &b%ev_speed%'
        - ' '
        - '&7Moves:'
        - '    &b%move_1%'
        - '    &b%move_2%'
        - '    &b%move_3%'
        - '    &b%move_4%'
        - ' '
        - '%mew_cloned%'
        - '%trio_gemmed%'
        untrdeable-true-format: '&aTRUE'
        untradeable-false-format: '&cFALSE'
        ability-format: '%ability_name% %ability_ha%'
        ha-format: '&7(&c&lHA&7)'
        male-format: '&bMale'
        female-format: '&dFemale'
        none-format: '&fNONE'
        shiny-true-format: '&aTRUE'
        shiny-false-format: '&cFALSE'
        unbreedable-true-format: '&aTRUE'
        unbreedable-false-format: '&cFALSE'
        mew-cloned-format: '&7Times Cloned: %cloned%'
        gemmed-format: '&7Gemmed: %gemmed%'
        nature-format: '%nature_name% %mint_nature%'
        mint-nature-format: '&7(%mint_nature_name%&7)'
        normal-iv-colour: '&b'
        hyper-iv-colour: '&e'
list-u-i:
    gui-settings:
        title: WonderTrade
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
    page-positions:
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
    next-page-button:
        enabled: true
        type: pixelmon:trade_holder_right
        amount: '1'
        damage: '0'
        name: '&aNext Page'
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
    previous-page-button:
        enabled: true
        type: pixelmon:trade_holder_left
        amount: '1'
        damage: '0'
        name: '&aPrevious Page'
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
    select-u-i-button:
        enabled: true
        type: minecraft:clock
        amount: '1'
        damage: '0'
        name: '&aWT a Poke'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            first:
                x: 5
                y: 5
        requires-permission: false
        close-on-click: false
        commands-executed: []
    sprites:
        name: '&b%species_name% %nickname%'
        lore:
        - '&7Level: &b%level%'
        - '&7Shiny: &b%shiny%'
        - '&7Palette: &b%palette%'
        - '&7Gender: %gender%'
        - '&7Breedable: %breedable%'
        - '&7Friendship: %friendship%'
        - '&7Nature: &b%nature%'
        - '&7Form: &b%form%'
        - '&7Growth: &b%size%'
        - '&7Ability: &b%ability%'
        - '&7Friendship: &b%friendship%'
        - '&7Untradeable: &b%untradeable%'
        - ' '
        - '&7IVs (&b%iv_percentage%%&7):'
        - '    §7HP: %iv_hp% §d| §7Atk: %iv_attack% §d| §7Def: %iv_defence%'
        - '    §7SAtk: %iv_spattack% §d| §7SDef: %iv_spdefence% §d| §7Spd: %iv_speed%'
        - ' '
        - '&7EVs:'
        - '    §7HP: &b%ev_hp% §d| §7Atk: &b%ev_attack% §d| §7Def: &b%ev_defence%'
        - '    §7SAtk: &b%ev_spattack% §d| §7SDef: &b%ev_spdefence% §d| §7Spd: &b%ev_speed%'
        - ' '
        - '&7Moves:'
        - '    &b%move_1%'
        - '    &b%move_2%'
        - '    &b%move_3%'
        - '    &b%move_4%'
        - ' '
        - '%mew_cloned%'
        - '%trio_gemmed%'
        untrdeable-true-format: '&aTRUE'
        untradeable-false-format: '&cFALSE'
        ability-format: '%ability_name% %ability_ha%'
        ha-format: '&7(&c&lHA&7)'
        male-format: '&bMale'
        female-format: '&dFemale'
        none-format: '&fNONE'
        shiny-true-format: '&aTRUE'
        shiny-false-format: '&cFALSE'
        unbreedable-true-format: '&aTRUE'
        unbreedable-false-format: '&cFALSE'
        mew-cloned-format: '&7Times Cloned: %cloned%'
        gemmed-format: '&7Gemmed: %gemmed%'
        nature-format: '%nature_name% %mint_nature%'
        mint-nature-format: '&7(%mint_nature_name%&7)'
        normal-iv-colour: '&b'
        hyper-iv-colour: '&e'

```

</details>
