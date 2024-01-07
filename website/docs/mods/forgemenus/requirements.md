# Requirements

You can add different types of requirements using the following format:

```
    items:
        one:
            positionX: 0
            positionY: 0
            type: 'playerhead'
            damage: 3
            amount: 1
            name: ''
            lore: []
            nbt:
                one:
                    type: String
                    key: 'UIText'
                    value: 'Example Text'
                two:
                    type: String
                    key: 'UIHoverText'
                    value: 'Example value'
            commands: ['%close%']
            requirements:
                one:
                    type: 'code'
                    code: "'%forge_name%' == 'Envyful'"
                two:
                    type: 'itemstack_in_inventory'
                    item_type: 'minecraft:stone'
                    amount: 1
                    name: 'Test'
                    damage: 0
                    lore: []
                three:
                    type: 'itemstack_in_slot'
                    slot: 1
                    item_type: 'minecraft:stone'
                    amount: 1
                    name: 'Test'
                    damage: 0
                    lore: []
                four:
                    type: 'permission'
                    permission: 'hello'
            else:
              positionX: 0
              positionY: 0
              type: 3
              amount: 1
              name: 'Item name&c!'
              lore: [§bLore line 1!, §bLore line 3!]
              commands: ['console:bc test', 'console:ban Test!']
```

