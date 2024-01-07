# Webhooks

First you must ensure that the `enable-web-hooks` setting in `config.yml` is set to `true`.

Then you need to create a `webhooks` directory in the same folder as the config (i.e. `config/ReforgedGTS/webhooks/`)

In this directory you will add the JSON files for each different type of WebHook.

There are three different types of event that have a related webhook:

* `publisher` - For when trades are created
* `purchaser` - For when trades are purchased
* `remover` - For when trades are removed

For each of these you'll need two files. One for the items and one for the Pokemon.

Which means if you had all enabled your file system would look like this:

```
config/
   ReforgedGTS/
       webhooks/
           publisher-pokemon.json
           publisher-item.json
           purchaser-pokemon.json
           purchaser-item.json
           remover-pokemon.json
           remover-item.json
       config.yml
       locale.yml
       guis.yml
```

Each JSON file contains the embed information.

Here is an example for the publisher-pokemon.json file:

```
{
   "url": "WEBHOOK-URL-HERE",
   "username":"Reforged GTS",
   "avatar_url": "https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif",
   "tts": false,
   "icon_url":"https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif",
   "embeds":[
      {
         "title":"NEW LISTING",
         "description": "By %seller%",
         "url": "https://google.com",
         "color":65280,
         "footer":{
            "icon_url":"",
            "text":"Reforged GTS"
         },
         "thumbnail":{
            "url":"https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif"
         },
         "author":{
            "name":"Reforged GTS - New Listing",
            "url":"https://discordapp.com",
            "icon_url":"https://pixelmonmod.com/w/images/logo/Fullcolor-50x50.png"
         },
         "fields":[
            {
               "name":"Listing Information -",
               "value":"Seller: **%seller%** \\nPrice: **$%price%** \\nExpiration: %expires_in%",
               "inline":false
            },
            {
               "name":"Info:",
               "value":"Pokemon: %species%\\nGender: %gender%\\nLevel: %level%\\nAbility: %ability%\\nUntradeable: %untradeable%\\nUnbreedable: %unbreedable%",
               "inline":true
            },
            {
               "name":"Stats:",
               "value":"Level: %level%\\nForm: %form%\\nShiny: %shiny%\\nNature: %nature%\\nFriendship: %friendship%",
               "inline":true
            },
            {
               "name":"----",
               "value":"----",
               "inline":false
            },
            {
               "name":"IVs:",
               "value":"%iv_hp%/%iv_attack%/%iv_defence%/%iv_spattack%/%iv_spdefence%/%iv_speed% (%iv_percentage%%)    ",
               "inline":true
            },
            {
               "name":"EVs:",
               "value":"%ev_hp%/%ev_attack%/%ev_defence%/%ev_spattack%/%ev_spdefence%/%ev_speed%",
               "inline":true
            }
         ]
      }
   ]
}
```
