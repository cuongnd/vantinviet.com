ALTER TABLE `#__cmgroupbuying_management` ADD `partner_edit_profile` TINYINT( 1 ) NOT NULL AFTER `partner_view_commission_report`;
ALTER TABLE `#__cmgroupbuying_configuration` ADD `exchange_rate` DECIMAL( 10, 2 ) NOT NULL DEFAULT '1' AFTER `purchase_bonus`;