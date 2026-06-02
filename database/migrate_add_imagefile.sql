-- Migration: add ImageFile column to restaurant table
-- Run this if you have an existing munch_maps database from before this change.

ALTER TABLE `restaurant` ADD COLUMN `ImageFile` varchar(255) DEFAULT NULL;

UPDATE `restaurant` SET `ImageFile` = 'DA.jpeg'                    WHERE RestaurantID = 1;
UPDATE `restaurant` SET `ImageFile` = 'five star chicken.jpg'      WHERE RestaurantID = 2;
UPDATE `restaurant` SET `ImageFile` = 'Masth cafe.jpg'             WHERE RestaurantID = 3;
UPDATE `restaurant` SET `ImageFile` = 'nature coffee.jpg'          WHERE RestaurantID = 4;
UPDATE `restaurant` SET `ImageFile` = 'royal cakes.jpg'            WHERE RestaurantID = 5;
UPDATE `restaurant` SET `ImageFile` = 'SH.jpeg'                    WHERE RestaurantID = 6;
UPDATE `restaurant` SET `ImageFile` = 'BC.jpeg'                    WHERE RestaurantID = 7;
UPDATE `restaurant` SET `ImageFile` = 'GHC.jpeg'                   WHERE RestaurantID = 8;
UPDATE `restaurant` SET `ImageFile` = 'lkbs.jpg'                   WHERE RestaurantID = 9;
UPDATE `restaurant` SET `ImageFile` = 'vaishnavi Palace.jpg'       WHERE RestaurantID = 10;
UPDATE `restaurant` SET `ImageFile` = 'vge gate.jpg'               WHERE RestaurantID = 11;
