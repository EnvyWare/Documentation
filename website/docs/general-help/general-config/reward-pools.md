# Reward Pools

Reward pools are a config section that defines a set of rewards that will be given to a player after a specific event. It contains both guaranteed rewards, and also a chance based system.

## Reward Section

Each reward section looks the same, and like so

<details>

<summary>Reward Section</summary>

```yaml
display-name: Example Display Name
commands:
  - /broadcast Example hunt was completed by %player%
messages:
  - Hello %player%
```

</details>

<details>

<summary>Commented Reward Section</summary>

```yaml
# The display name of the reward - this isn't always used by the mod
display-name: Example Display Name
# The commands executed when the event occurs
# The only accepted placeholder is %player% and requries a /
commands:
  - /broadcast Example hunt was completed by %player%
# The message that will be sent to the player
# The only placeholder accepted is %player%
messages:
  - Hello %player%
```

</details>

## Full Reward Pool Section

The reward pool has both guaranteed rewards, and chance based rewards.

The chances work as a weighted system, where the weights are tallied and then used to calculate the percentage chance of that reward being selected.

For example, if there's two rewards in the chance one with a weight of 9 and another with a wieght of 1 then the chance of the second is 10%, and the chance of the first 90%.

The min and max rolls section determines how many of the chance rewards should be added, randomly between the min and max values. For example, if the min is 1 and the max is 5 then it will select a random number of rewards from the chance section between 1 and 5.

<details>

<summary>Reward Pool</summary>

```yaml
rewards:
    guaranteed-reward:
        display-name: Example Display Name
        commands:
        - /broadcast Example hunt was completed by %player%
        messages:
        - Hello %player%
    reward-rolls-min: 1
    reward-rolls-max: 1
    rewards:
        entries:
            '0':
                weight: 10.0
                object:
                    display-name: Example Display Name
                    commands:
                    - broadcast Example hunt was completed by %player%
                    messages: []
            '1':
                weight: 1.0
                object:
                    display-name: Example Display Name
                    commands:
                    - broadcast Example hunt was completed by %player%
                    messages: []
```

</details>
