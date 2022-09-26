
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'sebastian', 'juan@gmail.com', '$2y$10$JrB5gpCFWfA3.Nt2BupiweYas//Kd02pjtHV4YIr/89700uBA2OcG', NULL, '2020-04-06 04:14:57', '2020-04-06 04:14:57'),
(4, 'sebastian', 'juan1@gmail.com', '$2a$10$UkDTeCYfbSXFlZ9HVpWI6.ynpLaohaQtRZ8XZkSfK.81iYMMypmCW', NULL, '2022-09-26 22:36:42', '2022-09-26 22:36:42');

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
