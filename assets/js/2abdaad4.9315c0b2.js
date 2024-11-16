"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7272],{3111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"general-help/linux-installation/README","title":"Linux Installation","description":"Here is a setup for MySQL on a linux OS\\\\","source":"@site/docs/general-help/linux-installation/README.md","sourceDirName":"general-help/linux-installation","slug":"/general-help/linux-installation/","permalink":"/docs/general-help/linux-installation/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"generalHelpSidebar","previous":{"title":"External Connections into Databases","permalink":"/docs/general-help/external-connections-into-databases"},"next":{"title":"User and Database Creation","permalink":"/docs/general-help/linux-installation/user-and-database-creation"}}');var r=t(4848),i=t(8453);const a={},o="Linux Installation",l={},p=[];function d(e){const n={br:"br",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"linux-installation",children:"Linux Installation"})}),"\n",(0,r.jsxs)(n.p,{children:["Here is a setup for MySQL on a linux OS",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.br,{}),"\n","First off you are going to want to install some dependencies so it can function properly.\\"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'# Add "add-apt-repository" command\napt -y install software-properties-common curl apt-transport-https ca-certificates gnupg\n\n# Add additional repositories for PHP, Redis, and MariaDB\nLC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php\n\n# Add Redis official APT repository\ncurl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list\n\n# MariaDB repo setup script can be skipped on Ubuntu 22.04\ncurl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash\n\n# Update repositories list\napt update\n\n# Add universe repository if you are on Ubuntu 18.04\napt-add-repository universe\n\n# Install Dependencies\napt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now install your composer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);