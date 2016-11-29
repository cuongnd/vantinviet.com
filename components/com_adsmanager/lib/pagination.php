<?php
/**
 * @package		AdsManager
 * @copyright	Copyright (C) 2010-2014 Juloa.com. All rights reserved.
 * @license		GNU/GPL
 */
// no direct access
defined('_JEXEC') or die('Restricted access');

jimport('joomla.html.pagination');

//This class is used to be able to use pagination on a CB tab. The baseURL is normally
// generated by the JPagination with JPagination2 the URL is given by argument
class JPagination2 extends JPagination
{
	var $url;
	function __construct($total, $limitstart, $limit,$url = "")
	{
		//echo $url;
		parent::__construct($total, $limitstart, $limit);
		$this->url = $url;
	}

	/**
	 * Create and return the pagination data object
	 *
	 * @access	public
	 * @return	object	Pagination data object
	 * @since	1.5
	 */
	function _buildDataObject()
	{
		// Initialize variables
		$data = new stdClass();

		$data->all	= new JPaginationObject(JText::_('JLIB_HTML_VIEW_ALL'));
		if (!@$this->_viewall) {
			$data->all->base	= '0';
			$data->all->link	= TRoute::_("{$this->url}&limitstart=");
		}

		// Set the start and previous data objects
		$data->start	= new JPaginationObject(JText::_('JLIB_HTML_START'));
		$data->previous	= new JPaginationObject(JText::_('JPREV'));

		if ($this->get('pages.current') > 1)
		{
			$page = ($this->get('pages.current') -2) * $this->limit;

			$page = $page == 0 ? '' : $page; //set the empty for removal from route

			$data->start->base	= '0';
			$data->start->link	= TRoute::_("{$this->url}&limitstart=");
			$data->previous->base	= $page;
			$data->previous->link	= TRoute::_("{$this->url}&limitstart=".$page);
		}

		// Set the next and end data objects
		$data->next	= new JPaginationObject(JText::_('JNEXT'));
		$data->end	= new JPaginationObject(JText::_('JLIB_HTML_END'));

		if ($this->get('pages.current') < $this->get('pages.total'))
		{
			$next = $this->get('pages.current') * $this->limit;
			$end  = ($this->get('pages.total') -1) * $this->limit;

			$data->next->base	= $next;
			$data->next->link	= TRoute::_("{$this->url}&limitstart=".$next);
			$data->end->base	= $end;
			$data->end->link	= TRoute::_("{$this->url}&limitstart=".$end);
		}

		$data->pages = array();
		$stop = $this->get('pages.stop');
		for ($i = $this->get('pages.start'); $i <= $stop; $i ++)
		{
			$offset = ($i -1) * $this->limit;

			$offset = $offset == 0 ? '' : $offset;  //set the empty for removal from route

			$data->pages[$i] = new JPaginationObject($i);
			if ($i != $this->get('pages.current') || @$this->_viewall)
			{
				$data->pages[$i]->base	= $offset;
				$data->pages[$i]->link	= TRoute::_("{$this->url}&limitstart=".$offset);
			}
		}
		return $data;
	}
}