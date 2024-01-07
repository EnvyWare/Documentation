# Config

Here you can find the default configs for EnvyGyms.

There are three main configs, `config.yml`, `guis.yml`, and `local.yml`. Then you can find the gyms, and gym categories, configs in the `config/EnvyGyms/categories`, and `config/EnvyGyms/gyms` directories.

The categories is used to group together different gyms in the UI. This allows for things such as "NPC" verisons of gyms, or more challenging tiers.

## Main Config

<details>

<summary>Commented main config example</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

# Envygyms currently only supports MySQL storage
database:
    pool-name: EnvyGyms
    ip: localhost
    port: 3306
    username: username
    password: password
    database: datababase
    max-pool-size: 30
    max-life-time-seconds: 30
# The cooldown in seconds that a user has to wait between requests
request-cooldown-seconds: 30

```

</details>

<details>

<summary>Main config example</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

database:
    pool-name: EnvyGyms
    ip: localhost
    port: 3306
    username: username
    password: password
    database: datababase
    max-pool-size: 30
    max-life-time-seconds: 30
request-cooldown-seconds: 30

```

</details>

## Example Gym configs

You can find these configs, and add your own, under `config/EnvyGyms/gyms/`.

It is important to note that for each gym you want to add it will need it's own file.

<details>

<summary>Commented gym config example</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

# Requirements are conditions that must be met before the user can
# challenge this gym
# The accepted types are:
# BANNED_POKEMON (where the data field is a spec)
# COOLDOWN (where the data field is a cooldown in minutes)
# PERMISSION (where the data field is a permission the user must have)
# GYM (where the data field is the id of a gym the user needs to have beaten)
# The mod will send the failed-message to the user if they do not meet the requirement
requirements:
    '1':
        type: permission
        data: envy.gyms.gym.example
        failed-message: '&cYou do not have permission to challenge this gym!'
# This section defines the leader NPC, you can add additional requirements here
# The win commands execute when the player defeats the leader, and only accepts the %player% placeholder
# The loss commands execute when the player loses against the leader, and only accepts the %player% placeholder
# The team URL must be a valid pokepaste otherwise the battle will not start
# The team is given to the player, assuming it is a player gym, as a temporary team and will be removed and their original party returned at the end of the battle
leader:
    requirements: {}
    member:
        win-rewards:
            '1':
                # The following two settings are used to determine if this reward pool should be used. So it will compare the
                # player's current attempt (starting from 0) against those two numbers like so:
                # attempt-min <= attempt <= attempt-max (so 0 and 0 means only the first attempt)
                attempt-min: 0 # The inclusive min number of wins the player has had so far (starting from 0)
                attempt-max: 0 # The inclusive max number of wins the player has had so far (start from 0)
                reward-pool:
                    guaranteed-reward:
                        display-name: Example Display Name
                        commands:
                        - broadcast %player% defeated the npc gym leader!
                        messages: []
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
                    reward-rolls-min: 0
                    reward-rolls-max: 0
                    rewards:
                        entries: {}
            '2':
                attempt-min: 1
                attempt-max: 100
                reward-pool:
                    guaranteed-reward:
                        display-name: Example Display Name
                        commands:
                        - broadcast %player% defeated the npc gym leader another time
                            %attempt%!
                        messages: []
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
                    reward-rolls-min: 0
                    reward-rolls-max: 0
                    rewards:
                        entries: {}
        loss-rewards:
            guaranteed-reward:
                display-name: Example Display Name
                commands:
                - broadcast %player% lost to the npc gym leader!
                messages: []
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
            reward-rolls-min: 0
            reward-rolls-max: 0
            rewards:
                entries: {}
        npc-name: leader
        team-url: https://pokepast.es/9d18784429aced21
        npc-skin: example
        ai-mode: ADVANCED
        leader-location:
            pos-x: 0.0
            pos-y: 0.0
            pos-z: 0.0
            pitch: 0.0
            yaw: 0.0
        challenger-location:
            pos-x: 0.0
            pos-y: 0.0
            pos-z: 0.0
            pitch: 0.0
            yaw: 0.0
    battle-rules: {}
    id: leader
    battle-type: SINGLE
