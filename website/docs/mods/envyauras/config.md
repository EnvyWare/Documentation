# Config

<details>

<summary>Configs</summary>

You can create new particle types by creating files in the `config/EnvyAuras/auras` directory. Every
file in this directory will be loaded as a new aura type. Each aura type has an example that can be found
in the `config/EnvyAuras/auras/defaults` directory.

Example Aura:

```yaml
# © EnvyWare Ltd Software 2024
# For assistance visit https://discord.envyware.co.uk

display-item:
    enabled: true
    type: minecraft:stone
    amount: '1'
    name: '&a&lExample 4!'
    flags: []
    lore: []
    enchants: {}
    nbt: {}
display-calculation:
    calculation: tick % 10 == 0
id: example4
display-name: '&a&lExample 4!'
aura:
    id: wings
    # This sets the particle type to use
    particle-type: flame
    # This sets the x coordinate for the center of the sphere. Use 'entityX' to use the entity's x coordinate
    x-center-calculation:
        calculation: entityX
    # This sets the z coordinate for the center of the sphere. Use 'entityY' to use the entity's Y coordinate, 'random' to use a random number (0-1), and 'entityHeight' to use the entity's height
    y-center-calculation:
        calculation: entityY + (entityHeight / 2)
    # This sets the z coordinate for the center of the sphere. Use 'entityZ' to use the entity's z coordinate
    z-center-calculation:
        calculation: entityZ
    # This sets the size of the wings
    size: 0.5
    # This sets the amount of particles to generate
    angle-delta: 0.01
```

</details>
