# Config

```yaml
# © EnvyWare Ltd Software 2022

# For assistance visit https://discord.envyware.co.uk

world-name: SafariWorld
main-zone: Main
npc-skin: Gardener
cost: 200.0
time-in-seconds: 300
spawn-world-name: spawn
safari-settings:
    allow-p-v-e: true
    allow-p-v-p: false
    cache-inventory: false
    temp-items:
        example:
            enabled: true
            type: pixelmon:poke_ball
            amount: '16'
            name: Safari Poke Ball
            flags: []
            lore: []
            enchants: {}
            nbt: {}
    allowed-commands:
    - safari
    - pixelsafari
spawn-position:
    name: Spawn
    x: 0
    y: 0
    z: 0
    yaw: 0.0
    pitch: 0.0
zones:
    one:
        name: Main
        x: 0
        y: 100
        z: 0
        yaw: 0.0
        pitch: 0.0
    two:
        name: SomeBiome
        x: 10
        y: 100
        z: 10
        yaw: 0.0
        pitch: 0.0
start-commmands:
- give %player% pixelmon:safari_ball 10

```
