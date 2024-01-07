# Config

Lower priorities are checked first for permissions and then it goes up the priorities. For example, if Admin group has priority 90 and Mod has priority 80 then it will check for mod group first, and then Admin.

<details>

<summary>Example configuration</summary>

```
header:
- ' '
- '&bExample Server Name'
- ' '
- '&7(&a%forge_online% / &c%forge_max_online%&7)'
- ' '
footer:
- ' '
- 'Discord: discord.gg/pixelmon'
- ' '
groups:
    idiot:
        identifier: hello
        prefix: '&bPrefix1 &r'
        suffix: '&cFatter'
        weight: 5
        permission: 'first.permission'
    idiot2:
        identifier: hello2
        prefix: '&bPrefix2 &r'
        suffix: '&8[&b%reforged_wins%&8] &r'
        weight: 6
        permission: 'second.permission'
```

</details>
