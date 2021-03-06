<?php
/**
* Joomlaquiz Deluxe Component for Joomla 3
* @package Joomlaquiz Deluxe
* @author JoomPlace Team
* @copyright Copyright (C) JoomPlace, www.joomplace.com
* @license GNU/GPL http://www.gnu.org/copyleft/gpl.html
*/
 defined('_JEXEC') or die('Restricted access');

jimport('joomla.application.component.view');

/**
 * HTML View class for the Joomlaquiz Deluxe Component
 */
class JoomlaquizViewQuiz extends JViewLegacy
{
    public function display($tpl = null, $quiz_params = null, $is_preview = false, $preview_quest = 0, $preview_id = '')
    {
		$this->quiz_params = ($quiz_params !== null) ? $quiz_params : $this->get('QuizParams');
		
		$this->is_preview = $is_preview;
		$this->preview_quest = $preview_quest;
		$this->preview_id = $preview_id;
		
		// Check for errors.
		if (count($errors = $this->get('Errors'))) {
			JError::raiseError(500, implode("\n", $errors));
			return false;
		}
		
		if(!$this->quiz_params->error){
			// Checking access and displaying.
			$this->user = JFactory::getUser();
			$viewAccessGranted = $this->user->authorise('core.view', 'com_joomlaquiz.quiz.'.$this->quiz_params->c_id);

			if ($viewAccessGranted OR $this->quiz_params->c_guest)
			{
				parent::display($tpl);

			} else {

	            $db = JFactory::getDBO();
	            $db->setQuery('SELECT c_quiz_access_message FROM #__quiz_t_quiz WHERE c_id='.$this->quiz_params->c_id);
	            $msgDbText = $db->loadResult();
	            if(!empty($msgDbText)){
	                echo $msgDbText;
	            }else{
	                ?>
	                    <div>
	                        <span style="color:red;"><?php echo JText::_('COM_JOOMLAQUIZ_FE_NO_RIGHTS_VIEW_QUIZ') . '.'; ?></span>
	                        <br/><br/>
	                    </div>
	                <?php
	            }
			}
		} else {

			parent::display($tpl);
			
		}
    }
}
?>
