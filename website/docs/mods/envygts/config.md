# Config

> **Warning:** If you do not have a database nor know how to set one up please refer to [this](https://app.gitbook.com/s/AMLZiQkdzA1GB4HSIevs/xampp) if you are on a local system or we have a small list of paid server host FAQ's [here](https://app.gitbook.com/s/AMLZiQkdzA1GB4HSIevs/paid-server-hosting-databases).

<details>

<summary>Default Config</summary>

```yaml
# © EnvyWare Ltd Software 2022

# For assistance visit https://discord.envyware.co.uk

database-details:
    pool-name: EnvyGTS
    ip: 0.0.0.0
    port: 3306
    username: admin
    password: password
    database: database
    max-pool-size: 30
    max-life-time-seconds: 30
item-url-formats:
    minecraft: https://minecraft.fandom.com/wiki/Special:FilePath/%item_id%.png
fallback: https://minecraft.fandom.com/wiki/Special:FilePath/%item_id%.png
no-u-r-l: https://minecraft.fandom.com/wiki/Special:FilePath/%item_id%.png
min-trade-duration: 300
default-trade-duration-seconds: 300
max-trade-duration-seconds: 172800
min-pokemon-price: 10000.0
enable-web-hooks: false
owner-remove-button: RIGHT
enable-tax: false
tax-rate: 0.95
enable-new-listing-broadcasts: true
max-listings-per-user: 5
max-price: 1.0E7
allow-eggs: false
enable-opening-u-i-message: true
blacklist:
- hoopa
item-black-list:
- minecraft:stone
min-price-modifiers:
    example:
        spec: shiny:1
        min-price:
            type: '*'
            value: 2.0
            priority: 1
unbreedable-conditions:
- abs:2
item-replacement-u-r-ls:
    pixelmon:gracedia: https://google.com

```

</details>
