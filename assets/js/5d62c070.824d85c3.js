"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5520],{8416:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var t=o(7624),i=o(2172);const s={},a="Config",r={id:"mods/envysts/config",title:"Config",description:"Below you will find example config(s).",source:"@site/docs/mods/envysts/config.md",sourceDirName:"mods/envysts",slug:"/mods/envysts/config",permalink:"/docs/mods/envysts/config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"modsSidebar",previous:{title:"Commands & Permissions",permalink:"/docs/mods/envysts/commands-and-permissions"},next:{title:"Placeholders",permalink:"/docs/mods/envysts/placeholders"}},l={},m=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.M)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.p,{children:"Below you will find example config(s)."}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"config.yml with explanatory comments"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"min-value: 200.0 # Min value for ALL pokemon\nmin-price-modifiers: # Price modifiers https://github.com/Daniel-Forge-Development/API/wiki/PokeSpec-Price-Modifier\n    example:\n        spec: shiny:1\n        required-permission: ''\n        min-price:\n            type: '*' # What type of modifier this is ('*'=multiply,'+'=add,'-'=subtracte,'/'=divide)\n            value: 2.0\n        display: 'DISPLAYED TEXT!' # This text is what is used in the %price_breakdown% placeholder. \nblacklist-specs: # Specs for pokemon that are blacklisted\n- pikachu shiny:1\nper-level-booster: # Booster per level using the price modifier system\n    type: +\n    value: 100.0 # Set this to 0 for no change per level\n"})})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"locale.yml with explanatory comments"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"reloaded-config: '&el(!) &eReloaded configs.' # Message when reloading\nsold-pokemon: '&e&l(!) &eSold %pokemon% for %worth%' # Message when selling pokemon\nmin-party-size: '&c&l(!) &cYou must have at least 1 pokemon in your party to use STS' # Message when trying to sell your last Party Pokemon\neconomy-format: '%.2f' # Format to use for pricing. the \".2f\" means to 2 decimal places.\ncooldown: '&c&l(!) &cOn cooldown for %cooldown%' # Message displayed when on cooldown\nlevel-modifier-display: 'Levels: +%added_cost%' # Message displayed for the per-level-booster setting\n"})})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"guis.yml"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"party-u-i:\n    gui-settings:\n        title: Simple STS\n        height: 3\n        fill-type: BLOCK\n        filler-items:\n            one:\n                enabled: true\n                type: minecraft:stained_glass_pane\n                amount: 1\n                damage: 15\n                name: ' '\n                lore: []\n                nbt: {}\n    party-selection-positions:\n    - 10\n    - 11\n    - 12\n    - 14\n    - 15\n    - 16\n    confirm-display: 13\n    confirm-item:\n        x-pos: 4\n        y-pos: 2\n        enabled: true\n        type: pixelmon:poke_ball\n        amount: 1\n        damage: 0\n        name: '&a&lCONFIRM'\n        lore: []\n        nbt: {}\n    no-pokemon-item:\n        enabled: true\n        type: minecraft:barrier\n        amount: 1\n        damage: 0\n        name: '&cNo pokemon in this position'\n        lore: []\n        nbt: {}\n    untradeable-pokemon-item:\n        enabled: true\n        type: minecraft:barrier\n        amount: 1\n        damage: 0\n        name: '&c&lUNTRADEABLE'\n        lore: []\n        nbt: {}\n    sprite-config:\n        name: '&b%species_name% %nickname%'\n        lore:\n        - '&7Level: &b%level%'\n        - '&7Shiny: &b%shiny%'\n        - '&7Gender: %gender%'\n        - '&7Breedable: %breedable%'\n        - '&7Friendship: %friendship%'\n        - '&7Nature: &b%nature%'\n        - '&7Form: &b%form%'\n        - '&7Growth: &b%size%'\n        - '&7Ability: &b%ability%'\n        - '&7Friendship: &b%friendship%'\n        - '&7Untradeable: &b%untradeable%'\n        - '&7Custom Texture: &b%custom_texture%'\n        - ' '\n        - '&7IVs (&b%iv_percentage%%&7):'\n        - '    \xa77HP: %iv_hp% \xa7d| \xa77Atk: %iv_attack% \xa7d| \xa77Def: %iv_defence%'\n        - '    \xa77SAtk: %iv_spattack% \xa7d| \xa77SDef: %iv_spdefence% \xa7d| \xa77Spd: %iv_speed%'\n        - ' '\n        - '&7EVs:'\n        - '    \xa77HP: &b%ev_hp% \xa7d| \xa77Atk: &b%ev_attack% \xa7d| \xa77Def: &b%ev_defence%'\n        - '    \xa77SAtk: &b%ev_spattack% \xa7d| \xa77SDef: &b%ev_spdefence% \xa7d| \xa77Spd: &b%ev_speed%'\n        - ' '\n        - '&7Moves:'\n        - '    &b%move_1%'\n        - '    &b%move_2%'\n        - '    &b%move_3%'\n        - '    &b%move_4%'\n        - ' '\n        - '%mew_cloned%'\n        - '%trio_gemmed%'\n        untrdeable-true-format: '&aTRUE'\n        untradeable-false-format: '&cFALSE'\n        ability-format: '%ability_name% %ability_ha%'\n        ha-format: '&7(&c&lHA&7)'\n        male-format: '&bMale'\n        female-format: '&dFemale'\n        none-format: '&fNONE'\n        shiny-true-format: '&aTRUE'\n        shiny-false-format: '&cFALSE'\n        unbreedable-true-format: '&aTRUE'\n        unbreedable-false-format: '&cFALSE'\n        mew-cloned-format: '&7Times Cloned: %cloned%'\n        gemmed-format: '&7Gemmed: %gemmed%'\n        nature-format: '%nature_name% %mint_nature%'\n        mint-nature-format: '&7(%mint_nature_name%&7)'\n        normal-iv-colour: '&b'\n        hyper-iv-colour: '&e'\n    price-lore:\n    - '&e&lPRICE: &a$%cost%'\n\n"})})]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>a});var t=o(1504);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);