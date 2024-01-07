# Annotation Based Commands

Here you can find information on how to create annotation based commands.

### Class Annotations

Firstly, you will need to annotate the class with the `Command` annotation, `Permissible` annotation, `SubCommands` annotation, and `Description` annotation. Of these the only non-optional one is the `Command` annotation and the command will not parse without this.

#### Command Annotation

This annotation is used to mark the class as one that holds a command handler. It also tells the parser that aliases that the command will accept. There must be at least one entry in the aliases list otherwise the command will fail to parse. \


Additionally, the first alias is always the identifying alias.

#### Permissible Annotation

This optional annotation allows you to require a permission before the command executor can successfully run the command. This is optional and the `PermissionHandler` annotation could be used alternatively (look further for information on how to use that).

Notably, this annotation will automatically register the node provided with the Forge permission handler.

#### Description Annotation

Similarly to the permissible annotation this is also optional, but allows you to provide a default message to send to the user when there is an error in the command handling. You can alternatively use the `DescriptionHandler` annotation (look further for information on how to use that)

#### SubCommands Annotation

This optional annotation allows you to provide sub classes for the command. This means that the aliases will only be checked after the aliases for the given command.&#x20;

All the rules defined in this document apply to sub-commands as well as normal commands.

### Command Processor

The `CommandProcessor` annotation goes above a method, taking a sender and arguments, and dictates the method used for handling the logic for when the command is executed. It can also take the value `executeAsync` which determines if the method should run asynchronously or not.

The first parameter of the method **must** be prefixed with the `Sender` annotation, and a valid sender type. If either of these conditions isn't met then the command will fail to parse.

After that you can then define arguments for the command using the `Argument` annotation. This allows you to specify a default value. You can combine this with the `Completable` annotation for automated tab completions for that specific argument, and that specific type.

Finally, if you want to capture the remainder of the String arugments passed in by the user then you can end your command with a `String[]` variable. This must always be the last parameter in the function.

This will all look something like this (taken from EnvyCrates)

```java
    @CommandProcessor
    public void onCommand(@Sender CommandSource sender,
                          @Completable(PlayerTabCompleter.class) @Argument ForgeEnvyPlayer target,
                          @Completable(CrateTabCompleter.class) @Argument CrateType crate,
                          @Argument(defaultValue = "1") int amount) {
        sender.sendSystemMessage(UtilChatColour.colour("&e&l(!) &eGiving keys"));
        crate.giveKey(target, amount);
    }
```

### Permission Handler

The `PermissionHandler` annotation is for those that want to include some more detailed logic in their permission handling.&#x20;

{% hint style="info" %}
If you're using a modern Forge version don't forget to register your permissions!
{% endhint %}

Using the permission handler annotation would look something like so:

```java
    @PermissionHandler
    public boolean permissionCheck(CommandSource sender, String[] args) {
        return true;
    }
```

### Description Handler

The `DescriptionHandler` annotation is the same as the `PermissionHandler` annotations and allows you to include more logic in your description handling.

Using it would look like so:

```java
    @DescriptionHandler
    public List<String> descriptionLogic(CommandSource sender, String[] args) {
        return Lists.newArrayList("Hello world!");
    }
```

### Completion Handler

The `CompletionHandler` annotation is the same as both of the above handler annotations. Allowing you to provide logic when calculating the tab completions.

```java
    @CompletionHandler
    public List<String> descriptionLogic(CommandSource sender, String[] args) {
        return Lists.newArrayList("hello nerd");
    }
```
