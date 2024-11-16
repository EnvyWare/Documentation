"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7165],{8676:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/Commands/annotation-based-commands","title":"Annotation Based Commands","description":"Here you can find information on how to create annotation based commands.","source":"@site/docs/api/Commands/annotation-based-commands.md","sourceDirName":"api/Commands","slug":"/api/Commands/annotation-based-commands","permalink":"/docs/api/Commands/annotation-based-commands","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Getting Started","permalink":"/docs/api/Commands/getting-started"},"next":{"title":"Builder Commands","permalink":"/docs/api/Commands/builder-commands"}}');var a=o(4848),i=o(8453);const s={},r="Annotation Based Commands",l={},d=[{value:"Class Annotations",id:"class-annotations",level:3},{value:"Command Annotation",id:"command-annotation",level:4},{value:"Permissible Annotation",id:"permissible-annotation",level:4},{value:"Description Annotation",id:"description-annotation",level:4},{value:"SubCommands Annotation",id:"subcommands-annotation",level:4},{value:"Command Processor",id:"command-processor",level:3},{value:"Permission Handler",id:"permission-handler",level:3},{value:"Description Handler",id:"description-handler",level:3},{value:"Completion Handler",id:"completion-handler",level:3}];function c(n){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"annotation-based-commands",children:"Annotation Based Commands"})}),"\n",(0,a.jsx)(e.p,{children:"Here you can find information on how to create annotation based commands."}),"\n",(0,a.jsx)(e.h3,{id:"class-annotations",children:"Class Annotations"}),"\n",(0,a.jsxs)(e.p,{children:["Firstly, you will need to annotate the class with the ",(0,a.jsx)(e.code,{children:"Command"})," annotation, ",(0,a.jsx)(e.code,{children:"Permissible"})," annotation, ",(0,a.jsx)(e.code,{children:"SubCommands"})," annotation, and ",(0,a.jsx)(e.code,{children:"Description"})," annotation. Of these the only non-optional one is the ",(0,a.jsx)(e.code,{children:"Command"})," annotation and the command will not parse without this."]}),"\n",(0,a.jsx)(e.h4,{id:"command-annotation",children:"Command Annotation"}),"\n",(0,a.jsx)(e.p,{children:"This annotation is used to mark the class as one that holds a command handler. It also tells the parser that aliases that the command will accept. There must be at least one entry in the aliases list otherwise the command will fail to parse. \\"}),"\n",(0,a.jsx)(e.p,{children:"Additionally, the first alias is always the identifying alias."}),"\n",(0,a.jsx)(e.h4,{id:"permissible-annotation",children:"Permissible Annotation"}),"\n",(0,a.jsxs)(e.p,{children:["This optional annotation allows you to require a permission before the command executor can successfully run the command. This is optional and the ",(0,a.jsx)(e.code,{children:"PermissionHandler"})," annotation could be used alternatively (look further for information on how to use that)."]}),"\n",(0,a.jsx)(e.p,{children:"Notably, this annotation will automatically register the node provided with the Forge permission handler."}),"\n",(0,a.jsx)(e.h4,{id:"description-annotation",children:"Description Annotation"}),"\n",(0,a.jsxs)(e.p,{children:["Similarly to the permissible annotation this is also optional, but allows you to provide a default message to send to the user when there is an error in the command handling. You can alternatively use the ",(0,a.jsx)(e.code,{children:"DescriptionHandler"})," annotation (look further for information on how to use that)"]}),"\n",(0,a.jsx)(e.h4,{id:"subcommands-annotation",children:"SubCommands Annotation"}),"\n",(0,a.jsx)(e.p,{children:"This optional annotation allows you to provide sub classes for the command. This means that the aliases will only be checked after the aliases for the given command. "}),"\n",(0,a.jsx)(e.p,{children:"All the rules defined in this document apply to sub-commands as well as normal commands."}),"\n",(0,a.jsx)(e.h3,{id:"command-processor",children:"Command Processor"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"CommandProcessor"})," annotation goes above a method, taking a sender and arguments, and dictates the method used for handling the logic for when the command is executed. It can also take the value ",(0,a.jsx)(e.code,{children:"executeAsync"})," which determines if the method should run asynchronously or not."]}),"\n",(0,a.jsxs)(e.p,{children:["The first parameter of the method ",(0,a.jsx)(e.strong,{children:"must"})," be prefixed with the ",(0,a.jsx)(e.code,{children:"Sender"})," annotation, and a valid sender type. If either of these conditions isn't met then the command will fail to parse."]}),"\n",(0,a.jsxs)(e.p,{children:["After that you can then define arguments for the command using the ",(0,a.jsx)(e.code,{children:"Argument"})," annotation. This allows you to specify a default value. You can combine this with the ",(0,a.jsx)(e.code,{children:"Completable"})," annotation for automated tab completions for that specific argument, and that specific type."]}),"\n",(0,a.jsxs)(e.p,{children:["Finally, if you want to capture the remainder of the String arugments passed in by the user then you can end your command with a ",(0,a.jsx)(e.code,{children:"String[]"})," variable. This must always be the last parameter in the function."]}),"\n",(0,a.jsx)(e.p,{children:"This will all look something like this (taken from EnvyCrates)"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'    @CommandProcessor\n    public void onCommand(@Sender CommandSource sender,\n                          @Completable(PlayerTabCompleter.class) @Argument ForgeEnvyPlayer target,\n                          @Completable(CrateTabCompleter.class) @Argument CrateType crate,\n                          @Argument(defaultValue = "1") int amount) {\n        sender.sendSystemMessage(UtilChatColour.colour("&e&l(!) &eGiving keys"));\n        crate.giveKey(target, amount);\n    }\n'})}),"\n",(0,a.jsx)(e.h3,{id:"permission-handler",children:"Permission Handler"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"PermissionHandler"})," annotation is for those that want to include some more detailed logic in their permission handling. "]}),"\n",(0,a.jsx)(e.p,{children:"If you're using a modern Forge version don't forget to register your permissions!"}),"\n",(0,a.jsx)(e.p,{children:"Using the permission handler annotation would look something like so:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"    @PermissionHandler\n    public boolean permissionCheck(CommandSource sender, String[] args) {\n        return true;\n    }\n"})}),"\n",(0,a.jsx)(e.h3,{id:"description-handler",children:"Description Handler"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"DescriptionHandler"})," annotation is the same as the ",(0,a.jsx)(e.code,{children:"PermissionHandler"})," annotations and allows you to include more logic in your description handling."]}),"\n",(0,a.jsx)(e.p,{children:"Using it would look like so:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'    @DescriptionHandler\n    public List<String> descriptionLogic(CommandSource sender, String[] args) {\n        return Lists.newArrayList("Hello world!");\n    }\n'})}),"\n",(0,a.jsx)(e.h3,{id:"completion-handler",children:"Completion Handler"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"CompletionHandler"})," annotation is the same as both of the above handler annotations. Allowing you to provide logic when calculating the tab completions."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'    @CompletionHandler\n    public List<String> descriptionLogic(CommandSource sender, String[] args) {\n        return Lists.newArrayList("hello nerd");\n    }\n'})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>r});var t=o(6540);const a={},i=t.createContext(a);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);