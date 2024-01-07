---
description: Has the default config with explanatory comments
---

# Config

Below you can find the default config with, and without, explanatory comments.&#x20;

<details>

<summary>Default config</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

database-details:
    pool-name: EnvyBattleTower
    ip: localhost
    port: 3306
    username: username
    password: password
    database: database
    max-pool-size: 2
    max-life-time-seconds: 30
positions:
    example:
        player-position:
            world-name: world
            pos-x: 0
            pos-y: 64.0
            pos-z: 0
            pitch: 1.0
            yaw: 1.0
        trainer-position:
            world-name: world
            pos-x: 10
            pos-y: 64.0
            pos-z: 0
            pitch: 1.0
            yaw: 1.0
team-options:
    one:
        start-floor: 0
        end-floor: 10
        teams:
            entries:
                '0':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/42853dcaf73553eb/raw
                        player-win-commands: []
                        player-loss-commands: []
                '1':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/42853dcaf73553eb/raw
                        player-win-commands: []
                        player-loss-commands: []
    one:
        start-floor: 10
        end-floor: 200
        teams:
            entries:
                '0':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/42853dcaf73553eb/raw
                        player-win-commands: []
                        player-loss-commands: []
                '1':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/42853dcaf73553eb/raw
                        player-win-commands: []
                        player-loss-commands: []
max-floor: 3
cooldown-seconds: 86400
allow-exp-gain: false
attempt-finish-loss-commands:
- broadcast %player% Failed %floor%
attempt-finish-win-commands:
- broadcast %player% won %floor%
battle-rules:
   bag:
     battle-rule-type: 'bag'
     battle-rule-value: 'true'
```



</details>

<details>

<summary>Commented Config</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

database-details: # The SQL database credentials - This is needed for storing data
    pool-name: EnvyBattleTower
    ip: localhost
    port: 3306
    username: username
    password: password
    database: database
    max-pool-size: 2
    max-life-time-seconds: 30
positions: # The potential positions the player could be teleported to (selected randomly, and then not moved from there)
    example:
        player-position: # The player position
            world-name: world
            pos-x: 0
            pos-y: 64.0
            pos-z: 0
            pitch: 1.0
            yaw: 1.0
        trainer-position: # The position of the trainer opponent
            world-name: world
            pos-x: 10
            pos-y: 64.0
            pos-z: 0
            pitch: 1.0
            yaw: 1.0
team-options: # The different teams
    one:
        start-floor: 0 # The floor that this will begin applying from
        end-floor: 10 # The floor that this will stop applying from
        teams: # Weighted set of teams (will randomly select a team from here using the weights)
            entries:
                '0':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/42853dcaf73553eb/raw # Pokepaste of the team
                        player-win-commands: [] # Commands to run on win
                        player-loss-commands: [] # Commands to run on loss
                '1':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/42853dcaf73553eb/raw
                        player-win-commands: []
                        player-loss-commands: []
    one:
        start-floor: 10
        end-floor: 200
        teams:
            entries:
                '0':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/42853dcaf73553eb/raw
                        player-win-commands: []
                        player-loss-commands: []
                '1':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/42853dcaf73553eb/raw
                        player-win-commands: []
                        player-loss-commands: []
max-floor: 3 # The max floor the player can reach when it automatically ends. This mod supports going to infinitely high levels
cooldown-seconds: 86400 # The cooldown before the player can use it again
allow-exp-gain: false # If the player's pokemon will gain EXP during battle
attempt-finish-loss-commands: # The finish commands for when the player is done and loss
- broadcast %player% Failed %floor%
attempt-finish-win-commands: # The finish commands for when the player is done and won
- broadcast %player% won %floor%
battle-rules: # The rules to apply to all the battles
   bag:
     battle-rule-type: 'bag'
     battle-rule-value: 'true'
```



</details>

{% hint style="info" %}
If you don't understand some of the patterns found in the config above you should read through the sections [here](https://wiki.envyware.co.uk/general-help/general-config)

More specifically the location information can be found [here](https://wiki.envyware.co.uk/general-help/general-config/config-locations)
{% endhint %}
