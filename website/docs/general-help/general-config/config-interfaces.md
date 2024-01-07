---
description: GUI settings in the configs
---

# Config Interfaces

You can usually find all GUI related settings in the guis.yml of the mods. However, there are some exceptions to that rule so it's worth checking all the config files before asking where it is.

<details>

<summary>General Settings</summary>

Every GUI comes with the same general settings.&#x20;

<pre class="language-yaml"><code class="lang-yaml">gui-settings:
<strong>  title: 'EnvyBattleTower'
</strong>  height: 3
  fill-type: 'BLOCK'
  filler-items:
    one:
      enabled: true
      type: 'minecraft:black_stained_glass_pane'
      amount: '1'
      name: ' '
      flags: []
      lore: []
      enchants: {}
      nbt: {}
</code></pre>

The title section of the GUI settings is what defines the text at the top of the inventory.

The height is the number of rows the GUI has.

The fill-type is how the background items are defined. You can find further information on that in the sections below.

</details>

There are currently four types of fill options for GUI settings.

### **Block**

This will use the first item in the selection of fill items and fill every slot with it.

Config text: `BLOCK`

As seen in the image below:

![BLOCK](https://i.gyazo.com/806eb0c103a849ac41a4730edda827fd.png)

### Alternating

This will fill each odd numbered slot with the first item in the selection, and then each even numbered slot with the second item in the selection.

Config text: `ALTERNATING`

As seen in the image below:

![ALTERNATING](https://i.gyazo.com/64a557a3167bccf722ff40d79c22273f.png)

### Checkered

This will do a checkered pattern using the first two items in the selection.

Config text: `CHECKERED`

As seen in the image below:

![CHECKERED GUI](https://i.gyazo.com/89733f186be5d2d2a1c516321ed2fbb3.png)

### Custom

This will fill each slot with each item in the item selection in the order provided.

Config text: `CUSTOM`

As shown in the image below:

![CUSTOM](https://i.gyazo.com/9812ffa1759112a0a60c3fa658280c56.png)
