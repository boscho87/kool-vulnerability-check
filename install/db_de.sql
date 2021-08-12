UPDATE `ko_settings` SET `value` = 'Dienstplan <DIENSTNAME> f�r <MONAT> <JAHR>\n\nBitte Daten f�r folgende Anl�sse bis sp�testens <DEADLINE> erfassen resp. korrigieren:\n<ANLASSLISTE>\n\nVielen Dank und liebe Gr�sse' WHERE  CONVERT(`ko_settings`.`key` USING utf8) = 'dp_mailtext_1';

UPDATE `ko_settings` SET `value` = 'Hier bekommst du den Dienstplan f�r den n�chsten Monat.\nVielen Dank f�r deinen Einsatz!\n\nLiebe Gr�sse' WHERE  CONVERT(`ko_settings`.`key` USING utf8) = 'dp_mailtext_2';

UPDATE `ko_settings` SET `value` = 'Dienstplan' WHERE  CONVERT(`ko_settings`.`key` USING utf8) = 'dp_titel';

UPDATE `ko_settings` SET `value` = '41' WHERE `key` = 'sms_country_code';



UPDATE `ko_pdf_layout` SET `name` = 'Layout 1' WHERE `ko_pdf_layout`.`id` = '1';
