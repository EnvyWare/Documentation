# Builder Commands

The alternative method of registering commands is using the `PlatformCommandBuilder` provided using the `CommandFactory` method `commandBuilder`. All the methods are relatively self explanatory, and below you can find an example.

```java
public PlatformCommand getCommandNow() {
    return this.commandFactory.commandBuilder()
                .name("broadcast")
                .aliases(Lists.newArrayList("bc"))
                .permissionCheck((sender, args) -> UtilPlayer.hasPermission(sender, "command.broadcast"))
                .descriptionProvider((sender, args) -> Lists.newArrayList("Broadcast command"))
                .noPermissionProvider(sender -> Collections.singletonList("&c&l(!) &cYou do not have permission to use this command!"))
                .executor((sender, args) -> sender.sendSystemMessage(Component.literal("broadcast message! " + String.join(" ", args)))
                .subCommands(Lists.newArrayList(getCommandNow())) // Probably best not to do this but serves as a reasonable example
                .tabHandler((sender, args) -> Lists.newArrayList("hello world"))
                .build();
}
```
