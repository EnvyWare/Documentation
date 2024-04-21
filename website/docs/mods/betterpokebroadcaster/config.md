# Config

BetterPokeBroadcaster allows for certain Pokemon events to be broadcast throughout your server through the specs that are entered in the configs.

<details>

<summary>Default Config</summary>

```
# © EnvyWare Ltd Software 2022

# © EnvyWare Ltd Software 2024
# For assistance visit https://discord.envyware.co.uk

# If this is false then this broadcast option will not be checked. This option is useful for disabling the defaults provided with the mod as you cannot delete those files, only modify them.
enabled: true
# The radius in blocks that the mod will check for the `nearby player` placeholders and options
nearest-player-radius: 100.0
# The messages that will be broadcasted when the event is triggered. These messages can contain placeholders.
broadcasts:
- '&8---------------------------------'
- ' '
- '       &6&lSHINY SPAWN'
- '   &e%pokemon% &7has spawned at &a%x%&7, &a%y%&7, &a%z%&7 in &f%biome%&7!'
- '   &7The nearest player is &e%nearest_name%&7'
- ' '
- '&8---------------------------------'
# The webhook that will be executed when the event is triggered. This webhook can contain placeholders.
webhook:
    enabled: false
    tts: false
    embeds:
        example-0:
            description: A shiny %pokemon% has spawned at %x%, %y%, %z% in %biome%!
            color:
                red: 255
                green: 255
                blue: 0
                alpha: 255
            footer:
                text: Powered by EnvyWare Ltd
                icon-url: ''
            author:
                name: EnvyWare Ltd
                url: https://envyware.co.uk
                icon-url: ''
            fields:
                example-5:
                    name: Y
                    value: '%y%'
                    inline: false
                example-6:
                    name: Z
                    value: '%z%'
                    inline: false
                example-3:
                    name: Biome
                    value: '%biome%'
                    inline: false
                example-4:
                    name: X
                    value: '%x%'
                    inline: false
                example-1:
                    name: Nearest Player
                    value: '%nearest_name%'
                    inline: false
                example-2:
                    name: World
                    value: '%world%'
                    inline: false
            thumbnail: {}
            image: {}
    url: YOUR WEBHOOK URL HERE
    username: EnvyWare Ltd BetterPokeBroadcaster
# If this is true then the broadcast will only be sent to the nearest player to the Pokemon that triggered the event.
nearest-player-only: false
# The type of broadcast. This defines when the broadcast will attempt to be sent.
type: spawn
# This is used to check if the Pokemon in the event is the correct Pokemon for this broadcast. For more information read: https://pixelmonmod.com/wiki/Pokemon_spec
pokemon-spec: shiny isboss:notboss !leg !ub

```

</details>
