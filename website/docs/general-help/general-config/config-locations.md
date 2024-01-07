---
description: Locations to be teleported to
---

# Config Locations

Config locations are typically used for defining a place that a player will be teleported to.

They contain a world, x, y, z, pitch and yaw. For those that aren't aware what each of those is I recommend reading [this](https://bukkit.org/threads/what-is-yaw-and-pitch.101146/).

<details>

<summary>Uncommented</summary>

```yaml
 teleport:
    world-name: world
    pos-x: 0.0
    pos-y: 100.0
    pos-z: 0.0
    pitch: 0.0
    yaw: 0.0
```

</details>

<details>

<summary>Commented</summary>

```yaml
 teleport:
    world-name: world # The name of the world to teleport to
    pos-x: 0.0 # x pos
    pos-y: 100.0 # y pos
    pos-z: 0.0 # z pos
    pitch: 0.0 # pitch
    yaw: 0.0 # yaw
```

</details>
