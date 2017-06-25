<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return [
	'*' => [
		'environmentVariables' => [
			'siteUrl' => 'https://luka.dev/'
		],
		'enableCsrfProtection' => true,
		'omitScriptNameInUrls' => true,
		'cpTrigger' => 'admin',
		'devMode' => true,
		'usePathInfo' => true,
	],
	'.com' => [
		'environmentVariables' => [
			'siteUrl' => 'http://luka.com/'
		],
		'devMode' => false,
	]
];
