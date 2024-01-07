# Commands & Permissions

All the commands are a sub command of the EnvyGyms root command.



## Poke Paste Test Command

Aliases:

* `pokepasteload`
* `lpp`

`` Permission: `envy.gyms.command.poke.paste.load` ``

Description: Loads the pokepaste to your party (/lpp \<url>

## Root Command

Aliases:

* `envygyms`
* `gyms`
* `egyms`
* `playergyms`
* `npcgyms`
* `gym`

Permission: `envy.gyms.command`

Description: This comand will send the root command message found in the locale.yml, and then open the categories UI if the sender is a player.

## Sub commands

### Reload Command

Aliases:

* `reload`

Permission: `envy.gyms.command.reload`

Description: Reloads the configs

### List Command

Aliases:

* `list`
* `l`

Permission: `envy.gyms.command.list`

Description: Opens the gyms categories UI

### Challenge Command

Aliases:

* `challenge`
* `c`

Permission: `envy.gyms.command.challenge`

Description: Allows the player to challenge a gym (/envygyms challenge \<gym>)

### Leader List Command

Aliases:

* `leaderlist`
* `ll`

Permission: `envy.gyms.command.leader.list`

Description: Opens UI for leaders to accept challenges and see how many people are in the queues for each gyms.

### Clear Cooldown command

Aliases:

* `clearcooldown`
* `cc`

Permission: `envy.gyms.command.cooldown.clear`

Description: Clear a cooldown for a player for a specific gym (/envygyms clearcooldown Envyful example\_npc)

### Leave Queue Command

Aliases:

* `leaveq`
* `leavequeue`
* `lq`

Permission: `envy.gyms.command.leave.queue`

Description: A player command to exit the gym challenge queue they are currently in (/envygyms leavequeue)

### Complete Gym Command

Aliases:

* `completegym`
* `cg`

Permission: `envy.gyms.command.cooldown.clear`

Description: Marks the player as having completed (or "beaten") the gym hence attempting to give them rewards for their next attempt

### Start cooldown command

Aliases:

* `startcooldown`
* `sc`

Permission: `envy.gyms.command.cooldown.start`

Description: Enters the player into a cooldown for that gym (/envygyms startcooldown Envyful example\_npc)

### Badge Case Command

Aliases:

* `badgecase`
* `bc`

Permission: `envy.gyms.command.badge.case`

Description: Allows the player to see which gyms they've beaten

### Request Command

Aliases:

* `request`

Permission: `envy.gyms.command.request`

Description: If the player meets the requirements to challenge the gym it sends a notification to Discord, and sets a cooldown for requesting again.



