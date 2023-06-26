-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Jun 2023 pada 12.15
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bmi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bmi_data`
--

CREATE TABLE `bmi_data` (
  `nama` varchar(150) NOT NULL,
  `berat` int(11) NOT NULL,
  `tinggi` int(11) NOT NULL,
  `hasil` decimal(15,0) NOT NULL,
  `kategori` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `bmi_data`
--

INSERT INTO `bmi_data` (`nama`, `berat`, `tinggi`, `hasil`, `kategori`) VALUES
('Nanda', 75, 180, '23', ''),
('Nanda', 75, 180, '23', ''),
('Aldy', 73, 180, '23', 'Normal'),
('Aldy', 73, 180, '23', 'Normal'),
('angga', 85, 165, '31', 'Obesitas'),
('Nanda', 76, 177, '24', 'Normal'),
('Nanda', 74, 177, '24', 'Normal'),
('Gusde', 75, 181, '23', 'Normal');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
