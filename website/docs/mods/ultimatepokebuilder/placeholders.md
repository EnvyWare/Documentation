# Placeholders

## GUI Placeholders

#### General Placeholders

| Placeholder             | Description                                                                     |
| ----------------------- | ------------------------------------------------------------------------------- |
| `%cost%`                | Shows the TOTAL cost of editing the Pokemon, all-inclusive.                     |
| `%unbreedable_cost%`    | Shows the cost for setting the Pokemon to Unbreedable as defined in the config  |
| `%untradeable_cost%`    | Shows the cost for setting the Pokemon to Untradeable as defined in the config  |
| `%shiny_cost%`          | Shows the cost for setting the Pokemon to Shiny as defined in the config        |
| `%ability_cost%`        | Shows the cost for setting the Pokemons Ability as defined in the config        |
| `%hidden_ability_cost%` | Shows the cost for giving the Pokemon a Hidden Ability as defined in the config |
| `%gender_cost%`         | Shows the cost for setting the Pokemons Gender as defined in the config         |
| `%per_level_cost%`      | Shows the cost for setting the Pokemon to Unbreedable as defined in the config  |

#### Custom Variable Placeholders

Some costs are defined using custom keys/names in the config, such as **pokeballs**, **growths**, **natures**, and **IV Increments**. These all follow the same general format. As an example, if your config has the following growth-costs defined:

`growth-costs:`\
&#x20;   `small: 100`\
&#x20;   `pygmy: 500`\
&#x20;   `enormous: 500`

Your placeholders for the above costs would be `%small_cost%`, `%pygmy_cost%`, `%enormous_cost%`, etc. to display the individual adjustment costs.

##
