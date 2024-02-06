"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1208],{1592:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=l(7624),t=l(2172);const i={},o="Config",c={id:"premium-mods/envyscrolls/config",title:"Config",description:"There are two main configs for the EnvyScrolls mods which are the config.yml and locale.yml containing settings, and localizations. The config settings for specific clue scroll tiers can be found in config/EnvyScrolls/scrolls with the defaults in config/EnvyScrolls/scrolls/defaults and the config settings for specific mystery scroll tiers in config/EnvyScrolls/mystery with the defaults in config/EnvyScrolls/mystery/defaults.&#x20;",source:"@site/docs/premium-mods/envyscrolls/config.md",sourceDirName:"premium-mods/envyscrolls",slug:"/premium-mods/envyscrolls/config",permalink:"/docs/premium-mods/envyscrolls/config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"premiumModsSidebar",previous:{title:"Clue Step Types",permalink:"/docs/premium-mods/envyscrolls/clue-step-types"},next:{title:"Developer API",permalink:"/docs/premium-mods/envyscrolls/developer-api"}},a={},r=[{value:"Main Config",id:"main-config",level:2},{value:"Locale",id:"locale",level:2},{value:"Clue Scrolls",id:"clue-scrolls",level:2},{value:"Mystery Scrolls",id:"mystery-scrolls",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(n.p,{children:["There are two main configs for the EnvyScrolls mods which are the ",(0,s.jsx)(n.code,{children:"config.yml"})," and ",(0,s.jsx)(n.code,{children:"locale.yml"})," containing settings, and localizations. The config settings for specific clue scroll tiers can be found in ",(0,s.jsx)(n.code,{children:"config/EnvyScrolls/scrolls"})," with the defaults in ",(0,s.jsx)(n.code,{children:"config/EnvyScrolls/scrolls/defaults"})," and the config settings for specific mystery scroll tiers in ",(0,s.jsx)(n.code,{children:"config/EnvyScrolls/mystery"})," with the defaults in ",(0,s.jsx)(n.code,{children:"config/EnvyScrolls/mystery/defaults"}),". "]}),"\n",(0,s.jsx)(n.h2,{id:"main-config",children:"Main Config"}),"\n",(0,s.jsx)(n.p,{children:"This currently has no settings as all settings are found in the specific clue scroll, or mystery scroll, config files."}),"\n",(0,s.jsx)(n.h2,{id:"locale",children:"Locale"}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Default Locale"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# \xa9 EnvyWare Ltd Software 2022\n# For assistance visit https://discord.envyware.co.uk\n\nunknown-step: ???\nstep-format: ' &a- %step_description%'\ngiven-clue-scroll:\n- '&e&l(!) &eGiven %player% %amount% x %clue_scroll%'\nreceived-clue-scroll:\n- '&e&l(!) &eYou have received %amount% x %clue_scroll%'\ngiven-clue-skip:\n- '&e&l(!) &eGiven %player% %amount% x %clue_skip%'\nreceived-clue-skip:\n- '&e&l(!) &eYou have received %amount% x %clue_skip%'\ngiven-mystery-scroll:\n- '&e&l(!) &eGiven %player% %amount% x %mystery_scroll%'\nreceived-mystery-scroll:\n- '&e&l(!) &eYou have received %amount% x %mystery_scroll%'\n\n"})})]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Commented Locale"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# \xa9 EnvyWare Ltd Software 2022\n# For assistance visit https://discord.envyware.co.uk\n\nunknown-step: ??? # The format used for steps that are yet to be revealed\nstep-format: ' &a- %step_description%' # The format in the lore for steps\ngiven-clue-scroll: # The message sent to the admin when they give a player a clue scroll\n- '&e&l(!) &eGiven %player% %amount% x %clue_scroll%'\nreceived-clue-scroll: # The message sent to the player when they are given a clue scroll\n- '&e&l(!) &eYou have received %amount% x %clue_scroll%'\ngiven-clue-skip: # The message sent to the admin when they give a player a clue skip\n- '&e&l(!) &eGiven %player% %amount% x %clue_skip%'\nreceived-clue-skip: # The message sent to the player when they receive a clue skip\n- '&e&l(!) &eYou have received %amount% x %clue_skip%'\ngiven-mystery-scroll: # The message sent to the admin when they give a mystery scroll\n- '&e&l(!) &eGiven %player% %amount% x %mystery_scroll%'\nreceived-mystery-scroll: # The message sent to the player when they receive a mystery scroll\n- '&e&l(!) &eYou have received %amount% x %mystery_scroll%'\n\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"clue-scrolls",children:"Clue Scrolls"}),"\n",(0,s.jsxs)(n.p,{children:["The clue scroll configs need to be placed in the ",(0,s.jsx)(n.code,{children:"config/EnvyScrolls/scrolls"})," directory. This will accept any degree of sub directories too. "]}),"\n",(0,s.jsx)(n.p,{children:"Here you can find a list of the accepted clue step types"}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Clue Step Types"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.CatchPokemonClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.DefeatTrainerClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.DefeatWildPokemonClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.GiveTradedPokemonClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.HatchPokemonClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.KnockoutPokemonClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.LevelUpPokemonClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.LoseToTrainerClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.MineBlocksClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.PlaceBlocksClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.ReceiveTradedPokemonClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.ReleasePokemonClueStepType"}),"\n",(0,s.jsx)(n.li,{children:"com.envyful.clue.scrolls.api.type.impl.UseMoveClueStepType"}),"\n"]}),(0,s.jsx)(n.p,{children:"You can find descriptions, and examples on [enter page link here] //TODO:"})]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Example Clue Scroll"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# \xa9 EnvyWare Ltd Software 2022\n# For assistance visit https://discord.envyware.co.uk\n\nitem:\n    enabled: true\n    type: minecraft:paper\n    amount: '1'\n    name: '&a&lCOMMON Clue Scroll'\n    flags: []\n    lore:\n    - '&aSteps:'\n    - '%scroll_lore%'\n    - ' '\n    - '&b&oThe common clue scroll can be found'\n    - '&b&oin the wild, dropped by mobs and'\n    - '&b&oobtained from fishing.'\n    enchants: {}\n    nbt: {}\nmin-steps: 3\nmax-steps: 6\nsteps:\n    entries:\n        '0':\n            weight: 1.0\n            object:\n                id: step_one\n                clue-step-type:\n                    __class__: com.envyful.clue.scrolls.api.type.impl.CatchPokemonClueStepType\n                    spec: shiny\n                    min-amount: 1\n                    max-amount: 2\n                    description: Catch %current%/%target% shiny pokemon\nrewards:\n    guaranteed-reward:\n        display-name: Example Display Name\n        commands:\n        - say %player% completed!\n        messages:\n        - Well done for completing a common scroll!\n        display-item:\n            enabled: true\n            type: minecraft:stained_glass_pane\n            amount: '1'\n            name: ' '\n            flags: []\n            lore: []\n            enchants: {}\n            nbt: {}\n            positions: {}\n            requires-permission: false\n            else-item:\n                enabled: true\n                type: minecraft:stained_glass_pane\n                amount: '1'\n                name: ' '\n                flags: []\n                lore: []\n                enchants: {}\n                nbt: {}\n            close-on-click: false\n            commands-executed: []\n    reward-rolls-min: 1\n    reward-rolls-max: 1\n    rewards:\n        entries:\n            '0':\n                weight: 10.0\n                object:\n                    display-name: Example Display Name\n                    commands:\n                    - say %player% completed! This is a weighted chance\n                    messages:\n                    - Well done for completing a common scroll! this is a weighted\n                        chance\n                    display-item:\n                        enabled: true\n                        type: minecraft:stained_glass_pane\n                        amount: '1'\n                        name: ' '\n                        flags: []\n                        lore: []\n                        enchants: {}\n                        nbt: {}\n                        positions: {}\n                        requires-permission: false\n                        else-item:\n                            enabled: true\n                            type: minecraft:stained_glass_pane\n                            amount: '1'\n                            name: ' '\n                            flags: []\n                            lore: []\n                            enchants: {}\n                            nbt: {}\n                        close-on-click: false\n                        commands-executed: []\nid: common\ndisplay-name: '&a&lCOMMON'\nskip-item:\n    enabled: true\n    type: minecraft:emerald\n    amount: '1'\n    name: '&a&lCOMMON Clue Skip &7&o(Right-Click Me)'\n    flags: []\n    lore:\n    - '&aRight click me to open the skip UI'\n    - ' '\n    - '&aFrom the UI you can then select a scroll for'\n    - '&aWhich for wish to skip a step on.'\n    enchants: {}\n    nbt: {}\ncomplete-step-message: []\n\n"})})]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Commented Example Clue Scroll"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# \xa9 EnvyWare Ltd Software 2022\n# For assistance visit https://discord.envyware.co.uk\n\nitem: # The clue scroll item the player will receive and keep in their inventory\n    enabled: true\n    type: minecraft:paper\n    amount: '1'\n    name: '&a&lCOMMON Clue Scroll'\n    flags: []\n    lore:\n    - '&aSteps:'\n    - '%scroll_lore%'\n    - ' '\n    - '&b&oThe common clue scroll can be found'\n    - '&b&oin the wild, dropped by mobs and'\n    - '&b&oobtained from fishing.'\n    enchants: {}\n    nbt: {}\nmin-steps: 3 # the minimum number of potential steps required\nmax-steps: 6 # the maximum number of potential steps required\nsteps: # The steps that could potentially generate on the user's clue scroll\n    entries:\n        '0':\n            weight: 1.0 # The chance of it being this step\n            object:\n                id: step_one # The id of the step (this must be unique)\n                clue-step-type:\n                   # This is the clue step type (and exhaustive list can be found above)\n                    __class__: com.envyful.clue.scrolls.api.type.impl.CatchPokemonClueStepType \n                    spec: shiny # The spec required for the pokemon to count towards completion\n                    min-amount: 1 # The potential minimum number of pokemon required\n                    max-amount: 2 # The potential maximum number required\n                    description: Catch %current%/%target% shiny pokemon # The message that will display in the lore\nrewards: # The rewards that will be given once the scroll is completed\n    guaranteed-reward:\n        display-name: Example Display Name\n        commands:\n        - say %player% completed!\n        messages:\n        - Well done for completing a common scroll!\n        display-item:\n            enabled: true\n            type: minecraft:stained_glass_pane\n            amount: '1'\n            name: ' '\n            flags: []\n            lore: []\n            enchants: {}\n            nbt: {}\n            positions: {}\n            requires-permission: false\n            else-item:\n                enabled: true\n                type: minecraft:stained_glass_pane\n                amount: '1'\n                name: ' '\n                flags: []\n                lore: []\n                enchants: {}\n                nbt: {}\n            close-on-click: false\n            commands-executed: []\n    reward-rolls-min: 1\n    reward-rolls-max: 1\n    rewards:\n        entries:\n            '0':\n                weight: 10.0\n                object:\n                    display-name: Example Display Name\n                    commands:\n                    - say %player% completed! This is a weighted chance\n                    messages:\n                    - Well done for completing a common scroll! this is a weighted\n                        chance\n                    display-item:\n                        enabled: true\n                        type: minecraft:stained_glass_pane\n                        amount: '1'\n                        name: ' '\n                        flags: []\n                        lore: []\n                        enchants: {}\n                        nbt: {}\n                        positions: {}\n                        requires-permission: false\n                        else-item:\n                            enabled: true\n                            type: minecraft:stained_glass_pane\n                            amount: '1'\n                            name: ' '\n                            flags: []\n                            lore: []\n                            enchants: {}\n                            nbt: {}\n                        close-on-click: false\n                        commands-executed: []\nid: common # The unique identifier for this clue scroll type\ndisplay-name: '&a&lCOMMON' # The display name of this clue scroll type\nskip-item: # The item given to the player for skipping clue steps\n    enabled: true\n    type: minecraft:emerald\n    amount: '1'\n    name: '&a&lCOMMON Clue Skip &7&o(Right-Click Me)'\n    flags: []\n    lore:\n    - '&aRight click me to open the skip UI'\n    - ' '\n    - '&aFrom the UI you can then select a scroll for'\n    - '&aWhich for wish to skip a step on.'\n    enchants: {}\n    nbt: {}\ncomplete-step-message: [] # The message sent when a clue step is completed\n\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"mystery-scrolls",children:"Mystery Scrolls"}),"\n",(0,s.jsxs)(n.p,{children:["The clue scroll configs need to be placed in the ",(0,s.jsx)(n.code,{children:"config/EnvyScrolls/mystery"})," directory. This will accept any degree of sub directories too. "]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Example Mystery Scroll"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# \xa9 EnvyWare Ltd Software 2022\n# For assistance visit https://discord.envyware.co.uk\n\nitem:\n    enabled: true\n    type: minecraft:paper\n    amount: '1'\n    name: '&f&lBASIC Mystery Scroll'\n    flags: []\n    lore:\n    - '&fRight click me to receive a random'\n    - '&fclue scroll!'\n    enchants: {}\n    nbt: {}\nscrolls:\n    entries:\n        '0':\n            weight: 1.0\n            object: common\nid: basic\ndisplay-name: '&f&lBASIC'\n\n"})})]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Commented Example Mystery Scroll"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# \xa9 EnvyWare Ltd Software 2022\n# For assistance visit https://discord.envyware.co.uk\n\nitem: # The item that will be given to the player\n    enabled: true\n    type: minecraft:paper\n    amount: '1'\n    name: '&f&lBASIC Mystery Scroll'\n    flags: []\n    lore:\n    - '&fRight click me to receive a random'\n    - '&fclue scroll!'\n    enchants: {}\n    nbt: {}\nscrolls: # The potential scrolls that will be given upon reveal\n    entries:\n        '0':\n            weight: 1.0\n            object: common\nid: basic # The unique identifier\ndisplay-name: '&f&lBASIC' # the display name\n\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2172:(e,n,l)=>{l.d(n,{I:()=>c,M:()=>o});var s=l(1504);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);