-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09/05/2024 às 23:48
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `users`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `idade` int(11) NOT NULL,
  `rua` varchar(25) NOT NULL,
  `bairro` varchar(25) NOT NULL,
  `estado` varchar(25) NOT NULL,
  `biografia` varchar(255) NOT NULL,
  `foto` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `idade`, `rua`, `bairro`, `estado`, `biografia`, `foto`) VALUES
(3, 'SANDRO OLIVEIRA DA SILVA', 28, 'test', 'test', 'test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices auctor odio, sit amet vulputate felis elementum et. Mauris sollicitudin mollis mollis. Maecenas in leo sit amet est ullamcorper ullamcorper. Suspendisse ligula velit, auctor ac', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'),
(6, 'SANDRO OLIVEIRA DA SILVA', 15, 'asdas', 'asdasd', 'qweqwe', 'gshfdhsdfhsgfhsh', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'),
(9, 'SANDRO OLIVEIRA DA SILVA', 54, 'as', 'asda', 'asdasd', 'asdasd', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'),
(10, 'asd', 24, 'qweqw', 'qweqw', 'qweqwe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices auctor odio, sit amet vulputate felis elementum et. Mauris sollicitudin mollis mollis. Maecenas in leo sit amet est ullamcorper ullamcorper. Suspendisse ligula velit, auctor ac', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'),
(11, 'q3qwe', 34, 'qweqwe', 'qweqwe', 'qweqwe', 'qweqeq', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'),
(13, 'asdasd', 14, 'asdas', 'asdasd', 'asdasd', 'asdasd', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'),
(14, 'Robertioanaoga', 15, 'asda', 'zxczx', 'zxczxcz', 'asdasdasd', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'),
(15, 'asdasd', 0, 'asda', 'asdasd', 'asdad', 'asdasd', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'),
(17, 'Sandro oliveira da silva', 13, 'test', 'asd', 'asd', 'a', 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
