<?php
/**
 * @company		:	BriTech Solutions
 * @created by	:	JoomBri Team
 * @contact		:	www.joombri.in, support@joombri.in
 * @created on	:	03 February 2015
 * @file name	:	views/service/tmpl/rateservice.php
 * @copyright   :	Copyright (C) 2012 - 2015 BriTech Solutions. All rights reserved.
 * @license     :	GNU General Public License version 2 or later
 * @author      :	Faisel
 * @description	: 	Rate user (jblance)
 */
 defined('_JEXEC') or die('Restricted access');
 
 JHtml::_('behavior.framework', true);
 JHtml::_('behavior.formvalidation');

 $model 		= $this->getModel();
 $row			= $this->row;
 $config		= JblanceHelper::getConfig();
 $showUsername 	= $config->showUsername;
 $nameOrUsername = ($showUsername) ? 'username' : 'name';
 
 //find the current user is the buyer or seller. If the user is buyer, then the target is seller and vice versa
 $user = JFactory::getUser();
 if($user->id == $row->buyer_id){
 	$actor = $row->buyer_id;
 	$target = $row->seller_id;
 	$target_rate_type = 'COM_JBLANCE_FREELANCER';	//freelancer is equal to seller
 }
 elseif($user->id == $row->seller_id){
 	$actor = $row->seller_id;
 	$target = $row->buyer_id;
 	$target_rate_type = 'COM_JBLANCE_BUYER';
 }
?>
<script type="text/javascript">
<!--
function validateForm(f){
	var valid = document.formvalidator.isValid(f);
	
	if(valid == true){
		
    }
    else {
		alert('<?php echo JText::_('COM_JBLANCE_FIEDS_HIGHLIGHTED_RED_COMPULSORY', true); ?>');
		return false;
    }
	return true;
}
//-->
</script>
<form action="<?php echo JRoute::_('index.php'); ?>" method="post" name="userFormProject" id="userFormProject" class="form-validate form-horizontal" onsubmit="return validateForm(this);">
	<div class="jbl_h3title"><?php echo JText::_('COM_JBLANCE_RATE_USER'); ?></div>
	<div class="control-group">
		<label class="control-label nopadding"><?php echo JText::_('COM_JBLANCE_SERVICE_TITLE'); ?>: </label>
		<div class="controls font16">
			<?php echo $row->service_title; ?>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label nopadding"><?php echo JText::_('COM_JBLANCE_NAME'); ?>: </label>
		<div class="controls">
			<?php
			$target_user = JFactory::getUser($target);
			echo $target_user->$nameOrUsername;//.' ('.JText::_($target_rate_type).')'; ?>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="quality_clarity"><?php echo ($target_rate_type == 'COM_JBLANCE_BUYER') ? JText::_('COM_JBLANCE_CLARITY_SPECIFICATION') : JText::_('COM_JBLANCE_QUALITY_OF_WORK'); ?>: </label>
		<div class="controls">
			<?php $rating = $model->getSelectRating('quality_clarity', '');
			echo $rating; ?>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="communicate"><?php echo JText::_('COM_JBLANCE_COMMUNICATION'); ?>: </label>
		<div class="controls">
			<?php $rating = $model->getSelectRating('communicate', '');
			echo $rating; ?>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="expertise_payment"><?php echo ($target_rate_type == 'COM_JBLANCE_BUYER') ? JText::_('COM_JBLANCE_PAYMENT_PROMPTNESS') : JText::_('COM_JBLANCE_EXPERTISE'); ?>: </label>
		<div class="controls">
			<?php $rating = $model->getSelectRating('expertise_payment', '');
			echo $rating; ?>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="professional"><?php echo JText::_('COM_JBLANCE_PROFESSIONALISM'); ?>: </label>
		<div class="controls">
			<?php $rating = $model->getSelectRating('professional', '');
			echo $rating; ?>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="hire_work_again"><?php echo ($target_rate_type == 'COM_JBLANCE_BUYER') ? JText::_('COM_JBLANCE_WORK_AGAIN') : JText::_('COM_JBLANCE_HIRE_AGAIN'); ?>: </label>
		<div class="controls">
			<?php $rating = $model->getSelectRating('hire_work_again', '');
			echo $rating; ?>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="comments"><?php echo JText::_('COM_JBLANCE_COMMENTS'); ?>: </label>
		<div class="controls">
			<textarea name="comments" rows="5" class="input-xlarge required"></textarea>
		</div>
	</div>
	<div class="form-actions">
		<input type="submit" value="<?php echo JText::_('COM_JBLANCE_SUBMIT'); ?>" class="btn btn-primary" />
	</div>
	
	<input type="hidden" name="option" value="com_jblance" />			
	<input type="hidden" name="task" value="service.saverateuser" />	
	<!-- <input type="hidden" name="id" value="0" /> -->
	<input type="hidden" name="actor" value="<?php echo $actor; ?>" />
	<input type="hidden" name="target" value="<?php echo $target; ?>" />
	<input type="hidden" name="project_id" value="<?php echo $row->order_id; ?>" />
	<input type="hidden" name="rate_type" value="<?php echo $target_rate_type; ?>" />
	<input type="hidden" name="type" value="COM_JBLANCE_SERVICE" />
	<?php echo JHtml::_('form.token'); ?>
	</form>