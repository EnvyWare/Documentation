# Config

> **NOTE:** This mod can use MySQL, if you wish to use that, change the save-mode to MYSQL. If you do not know how to make a database refer to [this](https://app.gitbook.com/o/VBNbt9QKM9Bl2VRr86F1/s/AMLZiQkdzA1GB4HSIevs/).

<details>

<summary>Default Config</summary>

```yaml
# © EnvyWare Ltd Software 2022

# For assistance visit https://discord.envyware.co.uk

save-mode: JSON
database-details:
    pool-name: example
    ip: 0.0.0.0
    port: 3306
    username: username
    password: password
    database: database
    max-pool-size: 30
    max-life-time-seconds: 30
vault-groups:
    one:
        group-id: example
        permission: com.envyware.example
        vault-number: 3
show-options:
    one:
        enabled: true
        type: minecraft:diamond
        amount: '1'
        damage: '0'
        name: this isn't even important
        flags: []
        lore: []
        enchants: {}
        nbt: {}
    two:
        enabled: true
        type: pixelmon:pixelmon_sprite
        amount: '1'
        damage: '0'
        name: ''
        flags: []
        lore: []
        enchants: {}
        nbt:
            ndex:
                type: short
                data: '1'
            form:
                type: string
                data: ''
            gender:
                type: byte
                data: '0'
            palette:
                type: string
                data: none
vault-height: 6
default-vault-name: 'Vault #%id%'
default-display-item:
    enabled: true
    type: minecraft:stone
    amount: '1'
    name: ' '
    flags: []
    lore: []
    enchants: {}
    nbt: {}

```

</details>
