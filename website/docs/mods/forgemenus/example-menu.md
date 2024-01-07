# Example Menu

```
inventory:
    identifier: example_menu
    name: Example
    height: 2
    close-commands: ['console:msg WELL DONE!', 'console:msg 
            Test', 'player:help', 'player:pay Envyful 1']
    items:
        one:
            positionX: 0
            positionY: 0
            type: 447
            amount: 1
            name: This is an item name! §bBLUE
            lore: [§bLore line 1!, §bLore line 2!]
            commands: ['console:bc test', 'console:ban Test!']
            requirement: 'testing.one'
            else:
              positionX: 0
              positionY: 0
              type: 3
              amount: 1
              name: 'Item name&c!'
              lore: [§bLore line 1!, §bLore line 3!]
              commands: ['console:bc test', 'console:ban Test!']
```

In the commands you can use any placeholders installed on your server for the ForgePlaceholderAPI.

If you want to force close the GUI for the player use `%close%`
