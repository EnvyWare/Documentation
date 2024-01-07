# Custom Placeholders

### Adding build support

Add the follow to your build.gradle:

```
    repositories {
        maven { url 'https://jitpack.io' }
    }

    dependencies {
        compileOnly 'com.github.Pixelmon-Development.ForgePlaceholderAPI:api:2.0.0'
    }
```

The repository allows you to add the dependency directly from jitpack. Ensure to replace the version tag (2.0.0) with the latest release from this repository.

### Custom Placeholders

Upon adding the dependency you will then be able to extend the `AbstractPlaceholderManager` interface like so:

```
public class ForgePlaceholders extends AbstractPlaceholderManager<EntityPlayerMP> {

    private static final String IDENTIFIER = "forge";
    private static final String[] AUTHORS = new String[] { "Envyful" };
    private static final String VERSION = "2.0.0";
    private static final String NAME = "forge";

    public ForgePlaceholders() {
        super(IDENTIFIER, AUTHORS, VERSION, NAME);

        this.registerPlaceholder(new NameExtension());
    }
}

public class NameExtension extends SimpleExtension<EntityPlayerMP> {

    private static final String NAME = "name";
    private static final int PRIORITY = 1;
    private static final List<String> DESCRIPTION = Lists.newArrayList("Gets the player's name");
    private static final List<String> EXAMPLES = Lists.newArrayList("%forge_name%");

    public NameExtension() {
        super(NAME, PRIORITY, DESCRIPTION, EXAMPLES);
    }

    @Override
    public String parse(EntityPlayerMP player, String placeholder) {
        return player.getName();
    }
}
```

Once this interface is registered it will add the registered extension as a placeholder under this manager.

For further examples of how to do this look through the examples in this repository.

### Registering Placeholders

In order for your Placeholders to be registered place your jar file inside the `mods/ForgePlaceholderAPI/` directory on your server. Alternatively, you can register the placeholder directly using the method `PlaceholderFactory#register`
