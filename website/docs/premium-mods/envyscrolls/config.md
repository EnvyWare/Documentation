# Config

There are two main configs for the EnvyScrolls mods which are the `config.yml` and `locale.yml` containing settings, and localizations. The config settings for specific clue scroll tiers can be found in `config/EnvyScrolls/scrolls` with the defaults in `config/EnvyScrolls/scrolls/defaults` and the config settings for specific mystery scroll tiers in `config/EnvyScrolls/mystery` with the defaults in `config/EnvyScrolls/mystery/defaults`.&#x20;

## Main Config

This currently has no settings as all settings are found in the specific clue scroll, or mystery scroll, config files.

## Locale

<details>

<summary>Default Locale</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

unknown-step: ???
step-format: ' &a- %step_description%'
given-clue-scroll:
- '&e&l(!) &eGiven %player% %amount% x %clue_scroll%'
received-clue-scroll:
- '&e&l(!) &eYou have received %amount% x %clue_scroll%'
given-clue-skip:
- '&e&l(!) &eGiven %player% %amount% x %clue_skip%'
received-clue-skip:
- '&e&l(!) &eYou have received %amount% x %clue_skip%'
given-mystery-scroll:
- '&e&l(!) &eGiven %player% %amount% x %mystery_scroll%'
received-mystery-scroll:
- '&e&l(!) &eYou have received %amount% x %mystery_scroll%'

```

</details>

<details>

<summary>Commented Locale</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

unknown-step: ??? # The format used for steps that are yet to be revealed
step-format: ' &a- %step_description%' # The format in the lore for steps
given-clue-scroll: # The message sent to the admin when they give a player a clue scroll
- '&e&l(!) &eGiven %player% %amount% x %clue_scroll%'
received-clue-scroll: # The message sent to the player when they are given a clue scroll
- '&e&l(!) &eYou have received %amount% x %clue_scroll%'
given-clue-skip: # The message sent to the admin when they give a player a clue skip
- '&e&l(!) &eGiven %player% %amount% x %clue_skip%'
received-clue-skip: # The message sent to the player when they receive a clue skip
- '&e&l(!) &eYou have received %amount% x %clue_skip%'
given-mystery-scroll: # The message sent to the admin when they give a mystery scroll
- '&e&l(!) &eGiven %player% %amount% x %mystery_scroll%'
received-mystery-scroll: # The message sent to the player when they receive a mystery scroll
- '&e&l(!) &eYou have received %amount% x %mystery_scroll%'

```

</details>

## Clue Scrolls

The clue scroll configs need to be placed in the `config/EnvyScrolls/scrolls` directory. This will accept any degree of sub directories too.&#x20;

Here you can find a list of the accepted clue step types

<details>

<summary>Clue Step Types</summary>

* com.envyful.clue.scrolls.api.type.impl.CatchPokemonClueStepType
* com.envyful.clue.scrolls.api.type.impl.DefeatTrainerClueStepType
* com.envyful.clue.scrolls.api.type.impl.DefeatWildPokemonClueStepType
* com.envyful.clue.scrolls.api.type.impl.GiveTradedPokemonClueStepType
* com.envyful.clue.scrolls.api.type.impl.HatchPokemonClueStepType
* com.envyful.clue.scrolls.api.type.impl.KnockoutPokemonClueStepType
* com.envyful.clue.scrolls.api.type.impl.LevelUpPokemonClueStepType
* com.envyful.clue.scrolls.api.type.impl.LoseToTrainerClueStepType
* com.envyful.clue.scrolls.api.type.impl.MineBlocksClueStepType
* com.envyful.clue.scrolls.api.type.impl.PlaceBlocksClueStepType
* com.envyful.clue.scrolls.api.type.impl.ReceiveTradedPokemonClueStepType
* com.envyful.clue.scrolls.api.type.impl.ReleasePokemonClueStepType
* com.envyful.clue.scrolls.api.type.impl.UseMoveClueStepType

You can find descriptions, and examples on \[enter page link here] //TODO:

</details>

<details>

<summary>Example Clue Scroll</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

item:
    enabled: true
    type: minecraft:paper
    amount: '1'
    name: '&a&lCOMMON Clue Scroll'
    flags: []
    lore:
    - '&aSteps:'
    - '%scroll_lore%'
    - ' '
    - '&b&oThe common clue scroll can be found'
    - '&b&oin the wild, dropped by mobs and'
    - '&b&oobtained from fishing.'
    enchants: {}
    nbt: {}
min-steps: 3
max-steps: 6
steps:
    entries:
        '0':
            weight: 1.0
            object:
                id: step_one
                clue-step-type:
                    __class__: com.envyful.clue.scrolls.api.type.impl.CatchPokemonClueStepType
                    spec: shiny
                    min-amount: 1
                    max-amount: 2
                    description: Catch %current%/%target% shiny pokemon
