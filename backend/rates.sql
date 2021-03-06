-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2017 at 08:31 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parkingbuddy`
--

-- --------------------------------------------------------

--
-- Table structure for table `rates`
--

CREATE TABLE `rates` (
  `id` int(11) NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `prices` text NOT NULL,
  `dayType` tinytext NOT NULL,
  `carpark` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rates`
--

INSERT INTO `rates` (`id`, `startTime`, `endTime`, `prices`, `dayType`, `carpark`) VALUES
(1, '07:00:00', '18:00:00', '1.07', 'Weekday', 22),
(2, '18:00:00', '06:59:59', '3.75', 'Weekday', 22),
(3, '07:00:00', '18:00:00', '1.07', 'Saturday', 22),
(4, '18:00:00', '06:59:59', '3.75', 'Saturday', 22),
(5, '00:00:00', '23:59:59', '3.75', 'Sunday', 22),
(6, '07:00:00', '17:00:00', '0.9', 'Weekday', 51),
(7, '17:00:00', '06:35:24', '3.6', 'Weekday', 51),
(8, '07:00:00', '17:00:00', '0.9', 'Saturday', 51),
(9, '17:00:00', '06:35:24', '3.6', 'Saturday', 51),
(10, '00:00:00', '23:35:24', '3.6', 'Sunday', 51),
(11, '07:00:00', '19:00:00', '3', 'Weekday', 29),
(12, '19:00:00', '06:35:24', '6', 'Weekday', 29),
(13, '07:00:00', '19:00:00', '3', 'Saturday', 29),
(14, '19:00:00', '06:35:24', '6', 'Saturday', 29),
(15, '07:00:00', '19:00:00', '3', 'Sunday', 29),
(16, '19:00:00', '06:35:24', '6', 'Sunday', 29),
(17, '07:00:00', '17:00:00', '1.1', 'Weekday', 12),
(18, '17:00:00', '02:00:00', '2.2', 'Weekday', 12),
(19, '02:00:00', '06:35:24', '1.1', 'Weekday', 12),
(20, '07:00:00', '14:00:00', '1.2', 'Saturday', 12),
(21, '14:00:00', '06:35:24', '1.1', 'Saturday', 12),
(22, '07:00:00', '14:00:00', '1.2', 'Sunday', 12),
(23, '14:00:00', '06:35:24', '1.1', 'Sunday', 12),
(24, '00:00:00', '18:00:00', '1', 'Weekday', 24),
(25, '18:00:00', '23:35:24', '2.25', 'Weekday', 24),
(26, '00:00:00', '18:00:00', '1', 'Saturday', 24),
(27, '18:00:00', '23:35:24', '2.25', 'Saturday', 24),
(28, '00:00:00', '23:35:24', '2.25', 'Sunday', 24),
(29, '08:00:00', '17:00:00', '1.07', 'Weekday', 20),
(30, '08:00:00', '17:00:00', '3.53', 'Weekday', 20),
(31, '08:00:00', '17:00:00', '1.07', 'Saturday', 20),
(32, '08:00:00', '17:00:00', '3.53', 'Saturday', 20),
(33, '00:00:00', '23:35:24', '3.53', 'Sunday', 20),
(34, '08:00:00', '17:00:00', '1.33', 'Weekday', 23),
(35, '17:00:00', '23:35:24', '3', 'Weekday', 23),
(36, '00:00:00', '07:35:24', '0.53', 'Weekday', 23),
(37, '08:00:00', '17:00:00', '1.28', 'Saturday', 23),
(38, '17:00:00', '23:35:24', '3.74', 'Saturday', 23),
(39, '00:00:00', '07:35:24', '0.53', 'Saturday', 23),
(40, '08:00:00', '17:00:00', '1.28', 'Sunday', 23),
(41, '17:00:00', '23:35:24', '3.74', 'Sunday', 23),
(42, '00:00:00', '07:35:24', '0.53', 'Sunday', 23),
(43, '00:00:00', '17:00:00', '1.28', 'Weekday', 13),
(44, '17:00:00', '19:00:00', '1.82', 'Weekday', 13),
(45, '19:00:00', '23:35:24', '4.28', 'Weekday', 13),
(46, '00:00:00', '17:00:00', '1.28', 'Saturday', 13),
(47, '17:00:00', '19:00:00', '1.82', 'Saturday', 13),
(48, '19:00:00', '23:35:24', '4.28', 'Saturday', 13),
(49, '00:00:00', '17:00:00', '1.28', 'Sunday', 13),
(50, '17:00:00', '19:00:00', '1.82', 'Sunday', 13),
(51, '19:00:00', '23:35:24', '4.28', 'Sunday', 13),
(52, '07:00:00', '23:00:00', '1', 'Weekday', 7),
(53, '23:00:00', '06:35:24', '2', 'Weekday', 7),
(54, '07:00:00', '23:00:00', '1', 'Saturday', 7),
(55, '23:00:00', '06:35:24', '2', 'Saturday', 7),
(56, '07:00:00', '23:00:00', '1', 'Sunday', 7),
(57, '23:00:00', '06:35:24', '2', 'Sunday', 7),
(58, '02:00:00', '18:00:00', '1', 'Weekday', 27),
(59, '16:00:00', '01:59:59', '2.25', 'Weekday', 27),
(60, '02:00:00', '18:00:00', '1', 'Saturday', 27),
(61, '16:00:00', '01:59:59', '2.25', 'Saturday', 27),
(62, '02:00:00', '01:59:59', '2.25', 'Sunday', 27),
(63, '03:00:00', '18:00:00', '1.29', 'Weekday', 55),
(64, '18:00:00', '02:59:59', '3.48', 'Weekday', 55),
(65, '03:00:00', '18:00:00', '1.29', 'Saturday', 55),
(66, '18:00:00', '02:59:59', '3.48', 'Saturday', 55),
(67, '03:00:00', '18:00:00', '1.74', 'Sunday', 55),
(68, '18:00:00', '02:59:59', '3.48', 'Sunday', 55),
(69, '08:00:00', '22:00:00', '0.7', 'Weekday', 10),
(70, '22:00:00', '07:35:24', '3', 'Weekday', 10),
(71, '08:00:00', '22:00:00', '0.7', 'Saturday', 10),
(72, '22:00:00', '07:35:24', '3', 'Saturday', 10),
(73, '08:00:00', '22:00:00', '0.7', 'Sunday', 10),
(74, '22:00:00', '07:35:24', '3', 'Sunday', 10),
(75, '07:00:00', '17:00:00', '1', 'Weekday', 21),
(76, '17:00:00', '06:35:24', '1', 'Weekday', 21),
(77, '07:00:00', '17:00:00', '1', 'Saturday', 21),
(78, '17:00:00', '06:35:24', '1', 'Saturday', 21),
(79, '00:00:00', '23:35:24', '1', 'Sunday', 21),
(80, '08:00:00', '22:35:24', '1.5', 'Weekday', 8),
(81, '08:00:00', '22:35:24', '0.83', 'Saturday', 8),
(82, '08:00:00', '22:35:24', '0.83', 'Sunday', 8),
(83, '07:00:00', '16:35:24', '1.2', 'Weekday', 14),
(84, '17:00:00', '06:35:24', '3.5', 'Weekday', 14),
(85, '00:00:00', '23:35:24', '0.9', 'Saturday', 14),
(86, '00:00:00', '23:35:24', '0.9', 'Sunday', 14),
(87, '07:00:00', '19:00:00', '3.5', 'Weekday', 26),
(88, '19:00:00', '06:35:24', '6', 'Weekday', 26),
(89, '07:00:00', '19:00:00', '4', 'Saturday', 26),
(90, '19:00:00', '06:35:24', '8', 'Saturday', 26),
(91, '07:00:00', '19:00:00', '4', 'Sunday', 26),
(92, '19:00:00', '06:35:24', '8', 'Sunday', 26),
(93, '07:00:00', '16:35:24', '6', 'Weekday', 17),
(94, '17:00:00', '06:35:24', '2', 'Weekday', 17),
(95, '07:00:00', '16:35:24', '7', 'Saturday', 17),
(96, '17:00:00', '06:35:24', '3', 'Saturday', 17),
(97, '07:00:00', '16:35:24', '7', 'Sunday', 17),
(98, '17:00:00', '06:35:24', '3', 'Sunday', 17),
(99, '06:00:00', '18:00:00', '1', 'Weekday', 6),
(100, '18:00:00', '05:35:24', '2', 'Weekday', 6),
(101, '06:00:00', '23:35:24', '1', 'Saturday', 6),
(102, '00:00:00', '05:35:24', '2', 'Saturday', 6),
(103, '06:00:00', '23:35:24', '1', 'Sunday', 6),
(104, '00:00:00', '05:35:24', '2', 'Sunday', 6),
(105, '07:00:00', '17:35:24', '0.6', 'Weekday', 19),
(106, '18:00:00', '00:59:59', '2.4', 'Weekday', 19),
(107, '01:00:00', '06:35:24', '1.02', 'Weekday', 19),
(108, '07:00:00', '17:35:24', '0.6', 'Saturday', 19),
(109, '18:00:00', '00:59:59', '2.4', 'Saturday', 19),
(110, '01:00:00', '06:35:24', '1.02', 'Saturday', 19),
(111, '07:00:00', '17:35:24', '0.6', 'Sunday', 19),
(112, '18:00:00', '00:59:59', '2.4', 'Sunday', 19),
(113, '01:00:00', '06:35:24', '1.02', 'Sunday', 19),
(114, '07:00:00', '17:00:00', '0.55', 'Weekday', 2),
(115, '17:00:00', '02:00:00', '2.2', 'Weekday', 2),
(116, '02:00:00', '06:35:24', '1.1', 'Weekday', 2),
(117, '07:00:00', '02:00:00', '0.6', 'Saturday', 2),
(118, '02:00:00', '06:35:24', '1.1', 'Saturday', 2),
(119, '07:00:00', '02:00:00', '0.6', 'Sunday', 2),
(120, '02:00:00', '06:35:24', '1.1', 'Sunday', 2),
(121, '07:00:00', '18:00:00', '1.5', 'Weekday', 5),
(122, '18:00:00', '06:35:24', '2.2', 'Weekday', 5),
(123, '00:00:00', '23:35:24', '1.1', 'Saturday', 5),
(124, '00:00:00', '23:35:24', '1.1', 'Sunday', 5),
(125, '07:00:00', '17:00:00', '1.1', 'Weekday', 1),
(126, '17:00:00', '00:00:00', '2.2', 'Weekday', 1),
(127, '00:00:00', '06:35:24', '1.1', 'Weekday', 1),
(128, '00:00:00', '23:35:24', '1.1', 'Saturday', 1),
(129, '00:00:00', '23:35:24', '1.1', 'Sunday', 1),
(130, '06:00:00', '18:00:00', '1', 'Weekday', 4),
(131, '18:00:00', '20:00:00', '6', 'Weekday', 4),
(132, '20:00:00', '05:35:24', '2', 'Weekday', 4),
(133, '06:00:00', '18:00:00', '1', 'Saturday', 4),
(134, '06:00:00', '18:00:00', '1', 'Sunday', 4),
(135, '07:00:00', '18:00:00', '0.6', 'Weekday', 16),
(136, '18:00:36', '04:00:00', '3', 'Weekday', 16),
(137, '04:00:00', '06:35:24', '1.25', 'Weekday', 16),
(138, '07:00:00', '18:00:00', '0.7', 'Saturday', 16),
(139, '18:00:36', '04:00:00', '3.5', 'Saturday', 16),
(140, '04:00:00', '06:35:24', '2.5', 'Saturday', 16),
(141, '07:00:00', '18:00:00', '0.7', 'Sunday', 16),
(142, '18:00:36', '04:00:00', '3.5', 'Sunday', 16),
(143, '04:00:00', '06:35:24', '2.5', 'Sunday', 16),
(144, '00:00:00', '07:00:00', '0.75', 'Weekday', 17),
(145, '07:00:00', '20:00:00', '0.75', 'Weekday', 17),
(146, '00:00:00', '07:00:00', '0.75', 'Saturday', 17),
(147, '07:00:00', '20:00:00', '0.75', 'Saturday', 17),
(148, '00:00:00', '07:00:00', '0.75', 'Sunday', 17),
(149, '07:00:00', '20:00:00', '0.75', 'Sunday', 17),
(150, '00:00:00', '23:35:24', '0', 'Weekday', 53),
(151, '00:00:00', '23:35:24', '0', 'Saturday', 53),
(152, '00:00:00', '23:35:24', '0', 'Sunday', 53),
(153, '03:30:00', '17:59:59', '0.65', 'Weekday', 54),
(154, '18:00:00', '03:29:29', '2.5', 'Weekday', 54),
(155, '03:30:00', '17:59:59', '0.65', 'Saturday', 54),
(156, '18:00:00', '03:29:29', '2.5', 'Saturday', 54),
(157, '03:30:00', '17:59:59', '0.65', 'Sunday', 54),
(158, '18:00:00', '03:29:29', '2.5', 'Sunday', 54),
(159, '07:00:00', '17:00:00', '0.65', 'Weekday', 43),
(160, '17:00:00', '06:35:24', '2.5', 'Weekday', 43),
(161, '07:00:00', '17:00:00', '0.65', 'Saturday', 43),
(162, '17:00:00', '06:35:24', '2.5', 'Saturday', 43),
(163, '07:00:00', '17:00:00', '0.65', 'Sunday', 43),
(164, '17:00:00', '06:35:24', '2.5', 'Sunday', 43);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carpark` (`carpark`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rates`
--
ALTER TABLE `rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rates`
--
ALTER TABLE `rates`
  ADD CONSTRAINT `rates_ibfk_1` FOREIGN KEY (`carpark`) REFERENCES `carparks` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
