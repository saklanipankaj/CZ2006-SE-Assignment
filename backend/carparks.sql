-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2017 at 08:30 PM
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
-- Table structure for table `carparks`
--

CREATE TABLE `carparks` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `avaliablelots` int(11) DEFAULT NULL,
  `location` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carparks`
--

INSERT INTO `carparks` (`id`, `name`, `avaliablelots`, `location`) VALUES
(1, 'Suntec City', 182, 1),
(2, 'Marina Square', 171, 2),
(4, 'The Esplanade', 103, 4),
(5, 'Millenia Singapore', 187, 5),
(6, 'Singapore Flyer', 185, 6),
(7, 'OG Orchard Point', 100, 7),
(8, 'The Heeren', 108, 8),
(10, 'The Cathay', 182, 10),
(12, 'Marina Mandarin Hotel', 185, 12),
(13, 'Ngee Ann City', 105, 13),
(14, 'Wisma Atria', 139, 14),
(16, 'Vivocity', 153, 16),
(17, 'Sentosa (Beach and Imbiah car park)', 149, 17),
(19, 'Harbourfront Centre', 178, 19),
(20, 'Far East Plaza', 114, 20),
(21, 'The Centrepoint', 163, 21),
(22, 'Concorde Hotel', 120, 22),
(23, 'ION Orchard', 187, 23),
(24, '313@Somerset', 144, 24),
(26, 'Resorts World Sentosa - Universal Studios Singapore (RWS B1 car park)', 147, 26),
(27, 'Orchard Central', 188, 27),
(29, 'Marina Bay Sands', 179, 29),
(43, 'Westgate', 178, 43),
(51, 'Holiday Inn Atrium', 150, 51),
(53, 'IMM Building', 192, 53),
(54, 'JCube', 102, 54),
(55, 'Paragon Shopping Centre', 106, 55);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carparks`
--
ALTER TABLE `carparks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carparks_ibfk_1` (`location`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carparks`
--
ALTER TABLE `carparks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carparks`
--
ALTER TABLE `carparks`
  ADD CONSTRAINT `carparks_ibfk_1` FOREIGN KEY (`location`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