# This is the item that shows up in the /gyms GUI
display-item:
    enabled: true
    type: minecraft:diamond
    amount: '1'
    name: '&aExample Badge'
    flags: []
    lore:
    - Complete gym!
    enchants: {}
    nbt: {}
    positions:
        '0':
            x: 2
            y: 3
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
# The item that shows in the badge case when the player defeats the gym
badge-item:
    enabled: true
    type: minecraft:diamond
    amount: '1'
    name: '&aExample Badge'
    flags: []
    lore:
    - Complete gym!
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
# The item that shows up in the badge case when the player is yet to defeat the gym
no-badge-item:
    enabled: true
    type: minecraft:stone
    amount: '1'
    name: '&aExample Gym'
    flags: []
    lore:
    - Not complete gym!
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
# The item that shows up in the /gyms GUI when the user has not met the requirements to challenge the gym
not-met-reuirements-item:
    enabled: true
    type: minecraft:barrier
    amount: '1'
    name: Failed requirement
    flags: []
    lore:
    - 'Reason:'
    - '%reason%'
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
# The page of the GUI the gym should show up on (starting from 1)
gui-page: 1
# if the gym is an NPC gym, this should be false if the gym leaders are players
allows-n-p-c: true
# if the gym is a player gym, this should be false if the gym leaders are NPCs
allows-players: false
# The maximum players in the queue (this only works for player leader gyms)
max-queue: 0
# If pokemon exp gain should be disabled
disable-exp: true
# If spectating the battle should be disabled
disable-spectators: true
# The rewards can be obtained from defeating the leader twice
repeat-rewards: false
id: example_npc
name: Example NPC Leader Gym
# The webhook is currently unused
webhook:
    enabled: false
    tts: false
    embeds: {}

```

</details>

<details>

<summary>Gym config example</summary>



```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

requirements:
    '1':
        type: permission
        data: envy.gyms.gym.example
        failed-message: '&cYou do not have permission to challenge this gym!'
leader:
    requirements: {}
    member:
        win-rewards:
            '1':
                attempt-min: 0
                attempt-max: 0
                reward-pool:
                    guaranteed-reward:
                        display-name: Example Display Name
                        commands:
                        - broadcast %player% defeated the npc gym leader!
                        messages: []
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
                    reward-rolls-min: 0
                    reward-rolls-max: 0
                    rewards:
                        entries: {}
            '2':
                attempt-min: 1
                attempt-max: 100
                reward-pool:
                    guaranteed-reward:
                        display-name: Example Display Name
                        commands:
                        - broadcast %player% defeated the npc gym leader another time
                            %attempt%!
                        messages: []
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
                    reward-rolls-min: 0
                    reward-rolls-max: 0
                    rewards:
                        entries: {}
        loss-rewards:
            guaranteed-reward:
                display-name: Example Display Name
                commands:
                - broadcast %player% lost to the npc gym leader!
                messages: []
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
            reward-rolls-min: 0
            reward-rolls-max: 0
            rewards:
                entries: {}
        npc-name: leader
        team-url: https://pokepast.es/9d18784429aced21
        npc-skin: example
        ai-mode: ADVANCED
        leader-location:
            pos-x: 0.0
            pos-y: 0.0
            pos-z: 0.0
            pitch: 0.0
            yaw: 0.0
        challenger-location:
            pos-x: 0.0
            pos-y: 0.0
            pos-z: 0.0
            pitch: 0.0
            yaw: 0.0
    battle-rules: {}
    id: leader
    battle-type: SINGLE
display-item:
    enabled: true
    type: minecraft:diamond
    amount: '1'
    name: '&aExample Badge'
    flags: []
    lore:
    - Complete gym!
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
badge-item:
    enabled: true
    type: minecraft:diamond
    amount: '1'
    name: '&aExample Badge'
    flags: []
    lore:
    - Complete gym!
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
no-badge-item:
    enabled: true
    type: minecraft:stone
    amount: '1'
    name: '&aExample Gym'
    flags: []
    lore:
    - Not complete gym!
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
not-met-reuirements-item:
    enabled: true
    type: minecraft:barrier
    amount: '1'
    name: Failed requirement
    flags: []
    lore:
    - 'Reason:'
    - '%reason%'
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
gui-page: 1
allows-n-p-c: true
allows-players: false
max-queue: 0
disable-exp: true
disable-spectators: true
repeat-rewards: false
id: example_npc
name: Example NPC Leader Gym
webhook:
    enabled: false
    tts: false
    embeds: {}

```

</details>

## Example Category configs

You can find these configs, and add your own, under `config/EnvyGyms/categories/`.

It is important to note that for each category you want to add it will need it's own file.

<details>

<summary>Commented config example</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

# The display item to show in the categories UIs
display:
    enabled: true
    type: minecraft:diamond
    amount: '1'
    name: Example Gym Category
    flags: []
    lore:
    - ''
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
# The gyms associated with this category
gyms:
- example_npc
- example_players
# The page to show this category on in the categories, paginated UI (starts at 1)
page: 1
# The name of the category
name: example

```

</details>

<details>

<summary>Category config example</summary>

```yaml
# © EnvyWare Ltd Software 2022
# For assistance visit https://discord.envyware.co.uk

display:
    enabled: true
    type: minecraft:diamond
    amount: '1'
    name: Example Gym Category
    flags: []
    lore:
    - ''
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
gyms:
- example_npc
- example_players
page: 1
name: example

```

</details>
