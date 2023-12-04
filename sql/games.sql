-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04/12/2023 às 03:41
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `games`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `IdCategoria` int(11) NOT NULL,
  `Categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categoria`
--

INSERT INTO `categoria` (`IdCategoria`, `Categoria`) VALUES
(1, 'Luta'),
(2, 'RPG'),
(3, 'Aventura'),
(4, 'Puzzle'),
(5, 'Arcade');

-- --------------------------------------------------------

--
-- Estrutura para tabela `plataformas`
--

CREATE TABLE `plataformas` (
  `IdPlataforma` int(11) NOT NULL,
  `NoPlataforma` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `plataformas`
--

INSERT INTO `plataformas` (`IdPlataforma`, `NoPlataforma`) VALUES
(1, 'PlayStation'),
(2, 'Nintendo'),
(3, 'Xbox'),
(4, 'Nintendo Switch'),
(5, 'Mega Drive');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbavaliacao`
--

CREATE TABLE `tbavaliacao` (
  `IdAvaliacao` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idJogo` int(11) NOT NULL,
  `QtEstrelas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbjogo`
--

CREATE TABLE `tbjogo` (
  `NomeJogo` varchar(100) NOT NULL,
  `IdJogo` int(11) NOT NULL,
  `Preço` text NOT NULL,
  `IdPlataforma` int(11) NOT NULL,
  `IdCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbjogo`
--

INSERT INTO `tbjogo` (`NomeJogo`, `IdJogo`, `Preço`, `IdPlataforma`, `IdCategoria`) VALUES
('Mortal Kombat X', 1, '0', 1, 1),
('Final Fantasy IV', 2, '31', 5, 2),
('The Elder Scrolls', 3, 'R$13,99', 3, 2),
('Tetris', 4, 'R$13,99', 5, 4),
('Pac-Men', 5, 'R$9,99', 4, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbuser`
--

CREATE TABLE `tbuser` (
  `idUser` int(11) NOT NULL,
  `Nickname` int(11) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Senha` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`IdCategoria`);

--
-- Índices de tabela `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`IdPlataforma`);

--
-- Índices de tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  ADD PRIMARY KEY (`IdAvaliacao`),
  ADD UNIQUE KEY `idUser` (`idUser`),
  ADD KEY `TbAvaliacao_fk1` (`idJogo`);

--
-- Índices de tabela `tbjogo`
--
ALTER TABLE `tbjogo`
  ADD PRIMARY KEY (`IdJogo`),
  ADD KEY `TbJogo_fk0` (`IdPlataforma`),
  ADD KEY `TbJogo_fk1` (`IdCategoria`);

--
-- Índices de tabela `tbuser`
--
ALTER TABLE `tbuser`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `idUser` (`idUser`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `plataformas`
--
ALTER TABLE `plataformas`
  MODIFY `IdPlataforma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  MODIFY `IdAvaliacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tbjogo`
--
ALTER TABLE `tbjogo`
  MODIFY `IdJogo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `tbuser`
--
ALTER TABLE `tbuser`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--

--
-- Restrições para tabelas `tbavaliacao`
--
ALTER TABLE `tbavaliacao`
  ADD CONSTRAINT `TbAvaliacao_fk0` FOREIGN KEY (`idUser`) REFERENCES `tbuser` (`idUser`),
  ADD CONSTRAINT `TbAvaliacao_fk1` FOREIGN KEY (`idJogo`) REFERENCES `tbjogo` (`IdJogo`);

--
-- Restrições para tabelas `tbjogo`
--
ALTER TABLE `tbjogo`
  ADD CONSTRAINT `TbJogo_fk0` FOREIGN KEY (`IdPlataforma`) REFERENCES `plataformas` (`IdPlataforma`),
  ADD CONSTRAINT `TbJogo_fk1` FOREIGN KEY (`IdCategoria`) REFERENCES `categoria` (`IdCategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
