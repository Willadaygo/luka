<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return [

	// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
	// 'server' => 'localhost',

	// // The name of the database to select.
	// 'database' => 'luka',

	// // The database username to connect with.
	// 'user' => 'root',

	// // The database password to connect with.
	// 'password' => '',

	// // The prefix to use when naming tables. This can be no more than 5 characters.
	// 'tablePrefix' => 'craft',
	'server'      => getenv('MYSQL_HOST')     ?: 'localhost',
	'database'    => getenv('MYSQL_DATABASE') ?: 'luka',
	'user'        => getenv('MYSQL_USER')     ?: 'root',
	'password'    => getenv('MYSQL_PASSWORD') ?: '',
	'tablePrefix' => 'craft',

	// to be compatible with MySQL 5.7, requires 2.6.2949 or greater
	'initSQLs'     => ["SET SESSION sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';"],

];

	
