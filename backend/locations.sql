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
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `latitude` tinytext NOT NULL,
  `longtitude` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `latitude`, `longtitude`) VALUES
(1, '1.29375', '103.85718'),
(2, '1.29115', '103.85728'),
(4, '1.29011', '103.85561'),
(5, '1.29251', '103.86009'),
(6, '1.28944', '103.86311'),
(7, '1.30135', '103.84061'),
(8, '1.30255', '103.83739'),
(10, '1.2995', '103.84762'),
(12, '1.30216', '103.83601'),
(13, '1.30236', '103.8349'),
(14, '1.30366', '103.83327'),
(16, '1.26421', '103.82263'),
(17, '1.25017', '103.83126'),
(19, '1.26426', '103.82011'),
(20, '1.3071', '103.83359'),
(21, '1.302', '103.83975'),
(22, '1.30103', '103.84503'),
(23, '1.30403', '103.83206'),
(24, '1.30084', '103.83872'),
(26, '1.25667', '103.82012'),
(27, '1.30072', '103.83979'),
(29, '1.282250285', '103.8583003'),
(43, '1.3343', '103.74282'),
(51, '1.302280071', '103.84113'),
(53, '1.334847', '103.746815'),
(54, '1.33341', '103.740088'),
(55, '1.3038', '103.83585');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
