<?php
/**
* @package 		EasySocial
* @copyright	Copyright (C) 2010 - 2014 Stack Ideas Sdn Bhd. All rights reserved.
* @license 		Proprietary Use License http://stackideas.com/licensing.html
* @author 		Stack Ideas Sdn Bhd
*/
defined( '_JEXEC' ) or die( 'Unauthorized Access' );
?>
EasySocial.require()
.script( 'oauth/login' )
.done( function($)
{
	console.log( 'hey' );
	$( '[data-oauth-twitter]' ).implement( EasySocial.Controller.OAuth.Login ,
		{
			appId 	: "<?php echo $appId;?>",
			url		: "<?php echo $url;?>"
		});
});
