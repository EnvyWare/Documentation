# Config

{% hint style="warning" %}
**NOTE:** This mod can use MySQL, if you wish to use that, change the save-mode to MYSQL. If you do not know how to make a database refer to [this](https://app.gitbook.com/o/VBNbt9QKM9Bl2VRr86F1/s/AMLZiQkdzA1GB4HSIevs/).
{% endhint %}

<details>

<summary>Default Config with Explanatory Comments</summary>

```yaml
# © EnvyWare Ltd Software 2022

sql-database-details: #Only Needed if economy-hanlder is tokens
    pool-name: UltimatePokeBuilder
    ip: 0.0.0.0
    port: 3306
    username: username
    password: password
    database: database
    max-pool-size: 30
    max-life-time-seconds: 30
save-mode: JSON #Set to MYSQL for SQL connection or JSON for flatfile
economy-handler: tokens #Use pixelmon for pixelmon currency or tokens for tokens
default-tokens: 500.0
shiny-cost: 200.0
untradeable-cost: 600.0
unbreedable-cost: 600.0
gender-cost: 600.0
ability-cost: 500.0
hidden-ability-cost: 1000.0
cost-per-level: 200.0
ev-increment-costs:
    defense: 100
    attack: 100
    hp: 100
    special_defense: 100
    special_attack: 100
    speed: 100
iv-increment-costs:
    defense: 100
    attack: 100
    hp: 100
    special_defense: 100
    special_attack: 100
    speed: 100
ball-costs:
    luxury_ball: 100
    nest_ball: 100
    quick_ball: 100
    great_ball: 100
    dusk_ball: 100
    cherish_ball: 100
    timer_ball: 100
    moon_ball: 100
    repeat_ball: 100
    love_ball: 100
    net_ball: 100
    dive_ball: 100
    level_ball: 100
    sport_ball: 100
    safari_ball: 100
    heavy_ball: 100
    dream_ball: 100
    ultra_ball: 100
    fast_ball: 100
    heal_ball: 100
    beast_ball: 100
    poke_ball: 100
    lure_ball: 100
    gs_ball: 100
    friend_ball: 100
    master_ball: 100
    premier_ball: 100
    park_ball: 100
growth-costs:
    small: 100
    pygmy: 100
    giant: 100
    ordinary: 100
    huge: 100
    ginormous: 100
    microscopic: 100
    enormous: 100
    runt: 100
nature-costs:
    lax: 100
    docile: 100
    bashful: 100
    timid: 100
    mild: 100
    hardy: 100
    sassy: 100
    bold: 100
    quirky: 100
    modest: 100
    relaxed: 100
    rash: 100
    calm: 100
    adamant: 100
    impish: 100
    hasty: 100
    serious: 100
    brave: 100
    quiet: 100
    gentle: 100
    lonely: 100
    naughty: 100
    jolly: 100
    naive: 100
blacklist-specs: #blacklist certain specs from being edited with UPB
- ditto
- islegendary:true
min-price-modifiers:
    example:
        spec: shiny:1
        min-price:
            type: '*'
            value: 2.0
        required-permission: ''

```

</details>
