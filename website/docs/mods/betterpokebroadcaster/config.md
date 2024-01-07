# Config

You can use any spec to be broadcasted that is within the Pixelmon mod, those specs can be found [here](https://pixelmonmod.com/wiki/Pokemon\_spec).

<details>

<summary>Default Config</summary>

```
# © EnvyWare Ltd Software 2022

broadcast-options:
    one:
        type: spawn
        spec: shiny
        nearest-player-radius: 30.0
        broadcasts:
        - '&8-------'
        - '&a%pokemon% %nearest_name% %x%, %y%, %z%, %world%'
        - '&8-------'
        webhook: none
        nearest-player-only: false
    two:
        type: spawn
        spec: legendary
        nearest-player-radius: 30.0
        broadcasts:
        - '&8-------'
        - '&a%pokemon% %nearest_name% %x%, %y%, %z%, %world%'
        - '&8-------'
        webhook: none
        nearest-player-only: false
    three:
        type: defeat
        spec: legendary
        nearest-player-radius: 30.0
        broadcasts:
        - '&8-------'
        - '&a%pokemon% %nearest_name% %x%, %y%, %z%, %world%'
        - '&8-------'
        webhook: none
        nearest-player-only: false

```

</details>
