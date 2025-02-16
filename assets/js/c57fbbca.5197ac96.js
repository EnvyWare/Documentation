"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2908],{8145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"general-help/general-config/config-databases","title":"Database Settings","description":"Database settings in the configs","source":"@site/docs/general-help/general-config/config-databases.md","sourceDirName":"general-help/general-config","slug":"/general-help/general-config/config-databases","permalink":"/docs/general-help/general-config/config-databases","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"description":"Database settings in the configs"},"sidebar":"generalHelpSidebar","previous":{"title":"General Config","permalink":"/docs/general-help/general-config/"},"next":{"title":"Config Interfaces","permalink":"/docs/general-help/general-config/config-interfaces"}}');var a=t(4848),i=t(8453);const o={description:"Database settings in the configs"},r="Database Settings",l={},c=[{value:"SQLite",id:"sqlite",level:3},{value:"MySQL",id:"mysql",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"database-settings",children:"Database Settings"})}),"\n",(0,a.jsx)(n.p,{children:"In any mod that stores data you will find a section of the config that refers to a database.\nThis is where you can decide how you want your data to be stored and accessed."}),"\n",(0,a.jsxs)(n.p,{children:["There are two options for the database type: ",(0,a.jsx)(n.code,{children:"SQLITE"})," and ",(0,a.jsx)(n.code,{children:"SQL"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"sqlite",children:"SQLite"}),"\n",(0,a.jsx)(n.p,{children:"This is the default setting in all of the mods. This is because it uses a file to store the data and so\nworks without any additional setup. This is the best option for single player worlds or small servers."}),"\n",(0,a.jsx)(n.p,{children:"Below is an example section of the config from EnvyGTS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"database-details:\n    id: sqlite\n    file-path: config/EnvyGTS/gts.db\n"})}),"\n",(0,a.jsx)(n.h3,{id:"mysql",children:"MySQL"}),"\n",(0,a.jsx)(n.p,{children:"This is the best option for larger servers, or those concerned about data security. It is a more complex setup\nbut results in a more efficient system as the data is stored on a server rather than in a file. This means that\nthe reads and writes are not happening on the same machine as your Minecraft server and so won't impact\nthe performance."}),"\n",(0,a.jsx)(n.p,{children:"Below is an example section of the config from EnvyGTS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'database-details:\n    id: sql\n    pool-name: BetterDexRewards\n    ip: localhost\n    port: 3306\n    username: pixelmon_test\n    password: c(5*Z&vRJ"ByLrzN\n    database: pixelmon_test\n    max-pool-size: 10\n    max-life-time-seconds: 30\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);