<?php
/**
 * @version     $Id$
 * @package     JSNExtension
 * @subpackage  JSNTPLFramework
 * @author      JoomlaShine Team <support@joomlashine.com>
 * @copyright   Copyright (C) 2015 JoomlaShine.com. All Rights Reserved.
 * @license     GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */
include_once JPATH_ROOT . '/plugins/system/jsntplframework/libraries/joomlashine/megamenu/helpers/html.php';


class JSNTplHelperHtmlradio extends JSNTplMMHelperHtml {
	/**
	 * Radio
	 * @param type $element
	 * @return string
	 */
	public static function render( $element ) {
		$element['class'] = isset( $element['class'] ) ? $element['class'] : 'radio inline';
		$element['type_input'] = 'radio';
		return JSNTplMMHelperShortcode::renderParameter( 'checkbox', $element );
	}
}