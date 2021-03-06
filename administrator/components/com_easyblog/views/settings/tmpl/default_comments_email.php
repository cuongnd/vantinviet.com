<?php
/**
* @package		EasyBlog
* @copyright	Copyright (C) 2010 Stack Ideas Private Limited. All rights reserved.
* @license		GNU/GPL, see LICENSE.php
* EasyBlog is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
defined('_JEXEC') or die('Restricted access');
?>
<table class="noshow">
	<tr>
		<td width="50%" valign="top">
			<fieldset class="adminform">
			<legend><?php echo JText::_( 'COM_EASYBLOG_SETTINGS_EMAIL_COMMENTS_TITLE' ); ?></legend>
			<p><?php echo JText::_('COM_EASYBLOG_SETTINGS_EMAIL_COMMENTS_DESC');?></p>
			<table class="admintable" cellspacing="1">
				<tr>
					<td width="300" class="key">
						<span class="editlinktip">
							<?php echo JText::_( 'COM_EASYBLOG_SETTINGS_EMAIL_COMMENTS_ENABLE' ); ?>
						</span>
					</td>
					<td valign="top">
						<div class="has-tip">
							<div class="tip"><i></i><?php echo JText::_( 'COM_EASYBLOG_SETTINGS_EMAIL_COMMENTS_ENABLE_DESC' ); ?></div>
							<?php echo $this->renderCheckbox( 'main_comment_email' , $this->config->get( 'main_comment_email' ) );?>
						</div>
					</td>
				</tr>
			</table>
			</fieldset>
		</td>
		<td>&nbsp;</td>
	</tr>
</table>
