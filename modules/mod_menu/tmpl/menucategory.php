<?php/** * @package     Joomla.Site * @subpackage  mod_menu * * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved. * @license     GNU General Public License version 2 or later; see LICENSE.txt */$doc = JFactory::getDocument();$doc->addLessStyleSheet(JUri::root() . 'modules/mod_menu/assests/less/menucategory.less');$doc->addScript(JUri::root().'modules/mod_menu/assests/js/menucategory.js');$doc = JFactory::getDocument();$params=$module->params;JHtml::_('jQuery.appear');$lazyload=(boolean)$params->get('lazyload',false);?><div class="mod_menu menucategory" id="mod_menu_<?php echo $module->id ?>">    <?php    if($lazyload){        require JModuleHelper::getLayoutPath('mod_menu', 'menucategory_deconstruction');    }else{        require JModuleHelper::getLayoutPath('mod_menu', 'menucategory_basic');    }    ?></div><?php$js_content = '';$doc = JFactory::getDocument();ob_start();?><script type="text/javascript">    jQuery(document).ready(function ($) {        $("#mod_menu_<?php echo $module->id ?>").menucategory({            module_id:<?php echo $module->id   ?>,            lazyload: <?php echo json_encode($lazyload) ?>,            params:<?php echo json_encode($params->toObject()) ?>        });    });</script><?php$js_content = ob_get_clean();$js_content = JUtility::remove_string_javascript($js_content);$doc->addScriptDeclaration($js_content);?>