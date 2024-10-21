CREATE TABLE clientes(
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nombreCliente VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    contrasena VARCHAR(100),
    telefono VARCHAR(10),
    rol VARCHAR(100),
    isVip BOOLEAN DEFAULT 0
);

CREATE TABLE productos(
	idProducto INT PRIMARY KEY AUTO_INCREMENT,
    codigoProducto VARCHAR(100) UNIQUE,
    nombreProducto VARCHAR(100),
    precio DOUBLE(10, 2),
    categoriaProducto VARCHAR(50),
    descripcion VARCHAR(100),
    stock INT,
    descuentoVip DOUBLE(10, 2) DEFAULT 0,
    isVip BOOLEAN DEFAULT 0,
    url VARCHAR(100)
);

CREATE TABLE ventas(
	idVentas INT PRIMARY KEY AUTO_INCREMENT,
    codigoVenta VARCHAR(100) UNIQUE,
    fecha DATE DEFAULT CURRENT_TIMESTAMP,
    total DOUBLE(10, 2),
    idCliente INT,
    FOREIGN KEY (idCliente) REFERENCES clientes(idCliente)
);

CREATE TABLE detalleVenta(
	idDetalleVenta INT PRIMARY KEY AUTO_INCREMENT,
    idVenta INT,
    idProducto INT,
    cantidad INT,
    precioUnitario DOUBLE(10, 2),
    subtotal DOUBLE(10, 2),
    FOREIGN KEY (idVenta) REFERENCES ventas(idVenta),
    FOREIGN KEY (idProducto) REFERENCES productos(idProducto)
);