rewards:
    guaranteed-reward:
        display-name: Example Display Name
        commands:
        - say %player% completed!
        messages:
        - Well done for completing a common scroll!
        display-item:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            name: ' '
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions: {}
            requires-permission: false
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            close-on-click: false
            commands-executed: []
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    display-name: Example Display Name
                    commands:
                    - say %player% completed! This is a weighted chance
                    messages:
                    - Well done for completing a common scroll! this is a weighted
                        chance
                    display-item:
                        enabled: true
                        type: minecraft:stained_glass_pane
                        amount: '1'
                        name: ' '
                        flags: []
                        lore: []
                        enchants: {}
                        nbt: {}
                        positions: {}
                        requires-permission: false
                        else-item:
                            enabled: true
                            type: minecraft:stained_glass_pane
                            amount: '1'
                            name: ' '
                            flags: []
                            lore: []
                            enchants: {}
                            nbt: {}
                        close-on-click: false
                        commands-executed: []
id: common
display-name: '&a&lCOMMON'
skip-item:
    enabled: true
    type: minecraft:emerald
    amount: '1'
    name: '&a&lCOMMON Clue Skip &7&o(Right-Click Me)'
    flags: []
    lore:
    - '&aRight click me to open the skip UI'
    - ' '
    - '&aFrom the UI you can then select a scroll for'
    - '&aWhich for wish to skip a step on.'
    enchants: {}
    nbt: {}
complete-step-message: []

```

</details>

<details>

<summary>Commented Example Clue Scroll</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

item: # The clue scroll item the player will receive and keep in their inventory
    enabled: true
    type: minecraft:paper
    amount: '1'
    name: '&a&lCOMMON Clue Scroll'
    flags: []
    lore:
    - '&aSteps:'
    - '%scroll_lore%'
    - ' '
    - '&b&oThe common clue scroll can be found'
    - '&b&oin the wild, dropped by mobs and'
    - '&b&oobtained from fishing.'
    enchants: {}
    nbt: {}
min-steps: 3 # the minimum number of potential steps required
max-steps: 6 # the maximum number of potential steps required
steps: # The steps that could potentially generate on the user's clue scroll
    entries:
        '0':
            weight: 1.0 # The chance of it being this step
            object:
                id: step_one # The id of the step (this must be unique)
                clue-step-type:
                   # This is the clue step type (and exhaustive list can be found above)
                    __class__: com.envyful.clue.scrolls.api.type.impl.CatchPokemonClueStepType 
                    spec: shiny # The spec required for the pokemon to count towards completion
                    min-amount: 1 # The potential minimum number of pokemon required
                    max-amount: 2 # The potential maximum number required
                    description: Catch %current%/%target% shiny pokemon # The message that will display in the lore
rewards: # The rewards that will be given once the scroll is completed
    guaranteed-reward:
        display-name: Example Display Name
        commands:
        - say %player% completed!
        messages:
        - Well done for completing a common scroll!
        display-item:
            enabled: true
            type: minecraft:stained_glass_pane
            amount: '1'
            name: ' '
            flags: []
            lore: []
            enchants: {}
            nbt: {}
            positions: {}
            requires-permission: false
            else-item:
                enabled: true
                type: minecraft:stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
            close-on-click: false
            commands-executed: []
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    display-name: Example Display Name
                    commands:
                    - say %player% completed! This is a weighted chance
                    messages:
                    - Well done for completing a common scroll! this is a weighted
                        chance
                    display-item:
                        enabled: true
                        type: minecraft:stained_glass_pane
                        amount: '1'
                        name: ' '
                        flags: []
                        lore: []
                        enchants: {}
                        nbt: {}
                        positions: {}
                        requires-permission: false
                        else-item:
                            enabled: true
                            type: minecraft:stained_glass_pane
                            amount: '1'
                            name: ' '
                            flags: []
                            lore: []
                            enchants: {}
                            nbt: {}
                        close-on-click: false
                        commands-executed: []
id: common # The unique identifier for this clue scroll type
display-name: '&a&lCOMMON' # The display name of this clue scroll type
skip-item: # The item given to the player for skipping clue steps
    enabled: true
    type: minecraft:emerald
    amount: '1'
    name: '&a&lCOMMON Clue Skip &7&o(Right-Click Me)'
    flags: []
    lore:
    - '&aRight click me to open the skip UI'
    - ' '
    - '&aFrom the UI you can then select a scroll for'
    - '&aWhich for wish to skip a step on.'
    enchants: {}
    nbt: {}
complete-step-message: [] # The message sent when a clue step is completed

```

</details>

## Mystery Scrolls

The clue scroll configs need to be placed in the `config/EnvyScrolls/mystery` directory. This will accept any degree of sub directories too.&#x20;

<details>

<summary>Example Mystery Scroll</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

item:
    enabled: true
    type: minecraft:paper
    amount: '1'
    name: '&f&lBASIC Mystery Scroll'
    flags: []
    lore:
    - '&fRight click me to receive a random'
    - '&fclue scroll!'
    enchants: {}
    nbt: {}
scrolls:
    entries:
        '0':
            weight: 1.0
            object: common
id: basic
display-name: '&f&lBASIC'

```

</details>

<details>

<summary>Commented Example Mystery Scroll</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

item: # The item that will be given to the player
    enabled: true
    type: minecraft:paper
    amount: '1'
    name: '&f&lBASIC Mystery Scroll'
    flags: []
    lore:
    - '&fRight click me to receive a random'
    - '&fclue scroll!'
    enchants: {}
    nbt: {}
scrolls: # The potential scrolls that will be given upon reveal
    entries:
        '0':
            weight: 1.0
            object: common
id: basic # The unique identifier
display-name: '&f&lBASIC' # the display name

```

</details>
