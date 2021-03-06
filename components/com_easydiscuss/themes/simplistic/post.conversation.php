<?php
/**
 * @package		EasyDiscuss
 * @copyright	Copyright (C) 2010 Stack Ideas Private Limited. All rights reserved.
 * @license		GNU/GPL, see LICENSE.php
 *
 * EasyDiscuss is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 */
defined('_JEXEC') or die('Restricted access');
?>
<?php if( $system->my->id && $system->my->id != $userId && $userId != 0 ){ ?>
	<?php if( $system->config->get( 'integration_jomsocial_messaging' ) && JFile::exists( JPATH_ROOT . '/components/com_community/libraries/core.php') ){ ?>
		<?php
		require_once( JPATH_ROOT . '/components/com_community/libraries/core.php' );
		require_once( JPATH_ROOT . '/components/com_community/libraries/messaging.php' );
		CMessaging::load();
		?>
		<a href="javascript:void(0);" onclick="joms.messaging.loadComposeWindow('<?php echo $userId;?>' );" class="btn btn-mini btn-conversation mt-10">
			<i class="icon-ed-pm"></i> <?php echo JText::_( 'COM_EASYDISCUSS_CONVERSATIONS_WRITE' );?>
		</a>
	<?php } else { ?>
		<?php if( $system->config->get( 'main_conversations' ) ){ ?>
		<a href="javascript:void(0);" onclick="discuss.conversation.write('<?php echo $userId;?>' );" class="btn btn-mini btn-conversation mt-10" data-original-title="<?php echo JText::_( 'COM_EASYDISCUSS_SEND_MESSAGE_TO_USER' ); ?>" rel="ed-tooltip">
			<i class="icon-ed-pm"></i> <?php echo JText::_( 'COM_EASYDISCUSS_CONVERSATIONS_WRITE' );?>
		</a>
		<?php } ?>
	<?php } ?>
<?php } ?>
