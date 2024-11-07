-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2024 a las 21:41:26
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerce_chopper`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `idCliente` int(11) NOT NULL,
  `nombreCliente` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contrasena` varchar(100) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `rol` varchar(100) DEFAULT NULL,
  `isVip` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`idCliente`, `nombreCliente`, `email`, `contrasena`, `telefono`, `rol`, `isVip`) VALUES
(1, 'Juan Pérez', 'juan.perez@example.com', 'contrasena123', '5551234567', 'cliente', 0),
(2, 'Ana Gómez', 'ana.gomez@example.com', 'ana4567', '5552345678', 'cliente', 1),
(3, 'Carlos López', 'carlos.lopez@example.com', 'carlos7890', '5553456789', 'cliente', 0),
(4, 'Luisa Martínez', 'luisa.martinez@example.com', 'luisa2023', '5554567890', 'admin', 1),
(5, 'Pedro Sánchez', 'pedro.sanchez@example.com', 'pedro0987', '5555678901', 'cliente', 0),
(6, 'María Rodríguez', 'maria.rodriguez@example.com', 'maria2020', '5556789012', 'cliente', 1),
(7, 'Jorge Fernández', 'jorge.fernandez@example.com', 'jorge333', '5557890123', 'cliente', 0),
(8, 'Claudia Ramírez', 'claudia.ramirez@example.com', 'claudia2024', '5558901234', 'admin', 1),
(9, 'Sofía Torres', 'sofia.torres@example.com', 'sofia555', '5559012345', 'cliente', 0),
(10, 'Fernando Castro', 'fernando.castro@example.com', 'fernando444', '5550123456', 'cliente', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleventa`
--

CREATE TABLE `detalleventa` (
  `idDetalleVenta` int(11) NOT NULL,
  `idVenta` int(11) DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precioUnitario` double(10,2) DEFAULT NULL,
  `subtotal` double(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `detalleventa`
--

INSERT INTO `detalleventa` (`idDetalleVenta`, `idVenta`, `idProducto`, `cantidad`, `precioUnitario`, `subtotal`) VALUES
(1, 1, 1, 2, 55000.00, 110000.00),
(2, 1, 2, 1, 38000.00, 38000.00),
(3, 2, 3, 1, 45000.00, 45000.00),
(4, 3, 4, 1, 85000.00, 85000.00),
(5, 4, 5, 2, 62000.00, 124000.00),
(6, 5, 6, 1, 48000.00, 48000.00),
(7, 6, 7, 1, 97000.00, 97000.00),
(8, 7, 8, 2, 94000.00, 188000.00),
(9, 8, 9, 1, 30000.00, 30000.00),
(10, 9, 10, 1, 59000.00, 59000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `codigoProducto` varchar(100) DEFAULT NULL,
  `nombreProducto` varchar(100) DEFAULT NULL,
  `precio` double(10,2) DEFAULT NULL,
  `categoriaProducto` varchar(50) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `descuentoVip` double DEFAULT 0,
  `isVip` tinyint(1) DEFAULT 0,
  `url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `codigoProducto`, `nombreProducto`, `precio`, `categoriaProducto`, `descripcion`, `stock`, `descuentoVip`, `isVip`, `url`) VALUES
(1, 'PROD001', 'Dog Chow Adultos Pollo 4Kg', 55000.00, 'Comida para perros', 'Comida para perros adultos sabor pollo. Marca: Purina Dog Chow.', 120, 5, 1, '../img/'),
(2, 'PROD002', 'Whiskas Adultos Pescado 1.5Kg', 38000.00, 'Comida para gatos', 'Alimento para gatos adultos sabor pescado. Marca: Whiskas.', 90, 3, 0, '../img/'),
(3, 'PROD003', 'Pedigree Cachorros Carne 3Kg', 45000.00, 'Comida para perros', 'Comida para cachorros con sabor carne. Marca: Pedigree.', 150, 4, 1, '../img/'),
(4, 'PROD004', 'Royal Canin Mini Adultos 2Kg', 85000.00, 'Comida para perros', 'Alimento para perros adultos de razas pequeñas. Marca: Royal Canin.', 50, 7, 1, '../img/'),
(5, 'PROD005', 'Purina One Gatos Esterilizados 1.6Kg', 62000.00, 'Comida para gatos', 'Comida para gatos esterilizados. Marca: Purina One.', 65, 5.5, 0, '../img/'),
(6, 'PROD006', 'NutreCan Adultos Pollo y Arroz 3Kg', 48000.00, 'Comida para perros', 'Alimento completo para perros adultos, sabor pollo y arroz. Marca: NutreCan.', 110, 4, 0, '../img/'),
(7, 'PROD007', 'Pro Plan Gatos Sensitive Skin 2Kg', 97000.00, 'Comida para gatos', 'Alimento para gatos con piel sensible. Marca: Pro Plan.', 40, 6, 1, '../img/'),
(8, 'PROD008', 'Hills Science Diet Adultos 3Kg', 94000.00, 'Comida para perros', 'Comida para perros adultos, fórmula balanceada. Marca: Hills Science Diet.', 70, 6.5, 1, '../img/'),
(9, 'PROD009', 'Whiskas Gatos Junior Pollo 1Kg', 30000.00, 'Comida para gatos', 'Alimento para gatitos jóvenes, sabor pollo. Marca: Whiskas.', 130, 3, 0, '../img/'),
(10, 'PROD010', 'Dog Chow Senior 7+ Carne 2.7Kg', 59000.00, 'Comida para perros', 'Comida para perros adultos mayores de 7 años, sabor carne. Marca: Purina Dog Chow.', 85, 5, 1, '../img/');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `idVenta` int(11) NOT NULL,
  `codigoVenta` varchar(100) DEFAULT NULL,
  `fecha` date DEFAULT current_timestamp(),
  `total` double(10,2) DEFAULT NULL,
  `idCliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`idVenta`, `codigoVenta`, `fecha`, `total`, `idCliente`) VALUES
(1, 'VENTA001', '2024-10-15', 135000.00, 1),
(2, 'VENTA002', '2024-10-16', 62000.00, 2),
(3, 'VENTA003', '2024-10-17', 85000.00, 3),
(4, 'VENTA004', '2024-10-18', 120000.00, 4),
(5, 'VENTA005', '2024-10-19', 45000.00, 5),
(6, 'VENTA006', '2024-10-20', 98000.00, 6),
(7, 'VENTA007', '2024-10-21', 75000.00, 7),
(8, 'VENTA008', '2024-10-22', 30000.00, 8),
(9, 'VENTA009', '2024-10-23', 59000.00, 9),
(10, 'VENTA010', '2024-10-24', 94000.00, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idCliente`);

--
-- Indices de la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  ADD PRIMARY KEY (`idDetalleVenta`),
  ADD KEY `idProducto` (`idProducto`),
  ADD KEY `idVenta` (`idVenta`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`idVenta`),
  ADD KEY `idCliente` (`idCliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  MODIFY `idDetalleVenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `idVenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  ADD CONSTRAINT `detalleventa_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`),
  ADD CONSTRAINT `detalleventa_ibfk_2` FOREIGN KEY (`idVenta`) REFERENCES `ventas` (`idVenta`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`idCliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
