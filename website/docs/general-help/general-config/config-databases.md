---
description: Database settings in the configs
---

# Database Settings
In any mod that stores data you will find a section of the config that refers to a database. 
This is where you can decide how you want your data to be stored and accessed.

There are two options for the database type: `SQLITE` and `SQL`.

### SQLite
This is the default setting in all of the mods. This is because it uses a file to store the data and so
works without any additional setup. This is the best option for single player worlds or small servers.

Below is an example section of the config from EnvyGTS
```yaml
database-details:
    id: sqlite
    file-path: config/EnvyGTS/gts.db
```

### MySQL
This is the best option for larger servers, or those concerned about data security. It is a more complex setup
but results in a more efficient system as the data is stored on a server rather than in a file. This means that
the reads and writes are not happening on the same machine as your Minecraft server and so won't impact
the performance.

Below is an example section of the config from EnvyGTS
```yaml
database-details:
    id: sql
    pool-name: BetterDexRewards
    ip: localhost
    port: 3306
    username: pixelmon_test
    password: c(5*Z&vRJ"ByLrzN
    database: pixelmon_test
    max-pool-size: 10
    max-life-time-seconds: 30
```