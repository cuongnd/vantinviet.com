<?php
/**
* @package		EasySocial
* @copyright	Copyright (C) 2010 - 2014 Stack Ideas Sdn Bhd. All rights reserved.
* @license		GNU/GPL, see LICENSE.php
* EasySocial is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
defined( '_JEXEC' ) or die( 'Unauthorized Access' );

// Get installation method here
$method 	= JRequest::getVar( 'method' );
$file 		= dirname( __FILE__ ) . '/installing.' . $method . '.php';

if( !JFile::exists( $file ) )
{
	echo JText::_( 'COM_EASYSOCIAL_INSTALLATION_ERROR_INVALID_INSTALLATION_METHOD' );

	return;
}


include_once( dirname( __FILE__ ) . '/installing.' . $method . '.php' );
