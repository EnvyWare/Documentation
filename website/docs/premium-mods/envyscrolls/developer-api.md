# Developer API

There are two things that are required to register custom clue steps.

Firstly, if you are using a custom Forge EventBus for your mod/plugin then you need to register that when the server starts like so:

<details>

<summary>Registering event buses</summary>

```java
public static void onStart() {
    IEventBus myCustomEventBus = BusBuilder.builder().build();
    ClueStepTypeRegistry.registerEventBus(myCustomEventBus);
}
```

</details>

## Event Converters

Event converters are used to convert events into players, so that we can then determine if the player has a clue scroll in their inventory.&#x20;

Therefore, if you want to use a previously undefined event for a clue step you need to register a custom event converter on the server start. You can find an example below.

<details>

<summary>Registering Event Converters</summary>

```java
public static void onStart() {
   // Events with only one player involved
   ClueStepTypeRegistry.registerEventConverter(CaptureEvent.SuccessfulCapture.class, EventConverter.single(CaptureEvent.SuccessfulCapture::getPlayer));
   
   // Events with multiple players involved
   ClueStepTypeRegistry.registerEventConverter(PixelmonTradeEvent.Post.class, event -> Lists.newArrayList(event.getPlayer1(), event.getPlayer2()));
}
```

</details>

## Custom Clue Step Types

Clue step types are config classes that allow the end user to give information about how the clue step should generate, and look. These do not need to be registered as the class path needs to be specified in the config.

Below you can find an example clue step type

<details>

<summary>Clue step type</summary>

```java
package com.envyful.clue.scrolls.api.type.impl;

import com.envyful.api.math.UtilRandom;
import com.envyful.clue.scrolls.api.context.IntegerAmountClueStepContext;
import com.envyful.clue.scrolls.api.type.SingleTypeClueStepType;
import com.envyful.clue.scrolls.data.ScrollData;
import com.pixelmonmod.api.pokemon.PokemonSpecification;
import com.pixelmonmod.api.pokemon.PokemonSpecificationProxy;
import com.pixelmonmod.pixelmon.api.events.CaptureEvent;
import net.minecraft.entity.player.ServerPlayerEntity;
import net.minecraft.item.ItemStack;
import org.spongepowered.configurate.objectmapping.ConfigSerializable;

@ConfigSerializable
public class CatchPokemonClueStepType extends SingleTypeClueStepType<CaptureEvent.SuccessfulCapture, IntegerAmountClueStepContext> {

    protected String spec;
    protected transient PokemonSpecification cachedSpec;
    protected int minAmount;
    protected int maxAmount;

    public CatchPokemonClueStepType() {
        super(CaptureEvent.SuccessfulCapture.class, IntegerAmountClueStepContext::new);
    }

    public CatchPokemonClueStepType(String description, String spec, int minAmount, int maxAmount) {
        this();

        this.description = description;
        this.spec = spec;
        this.minAmount = minAmount;
        this.maxAmount = maxAmount;
    }

    @Override
    public void handle(CaptureEvent.SuccessfulCapture event, ServerPlayerEntity player, ItemStack clueScroll, ScrollData data, IntegerAmountClueStepContext context) {
        if (!this.getSpec().matches(event.getPokemon())) {
            return;
        }

        context.increment();

        if (context.isComplete()) {
            data.startNextStep(player, clueScroll);
            return;
        }

        data.update(player, clueScroll);
    }

    @Override
    public IntegerAmountClueStepContext getNewContext() {
        return new IntegerAmountClueStepContext(UtilRandom.randomInteger(this.minAmount, this.maxAmount));
    }

    protected PokemonSpecification getSpec() {
        if (this.cachedSpec == null) {
            this.cachedSpec = PokemonSpecificationProxy.create(this.spec);
        }

        return this.cachedSpec;
    }
}

```

</details>

## Context

Clue step context is used for storing the generated data from the clue step type on the clue scroll item. They also don't need to be registered as they are directly referenced from the clue step type class. Below you can find the Integer context which is most commonly used.

<details>

<summary>Clue step context</summary>

```java
package com.envyful.clue.scrolls.api.context;

import com.envyful.clue.scrolls.api.type.ClueStepContext;
import net.minecraft.nbt.CompoundNBT;

public class IntegerAmountClueStepContext extends SkippableClueStepContext {

    private int target;
    private int current;

    public IntegerAmountClueStepContext() {
    }

    public IntegerAmountClueStepContext(int target) {
        this.target = target;
        this.current = 0;
    }

    public void increment() {
        ++this.current;
    }

    @Override
    public void read(CompoundNBT tag) {
        super.read(tag);

        this.target = tag.getInt("target");
        this.current = tag.getInt("current");
    }

    @Override
    public void write(CompoundNBT tag) {
        super.write(tag);

        tag.putInt("target", this.target);
        tag.putInt("current", this.current);
    }

    @Override
    public String replace(String s) {
        return s.replace("%target%", String.valueOf(this.target))
                .replace("%current%", String.valueOf(this.current));
    }

    @Override
    public boolean isComplete() {
        return this.skipped || this.current >= this.target;
    }
}

```

</details>
