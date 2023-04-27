/*
  Warnings:

  - You are about to drop the column `image_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `image_path` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_ip` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `image_id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `image_path` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_ip` VARCHAR(191) NOT NULL;
