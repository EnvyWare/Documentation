# Config
All the "battle types" can be found in the `config/BattleEnforcement/battleTypes` directory.

## Battle Types
```yaml
id: "example" # Unique identifier for this battle type
required-pokemon: 6 # The number of battle-able pokemon the players need in their party
rules: # The battle rules to apply to the battle
  one:
     battle-rule-type: "FullHeal"
     battle-rule-value: "true"
blacklist-pokemon: # The pokemon to blacklist
  - "mew"
```