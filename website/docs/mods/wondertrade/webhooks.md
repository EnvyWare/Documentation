---
description: Here is an example webhook you can use for discord integrations.
---

# Webhooks

Here is what you will change inside of the WonderTrade Config.\


```yaml
web-hooks:
    one:
        web-hook-path: config/WonderTradeForge/webhooks/broadcast.json
        trigger-spec: pixelmon
```

Now Create a file directory leading to `config/WonderTradeForge/webhooks/`\
Then create a file called `broadcast.json`\
Inside of the `broadcast.json`, paste this and then insert your discord webhook URL.\


```json
{
   "url": "INSERT WEBHOOK HERE",
   "username":"Reforged GTS",
   "avatar_url": "https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif",
   "tts": false,
   "icon_url":"https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif",
   "embeds":[
      {
         "title":"NEW ADDITION",
         "description": "",
         "url": "https://google.com",
         "color":65280,
         "footer":{
            "icon_url":"https://play.pokemonshowdown.com/sprites/ani/%received_species_lower%.gif",
            "text":"Wonder Trade"
         },
         "thumbnail":{
            "url":"https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif"
         },
         "author":{
            "name":"Wonder Trade",
            "url":"https://discordapp.com",
            "icon_url":"https://pixelmonmod.com/w/images/logo/Fullcolor-50x50.png"
         },
         "fields":[
            {
               "name":"Wonder Trade - New Addition",
               "value":"**%player%** has added %species% to the Pool! \\n**IVs:** %given_ivs% \\n **EVs:** %given_evs% \\n**Nature:** %given_nature% \\n**Growth:** %given_growth%",
               "inline":true
            },
            {
               "name":"Wonder Trade - Received Pokemon",
               "value":"**%player%** has received %received_species% in return! \\n**IVs:** %received_ivs% \\n **EVs:** %received_evs% \\n**Nature:** %received_nature% \\n**Growth:** %received_growth%",
               "inline":true
            }
         ]
      }
   ]
}
```

<img src="../.gitbook/assets/Screenshot 2023-04-19 125938.png" alt=""></img>