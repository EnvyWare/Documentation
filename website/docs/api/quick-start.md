# Quick Start

## Gradle

Firstly you need to begin by creating a Gradle project. You can find examples of this using the [Forge MDK](https://files.minecraftforge.net/net/minecraftforge/forge/), or the [Pixelmon MDK](https://github.com/EnvyWare/Pixelmon-MDK). You can also find more generic information for starting a Gradle project [here](https://docs.gradle.org/current/userguide/getting\_started.html).

## Add the EnvyWare repository

Once you've setup your gradle project you'll need to add the EnvyWare maven repository so that gradle knows where to download the dependency from. This can be done like so:

```groovy
  maven {
       url "https://maven.envyware.co.uk/releases"
  }
```

{% hint style="info" %}
**You can find other examples of how to setup the EnvyWare maven repository on the online web view (**[**here**](http://maven.envyware.co.uk/)**).**
{% endhint %}

## Add the module dependencies

Once you have added the maven repository you then need to add the modules you want as dependencies for your project. You can find how to do this below.&#x20;

\
You will need to learn how to shadow the dependencies into the JAR file. This is done so that your end users do not have to install any extra dependencies when adding your mods to their game.&#x20;

You can find how to use (and setup) shadow [here](https://imperceptiblethoughts.com/shadow/getting-started/).&#x20;

**There are multiple different modules for the EnvyWare API which include:**
* commons
* discord
* forge
* forge16
* forge19
* forge20
* spigot
* reforged
* reforged16


```groovy
dependencies {
  shadow "com.envyful.api:commons:5.0.1"
}
```