# Requirements

Requirements are conditions that must be met before the user can challenge this gym. They can be extended using sidemods, for those interested which is explained at the bottom of this page. Otherwise, the default accepted types are:

* `BANNED_POKEMON` (where the data field is a spec)
* `COOLDOWN` (where the data field is a cooldown in minutes)
* `PERMISSION` (where the data field is a permission the user must have)
* `GYM` (where the data field is the id of a gym the user needs to have beaten)

The mod will send the failed-message to the user if they do not meet the requirement

The config section looks like the following:

```yaml
type: permission
data: envy.gyms.gym.example
failed-message: '&cYou do not have permission to challenge this gym!'
```

## Developer API

See below for how to register a custom requirement type

```java
public class ExamplePermissionRequirement extends AbstractRequirement {

    private static final String ID = "PERMISSION";

    protected String permission;

    public PermissionRequirement() {
        super(ID);
    }

    @Override
    public void load(ConfigGymRequirement requirement) {
        super.load(requirement);

        this.permission = requirement.getData();
    }

    @Override
    public boolean meets(Gym gym, EnvyPlayer<?> player) {
        return UtilPlayer.hasPermission((ServerPlayerEntity) player.getParent(), this.permission);
    }
}

public static class RandomMainClass {

    public static void registerRequirement() {
       RequirementRegistry.register(ExamplePermissionRequirement::new);
   }
}

```
