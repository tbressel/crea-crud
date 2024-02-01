-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 01 fév. 2024 à 22:49
-- Version du serveur : 8.0.36-0ubuntu0.22.04.1
-- Version de PHP : 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `crea_crud`
--

-- --------------------------------------------------------

--
-- Structure de la table `person`
--

CREATE TABLE `person` (
  `id` int NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile_phone` varchar(14) DEFAULT NULL,
  `home_phone` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `person`
--

INSERT INTO `person` (`id`, `firstname`, `lastname`, `email`, `mobile_phone`, `home_phone`) VALUES
(1, 'Jean', 'Dupont', 'jean.dupont@example.com', '0123456789', '0234567890'),
(2, 'Marie', 'Martin', 'marie.martin@example.com', '0345678901', '0456789012'),
(3, 'Pierre', 'Robert', 'pierre.robert@example.com', '0567890123', '0678901234'),
(4, 'Sophie', 'Dupuis', 'sophie.dupuis@example.com', '0789012345', '0890123456'),
(5, 'Paul', 'Moreau', 'paul.moreau@example.com', '0901234567', '0102345678'),
(6, 'Isabelle', 'Petit', 'isabelle.petit@example.com', '0112345678', '0123456789'),
(7, 'Vincent', 'Bernard', 'vincent.bernard@example.com', '0134567890', '0145678901'),
(8, 'Florence', 'Michel', 'florence.michel@example.com', '0156789012', '0167890123'),
(9, 'Nicolas', 'Dubois', 'nicolas.dubois@example.com', '0178901234', '0189012345'),
(10, 'Anne', 'Lefebvre', 'anne.lefebvre@example.com', '0190123456', '0201234567'),
(11, 'Julien', 'Roux', 'julien.roux@example.com', '0212345678', '0223456789'),
(12, 'Cécile', 'Blanc', 'cecile.blanc@example.com', '0234567890', '0245678901'),
(13, 'Benjamin', 'Morel', 'benjamin.morel@example.com', '0256789012', '0267890123'),
(14, 'Audrey', 'Simon', 'audrey.simon@example.com', '0278901234', '0289012345'),
(15, 'Alexandre', 'Girard', 'alexandre.girard@example.com', '0290123456', '0301234567'),
(16, 'Caroline', 'Legrand', 'caroline.legrand@example.com', '0312345678', '0323456789'),
(17, 'Guillaume', 'Petit', 'guillaume.petit@example.com', '0334567890', '0345678901'),
(18, 'Émilie', 'Moreau', 'emilie.moreau@example.com', '0356789012', '0367890123'),
(19, 'Anthony', 'Dubois', 'anthony.dubois@example.com', '0378901234', '0389012345'),
(20, 'Sarah', 'Lefebvre', 'sarah.lefebvre@example.com', '0390123456', '0401234567'),
(21, 'Thomas', 'Roux', 'thomas.roux@example.com', '0412345678', '0423456789'),
(22, 'Julie', 'Blanc', 'julie.blanc@example.com', '0434567890', '0445678901'),
(23, 'Maxime', 'Morel', 'maxime.morel@example.com', '0456789012', '0467890123'),
(24, 'Quentin', 'Girard', 'quentin.girard@example.com', '0490123456', '0501234567'),
(25, 'Marion', 'Legrand', 'marion.legrand@example.com', '0512345678', '0523456789'),
(26, 'Baptiste', 'Petit', 'baptiste.petit@example.com', '0534567890', '0545678901'),
(27, 'Mélanie', 'Moreau', 'melanie.moreau@example.com', '0556789012', '0567890123'),
(28, 'Lucas', 'Dubois', 'lucas.dubois@example.com', '0578901234', '0589012345'),
(29, 'Amandine', 'Lefebvre', 'amandine.lefebvre@example.com', '0590123456', '0601234567'),
(30, 'Adrien', 'Roux', 'adrien.roux@example.com', '0612345678', '0623456789'),
(31, 'Camille', 'Blanc', 'camille.blanc@example.com', '0634567890', '0645678901'),
(32, 'Hugo', 'Morel', 'hugo.morel@example.com', '0656789012', '0667890123'),
(33, 'Chloé', 'Simon', 'chloe.simon@example.com', '0678901234', '0689012345'),
(34, 'Clément', 'Girard', 'clement.girard@example.com', '0690123456', '0701234567'),
(35, 'Mathilde', 'Legrand', 'mathilde.legrand@example.com', '0712345678', '0723456789'),
(36, 'Alexis', 'Petit', 'alexis.petit@example.com', '0734567890', '0745678901'),
(37, 'Charlotte', 'Moreau', 'charlotte.moreau@example.com', '0756789012', '0767890123'),
(38, 'Romain', 'Dubois', 'romain.dubois@example.com', '0778901234', '0789012345'),
(39, 'Élodie', 'Lefebvre', 'elodie.lefebvre@example.com', '0790123456', '0801234567'),
(40, 'Jérémy', 'Roux', 'jeremy.roux@example.com', '0812345678', '0823456789'),
(41, 'Fanny', 'Blanc', 'fanny.blanc@example.com', '0834567890', '0845678901'),
(42, 'Dylan', 'Morel', 'dylan.morel@example.com', '0856789012', '0867890123'),
(43, 'Laura', 'Simon', 'laura.simon@example.com', '0878901234', '0889012345'),
(44, 'Enzo', 'Girard', 'enzo.girard@example.com', '0890123456', '0901234567'),
(45, 'Manon', 'Legrand', 'manon.legrand@example.com', '0912345678', '0923456789'),
(46, 'Théo', 'Petit', 'theo.petit@example.com', '0934567890', '0945678901'),
(47, 'Emma', 'Moreau', 'emma.moreau@example.com', '0956789012', '0967890123'),
(48, 'Antoine', 'Dubois', 'antoine.dubois@example.com', '0978901234', '0989012345'),
(49, 'Léna', 'Lefebvre', 'lena.lefebvre@example.com', '0990123456', '1001234567'),
(50, 'Hugo', 'Roux', 'hugo.roux@example.com', '1012345678', '1023456789'),
(51, 'Louise', 'Blanc', 'louise.blanc@example.com', '1034567890', '1045678901'),
(52, 'Gabriel', 'Morel', 'gabriel.morel@example.com', '1056789012', '1067890123'),
(53, 'Alice', 'Simon', 'alice.simon@example.com', '1078901234', '1089012345'),
(54, 'Raphaël', 'Girard', 'raphael.girard@example.com', '1090123456', '1101234567'),
(55, 'Jade', 'Legrand', 'jade.legrand@example.com', '1112345678', '1123456789'),
(56, 'Noah', 'Petit', 'noah.petit@example.com', '1134567890', '1145678901'),
(57, 'Léa', 'Moreau', 'lea.moreau@example.com', '1156789012', '1167890123'),
(58, 'Louis', 'Dubois', 'louis.dubois@example.com', '1178901234', '1189012345'),
(59, 'Chloé', 'Lefebvre', 'chloe.lefebvre@example.com', '1190123456', '1201234567'),
(60, 'Adam', 'Roux', 'adam.roux@example.com', '1212345678', '1223456789'),
(61, 'Lola', 'Blanc', 'lola.blanc@example.com', '1234567890', '1245678901'),
(62, 'Arthur', 'Morel', 'arthur.morel@example.com', '1256789012', '1267890123'),
(63, 'Inès', 'Simon', 'ines.simon@example.com', '1278901234', '1289012345'),
(64, 'Emma', 'Girard', 'emma.girard@example.com', '1290123456', '1301234567'),
(65, 'Nathan', 'Legrand', 'nathan.legrand@example.com', '1312345678', '1323456789'),
(66, 'Léo', 'Petit', 'leo.petit@example.com', '1334567890', '1345678901'),
(67, 'Louise', 'Moreau', 'louise.moreau@example.com', '1356789012', '1367890123'),
(68, 'Lucas', 'Dubois', 'lucas.dubois@example.com', '1378901234', '1389012345'),
(69, 'Jade', 'Lefebvre', 'jade.lefebvre@example.com', '1390123456', '1401234567'),
(70, 'Hugo', 'Roux', 'hugo.roux@example.com', '1412345678', '1423456789'),
(71, 'Léa', 'Blanc', 'lea.blanc@example.com', '1434567890', '1445678901'),
(72, 'Louis', 'Morel', 'louis.morel@example.com', '1456789012', '1467890123'),
(73, 'Chloé', 'Simon', 'chloe.simon@example.com', '1478901234', '1489012345'),
(74, 'Arthur', 'Girard', 'arthur.girard@example.com', '1490123456', '1501234567'),
(75, 'Inès', 'Legrand', 'ines.legrand@example.com', '1512345678', '1523456789'),
(76, 'Emma', 'Petit', 'emma.petit@example.com', '1534567890', '1545678901'),
(77, 'Nathan', 'Moreau', 'nathan.moreau@example.com', '1556789012', '1567890123'),
(78, 'Léo', 'Dubois', 'leo.dubois@example.com', '1578901234', '1589012345'),
(79, 'Louise', 'Lefebvre', 'louise.lefebvre@example.com', '1590123456', '1601234567'),
(80, 'Lucas', 'Roux', 'lucas.roux@example.com', '1612345678', '1623456789'),
(81, 'Jade', 'Blanc', 'jade.blanc@example.com', '1634567890', '1645678901'),
(82, 'Hugo', 'Morel', 'hugo.morel@example.com', '1656789012', '1667890123'),
(83, 'Léa', 'Simon', 'lea.simon@example.com', '1678901234', '1689012345'),
(84, 'Louis', 'Girard', 'louis.girard@example.com', '1690123456', '1701234567'),
(85, 'Chloé', 'Legrand', 'chloe.legrand@example.com', '1712345678', '1723456789'),
(86, 'Arthur', 'Petit', 'arthur.petit@example.com', '1734567890', '1745678901'),
(87, 'Inès', 'Moreau', 'ines.moreau@example.com', '1756789012', '1767890123');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `person`
--
ALTER TABLE `person`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
