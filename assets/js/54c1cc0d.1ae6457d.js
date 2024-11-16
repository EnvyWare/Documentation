"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8562],{8150:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"mods/envygts/webhooks","title":"Webhooks","description":"Important \\\\","source":"@site/docs/mods/envygts/webhooks.md","sourceDirName":"mods/envygts","slug":"/mods/envygts/webhooks","permalink":"/docs/mods/envygts/webhooks","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"modsSidebar","previous":{"title":"Placeholders","permalink":"/docs/mods/envygts/placeholders"},"next":{"title":"EnvyHunt","permalink":"/docs/mods/envyhunt/"}}');var r=o(4848),t=o(8453);const i={},l="Webhooks",c={},a=[];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"webhooks",children:"Webhooks"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important"})," ",(0,r.jsx)(n.br,{}),"\n","Make sure ",(0,r.jsx)(n.code,{children:"enable-web-hooks"})," is set to true in the ",(0,r.jsx)(n.code,{children:"config.yml"})," otherwise all the following will not work!"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important"})," ",(0,r.jsx)(n.br,{}),"\n","This feature requires knowledge of Discord Webhooks to use. If you don't know what those are, start here: ",(0,r.jsx)(n.a,{href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",children:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Then you need to create a ",(0,r.jsx)(n.code,{children:"webhooks"})," directory in the same folder as the config (i.e. ",(0,r.jsx)(n.code,{children:"config/EnvyGTS/webhooks/"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"In this directory you will add the JSON files for each different type of WebHook."}),"\n",(0,r.jsx)(n.p,{children:"There are three different types of event that have a related webhook:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"publisher"})," - For when trades are created"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"purchaser"})," - For when trades are purchased"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"remover"})," - For when trades are removed"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For each of these you'll need two files. One for the items and one for the Pokemon."}),"\n",(0,r.jsx)(n.p,{children:"Which means if you had all enabled your file system would look like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"config/\n   EnvyGTS/\n       webhooks/\n           publisher-pokemon.json\n           publisher-item.json\n           purchaser-pokemon.json\n           purchaser-item.json\n           remover-pokemon.json\n           remover-item.json\n       config.yml\n       locale.yml\n       guis.yml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Each JSON file contains the embed information."}),"\n",(0,r.jsx)(n.p,{children:"Here is an example for the publisher-pokemon.json file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n   "url": "WEBHOOK-URL-HERE",\n   "username":"EnvyGTS",\n   "avatar_url": "https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif",\n   "tts": false,\n   "icon_url":"https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif",\n   "embeds":[\n      {\n         "title":"NEW LISTING",\n         "description": "By %seller%",\n         "url": "https://google.com",\n         "color":65280,\n         "footer":{\n            "icon_url":"",\n            "text":"Reforged GTS"\n         },\n         "thumbnail":{\n            "url":"https://play.pokemonshowdown.com/sprites/ani/%species_lower%.gif"\n         },\n         "author":{\n            "name":"Reforged GTS - New Listing",\n            "url":"https://discordapp.com",\n            "icon_url":"https://pixelmonmod.com/w/images/logo/Fullcolor-50x50.png"\n         },\n         "fields":[\n            {\n               "name":"Listing Information -",\n               "value":"Seller: **%seller%** \\\\nPrice: **$%price%** \\\\nExpiration: %expires_in%",\n               "inline":false\n            },\n            {\n               "name":"Info:",\n               "value":"Pokemon: %species%\\\\nGender: %gender%\\\\nLevel: %level%\\\\nAbility: %ability%\\\\nUntradeable: %untradeable%\\\\nUnbreedable: %unbreedable%",\n               "inline":true\n            },\n            {\n               "name":"Stats:",\n               "value":"Level: %level%\\\\nForm: %form%\\\\nShiny: %shiny%\\\\nNature: %nature%\\\\nFriendship: %friendship%",\n               "inline":true\n            },\n            {\n               "name":"----",\n               "value":"----",\n               "inline":false\n            },\n            {\n               "name":"IVs:",\n               "value":"%iv_hp%/%iv_attack%/%iv_defence%/%iv_spattack%/%iv_spdefence%/%iv_speed% (%iv_percentage%%)    ",\n               "inline":true\n            },\n            {\n               "name":"EVs:",\n               "value":"%ev_hp%/%ev_attack%/%ev_defence%/%ev_spattack%/%ev_spdefence%/%ev_speed%",\n               "inline":true\n            }\n         ]\n      }\n   ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var s=o(6540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);