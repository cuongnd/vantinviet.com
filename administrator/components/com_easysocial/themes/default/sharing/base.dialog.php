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
?>
<a href="javascript:void(0);"
	class="<?php echo $css;?>"
	data-es-share-button
	data-url="<?php echo $url; ?>"
	data-title="<?php echo $title; ?>"
	data-summary="<?php echo $summary; ?>"
	>
	<?php if ($icon) { ?>
	<i class="ies-share"></i>
	<?php } ?>
	<?php echo $text; ?>
</a>
