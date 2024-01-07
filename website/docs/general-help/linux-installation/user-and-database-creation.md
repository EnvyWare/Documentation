# User and Database Creation

This here will help you setup your first database along with a user.

```
mysql -u root -p

# Remember to change 'User' & 'yourPassword' below to be a unique!
CREATE USER 'User'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
#Change DBNAME to whatever you want your Database to be called
CREATE DATABASE DBNAME;
GRANT ALL PRIVILEGES ON panel.* TO 'User'@'127.0.0.1' WITH GRANT OPTION;
exit
```



Now do this to install the basic enviroment

```
cp .env.example .env
composer install --no-dev --optimize-autoloader
```

You can also use this to add more users

```
php artisan p:user:make
```

