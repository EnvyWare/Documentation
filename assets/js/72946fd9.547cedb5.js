"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5998],{8471:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=o(4848),t=o(8453);const i={},d="Config",r={id:"mods/pixelmon-overlays/config",title:"Config",description:"To disable the auto-broadcasts set auto-broadcasts-enabled to false.",source:"@site/docs/mods/pixelmon-overlays/config.md",sourceDirName:"mods/pixelmon-overlays",slug:"/mods/pixelmon-overlays/config",permalink:"/docs/mods/pixelmon-overlays/config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"modsSidebar",previous:{title:"Commands & Permissions",permalink:"/docs/mods/pixelmon-overlays/commands-and-permissions"},next:{title:"Developer",permalink:"/docs/mods/pixelmon-overlays/developer"}},c={},a=[{value:"Examples",id:"examples",level:3},{value:"Headings",id:"headings",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(n.p,{children:["To disable the auto-broadcasts set ",(0,s.jsx)(n.code,{children:"auto-broadcasts-enabled"})," to false."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"auto-broadcast-delay-seconds"})," Sets the number of seconds between each broadcast."]}),"\n",(0,s.jsxs)(n.p,{children:["To add broadcasts add a new section to the ",(0,s.jsx)(n.code,{children:"options"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To make them auto-broadcast add the ids of the ",(0,s.jsx)(n.code,{children:"options"})," to the ",(0,s.jsx)(n.code,{children:"broadcasts"})," list."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"To add a plain text broadcast follow the format below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    title:\n        layout-type: LEFT_AND_RIGHT\n        text:\n        - Line 1\n        - Line 2\n        - Line 3\n        - Line 4\n        - Line 5\n        duration-seconds: 30\n"})}),"\n",(0,s.jsx)(n.p,{children:"To add an item broadcast follow the format below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    title:\n        layout-type: LEFT\n        text:\n        - Line 1\n        - Line 2\n        - ETC\n        - yanno\n        duration-seconds: 30\n        config-data:\n            __class__: com.envyful.pixelmon.overlay.forge.config.type.ItemConfigData\n            type: stone\n            damage: 0\n"})}),"\n",(0,s.jsx)(n.p,{children:"To add a Pok\xe9mon broadcast follow the format below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"        layout-type: RIGHT\n        text:\n        - test\n        duration-seconds: 30\n        config-data:\n            __class__: com.envyful.pixelmon.overlay.forge.config.type.PixelmonConfigData\n            spec: pikachu\n            sprite: true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"headings",children:"Headings"}),"\n",(0,s.jsx)(n.p,{children:"Find the headings explained here."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"layout-type"})}),"\n",(0,s.jsxs)(n.p,{children:["Options: ",(0,s.jsx)(n.code,{children:"LEFT"}),", ",(0,s.jsx)(n.code,{children:"RIGHT"}),", ",(0,s.jsx)(n.code,{children:"LEFT_AND_RIGHT"})]}),"\n",(0,s.jsx)(n.p,{children:"Sets where the item/pixelmon appear on the screen"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"text"})}),"\n",(0,s.jsx)(n.p,{children:"Infinite list of strings."}),"\n",(0,s.jsx)(n.p,{children:"Sets the text that appears in the broadcast"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"duration-seconds"})}),"\n",(0,s.jsx)(n.p,{children:"An integer specifying how long the broadcast will appear on the screen"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"spec"})}),"\n",(0,s.jsx)(n.p,{children:"The pokemon specification"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"sprite"})}),"\n",(0,s.jsx)(n.p,{children:"If the pixelmon should be a sprite or the 3D image."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>r});var s=o(6540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);