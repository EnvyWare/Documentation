# Clue Step Types

Here you can find a list of the clue step types, and examples.

## Catch Pokemon

This is for giving the user a clue step that requires them to catch a random number of pokemon, matching the spec provided, between the min and max value.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.CatchPokemonClueStepType
   spec: shiny
   min-amount: 1
   max-amount: 3
   description: Catch %amount%/%complete% shiny pokemon
```

</details>

## Defeat Trainer

This is for giving the user a clue step that requires them to defeat any, or a specific, trainer a random number of times between the min and max value.


> **INFO** \
> If you leave the UUID section blank it will accept any trainer

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.DefeatTrainerClueStepType
   uuid: ''
   min-amount: 1
   max-amount: 3
   description: Defeat any trainer %amount%/%complete%
```

</details>

## Defeat Wild Pokemon

This is for giving the user a clue step that requires them to defeat a random number of wild pokemon, that match the spec provided, between the min and max value.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.DefeatWildPokemonClueStepType
   spec: shiny
   min-amount: 1
   max-amount: 3
   description: Defeat %amount%/%complete% wild shiny pokemon
```

</details>

## Give Traded Pokemon

This is for giving the user a clue step that requires them to give someone a random number (that will generate between the min and max value) of pokemon that match the spec provided.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.GiveTradedPokemonClueStepType
   spec: shiny
   min-amount: 1
   max-amount: 3
   description: Trade to another player %amount%/%complete% shiny pokemon
```

</details>

## Hatch Pokemon

This is for giving the user a clue step that requires them to hatch a random number (that will generate between the min and max value) of pokemon that match the spec provided.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.HatchPokemonClueStepType
   spec: shiny
   min-amount: 1
   max-amount: 3
   description: Hatch %amount%/%complete% shiny pokemon
```

</details>

## Knockout Pokemon

This is for giving the user a clue step that requires them to knock out a random number (that will generate between the min and max value) of pokemon that match the spec provided.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.KnockoutPokemonClueStepType
   spec: shiny
   min-amount: 1
   max-amount: 3
   description: KO %amount%/%complete% shiny pokemon
```

</details>

## Level up Pokemon

This is for giving the user a clue step that requires them to level up a pokemon a random number of times (that will generate between the min and max value) that matches the spec provided.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.LevelUpPokemonClueStepType
   spec: shiny
   min-amount: 1
   max-amount: 3
   description: Level up %amount%/%complete% shiny pokemon
```

</details>

## Lose To Trainer

This is for giving the user a clue step that requires them to lose to a specific, or any, trainer a random number of times (that will generate between the min and max value).

> **INFO** \
> Leaving the UUID section blank will allow them to lose to any NPC

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.LoseToTrainerClueStepType
   uuid: ''
   min-amount: 1
   max-amount: 3
   description: Lose to any trainer %amount%/%complete%
```

</details>

## Mine Blocks

This is for giving the user a clue step that requires them to mine the specific block a random number of times.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.MineBlocksClueStepType
   block-type: 'pixelmon:bauxite_ore'
   min-amount: 1
   max-amount: 3
   description: Mine bauxite ore %amount%/%complete%
```

</details>

## Place Blocks

This is for giving the user a clue step that requires them to place the specific block a random number of times.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.PlaceBlocksClueStepType
   block-type: 'pixelmon:bauxite_ore'
   min-amount: 1
   max-amount: 3
   description: Place bauxite ore %amount%/%complete%
```

</details>

## Receive Traded Pokemon

This is for giving the user a clue step that requires them to receivea random number (that will generate between the min and max value) of pokemon that match the spec provided.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.ReceiveTradedPokemonClueStepType
   spec: shiny
   min-amount: 1
   max-amount: 3
   description: Receive in trade from another player %amount%/%complete% shiny pokemon
```

</details>

## Release Pokemon

This is for giving the user a clue step that requires them to release a pokemon a random number of times (that will generate between the min and max value) that matches the spec provided.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.RelasePokemonClueStepType
   spec: shiny
   min-amount: 1
   max-amount: 3
   description: Release %amount%/%complete% shiny pokemon
```

</details>

## Use Move

This is for giving the user a clue step that requires them to use a specific move a random number of times (that will generate between the min and max value).

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.UseMoveClueStepType
   move: 'Splash'
   min-amount: 1
   max-amount: 3
   description: Use Splash %amount%/%complete%
```

</details>

## Evolve From Pokemon

This is for giving the user a clue step that requires them to evolve from a pokemon a random number of times.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.EvolveFromPokemonClueStepType
   spec: 'shiny'
   min-amount: 1
   max-amount: 3
   description: Evolve a shiny pokemon %amount%/%complete%
```

</details>

## Evolve To Pokemon

This is for giving the user a clue step that requires them to evolve to a pokemon a random number of times.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.EvolveToPokemonClueStepType
   spec: 'gyarados'
   min-amount: 1
   max-amount: 3
   description: Evolve magikarp %amount%/%complete%
```

</details>

## Fish Pokemon

This is for giving the user a clue step that requires them to catch a pokemon from the Pixelmon fishing mechanic.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.FishUpPokemonClueStepType
   spec: 'shiny'
   min-amount: 1
   max-amount: 3
   description: Catch a shiny pokemon %amount%/%complete%
```

</details>

## Visit Biome

This is for giving the user a clue step that requires them to visit a specific biome in any world.

<details>

<summary>Example</summary>

```yaml
clue-step-type:
   __class__: com.envyful.clue.scrolls.api.type.impl.VisitBiomeClueStepType
   biome: 'minecraft:plains'
   min-amount: 1
   max-amount: 3
   description: Visit plains %amount%/%complete%
```

</details>
