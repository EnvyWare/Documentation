# Developer

To create your own Broadcast use the `BroadcastFactory` class. Here is an example

```
        BroadcastFactory.builder(new ItemStack(Items.STONE))
                .lines("Example", "Lines")
                .duration(30)
                .layout(EnumOverlayLayout.LEFT_AND_RIGHT)
                .build().sendAll();
```
