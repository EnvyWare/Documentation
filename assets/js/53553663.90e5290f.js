"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9303],{8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var o=i(6540);const l={},s=o.createContext(l);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(s.Provider,{value:n},e.children)}},9693:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"general-help/general-config/sprite-config","title":"Sprite Config","description":"You can usually find sprite config settings in the GUI settings, however sometimes they\'re also located in specific sections of the main config.&#x20;","source":"@site/docs/general-help/general-config/sprite-config.md","sourceDirName":"general-help/general-config","slug":"/general-help/general-config/sprite-config","permalink":"/docs/general-help/general-config/sprite-config","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"generalHelpSidebar","previous":{"title":"Reward Pools","permalink":"/docs/general-help/general-config/reward-pools"},"next":{"title":"Databases - What is MySQL","permalink":"/docs/general-help/"}}');var l=i(4848),s=i(8453);const r={},t="Sprite Config",a={},d=[];function c(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"sprite-config",children:"Sprite Config"})}),"\n",(0,l.jsx)(n.p,{children:"You can usually find sprite config settings in the GUI settings, however sometimes they're also located in specific sections of the main config. "}),"\n",(0,l.jsx)(n.p,{children:"A sprite config section defines how the sprite item should appear in the GUI for a given pokemon. Below you will be able to find commented, and uncommented, versions of the default sprite config found in all the EnvyWare Ltd mods."}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"Uncommented Config"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"    sprite-config:\n        name: '&b%species_name% %nickname%'\n        lore:\n        - '&7Level: &b%level%'\n        - '&7Shiny: &b%shiny%'\n        - '&7Palette: &b%palette%'\n        - '&7Gender: %gender%'\n        - '&7Breedable: %breedable%'\n        - '&7Friendship: %friendship%'\n        - '&7Nature: &b%nature%'\n        - '&7Form: &b%form%'\n        - '&7Growth: &b%size%'\n        - '&7Ability: &b%ability%'\n        - '&7Friendship: &b%friendship%'\n        - '&7Untradeable: &b%untradeable%'\n        - ' '\n        - '&7IVs (&b%iv_percentage%%&7):'\n        - '    \xa77HP: %iv_hp% \xa7d| \xa77Atk: %iv_attack% \xa7d| \xa77Def: %iv_defence%'\n        - '    \xa77SAtk: %iv_spattack% \xa7d| \xa77SDef: %iv_spdefence% \xa7d| \xa77Spd: %iv_speed%'\n        - ' '\n        - '&7EVs:'\n        - '    \xa77HP: &b%ev_hp% \xa7d| \xa77Atk: &b%ev_attack% \xa7d| \xa77Def: &b%ev_defence%'\n        - '    \xa77SAtk: &b%ev_spattack% \xa7d| \xa77SDef: &b%ev_spdefence% \xa7d| \xa77Spd: &b%ev_speed%'\n        - ' '\n        - '&7Moves:'\n        - '    &b%move_1%'\n        - '    &b%move_2%'\n        - '    &b%move_3%'\n        - '    &b%move_4%'\n        - ' '\n        - '%mew_cloned%'\n        - '%trio_gemmed%'\n        untrdeable-true-format: '&aTRUE'\n        untradeable-false-format: '&cFALSE'\n        ability-format: '%ability_name% %ability_ha%'\n        ha-format: '&7(&c&lHA&7)'\n        male-format: '&bMale'\n        female-format: '&dFemale'\n        none-format: '&fNONE'\n        shiny-true-format: '&aTRUE'\n        shiny-false-format: '&cFALSE'\n        unbreedable-true-format: '&aTRUE'\n        unbreedable-false-format: '&cFALSE'\n        mew-cloned-format: '&7Times Cloned: %cloned%'\n        gemmed-format: '&7Gemmed: %gemmed%'\n        nature-format: '%nature_name% %mint_nature%'\n        mint-nature-format: '&7(%mint_nature_name%&7)'\n        normal-iv-colour: '&b'\n        hyper-iv-colour: '&e'\n"})})]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"Commented Config"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"    sprite-config:\n        name: '&b%species_name% %nickname%' # The item name\n        lore: # The lore of the item\n        - '&7Level: &b%level%'\n        - '&7Shiny: &b%shiny%'\n        - '&7Palette: &b%palette%'\n        - '&7Gender: %gender%'\n        - '&7Breedable: %breedable%'\n        - '&7Friendship: %friendship%'\n        - '&7Nature: &b%nature%'\n        - '&7Form: &b%form%'\n        - '&7Growth: &b%size%'\n        - '&7Ability: &b%ability%'\n        - '&7Friendship: &b%friendship%'\n        - '&7Untradeable: &b%untradeable%'\n        - ' '\n        - '&7IVs (&b%iv_percentage%%&7):'\n        - '    \xa77HP: %iv_hp% \xa7d| \xa77Atk: %iv_attack% \xa7d| \xa77Def: %iv_defence%'\n        - '    \xa77SAtk: %iv_spattack% \xa7d| \xa77SDef: %iv_spdefence% \xa7d| \xa77Spd: %iv_speed%'\n        - ' '\n        - '&7EVs:'\n        - '    \xa77HP: &b%ev_hp% \xa7d| \xa77Atk: &b%ev_attack% \xa7d| \xa77Def: &b%ev_defence%'\n        - '    \xa77SAtk: &b%ev_spattack% \xa7d| \xa77SDef: &b%ev_spdefence% \xa7d| \xa77Spd: &b%ev_speed%'\n        - ' '\n        - '&7Moves:'\n        - '    &b%move_1%'\n        - '    &b%move_2%'\n        - '    &b%move_3%'\n        - '    &b%move_4%'\n        - ' '\n        - '%mew_cloned%'\n        - '%trio_gemmed%'\n        untrdeable-true-format: '&aTRUE' # What text will show ip in the place of the %unbreedable% placeholder when the pokemon is untradeable\n        untradeable-false-format: '&cFALSE' # What text will show ip in the place of the %unbreedable% placeholder when the pokemon is tradeable\n        ability-format: '%ability_name% %ability_ha%' # What to display in the %ability% placeholder's place\n        ha-format: '&7(&c&lHA&7)' # What the hidden ability placeholder should display when the pokemon has a hidden ability\n        male-format: '&bMale' # The male gender placeholder text\n        female-format: '&dFemale' # The female gender placeholder text\n        none-format: '&fNONE' # The none gender placeholder text\n        shiny-true-format: '&aTRUE' # The shiny placeholder format\n        shiny-false-format: '&cFALSE' # The non-shiny placeholder format\n        unbreedable-true-format: '&aTRUE' # The unbreedable placeholder format\n        unbreedable-false-format: '&cFALSE' # The breedable placeholder format\n        mew-cloned-format: '&7Times Cloned: %cloned%' # The format for mew clones when the pokemon is mew\n        gemmed-format: '&7Gemmed: %gemmed%' # The gemmed format for when the pokemon is one of the legendary lake trio\n        nature-format: '%nature_name% %mint_nature%' # The nature placeholder text with releveant mint information\n        mint-nature-format: '&7(%mint_nature_name%&7)' # Text to display if a mint has been used\n        normal-iv-colour: '&b' # The colour of the IV if the IV has not been hyper trained\n        hyper-iv-colour: '&e' # The colour of the IV if the IV has been hyper trained\n"})})]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"Accepted Placeholders"}),(0,l.jsx)(n.p,{children:"Placeholders useable in the sprite config:"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%nickname%"})," - Pokemon's nickname"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%held_item%"})," - Pokemon's held item localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%palette%"})," - Pokemon's palette localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%species_name%"})," - Pokemon's species localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%level%"})," - Pokemon's level"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%gender%"})," - Pokemon's gender localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%breedable%"})," - Pokemon breedable placeholder"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%nature%"})," - Pokemon's nature information"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%nature_name%"})," - Pokemon's nature localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%mint_nature%"})," - Pokemon's mint nature information"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%mint_nature_name%"})," - Pokemon's mint nature localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ability%"})," - Pokemon's ability information"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ability_name%"})," - Pokemon's ability localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ability_ha%"})," - Pokemon's hidden ability information"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%friendship%"})," - Pokemon's friendship level"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%untradeable%"})," - Pokemon's untradeable status"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%iv_percentage%"})," - Pokemon's IV percentage"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%iv_hp%"})," - Pokemon's HP IV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%iv_attack%"})," - Pokemon's Attack IV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%iv_defence%"})," - Pokemon's Defence IV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%iv_spattack%"})," - Pokemon's Special Attack IV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%iv_spdefence%"})," - Pokemon's Special Defence IV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%iv_speed%"})," - Pokemon's Speed IV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ev_hp%"})," - Pokemon's HP EV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ev_attack%"})," - Pokemon's Attack EV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ev_defence%"})," - Pokemon's Defence EV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ev_spattack%"})," - Pokemon's Special Attack EV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ev_spdefence%"})," - Pokemon's Special Defence EV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%ev_speed%"})," - Pokemon's Speed EV value"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%move_1%"})," - Pokemon's first move localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%move_2%"})," - Pokemon's second move localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%move_3%"})," - Pokemon's third move localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%move_4%"})," - Pokemon's fourth move localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%shiny%"})," - Pokemon's shiny status"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%form%"})," - Pokemon's form localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%size%"})," - Pokemon's growth localized name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%friendship%"})," - Pokemon's friendship"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%mew_cloned%"})," - Pokemon's cloned status (will not show up if not mew)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%cloned%"})," - Pokemon's number of clones (will not show up if not mew)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%trio_gemmed%"})," - Pokemon's gemmed status  (will not show up if not legendary lake trio)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"%gemmed%"})," - Pokemon's gemmed count (will not show up if not legendary lake trio)"]}),"\n"]})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);