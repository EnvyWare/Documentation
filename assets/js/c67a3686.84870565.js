"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8881],{8350:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=n(5893),s=n(1151);const t={},o="Reward Pools",l={id:"general-help/general-config/reward-pools",title:"Reward Pools",description:"Reward pools are a config section that defines a set of rewards that will be given to a player after a specific event. It contains both guaranteed rewards, and also a chance based system.",source:"@site/docs/general-help/general-config/reward-pools.md",sourceDirName:"general-help/general-config",slug:"/general-help/general-config/reward-pools",permalink:"/docs/general-help/general-config/reward-pools",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"generalHelpSidebar",previous:{title:"Config Locations",permalink:"/docs/general-help/general-config/config-locations"},next:{title:"Sprite Config",permalink:"/docs/general-help/general-config/sprite-config"}},c={},d=[{value:"Reward Section",id:"reward-section",level:2},{value:"Full Reward Pool Section",id:"full-reward-pool-section",level:2}];function i(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"reward-pools",children:"Reward Pools"}),"\n",(0,r.jsx)(a.p,{children:"Reward pools are a config section that defines a set of rewards that will be given to a player after a specific event. It contains both guaranteed rewards, and also a chance based system."}),"\n",(0,r.jsx)(a.h2,{id:"reward-section",children:"Reward Section"}),"\n",(0,r.jsx)(a.p,{children:"Each reward section looks the same, and like so"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Reward Section"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-yaml",children:"display-name: Example Display Name\ncommands:\n  - /broadcast Example hunt was completed by %player%\nmessages:\n  - Hello %player%\n"})})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Commented Reward Section"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-yaml",children:"# The display name of the reward - this isn't always used by the mod\ndisplay-name: Example Display Name\n# The commands executed when the event occurs\n# The only accepted placeholder is %player% and requries a /\ncommands:\n  - /broadcast Example hunt was completed by %player%\n# The message that will be sent to the player\n# The only placeholder accepted is %player%\nmessages:\n  - Hello %player%\n"})})]}),"\n",(0,r.jsx)(a.h2,{id:"full-reward-pool-section",children:"Full Reward Pool Section"}),"\n",(0,r.jsx)(a.p,{children:"The reward pool has both guaranteed rewards, and chance based rewards."}),"\n",(0,r.jsx)(a.p,{children:"The chances work as a weighted system, where the weights are tallied and then used to calculate the percentage chance of that reward being selected."}),"\n",(0,r.jsx)(a.p,{children:"For example, if there's two rewards in the chance one with a weight of 9 and another with a wieght of 1 then the chance of the second is 10%, and the chance of the first 90%."}),"\n",(0,r.jsx)(a.p,{children:"The min and max rolls section determines how many of the chance rewards should be added, randomly between the min and max values. For example, if the min is 1 and the max is 5 then it will select a random number of rewards from the chance section between 1 and 5."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Reward Pool"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-yaml",children:"rewards:\n    guaranteed-reward:\n        display-name: Example Display Name\n        commands:\n        - /broadcast Example hunt was completed by %player%\n        messages:\n        - Hello %player%\n    reward-rolls-min: 1\n    reward-rolls-max: 1\n    rewards:\n        entries:\n            '0':\n                weight: 10.0\n                object:\n                    display-name: Example Display Name\n                    commands:\n                    - broadcast Example hunt was completed by %player%\n                    messages: []\n            '1':\n                weight: 1.0\n                object:\n                    display-name: Example Display Name\n                    commands:\n                    - broadcast Example hunt was completed by %player%\n                    messages: []\n"})})]})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>o});var r=n(7294);const s={},t=r.createContext(s);function o(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);