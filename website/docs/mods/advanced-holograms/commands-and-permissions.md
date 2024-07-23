---
description: >-
  Here you will find all of the commands, how they work, and the required
  permissions for each.
---

# Commands & Permissions

| Command                                                                                                                                 | Description                                                                                                                                      | Permission                             |
|-----------------------------------------------------------------------------------------------------------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| <p><code>/advancedholograms</code><br/><code>/hd</code><br/><code>/holograms</code><br/><code>/holographicdisplays</code></p>         | Base command for all of the mod                                                                                                                  | `advancedholograms.command`.           |
| <p><code>/hd help</code><br/><code>/hd</code></p>                                                                                        | Help command, or `/hd` for info on all commands.                                                                                                 | `advancedholograms.command.help`       |
| `/hd list <page>`                                                                                                                       | Lists all the holograms on the server.                                                                                                           | `advancedholograms.command.list`       |
| <p><code>/hd create &#x3C;name> &#x3C;first line></code><br/><code>/hd c &#x3C;name> &#x3C;first line></code></p>                        | This command is used for initially creating holograms on your server. When no first line is present the command uses the name as the first line. | `advancedholograms.command.create`     |
| <p><code>/hd delete &#x3C;name></code><br/><code>/hd d &#x3C;name></code></p>                                                            | This command is used for removing holograms on your server.                                                                                      | `advancedholograms.command.delete`     |
| <p><code>/hd nearby &#x3C;radius></code><br/><code>/hd near &#x3C;radius></code></p>                                                     | This command is used for finding nearby holograms.                                                                                               | `advancedholograms.command.nearby`     |
| `/hd tp <hologram>`                                                                                                                     | This command is used for teleporting to a specific hologram's position.                                                                          | `advancedholograms.command.teleport`   |
| <p><code>/hd movehere &#x3C;hologram></code><br/><code>/hd mvh &#x3C;hologram></code><br/><code>/hd mv &#x3C;hologram></code></p>         | This command is used for teleporting a hologram to the user.                                                                                     | `advancedholograms.command.movehere`   |
| <p><code>/hd addline &#x3C;hologram> &#x3C;line></code><br/><code>/hd al &#x3C;hologram> &#x3C;line></code></p>                          | This command is used for adding lines to holograms                                                                                               | `advancedholograms.command.addline`    |
| <p><code>/hd removeline &#x3C;hologram> &#x3C;line#></code><br/><code>/hd rl &#x3C;hologram> &#x3C;line#></code></p>                     | This command is used for removing lines from holograms                                                                                           | `advancedholograms.command.removeline` |
| <p><code>/hd setline &#x3C;hologram> &#x3C;line#> &#x3C;line></code><br/><code>/hd sl &#x3C;hologram> &#x3C;line#> &#x3C;line></code></p> | This command is used for setting lines on holograms                                                                                              | `advancedholograms.command.setline`    |
| `/hd insertline <hologram> <line#> <line>`                                                                                              | This command is used for inserting lines on holograms. It will insert the line above the line number specified.                                  | `advancedholograms.command.insertline` |
| <p><code>/hd copy &#x3C;hologram> &#x3C;newId></code><br/><code>/hd duplicate &#x3C;hologram> &#x3C;newId></code></p>                    | This command is used for copying all the lines of one hologram to a new one at your position.                                                    | `advancedholograms.command.copy`       |
| <p><code>/hd createff &#x3C;hologram> &#x3C;path></code><br/><code>/hd createfromfile &#x3C;hologram> &#x3C;path></code></p>             | This command is used for creating a hologram from a .txt file specified in the arguments.                                                        | `advancedholograms.command.file.copy`  |