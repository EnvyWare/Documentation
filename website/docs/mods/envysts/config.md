# Config

Below you will find example config(s).

<details>

<summary>config.yml with explanatory comments</summary>

```yaml
min-value: 200.0 # Min value for ALL pokemon
min-price-modifiers: # Price modifiers https://github.com/Daniel-Forge-Development/API/wiki/PokeSpec-Price-Modifier
    example:
        spec: shiny:1
        required-permission: ''
        min-price:
            type: '*' # What type of modifier this is ('*'=multiply,'+'=add,'-'=subtracte,'/'=divide)
            value: 2.0
        display: 'DISPLAYED TEXT!' # This text is what is used in the %price_breakdown% placeholder. 
blacklist-specs: # Specs for pokemon that are blacklisted
- pikachu shiny:1
per-level-booster: # Booster per level using the price modifier system
    type: +
    value: 100.0 # Set this to 0 for no change per level
```

</details>

<details>

<summary>locale.yml with explanatory comments</summary>

```yaml
reloaded-config: '&el(!) &eReloaded configs.' # Message when reloading
sold-pokemon: '&e&l(!) &eSold %pokemon% for %worth%' # Message when selling pokemon
min-party-size: '&c&l(!) &cYou must have at least 1 pokemon in your party to use STS' # Message when trying to sell your last Party Pokemon
economy-format: '%.2f' # Format to use for pricing. the ".2f" means to 2 decimal places.
cooldown: '&c&l(!) &cOn cooldown for %cooldown%' # Message displayed when on cooldown
level-modifier-display: 'Levels: +%added_cost%' # Message displayed for the per-level-booster setting
```

</details>

<details>

<summary>guis.yml</summary>

```yaml
party-u-i:
    gui-settings:
        title: Simple STS
        height: 3
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
    party-selection-positions:
    - 10
    - 11
    - 12
    - 14
    - 15
    - 16
    confirm-display: 13
    confirm-item:
        x-pos: 4
        y-pos: 2
        enabled: true
        type: pixelmon:poke_ball
        amount: 1
        damage: 0
        name: '&a&lCONFIRM'
        lore: []
        nbt: {}
    no-pokemon-item:
        enabled: true
        type: minecraft:barrier
        amount: 1
        damage: 0
        name: '&cNo pokemon in this position'
        lore: []
        nbt: {}
    untradeable-pokemon-item:
        enabled: true
        type: minecraft:barrier
        amount: 1
        damage: 0
        name: '&c&lUNTRADEABLE'
        lore: []
        nbt: {}
    sprite-config:
        name: '&b%species_name% %nickname%'
        lore:
        - '&7Level: &b%level%'
        - '&7Shiny: &b%shiny%'
        - '&7Gender: %gender%'
        - '&7Breedable: %breedable%'
        - '&7Friendship: %friendship%'
        - '&7Nature: &b%nature%'
        - '&7Form: &b%form%'
        - '&7Growth: &b%size%'
        - '&7Ability: &b%ability%'
        - '&7Friendship: &b%friendship%'
        - '&7Untradeable: &b%untradeable%'
        - '&7Custom Texture: &b%custom_texture%'
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
    price-lore:
    - '&e&lPRICE: &a$%cost%'

```

</details>
