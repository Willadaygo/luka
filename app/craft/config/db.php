<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return [

	// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
	'server' => 'localhost',

	// The name of the database to select.
	'database' => 'luka',

	// The database username to connect with.
	'user' => 'root',

	// The database password to connect with.
	'password' => '',

	// The prefix to use when naming tables. This can be no more than 5 characters.
	'tablePrefix' => 'craft',

];

// '*' => [
// 	'environmentVariables' => [
// 		'siteUrl' => 'https://luka.dev/'
// 	],
// 	'enableCsrfProtection' => true,
// 	'omitScriptNameInUrls' => true,
// 	'cpTrigger' => 'admin',
// 	'devMode' => true,
// 	'usePathInfo' => true,
// ],
// '.com' => [
// 	'environmentVariables' => [
// 		'siteUrl' => 'http://luka.com/'
// 	],
// 	'devMode' => false,
// ]
