---
description: Has the default config with explanatory comments
---

# Config

In the latest version the config only controls where data is stored. This is done through the `database-details` section. The default config is shown below.

<details>

<summary>Default config</summary>

```yaml
# © EnvyWare Ltd Software 2025
# For assistance visit https://discord.envyware.co.uk

# The storage type and details for all battle tower player data. Only change this if you know what you're doing. For more information visit https://www.envyware.co.uk/docs/general-help/general-config/config-databases
database-details:
  id: sqlite
  file-path: config/EnvyBattleTower/data.db
```
</details>

# Locale
The locale has settings controlling the time and date formatting in the UIs, and a message sent when a player has
a blacklisted Pokemon in their party. The default config is shown below.

<details>

<summary>Locale</summary>

```yaml
# © EnvyWare Ltd Software 2025
# For assistance visit https://discord.envyware.co.uk

# This is the message that will be sent to the player if they have a blacklisted pokemon in their party
blacklisted-pokemon-error:
  - '&c&l(!) &cError: you have a blacklisted pokemon in your party so you cannot enter
    the battle tower! %pokemon%'
# This is used for formatting any times that appear in GUIs, or in messages
time-format:
  format: '%days%%hours%%minutes%%seconds%'
  placeholders:
    hours: '%hours_value% hours '
    days: '%days_value% days '
    seconds: '%seconds_value% seconds'
    minutes: '%minutes_value% minutes '
# This is used for formatting any dates that appear in GUIs, or in messages
date-format:
  format: dd/MM/yyyy
```
</details>

# GUIs
The GUIs config has a setting for controlling the setting of the only GUI used by the battle tower.
The default config is shown below.

<details>

<summary>GUIs</summary>

```yaml
# © EnvyWare Ltd Software 2025
# For assistance visit https://discord.envyware.co.uk

# The settings for the GUI that opens when the player runs /battletower. If you want to find the settings for specific items you need to look in the battle tower specific configs (e.g. config/EnvyBattleTower/towers/<tower>.yml)
battle-tower-u-i:
    gui-settings:
        title: EnvyBattleTower
        height: 3
        fill-type: BLOCK
        filler-items:
            '1':
                enabled: true
                type: minecraft:black_stained_glass_pane
                amount: '1'
                name: ' '
                flags: []
                lore: []
                enchants: {}
                nbt: {}
        display-items: {}
```
</details>

# Battle Tower
Each battle tower is stored in a separate file in the `config/EnvyBattleTower/towers` directory. 
To create a new battle tower you need to create a new file in the `towers` directory with the name of the tower.
The default config for a battle tower is shown below.

<details>

<summary>Battle Tower</summary>

```yaml
# © EnvyWare Ltd Software 2025
# For assistance visit https://discord.envyware.co.uk

enabled: true
positions:
    '0':
        player-position:
            world-name: world
            pos-x: 1.0
            pos-y: 0.0
            pos-z: 0.0
            pitch: 0.0
            yaw: 0.0
        trainer-position:
            world-name: world
            pos-x: 2.0
            pos-y: 0.0
            pos-z: 0.0
            pitch: 0.0
            yaw: 0.0
    '1':
        player-position:
            world-name: world
            pos-x: 2.0
            pos-y: 0.0
            pos-z: 0.0
            pitch: 0.0
            yaw: 0.0
        trainer-position:
            world-name: world
            pos-x: 3.0
            pos-y: 0.0
            pos-z: 0.0
            pitch: 0.0
            yaw: 0.0
team-options:
    '0':
        start-floor: 0
        end-floor: 1000
        teams:
            entries:
                '1':
                    weight: 10.0
                    object:
                        paste: https://pokepast.es/8c84d94a0da05c13
                        player-win-commands:
                            entries:
                                '0':
                                    weight: 10.0
                                    object:
                                    - broadcast %player%
                        player-loss-commands:
                            entries:
                                '0':
                                    weight: 10.0
                                    object:
                                    - broadcast %player%
return-position:
    pos-x: 0.0
    pos-y: 0.0
    pos-z: 0.0
    pitch: 0.0
    yaw: 0.0
    world-name: world
max-floor: 200
allow-spectating: false
cooldown-seconds: 60
allow-exp-gain: false
battle-rules:
    LEVEL_CAP:
        battle-rule-type: LEVEL_CAP
        battle-rule-value: '50'
attempt-finish-loss-commands:
- minecraft:tell %player% You lost! Better luck next time
attempt-finish-win-commands:
- give %player% diamond 1
blacklisted-pokemon:
- shiny
cooldown-item:
    enabled: true
    type: pixelmon:ui_element
    amount: '1'
    name: '&aExample Battle Tower'
    flags: []
    lore:
    - '&c&lYou are on cooldown'
    - '&c%cooldown%'
    - ' '
    - '&aLeaderboard:'
    - '&71. %leaderboard_1_player% - %leaderboard_1_floor% floors (%leaderboard_1_time%)
        on %leaderboard_1_date%'
    - '&72. %leaderboard_2_player% - %leaderboard_2_floor% floors (%leaderboard_2_time%)
        on %leaderboard_2_date%'
    - '&73. %leaderboard_3_player% - %leaderboard_3_floor% floors (%leaderboard_3_time%)
        on %leaderboard_3_date%'
    - '&74. %leaderboard_4_player% - %leaderboard_4_floor% floors (%leaderboard_4_time%)
        on %leaderboard_4_date%'
    - '&75. %leaderboard_5_player% - %leaderboard_5_floor% floors (%leaderboard_5_time%)
        on %leaderboard_5_date%'
    enchants: {}
    nbt:
        UIImage:
            type: string
            data: pixelmon:textures/gui/uielements/tile_0049.png
    positions:
        '0':
            x: 3
            y: 1
    requires-permission: false
    close-on-click: false
    commands-executed: []
display-item:
    enabled: true
    type: pixelmon:ui_element
    amount: '1'
    name: '&aExample Battle Tower'
    flags: []
    lore:
    - '&7This is an example battle tower'
    - '&7It has a cooldown of 60 seconds'
    - '&7You can''t use shiny Pokemon'
    - '&7You can''t gain exp'
    - '&7You can''t spectate'
    - ' '
    - '&aClick to enter!'
    - ' '
    - '&aLeaderboard:'
    - '&71. %leaderboard_1_player% - %leaderboard_1_floor% floors (%leaderboard_1_time%)
        on %leaderboard_1_date%'
    - '&72. %leaderboard_2_player% - %leaderboard_2_floor% floors (%leaderboard_2_time%)
        on %leaderboard_2_date%'
    - '&73. %leaderboard_3_player% - %leaderboard_3_floor% floors (%leaderboard_3_time%)
        on %leaderboard_3_date%'
    - '&74. %leaderboard_4_player% - %leaderboard_4_floor% floors (%leaderboard_4_time%)
        on %leaderboard_4_date%'
    - '&75. %leaderboard_5_player% - %leaderboard_5_floor% floors (%leaderboard_5_time%)
        on %leaderboard_5_date%'
    enchants: {}
    nbt:
        UIImage:
            type: string
            data: pixelmon:textures/gui/uielements/tile_0049.png
    positions:
        '0':
            x: 3
            y: 1
    requires-permission: false
    close-on-click: false
    commands-executed: []
virtual: true
id: example
```
</details>

If you don't understand some of the patterns found in the config above you should read through the sections [here](https://wiki.envyware.co.uk/general-help/general-config)

More specifically the location information can be found [here](https://wiki.envyware.co.uk/general-help/general-config/config-locations)
