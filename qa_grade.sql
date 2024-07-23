-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2024 at 06:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qa_grade`
--

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `subject_code` varchar(10) NOT NULL,
  `subject_name` varchar(125) NOT NULL,
  `group_name` varchar(10) NOT NULL,
  `grades` varchar(2) NOT NULL,
  `student_count` int(11) NOT NULL,
  `instructor` varchar(255) NOT NULL,
  `course` varchar(125) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`subject_code`, `subject_name`, `group_name`, `grades`, `student_count`, `instructor`, `course`, `id`) VALUES
('2553', 'AI', '105', 'B+', 10, 'suvimon', 'CS', 1),
('0214341', 'AI', '104', 'A', 10, 'suvimon', 'CS', 3);

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `subject_code` varchar(20) NOT NULL,
  `subject_name` varchar(125) NOT NULL,
  `units` int(10) NOT NULL,
  `semester` varchar(10) NOT NULL,
  `Instructor` varchar(50) NOT NULL,
  `subject_description` varchar(125) NOT NULL,
  `subject_objectives` varchar(125) NOT NULL,
  `assessment_criteria` varchar(125) NOT NULL,
  `course` varchar(125) NOT NULL,
  `group_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_epy`
--

CREATE TABLE `users_epy` (
  `id` int(10) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(125) NOT NULL,
  `status` varchar(20) DEFAULT 'teacher'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_epy`
--

INSERT INTO `users_epy` (`id`, `fname`, `lname`, `tel`, `username`, `password`, `status`) VALUES
(1, 'naaa', 'kub', '0897452364', '25f9e794323b453885f5181f1b624d0b', '1721142122727', '1721142122727'),
(2, '', '0693254781', 'nana046', '3354045a397621cd92406f1f98cde292', '1721142196151', '1721142196151'),
(3, 'taey', 'kub', '0897452364', 'nana046', '25f9e794323b453885f5181f1b624d0b', 'teacher'),
(4, 'na', 'na', '023658974', 'nana046', '25f9e794323b453885f5181f1b624d0b', 'teacher'),
(5, 'na', 'na', '023658974', 'nana046', 'teacher', '25f9e794323b453885f5'),
(6, 'na', 'na', '023658974', 'nana046', 'teacher', '1fa2822483991205a197'),
(7, 'na', 'na', '023658974', 'nana046', 'teacher', '1fa2822483991205a197'),
(8, 'na', 'na', '023658974', '1fa2822483991205a1970ebe648030d1', 'nana046', 'teacher'),
(9, 'na', 'na', '023658974', 'nana046', 'teacher', '1fa2822483991205a197'),
(10, 'na', 'na', '023658974', 'nana046', 'teacher', '1fa2822483991205a197'),
(11, 'na', 'na', '023658974', 'nana046', 'teacher', '1fa2822483991205a197'),
(12, 'taey', 'kub', '0897452364', 'nana123', 'teacher', '1fa2822483991205a197'),
(13, 'na', 'na', '023658974', 'nana123', 'teacher', '1fa2822483991205a197'),
(14, 'na', 'ka', '023658974', 'nana123', 'teacher', '1fa2822483991205a197');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_epy`
--
ALTER TABLE `users_epy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users_epy`
--
ALTER TABLE `users_epy`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
