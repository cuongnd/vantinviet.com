<?php
/**
 * @package    HikaMarket for Joomla!
 * @version    1.7.0
 * @author     Obsidev S.A.R.L.
 * @copyright  (C) 2011-2016 OBSIDEV. All rights reserved.
 * @license    GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 */
defined('_JEXEC') or die('Restricted access');
?><?php
class modulesMarketController extends hikamarketController {
	protected $type = 'modules';

	protected $rights = array(
		'display' => array('display', 'show', 'listing', 'cancel', 'getvalues'),
		'add' => array('add'),
		'edit' => array('edit', 'toggle'),
		'modify' => array('save', 'apply'),
		'delete' => array('remove')
	);

	public function __construct($config = array())	{
		parent::__construct($config);
		$this->registerDefaultTask('listing');
	}

	public function store() {
		$app = JFactory::getApplication();
		if($app->isAdmin())
			return $this->adminStore();
		return false;
	}

	public function remove() {
		$app = JFactory::getApplication();
		if($app->isAdmin())
			return $this->adminRemove();
		return false;
	}

	public function edit() {
		$app = JFactory::getApplication();
		$id = hikamarket::getCID('id');

		if(HIKASHOP_J30) {
			if(!empty($id))
				$app->redirect( JRoute::_('index.php?option=com_modules&view=module&layout=edit&id='.$id, false) );
			else
				$app->redirect( JRoute::_('index.php?option=com_modules&view=module', false) );
		}

		if(JRequest::getInt('fromjoomla') && !empty($id)) {
			$context = 'com_modules.edit.item';

			$values = (array)$app->getUserState($context . '.id');
			$index = array_search((int)$id, $values, true);
			if(is_int($index)) {
				unset($values[$index]);
				$app->setUserState($context . '.id', $values);
			}
		}
		return parent::edit();
	}

	public function getValues() {
		$displayFormat = JRequest::getVar('displayFormat', '');
		$search = JRequest::getVar('search', null);
		$start = JRequest::getInt('start', 0);

		$nameboxType = hikamarket::get('type.namebox');
		$options = array(
			'displayFormat' => $displayFormat
		);
		if($start > 0)
			$options['page'] = $start;
		$ret = $nameboxType->getValues($search, 'modules', $options);
		if(!empty($ret)) {
			echo json_encode($ret);
			exit;
		}
		echo '[]';
		exit;
	}
}
