# Sprite Config

You can usually find sprite config settings in the GUI settings, however sometimes they're also located in specific sections of the main config.&#x20;

A sprite config section defines how the sprite item should appear in the GUI for a given pokemon. Below you will be able to find commented, and uncommented, versions of the default sprite config found in all the EnvyWare Ltd mods.



<details>

<summary>Uncommented Config</summary>

```yaml
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

<details>

<summary>Commented Config</summary>

```yaml
    sprite-config:
        name: '&b%species_name% %nickname%' # The item name
        lore: # The lore of the item
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
        untrdeable-true-format: '&aTRUE' # What text will show ip in the place of the %unbreedable% placeholder when the pokemon is untradeable
        untradeable-false-format: '&cFALSE' # What text will show ip in the place of the %unbreedable% placeholder when the pokemon is tradeable
        ability-format: '%ability_name% %ability_ha%' # What to display in the %ability% placeholder's place
        ha-format: '&7(&c&lHA&7)' # What the hidden ability placeholder should display when the pokemon has a hidden ability
        male-format: '&bMale' # The male gender placeholder text
        female-format: '&dFemale' # The female gender placeholder text
        none-format: '&fNONE' # The none gender placeholder text
        shiny-true-format: '&aTRUE' # The shiny placeholder format
        shiny-false-format: '&cFALSE' # The non-shiny placeholder format
        unbreedable-true-format: '&aTRUE' # The unbreedable placeholder format
        unbreedable-false-format: '&cFALSE' # The breedable placeholder format
        mew-cloned-format: '&7Times Cloned: %cloned%' # The format for mew clones when the pokemon is mew
        gemmed-format: '&7Gemmed: %gemmed%' # The gemmed format for when the pokemon is one of the legendary lake trio
        nature-format: '%nature_name% %mint_nature%' # The nature placeholder text with releveant mint information
        mint-nature-format: '&7(%mint_nature_name%&7)' # Text to display if a mint has been used
        normal-iv-colour: '&b' # The colour of the IV if the IV has not been hyper trained
        hyper-iv-colour: '&e' # The colour of the IV if the IV has been hyper trained
```

</details>

<details>

<summary>Accepted Placeholders</summary>

Placeholders useable in the sprite config:

* `%nickname%` - Pokemon's nickname
* `%held_item%` - Pokemon's held item localized name
* `%palette%` - Pokemon's palette localized name
* `%species_name%` - Pokemon's species localized name
* `%level%` - Pokemon's level
* `%gender%` - Pokemon's gender localized name
* `%breedable%` - Pokemon breedable placeholder
* `%nature%` - Pokemon's nature information
* `%nature_name%` - Pokemon's nature localized name
* `%mint_nature%` - Pokemon's mint nature information
* `%mint_nature_name%` - Pokemon's mint nature localized name
* `%ability%` - Pokemon's ability information
* `%ability_name%` - Pokemon's ability localized name
* `%ability_ha%` - Pokemon's hidden ability information
* `%friendship%` - Pokemon's friendship level
* `%untradeable%` - Pokemon's untradeable status
* `%iv_percentage%` - Pokemon's IV percentage
* `%iv_hp%` - Pokemon's HP IV value
* `%iv_attack%` - Pokemon's Attack IV value
* `%iv_defence%` - Pokemon's Defence IV value
* `%iv_spattack%` - Pokemon's Special Attack IV value
* `%iv_spdefence%` - Pokemon's Special Defence IV value
* `%iv_speed%` - Pokemon's Speed IV value
* `%ev_hp%` - Pokemon's HP EV value
* `%ev_attack%` - Pokemon's Attack EV value
* `%ev_defence%` - Pokemon's Defence EV value
* `%ev_spattack%` - Pokemon's Special Attack EV value
* `%ev_spdefence%` - Pokemon's Special Defence EV value
* `%ev_speed%` - Pokemon's Speed EV value
* `%move_1%` - Pokemon's first move localized name
* `%move_2%` - Pokemon's second move localized name
* `%move_3%` - Pokemon's third move localized name
* `%move_4%` - Pokemon's fourth move localized name
* `%shiny%` - Pokemon's shiny status
* `%form%` - Pokemon's form localized name
* `%size%` - Pokemon's growth localized name
* `%friendship%` - Pokemon's friendship
* `%mew_cloned%` - Pokemon's cloned status (will not show up if not mew)
* `%cloned%` - Pokemon's number of clones (will not show up if not mew)
* `%trio_gemmed%` - Pokemon's gemmed status  (will not show up if not legendary lake trio)
* `%gemmed%` - Pokemon's gemmed count (will not show up if not legendary lake trio)

</details>
