# Commands & Permissions

<table><thead><tr><th width="231.33333333333331">Command</th><th>Description</th><th>Permission</th></tr></thead><tbody><tr><td><code>/overlay reload</code></td><td>Reloads the overlays</td><td><code>pixelmon.overlays.command.reload</code></td></tr><tr><td><code>/overlay toggle</code></td><td>Toggles the overlay</td><td><code>pixelmon.overlays.command.toggle</code></td></tr><tr><td><code>/overlay bc &#x3C;targets></code></td><td>Read Below</td><td><code>pixelmon.overlay.command.broadcast</code></td></tr></tbody></table>

### Broadcast Command

Upon specifying no targets the broadcast will default to the entire server.

You can specify as many targets as you like: `/overlay bc one Envyful Envyful1 Envyful2`

The id comes from the config section's header. For example, the id for the below is `one` (all ids are case-sensitive):

```
    one:
        layout-type: LEFT_AND_RIGHT
        text:
        - Line 1
        - Line 2
        - ETC
        - yanno
        duration-seconds: 30
```
