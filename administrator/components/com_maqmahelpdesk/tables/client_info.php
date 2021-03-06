<?php
/**
 * MaQma Helpdesk Component
 * www.imaqma.com
 *
 * @package   MaQma_Helpdesk
 * @copyright (C) 2006-2012 Components Lab, Lda.
 * @license   GNU General Public License version 2 or later; see LICENSE.txt
 *
 */

defined('_JEXEC') or die('Direct Access to this location is not allowed.');

class MaQmaHelpdeskTableClientInfo extends JTable
{
	var $id = null;
	var $id_client = 0;
	var $date = null;
	var $subject = null;
	var $message = null;
	var $published = 1;

	function __construct(&$_db)
	{
		parent::__construct('#__support_client_info', 'id', $_db);
	}
}