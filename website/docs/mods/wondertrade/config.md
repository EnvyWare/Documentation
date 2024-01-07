# Config

{% hint style="warning" %}
**NOTE:** This mod can use MySQL, if you wish to use that, change the save-mode to MYSQL. If you do not know how to make a database refer to [this](https://app.gitbook.com/o/VBNbt9QKM9Bl2VRr86F1/s/AMLZiQkdzA1GB4HSIevs/).
{% endhint %}

<details>

<summary>Default Config with Explanatory Comments</summary>

<pre><code><strong># © EnvyWare Ltd Software 2022
</strong>
# For assistance visit https://discord.envyware.co.uk

save-mode: JSON
broadcast-settings:
    always-broadcast: true
    broadcast-legends: true
    broadcast-ultra-beasts: true
    broadcast-shinies: true
default-generator-settings:
    blocked-specs:
    - hoopa
    allow-legends: true
    allow-ultra-beasts: true
    shiny-chance: 0.05
database-details:
    pool-name: WonderTrade
    ip: 0.0.0.0
    port: 3306
    username: admin
    password: password
    database: WonderTrade
    max-pool-size: 30
    max-life-time-seconds: 30
web-hooks:
    one:
        web-hook-path: config/WonderTradeForge/leg_web_hook.json
        trigger-spec: legendary
cooldown-seconds: 3600
min-required-level: 30
number-in-pool: 30
persistent-pool: true
disable-u-i: false
</code></pre>

</details>
