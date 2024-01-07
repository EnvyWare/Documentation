# Creating User Accounts

Now to add new users, you will need to go to the User Accounts tab at the top of your PhpMyAdmin Homepage. (You can get there by clicking the house icon at the top left of your page)

<br>

<img src="../.gitbook/assets/Screenshot 2023-01-15 211151.png" alt="">

<img src="../.gitbook/assets/main user accouint creation page.png" alt="">

These items listed below should be the only things you need to change\
`User name:`  This is the name of the user\
`Host name:` This is the IP endpoint that will be allowed to use the connection, set it to `%` to allow any IP to use this user\
`Password`: this one should be obvious

## Global vs Database Privileges

The difference between global and database privileges is that when setting a global privilege, the user will be able to use that check marked privilege on **ANY** database that is within your network.\
<br>
While setting database privileges, you set privileges within a specified Database itself, meaning you only give it the permissions for that specific database.

<img src="../.gitbook/assets/global database.png" alt="">

You can set Global/Database privileges by clicking on your user and clicking one of the tabs that are shown above.
