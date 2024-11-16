"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6389],{362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"premium-mods/envyscrolls/developer-api","title":"Developer API","description":"There are two things that are required to register custom clue steps.","source":"@site/docs/premium-mods/envyscrolls/developer-api.md","sourceDirName":"premium-mods/envyscrolls","slug":"/premium-mods/envyscrolls/developer-api","permalink":"/docs/premium-mods/envyscrolls/developer-api","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"premiumModsSidebar","previous":{"title":"Config","permalink":"/docs/premium-mods/envyscrolls/config"}}');var o=n(4848),i=n(8453);const s={},c="Developer API",l={},a=[{value:"Event Converters",id:"event-converters",level:2},{value:"Custom Clue Step Types",id:"custom-clue-step-types",level:2},{value:"Context",id:"context",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"developer-api",children:"Developer API"})}),"\n",(0,o.jsx)(t.p,{children:"There are two things that are required to register custom clue steps."}),"\n",(0,o.jsx)(t.p,{children:"Firstly, if you are using a custom Forge EventBus for your mod/plugin then you need to register that when the server starts like so:"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Registering event buses"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"public static void onStart() {\n    IEventBus myCustomEventBus = BusBuilder.builder().build();\n    ClueStepTypeRegistry.registerEventBus(myCustomEventBus);\n}\n"})})]}),"\n",(0,o.jsx)(t.h2,{id:"event-converters",children:"Event Converters"}),"\n",(0,o.jsx)(t.p,{children:"Event converters are used to convert events into players, so that we can then determine if the player has a clue scroll in their inventory. "}),"\n",(0,o.jsx)(t.p,{children:"Therefore, if you want to use a previously undefined event for a clue step you need to register a custom event converter on the server start. You can find an example below."}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Registering Event Converters"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"public static void onStart() {\n   // Events with only one player involved\n   ClueStepTypeRegistry.registerEventConverter(CaptureEvent.SuccessfulCapture.class, EventConverter.single(CaptureEvent.SuccessfulCapture::getPlayer));\n   \n   // Events with multiple players involved\n   ClueStepTypeRegistry.registerEventConverter(PixelmonTradeEvent.Post.class, event -> Lists.newArrayList(event.getPlayer1(), event.getPlayer2()));\n}\n"})})]}),"\n",(0,o.jsx)(t.h2,{id:"custom-clue-step-types",children:"Custom Clue Step Types"}),"\n",(0,o.jsx)(t.p,{children:"Clue step types are config classes that allow the end user to give information about how the clue step should generate, and look. These do not need to be registered as the class path needs to be specified in the config."}),"\n",(0,o.jsx)(t.p,{children:"Below you can find an example clue step type"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Clue step type"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"package com.envyful.clue.scrolls.api.type.impl;\n\nimport com.envyful.api.math.UtilRandom;\nimport com.envyful.clue.scrolls.api.context.IntegerAmountClueStepContext;\nimport com.envyful.clue.scrolls.api.type.SingleTypeClueStepType;\nimport com.envyful.clue.scrolls.data.ScrollData;\nimport com.pixelmonmod.api.pokemon.PokemonSpecification;\nimport com.pixelmonmod.api.pokemon.PokemonSpecificationProxy;\nimport com.pixelmonmod.pixelmon.api.events.CaptureEvent;\nimport net.minecraft.entity.player.ServerPlayerEntity;\nimport net.minecraft.item.ItemStack;\nimport org.spongepowered.configurate.objectmapping.ConfigSerializable;\n\n@ConfigSerializable\npublic class CatchPokemonClueStepType extends SingleTypeClueStepType<CaptureEvent.SuccessfulCapture, IntegerAmountClueStepContext> {\n\n    protected String spec;\n    protected transient PokemonSpecification cachedSpec;\n    protected int minAmount;\n    protected int maxAmount;\n\n    public CatchPokemonClueStepType() {\n        super(CaptureEvent.SuccessfulCapture.class, IntegerAmountClueStepContext::new);\n    }\n\n    public CatchPokemonClueStepType(String description, String spec, int minAmount, int maxAmount) {\n        this();\n\n        this.description = description;\n        this.spec = spec;\n        this.minAmount = minAmount;\n        this.maxAmount = maxAmount;\n    }\n\n    @Override\n    public void handle(CaptureEvent.SuccessfulCapture event, ServerPlayerEntity player, ItemStack clueScroll, ScrollData data, IntegerAmountClueStepContext context) {\n        if (!this.getSpec().matches(event.getPokemon())) {\n            return;\n        }\n\n        context.increment();\n\n        if (context.isComplete()) {\n            data.startNextStep(player, clueScroll);\n            return;\n        }\n\n        data.update(player, clueScroll);\n    }\n\n    @Override\n    public IntegerAmountClueStepContext getNewContext() {\n        return new IntegerAmountClueStepContext(UtilRandom.randomInteger(this.minAmount, this.maxAmount));\n    }\n\n    protected PokemonSpecification getSpec() {\n        if (this.cachedSpec == null) {\n            this.cachedSpec = PokemonSpecificationProxy.create(this.spec);\n        }\n\n        return this.cachedSpec;\n    }\n}\n\n"})})]}),"\n",(0,o.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,o.jsx)(t.p,{children:"Clue step context is used for storing the generated data from the clue step type on the clue scroll item. They also don't need to be registered as they are directly referenced from the clue step type class. Below you can find the Integer context which is most commonly used."}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Clue step context"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'package com.envyful.clue.scrolls.api.context;\n\nimport com.envyful.clue.scrolls.api.type.ClueStepContext;\nimport net.minecraft.nbt.CompoundNBT;\n\npublic class IntegerAmountClueStepContext extends SkippableClueStepContext {\n\n    private int target;\n    private int current;\n\n    public IntegerAmountClueStepContext() {\n    }\n\n    public IntegerAmountClueStepContext(int target) {\n        this.target = target;\n        this.current = 0;\n    }\n\n    public void increment() {\n        ++this.current;\n    }\n\n    @Override\n    public void read(CompoundNBT tag) {\n        super.read(tag);\n\n        this.target = tag.getInt("target");\n        this.current = tag.getInt("current");\n    }\n\n    @Override\n    public void write(CompoundNBT tag) {\n        super.write(tag);\n\n        tag.putInt("target", this.target);\n        tag.putInt("current", this.current);\n    }\n\n    @Override\n    public String replace(String s) {\n        return s.replace("%target%", String.valueOf(this.target))\n                .replace("%current%", String.valueOf(this.current));\n    }\n\n    @Override\n    public boolean isComplete() {\n        return this.skipped || this.current >= this.target;\n    }\n}\n\n'})})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);