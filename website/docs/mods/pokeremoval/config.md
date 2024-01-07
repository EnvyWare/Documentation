# Config

<details>

<summary>Default Config </summary>

```
removal-settings:
    one:
        name: Pokemon
        mode: WHITELIST
        removed-entities:
        - pixelmon:pixelmon
        matching-requirements:
        - '!shiny'
        broadcast-removal: true
        removal-broadcast:
        - ' '
        - '&c&l!!! INACTIVE POKEMON WERE JUST CLEARED FROM THE WORLD (%amount%) !!!'
        - ' '
        removal-time-minutes: 1
        ignore-entities-younger-than: 60
        warning-broadcasts:
            first:
                enabled: true
                time-before-removal-seconds: 1500
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 25 minutes 3'
            second:
                enabled: true
                time-before-removal-seconds: 600
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 10 minutes 2'
            third:
                enabled: true
                time-before-removal-seconds: 30
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 30 seconds 1'
    two:
        name: Items
        mode: WHITELIST
        removed-entities:
        - minecraft:item
        matching-requirements: []
        broadcast-removal: true
        removal-broadcast:
        - ' '
        - '&c&l!!! INACTIVE ITEMS WERE JUST CLEARED FROM THE WORLD (%amount%) !!!'
        - ' '
        removal-time-minutes: 30
        ignore-entities-younger-than: 60
        warning-broadcasts:
            first:
                enabled: true
                time-before-removal-seconds: 1500
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 25 minutes'
            second:
                enabled: true
                time-before-removal-seconds: 600
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 10 minutes'
            third:
                enabled: true
                time-before-removal-seconds: 30
                broadcast:
                - '&e&l(!) &eAll items will be removed in 30 seconds'
```

</details>

<details>

<summary>Config with Explanatory Comments</summary>

```
removal-settings:
    one:
        name: Pokemon # The name of the removal setting (currently redundant but must be unique)
        mode: WHITELIST # The removal mode - WHITELIST (only remove pokemon matching the spec & entities defined)
# or BLACKLIST (removes anything not on the entity list & not matching the specs)
        removed-entities: # Entities to be removed (or not)
        - pixelmon:pixelmon
        matching-requirements: # Pokemon to be removed (or not)
        - '!shiny'
        broadcast-removal: true # Broadcasts the removal
        removal-broadcast: # The removal broadcast
        - ' '
        - '&c&l!!! INACTIVE POKEMON WERE JUST CLEARED FROM THE WORLD (%amount%) !!!'
        - ' '
        removal-time-minutes: 1 # How often the removal happens in minutes
        ignore-entities-younger-than: 60 # Ignore entities younger than X ticks old
        warning-broadcasts: # Warning broadcasts
            first:
                enabled: true # If it's enabled
                time-before-removal-seconds: 1500 # Time when broadcast happens relative to the removal
                broadcast: # Broadcast message
                - '&e&l(!) &eAll entities will be removed in 25 minutes 3'
            second:
                enabled: true
                time-before-removal-seconds: 600
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 10 minutes 2'
            third:
                enabled: true
                time-before-removal-seconds: 30
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 30 seconds 1'
    two:
        name: Items
        mode: WHITELIST
        removed-entities:
        - minecraft:item
        matching-requirements: []
        broadcast-removal: true
        removal-broadcast:
        - ' '
        - '&c&l!!! INACTIVE ITEMS WERE JUST CLEARED FROM THE WORLD (%amount%) !!!'
        - ' '
        removal-time-minutes: 30
        ignore-entities-younger-than: 60
        warning-broadcasts:
            first:
                enabled: true
                time-before-removal-seconds: 1500
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 25 minutes'
            second:
                enabled: true
                time-before-removal-seconds: 600
                broadcast:
                - '&e&l(!) &eAll entities will be removed in 10 minutes'
            third:
                enabled: true
                time-before-removal-seconds: 30
                broadcast:
                - '&e&l(!) &eAll items will be removed in 30 seconds'
```

</details>
