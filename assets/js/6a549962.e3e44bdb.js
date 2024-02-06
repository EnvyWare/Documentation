"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3848],{6908:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(7624),o=r(2172);const i={sidebar_position:2,sidebar_label:"Quick Start"},s="Quick Start",d={id:"api/quick-start",title:"Quick Start",description:"Gradle",source:"@site/docs/api/quick-start.md",sourceDirName:"api",slug:"/api/quick-start",permalink:"/docs/api/quick-start",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quick Start"},sidebar:"apiSidebar",previous:{title:"Welcome",permalink:"/docs/api/"},next:{title:"Getting Started",permalink:"/docs/api/Commands/getting-started"}},a={},l=[{value:"Gradle",id:"gradle",level:2},{value:"Add the EnvyWare repository",id:"add-the-envyware-repository",level:2},{value:"Add the module dependencies",id:"add-the-module-dependencies",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.h2,{id:"gradle",children:"Gradle"}),"\n",(0,t.jsxs)(n.p,{children:["Firstly you need to begin by creating a Gradle project. You can find examples of this using the ",(0,t.jsx)(n.a,{href:"https://files.minecraftforge.net/net/minecraftforge/forge/",children:"Forge MDK"}),", or the ",(0,t.jsx)(n.a,{href:"https://github.com/EnvyWare/Pixelmon-MDK",children:"Pixelmon MDK"}),". You can also find more generic information for starting a Gradle project ",(0,t.jsx)(n.a,{href:"https://docs.gradle.org/current/userguide/getting_started.html",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"add-the-envyware-repository",children:"Add the EnvyWare repository"}),"\n",(0,t.jsx)(n.p,{children:"Once you've setup your gradle project you'll need to add the EnvyWare maven repository so that gradle knows where to download the dependency from. This can be done like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'  maven {\n       url "https://maven.envyware.co.uk/releases"\n  }\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"You can find other examples of how to setup the EnvyWare maven repository on the online web view ("}),(0,t.jsx)(n.a,{href:"http://maven.envyware.co.uk/",children:(0,t.jsx)(n.strong,{children:"here"})}),(0,t.jsx)(n.strong,{children:")."})]}),"\n",(0,t.jsx)(n.h2,{id:"add-the-module-dependencies",children:"Add the module dependencies"}),"\n",(0,t.jsx)(n.p,{children:"Once you have added the maven repository you then need to add the modules you want as dependencies for your project. You can find how to do this below. "}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.br,{}),"\n","You will need to learn how to shadow the dependencies into the JAR file. This is done so that your end users do not have to install any extra dependencies when adding your mods to their game. "]}),"\n",(0,t.jsxs)(n.p,{children:["You can find how to use (and setup) shadow ",(0,t.jsx)(n.a,{href:"https://imperceptiblethoughts.com/shadow/getting-started/",children:"here"}),". "]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"There are multiple different modules for the EnvyWare API which include:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"commons"}),"\n",(0,t.jsx)(n.li,{children:"discord"}),"\n",(0,t.jsx)(n.li,{children:"forge"}),"\n",(0,t.jsx)(n.li,{children:"forge16"}),"\n",(0,t.jsx)(n.li,{children:"forge19"}),"\n",(0,t.jsx)(n.li,{children:"forge20"}),"\n",(0,t.jsx)(n.li,{children:"spigot"}),"\n",(0,t.jsx)(n.li,{children:"reforged"}),"\n",(0,t.jsx)(n.li,{children:"reforged16"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'dependencies {\n  shadow "com.envyful.api:commons:5.0.1"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,n,r)=>{r.d(n,{I:()=>d,M:()=>s});var t=r(1504);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);