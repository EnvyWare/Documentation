# Config

> **WARNING** \
> If you do not have a database nor know how to set one up please refer to [this](https://app.gitbook.com/s/AMLZiQkdzA1GB4HSIevs/xampp) if you are on a local system or we have a small list of paid server host FAQ's [here](https://app.gitbook.com/s/AMLZiQkdzA1GB4HSIevs/paid-server-hosting-databases).

<details>

<summary>Default Config</summary>

```yaml
# © EnvyWare Ltd Software 2022

# For assistance visit https://discord.envyware.co.uk

database:
    pool-name: EconomiesForge
    ip: 0.0.0.0
    port: 3306
    username: admin
    password: password
    database: eco
    max-pool-size: 30
    max-life-time-seconds: 30
balance-shows-all: false
economies:
    one:
        id: one
        display-name: dollar
        display-name-plural: dollars
        identifier: $
        prefix: true
        is-default: true
        default-value: 250.0
        minimum-pay-amount: 1.0
        economy-format: '%.2f'
        cache-duration-seconds: 120

```

</details>
