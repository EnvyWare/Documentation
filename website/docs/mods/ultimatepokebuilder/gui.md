# GUI

{% hint style="info" %}
Refer to [this page](https://wiki.envyware.co.uk/general-help/general-config/config-interfaces) for help on filler type and filler items.
{% endhint %}

<details>

<summary>Default GUI File</summary>

```
# © EnvyWare Ltd Software 2022

select-party-u-i:
    gui-settings:
        title: UltimatePokeBuilder
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
    info-item:
        enabled: true
        type: minecraft:nether_star
        amount: '1'
        name: '&bClick the pokemon to edit'
        flags: []
        lore: []
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
    egg-item:
        enabled: true
        type: minecraft:barrier
        amount: '1'
        name: '&cCannot edit eggs'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
    party-positions:
    - 10
    - 11
    - 12
    - 14
    - 15
    - 16
    sprite-settings:
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
    blacklisted-item:
        enabled: true
        type: minecraft:barrier
        amount: '1'
        name: '&c&lBlocked'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
edit-pokemon-u-i:
    gui-settings:
        title: UltimatePokeBuilder
        height: 4
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
    back-button:
        enabled: true
        type: pixelmon:eject_button
        amount: '1'
        name: '&cBack'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 0
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
    sprite-pos: 9
    ev-button:
        enabled: true
        type: pixelmon:hp_up
        amount: '1'
        name: '&eEVs'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 7
                y: 2
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    iv-button:
        enabled: true
        type: pixelmon:protein
        amount: '1'
        name: '&eIVs'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 7
                y: 1
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    ability-button:
        enabled: true
        type: pixelmon:power_band
        amount: '1'
        name: '&eAbility'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 5
                y: 2
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    growth-button:
        enabled: true
        type: pixelmon:choice_scarf
        amount: '1'
        name: '&eGrowth'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 5
                y: 1
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    nature-button:
        enabled: true
        type: pixelmon:ground_gem
        amount: '1'
        name: '&eNature'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 4
                y: 2
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    untradeable-button:
        enabled: true
        type: minecraft:barrier
        amount: '1'
        name: '&eUntradeable'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 3
                y: 1
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    level-button:
        enabled: true
        type: pixelmon:rare_candy
        amount: '1'
        name: '&eLevel'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 4
                y: 1
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    pokeball-button:
        enabled: true
        type: pixelmon:poke_ball
        amount: '1'
        name: '&ePokeBall'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 2
                y: 2
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    shiny-button:
        enabled: true
        type: pixelmon:shiny_stone
        amount: '1'
        name: '&eShiny'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 2
                y: 1
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    gender-button:
        enabled: true
        type: minecraft:stone
        amount: '1'
        name: '&eGender'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 3
                y: 2
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    unbreedable-button:
        enabled: true
        type: minecraft:barrier
        amount: '1'
        name: '&eUnbreedable'
        flags: []
        lore: []
        enchants: {}
        nbt: {}
        positions:
            '0':
                x: 3
                y: 2
        requires-permission: true
        permission: none
        else-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            name: '&c&lNo Permission'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
        close-on-click: false
        commands-executed: []
    sprite-settings:
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
shiny-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    true-false-settings:
        gui-settings:
            title: True or False
            height: 3
            fill-type: BLOCK
            filler-items:
                one:
                    enabled: true
                    type: minecraft:stained_glass_pane
                    amount: '1'
                    damage: '15.0'
                    name: ' '
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
        true-item:
            enabled: true
            type: pixelmon:shiny_stone
            amount: '1'
            damage: '0'
            name: '&6&lSHINY'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        false-item:
            enabled: true
            type: pixelmon:dusk_stone
            amount: '1'
            damage: '0'
            name: '&f&lNON-SHINY'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            damage: '5'
            name: '&a&lCONFIRM'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
    pokemon-pos: 9
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
abilities-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    ability-selection:
        gui-settings:
            title: UltimatePokeBuilder
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
        option-positions:
        - 13
        - 14
        - 15
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
        name-colour: '&b'
        display-item:
            enabled: true
            type: pixelmon:ability_capsule
            amount: '1'
            name: ' '
            flags: []
            lore:
            - '&b&lAbility Cost: &a200 Tokens'
            - '&b&lHidden Ability Cost: &a400 Tokens'
            enchants: {}
            nbt: {}
    pokemon-pos: 9
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
ev-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    ev-selection:
        gui-settings:
            title: UltimatePokeBuilder
            height: 4
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
        options:
            defense:
                enabled: true
                type: pixelmon:power_belt
                amount: '1'
                name: '&6&lDefence'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            attack:
                enabled: true
                type: pixelmon:power_bracer
                amount: '1'
                name: '&c&lAttack'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            hp:
                enabled: true
                type: pixelmon:power_weight
                amount: '1'
                name: '&a&lHP'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            special_defense:
                enabled: true
                type: pixelmon:power_band
                amount: '1'
                name: '&e&lSp. Defence'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            special_attack:
                enabled: true
                type: pixelmon:power_lens
                amount: '1'
                name: '&d&lSp. Attack'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            speed:
                enabled: true
                type: pixelmon:power_anklet
                amount: '1'
                name: '&b&lSpeed'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
        option-positions:
        - 12
        - 13
        - 14
        - 21
        - 22
        - 23
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    ev-edit-amount:
        gui-settings:
            title: UPB
            height: 4
            fill-type: BLOCK
            filler-items:
                one:
                    enabled: true
                    type: minecraft:stained_glass_pane
                    amount: '1'
                    damage: '15.0'
                    name: ' '
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
        edit-value-buttons:
            six:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-5'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 5
                            y: 2
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
                amount-modifier: -5
            four:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    name: '&a&l+15'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        '0':
                            x: 7
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
                amount-modifier: 15
            one:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    name: '&a&l+1'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        '0':
                            x: 4
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
                amount-modifier: 1
            seven:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-10'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 6
                            y: 2
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
                amount-modifier: -10
            two:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    name: '&a&l+5'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        '0':
                            x: 5
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
                amount-modifier: 5
            three:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    name: '&a&l+10'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        '0':
                            x: 6
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
                amount-modifier: 10
            five:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-1'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 4
                            y: 2
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
                amount-modifier: -1
            eight:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-15'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 7
                            y: 2
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
                amount-modifier: -15
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
        confirm-item:
            enabled: true
            type: pixelmon:poke_ball
            amount: '1'
            damage: '0'
            name: '&a&lCONFIRM'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
                    y: 2
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
        current-value:
            enabled: true
            type: minecraft:chest
            amount: '1'
            damage: '0'
            name: '&bCurrent Value: &a%value%'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        max-value: 252
        min-value: 0
    pokemon-pos: 9
    edit-display-pos: 18
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
iv-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    iv-selection:
        gui-settings:
            title: UltimatePokeBuilder
            height: 4
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
        options:
            defense:
                enabled: true
                type: pixelmon:power_belt
                amount: '1'
                name: '&6&lDefence'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            attack:
                enabled: true
                type: pixelmon:power_bracer
                amount: '1'
                name: '&c&lAttack'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            hp:
                enabled: true
                type: pixelmon:power_weight
                amount: '1'
                name: '&a&lHP'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            special_defense:
                enabled: true
                type: pixelmon:power_band
                amount: '1'
                name: '&e&lSp. Defence'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            special_attack:
                enabled: true
                type: pixelmon:power_lens
                amount: '1'
                name: '&d&lSp. Attack'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            speed:
                enabled: true
                type: pixelmon:power_anklet
                amount: '1'
                name: '&b&lSpeed'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
        option-positions:
        - 12
        - 13
        - 14
        - 21
        - 22
        - 23
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    iv-edit-amount:
        gui-settings:
            title: UPB
            height: 4
            fill-type: BLOCK
            filler-items:
                one:
                    enabled: true
                    type: minecraft:stained_glass_pane
                    amount: '1'
                    damage: '15.0'
                    name: ' '
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
        edit-value-buttons:
            six:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-5'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 5
                            y: 2
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
                amount-modifier: -5
            four:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    damage: '5'
                    name: '&a&l+15'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 7
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
                amount-modifier: 15
            one:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    damage: '5'
                    name: '&a&l+1'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 4
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
                amount-modifier: 1
            seven:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-10'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 6
                            y: 2
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
                amount-modifier: -10
            two:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    damage: '5'
                    name: '&a&l+5'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 5
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
                amount-modifier: 5
            three:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    damage: '5'
                    name: '&a&l+10'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 6
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
                amount-modifier: 10
            five:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-1'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 4
                            y: 2
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
                amount-modifier: -1
            eight:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-15'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 7
                            y: 2
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
                amount-modifier: -15
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
        confirm-item:
            enabled: true
            type: pixelmon:poke_ball
            amount: '1'
            damage: '0'
            name: '&a&lCONFIRM'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
                    y: 2
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
        current-value:
            enabled: true
            type: minecraft:chest
            amount: '1'
            damage: '0'
            name: '&bCurrent Value: &a%value%'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        max-value: 31
        min-value: 0
    pokemon-pos: 9
    edit-display-pos: 18
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
ball-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    ball-selection:
        gui-settings:
            title: UltimatePokeBuilder
            height: 6
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
        options:
            luxury_ball:
                enabled: true
                type: pixelmon:luxury_ball
                amount: '1'
                name: '&aLuxury Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            nest_ball:
                enabled: true
                type: pixelmon:nest_ball
                amount: '1'
                name: '&aNest Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            quick_ball:
                enabled: true
                type: pixelmon:quick_ball
                amount: '1'
                name: '&aQuick Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            great_ball:
                enabled: true
                type: pixelmon:great_ball
                amount: '1'
                name: '&aGreat Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            dusk_ball:
                enabled: true
                type: pixelmon:dusk_ball
                amount: '1'
                name: '&aDusk Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            cherish_ball:
                enabled: true
                type: pixelmon:cherish_ball
                amount: '1'
                name: '&aCherish Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            timer_ball:
                enabled: true
                type: pixelmon:timer_ball
                amount: '1'
                name: '&aTimer Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            moon_ball:
                enabled: true
                type: pixelmon:moon_ball
                amount: '1'
                name: '&aMoon Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            repeat_ball:
                enabled: true
                type: pixelmon:repeat_ball
                amount: '1'
                name: '&aRepeat Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            love_ball:
                enabled: true
                type: pixelmon:love_ball
                amount: '1'
                name: '&aLove Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            net_ball:
                enabled: true
                type: pixelmon:net_ball
                amount: '1'
                name: '&aNet Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            dive_ball:
                enabled: true
                type: pixelmon:dive_ball
                amount: '1'
                name: '&aDive Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            level_ball:
                enabled: true
                type: pixelmon:level_ball
                amount: '1'
                name: '&aLevel Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            sport_ball:
                enabled: true
                type: pixelmon:sport_ball
                amount: '1'
                name: '&aSport Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            safari_ball:
                enabled: true
                type: pixelmon:safari_ball
                amount: '1'
                name: '&aSafari Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            heavy_ball:
                enabled: true
                type: pixelmon:heavy_ball
                amount: '1'
                name: '&aHeavy Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            dream_ball:
                enabled: true
                type: pixelmon:dream_ball
                amount: '1'
                name: '&aDream Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            ultra_ball:
                enabled: true
                type: pixelmon:ultra_ball
                amount: '1'
                name: '&aUltra Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            fast_ball:
                enabled: true
                type: pixelmon:fast_ball
                amount: '1'
                name: '&aFast Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            heal_ball:
                enabled: true
                type: pixelmon:heal_ball
                amount: '1'
                name: '&aHeal Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            beast_ball:
                enabled: true
                type: pixelmon:beast_ball
                amount: '1'
                name: '&aBeast Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            poke_ball:
                enabled: true
                type: pixelmon:poke_ball
                amount: '1'
                name: '&aPokeball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            lure_ball:
                enabled: true
                type: pixelmon:lure_ball
                amount: '1'
                name: '&aLure Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            gs_ball:
                enabled: true
                type: pixelmon:gs_ball
                amount: '1'
                name: '&aGS Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            friend_ball:
                enabled: true
                type: pixelmon:friend_ball
                amount: '1'
                name: '&aFriend Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            master_ball:
                enabled: true
                type: pixelmon:master_ball
                amount: '1'
                name: '&aMaster Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            premier_ball:
                enabled: true
                type: pixelmon:premier_ball
                amount: '1'
                name: '&aPremier Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            park_ball:
                enabled: true
                type: pixelmon:park_ball
                amount: '1'
                name: '&aPark Ball'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
        option-positions:
        - 12
        - 13
        - 14
        - 15
        - 16
        - 21
        - 22
        - 23
        - 24
        - 25
        - 30
        - 31
        - 32
        - 33
        - 34
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    pokemon-pos: 9
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
level-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    level-edit-amount:
        gui-settings:
            title: UPB
            height: 4
            fill-type: BLOCK
            filler-items:
                one:
                    enabled: true
                    type: minecraft:stained_glass_pane
                    amount: '1'
                    damage: '15.0'
                    name: ' '
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
        edit-value-buttons:
            six:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-5'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 5
                            y: 2
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
                amount-modifier: -5
            four:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    damage: '5'
                    name: '&a&l+25'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 7
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
                amount-modifier: 25
            one:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    damage: '5'
                    name: '&a&l+1'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 4
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
                amount-modifier: 1
            seven:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-10'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 6
                            y: 2
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
                amount-modifier: -10
            two:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    damage: '5'
                    name: '&a&l+5'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 5
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
                amount-modifier: 5
            three:
                config-item:
                    enabled: true
                    type: minecraft:lime_stained_glass_pane
                    amount: '1'
                    damage: '5'
                    name: '&a&l+10'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 6
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
                amount-modifier: 10
            five:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-1'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 4
                            y: 2
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
                amount-modifier: -1
            eight:
                config-item:
                    enabled: true
                    type: minecraft:red_stained_glass_pane
                    amount: '1'
                    damage: '14'
                    name: '&c&l-25'
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
                    positions:
                        first:
                            x: 7
                            y: 2
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
                amount-modifier: -25
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
        confirm-item:
            enabled: true
            type: pixelmon:poke_ball
            amount: '1'
            damage: '0'
            name: '&a&lCONFIRM'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
                    y: 2
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
        current-value:
            enabled: true
            type: minecraft:chest
            amount: '1'
            damage: '0'
            name: '&bCurrent Level: &a%value%'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        max-value: 100
        min-value: 1
    pokemon-pos: 9
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
growth-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    growth-selection:
        gui-settings:
            title: UltimatePokeBuilder
            height: 6
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
        options:
            small:
                enabled: true
                type: pixelmon:poison_gem
                amount: '1'
                name: '&dSmall'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            pygmy:
                enabled: true
                type: pixelmon:psychic_gem
                amount: '1'
                name: '&dPygmy'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            giant:
                enabled: true
                type: pixelmon:ice_gem
                amount: '1'
                name: '&dGiant'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            ordinary:
                enabled: true
                type: pixelmon:ghost_gem
                amount: '1'
                name: '&dOrdinary'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            huge:
                enabled: true
                type: pixelmon:ice_gem
                amount: '1'
                name: '&dHuge'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            ginormous:
                enabled: true
                type: pixelmon:dark_gem
                amount: '1'
                name: '&dGinormous'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            microscopic:
                enabled: true
                type: pixelmon:normal_gem
                amount: '1'
                name: '&dMicroscopic'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            enormous:
                enabled: true
                type: pixelmon:fighting_gem
                amount: '1'
                name: '&dEnormous'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            runt:
                enabled: true
                type: pixelmon:fairy_gem
                amount: '1'
                name: '&dRunt'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
        option-positions:
        - 12
        - 13
        - 14
        - 15
        - 16
        - 21
        - 22
        - 23
        - 24
        - 25
        - 30
        - 31
        - 32
        - 33
        - 34
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    pokemon-pos: 9
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
nature-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    nature-selection:
        gui-settings:
            title: UltimatePokeBuilder
            height: 6
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
        options:
            lax:
                enabled: true
                type: pixelmon:shell_bell
                amount: '1'
                name: '&b&lLax'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            docile:
                enabled: true
                type: pixelmon:iron_ball
                amount: '1'
                name: '&b&lDocile'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            bashful:
                enabled: true
                type: pixelmon:smoke_ball
                amount: '1'
                name: '&b&lBashful'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            timid:
                enabled: true
                type: pixelmon:eject_button
                amount: '1'
                name: '&b&lTimid'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            mild:
                enabled: true
                type: pixelmon:oval_stone
                amount: '1'
                name: '&b&lMild'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            hardy:
                enabled: true
                type: pixelmon:assault_vest
                amount: '1'
                name: '&b&lHardy'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            sassy:
                enabled: true
                type: pixelmon:quick_claw
                amount: '1'
                name: '&b&lSassy'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            bold:
                enabled: true
                type: pixelmon:life_orb
                amount: '1'
                name: '&b&lBold'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            quirky:
                enabled: true
                type: pixelmon:zoom_lens
                amount: '1'
                name: '&b&lQuirky'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            modest:
                enabled: true
                type: pixelmon:hard_stone
                amount: '1'
                name: '&b&lModest'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            relaxed:
                enabled: true
                type: pixelmon:soothe_bell
                amount: '1'
                name: '&b&lRelaxed'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            rash:
                enabled: true
                type: pixelmon:red_card
                amount: '1'
                name: '&b&lRash'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            calm:
                enabled: true
                type: pixelmon:mental_herb
                amount: '1'
                name: '&b&lCalm'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            adamant:
                enabled: true
                type: pixelmon:metal_coat
                amount: '1'
                name: '&b&lAdamant'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            impish:
                enabled: true
                type: pixelmon:thick_club
                amount: '1'
                name: '&b&lImpish'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            hasty:
                enabled: true
                type: pixelmon:white_herb
                amount: '1'
                name: '&b&lHasty'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            serious:
                enabled: true
                type: pixelmon:focus_band
                amount: '1'
                name: '&b&lSerious'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            brave:
                enabled: true
                type: pixelmon:focus_sash
                amount: '1'
                name: '&b&lBrave'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            quiet:
                enabled: true
                type: pixelmon:destiny_knot
                amount: '1'
                name: '&b&lQuiet'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            gentle:
                enabled: true
                type: pixelmon:soft_sand
                amount: '1'
                name: '&b&lGentle'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            lonely:
                enabled: true
                type: pixelmon:reaper_cloth
                amount: '1'
                name: '&b&lLonely'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            naughty:
                enabled: true
                type: pixelmon:lucky_punch
                amount: '1'
                name: '&b&lNaughty'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            jolly:
                enabled: true
                type: pixelmon:air_balloon
                amount: '1'
                name: '&b&lJolly'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            naive:
                enabled: true
                type: pixelmon:weakness_policy
                amount: '1'
                name: '&b&lNaive'
                flags: []
                lore: []
                enchants: {}
                nbt: {}
        option-positions:
        - 12
        - 13
        - 14
        - 15
        - 16
        - 21
        - 22
        - 23
        - 24
        - 25
        - 30
        - 31
        - 32
        - 33
        - 34
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
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
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
    pokemon-pos: 9
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
untradeable-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    true-false-settings:
        gui-settings:
            title: True or False
            height: 3
            fill-type: BLOCK
            filler-items:
                one:
                    enabled: true
                    type: minecraft:stained_glass_pane
                    amount: '1'
                    damage: '15.0'
                    name: ' '
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
        true-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            damage: '0'
            name: '&c&lUNTRADEABLE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        false-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            damage: '0'
            name: '&a&lTRADEABLE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            damage: '5'
            name: '&a&lCONFIRM'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
    pokemon-pos: 9
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
gender-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    true-false-settings:
        gui-settings:
            title: True or False
            height: 3
            fill-type: BLOCK
            filler-items:
                one:
                    enabled: true
                    type: minecraft:stained_glass_pane
                    amount: '1'
                    damage: '15.0'
                    name: ' '
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
        true-item:
            enabled: true
            type: minecraft:stone
            amount: '1'
            damage: '0'
            name: '&b&lMALE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        false-item:
            enabled: true
            type: minecraft:stone
            amount: '1'
            damage: '0'
            name: '&d&lFEMALE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            damage: '5'
            name: '&a&lCONFIRM'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
    pokemon-pos: 9
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
unbreedable-u-i:
    confirm-config:
        gui-settings:
            title: UltimatePokeBuilder
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
        decline-item:
            enabled: true
            type: minecraft:red_wool
            amount: '1'
            damage: '14'
            name: '&c&lDECLINE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:lime_wool
            amount: '1'
            damage: '5'
            name: '&a&lACCEPT'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        description-position: 13
    true-false-settings:
        gui-settings:
            title: True or False
            height: 3
            fill-type: BLOCK
            filler-items:
                one:
                    enabled: true
                    type: minecraft:stained_glass_pane
                    amount: '1'
                    damage: '15.0'
                    name: ' '
                    flags: []
                    lore: []
                    enchants: {}
                    nbt: {}
        true-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            damage: '0'
            name: '&c&lUNBREEDABLE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        false-item:
            enabled: true
            type: minecraft:barrier
            amount: '1'
            damage: '0'
            name: '&a&lBREEDABLE'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 2
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
        accept-item:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            damage: '5'
            name: '&a&lCONFIRM'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 6
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
        back-button:
            enabled: true
            type: pixelmon:eject_button
            amount: '1'
            damage: '0'
            name: '&cBack'
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions:
                first:
                    x: 0
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
    pokemon-pos: 9
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

```

</details>
