# Config

> **NOTE:** This mod can use MySQL, if you wish to use that, change the save-mode to MYSQL. If you do not know how to make a database refer to [this](https://app.gitbook.com/o/VBNbt9QKM9Bl2VRr86F1/s/AMLZiQkdzA1GB4HSIevs/).

<details>

<summary>Default Config</summary>

```yaml
# © EnvyWare Ltd Software 2022

# For assistance visit https://discord.envyware.co.uk

save-mode: JSON
database:
    pool-name: Bingo
    ip: 0.0.0.0
    port: 3306
    username: admin
    password: password
    database: reforged
    max-pool-size: 30
    max-life-time-seconds: 30
config-interface:
    title: Bingo
    height: 6
    fill-type: BLOCK
    filler-items:
        one:
            enabled: true
            type: minecraft:black_stained_glass_pane
            amount: '1'
            damage: '15'
            name: ' '
            flags: []
            lore: []
            enchants: {}
            nbt: {}
maximum-evolution: 1
card-duration-seconds: 86400
height: 4
width: 7
starting-pos-x: 1
starting-pos-y: 1
blacklisted-spawns: []
slot-complete-rewards:
    guaranteed-reward:
        commands:
        - guaranteed reward
        messages:
        - Hey
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    commands:
                    - reward
                    messages:
                    - Hey
line-complete-rewards:
    guaranteed-reward:
        commands:
        - guaranteed reward
        messages:
        - Hey
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    commands:
                    - reward
                    messages:
                    - Hey
card-complete-rewards:
    guaranteed-reward:
        commands:
        - guaranteed reward
        messages:
        - Hey
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    commands:
                    - reward
                    messages:
                    - Hey
column-complete-rewards:
    guaranteed-reward:
        commands:
        - guaranteed reward
        messages:
        - Hey
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    commands:
                    - reward
                    messages:
                    - Hey
card-slot-commands:
- pwiki %pokemon%
complete-item:
    enabled: true
    type: minecraft:lime_stained_glass_pane
    amount: '1'
    damage: '5'
    name: '&a&lCOMPLETE'
    flags: []
    lore: []
    enchants: {}
    nbt: {}
help-item:
    enabled: true
    type: minecraft:book
    amount: '1'
    damage: '0'
    name: '&eInfo'
    flags: []
    lore:
    - ''
    - '&eWhat is bingo?'
    - '&7Each day you will get a new set of 27 pokemon'
    - '&7on your bingo card that you must find and catch'
    - '&7in order to receive the bingo card''s rewards.'
    - ''
    - '&eWhat are the rewards?'
    - '&7For each pokemon you complete on the bingo card'
    - '&7you will receive a random reward. Then for each'
    - '&7line of the bingo card you complete you''ll get'
    - '&7another random reward. Finally, if you complete'
    - '&7the entire bingo card you will receive yet another'
    - '&7random, but better, reward.'
    - ''
    - '&eWhat if I have two of the same pokemon?'
    - '&7You simply just have to find and catch that pokemon twice.'
    enchants: {}
    nbt: {}
    positions:
        first:
            x: 4
            y: 0
    requires-permission: false
    close-on-click: false
    commands-executed: []
card-positions:
- 11
- 12
- 13
- 14
- 15
- 16
- 17
- 20
- 21
- 22
- 23
- 24
- 25
- 26
- 29
- 30
- 31
- 32
- 33
- 34
- 35
- 38
- 39
- 40
- 41
- 42
- 43
- 44

```

</details>
