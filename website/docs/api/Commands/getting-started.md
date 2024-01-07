# Getting Started

There is currently two ways of registering commands with the EnvyWare command API. But before we can register any commands you will need an instance of the CommandFactory interface.

The command factory handles all registering, parsing, and general platform level operations for the commands.

You can get an instance of the CommandFactory for your platform like so:

```java
public class MainModClass {

    private ForgePlayerManager playerManager = new ForgePlayerManager();
    private ForgeCommandFactory commandFactory = new ForgeCommandFactory(ForgeAnnotationCommandParser::new, playerManager);

}
```

The above example is taken directly from EnvyGyms, and demonstrates getting an instance of the ForgeCommandFactory, using the annotation based parsing (which is currently the only parsing type that exists).

Once you have this command factory you can then parse, and register commands using the `CommandFactory#parse`, and `CommandFactory#register` methods. \


For velocity you will want to use the `VelocityCommandFactory` and the `VelocityAnnotationCommandParser`.
