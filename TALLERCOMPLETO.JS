   // Ejercicio 1: Gestión de Estudiantes
   class Persona {
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
   }
   saludar() {
      return `¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
   }
 }

   class Estudiante extends Persona {
   constructor(nombre, edad) {
      super(nombre, edad);
      this.calificaciones = [];
   }
   agregarCalificacion(calificacion) {
      this.calificaciones.push(parseFloat(calificacion));
   }
   calcularPromedio() {
      let suma = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
      return this.calificaciones.length ? (suma / this.calificaciones.length).toFixed(2) : 0;
   }
   mostrarCalificaciones() {
      return `El estudiante ${this.nombre} tiene las siguientes notas: ${this.calificaciones.join(', ')}`;
   }
 }

   let alumno;

   function agregarEstudiante() {
   const nombre = document.getElementById("nombre").value;
   const edad = document.getElementById("edad").value;

   if (nombre && edad) {
      alumno = new Estudiante(nombre, parseInt(edad));
      document.getElementById("resultado").innerHTML = alumno.saludar();
   }
 }

   function agregarCalificacion() {
   if (alumno) {
      const calificacion = document.getElementById("calificacion").value;
      if (calificacion) {
          alumno.agregarCalificacion(calificacion);
          document.getElementById("resultado").innerHTML = `Calificación ${calificacion} agregada.`;
      }
   }
 }

 function mostrarCalificaciones() {
   if (alumno) {
      document.getElementById("resultado").innerHTML = alumno.mostrarCalificaciones();
   }
 }

 function calcularPromedio() {
   if (alumno) {
      document.getElementById("resultado").innerHTML = `Promedio de notas: ${alumno.calcularPromedio()}`;
   }
 }

   // Ejercicio 2: Zoológico
   class Animal {
   constructor(nombre, especie) {
      this.nombre = nombre;
      this.especie = especie;
  }
   describirAnimal() {
      return `${this.nombre} es de especie ${this.especie}`;
   }
   hacerSonido() {
      return `${this.nombre} está haciendo un sonido`;
   }
  }

   class Leon extends Animal {
   hacerSonido() {
      return `${this.nombre} el león está rugiendo: Roaaaarrrr!`;
   }
  }

   class Elefante extends Animal {
   hacerSonido() {
      return `${this.nombre} el elefante está barritando: Barrrr!`;
   }
 }

   class Tigre extends Animal {
   hacerSonido() {
      return `${this.nombre} el tigre está ronroneando: Grrrrr!`;
   }
 }

   let animales = [];

   function agregarAnimal() {
   const nombre = document.getElementById("nombreAnimal").value;
   const tipo = document.getElementById("tipoAnimal").value;

   let nuevoAnimal;

   if (tipo === "Leon") {
      nuevoAnimal = new Leon(nombre);
   } else if (tipo === "Elefante") {
      nuevoAnimal = new Elefante(nombre);
   } else if (tipo === "Tigre") {
      nuevoAnimal = new Tigre(nombre);
   }

   if (nuevoAnimal) {
      animales.push(nuevoAnimal);
      document.getElementById("resultado1").innerHTML = `${nuevoAnimal.describirAnimal()} ha sido agregado.`;
   } else {
      document.getElementById("resultado1").innerHTML = "Error al agregar el animal.";
   }
 }

   function hacerSonidos() {
   let resultado = "";
   if (animales.length > 0) {
      animales.forEach(animal => {
          resultado += animal.hacerSonido() + "<br>";
      });
      document.getElementById("resultado1").innerHTML = resultado;
   } else {
      document.getElementById("resultado1").innerHTML = "No hay animales registrados.";
   }
  }

   // Ejercicio 3: Inventario de Productos
   class Producto {
   constructor(nombre, precio, cantidadEnStock) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidadEnStock = cantidadEnStock;
   }
   mostrarProducto() {
      return `Producto: ${this.nombre}, Precio: ${this.precio}, Cantidad en stock: ${this.cantidadEnStock}`;
   }
  }

   class Electrodomestico extends Producto {
   constructor(nombre, precio, cantidadEnStock, marca) {
      super(nombre, precio, cantidadEnStock);
      this.marca = marca;
   }
   mostrarProducto() {
      return `Electrodoméstico: ${this.nombre}, Marca: ${this.marca}, Precio: ${this.precio}, Cantidad en stock: ${this.cantidadEnStock}`;
   }
  }

 let productos = [];

   function toggleMarca() {
   const tipo = document.getElementById("tipoProducto").value;
   const marcaProductos = document.getElementById("marcaProductos");
   marcaProductos.style.display = tipo === "Electrodomestico" ? "block" : "none";
   }

   function agregarProducto() {
   const nombre = document.getElementById("nombreProducto").value;
   const precio = document.getElementById("precioProducto").value;
   const cantidad = document.getElementById("cantidadStock").value;
   const tipo = document.getElementById("tipoProducto").value;
   let nuevoProducto;

   if (tipo === "Electrodomestico") {
      const marca = document.getElementById("marcaProducto").value;
      if (!marca) {
          document.getElementById("resultado2").innerHTML = "Por favor, ingresa la marca del electrodoméstico.";
          return;
      }
      nuevoProducto = new Electrodomestico(nombre, parseFloat(precio), parseInt(cantidad), marca);
   } else {
      nuevoProducto = new Producto(nombre, parseFloat(precio), parseInt(cantidad));
   }

   productos.push(nuevoProducto);
   document.getElementById("resultado2").innerHTML = `Se ha agregado el producto: ${nuevoProducto.mostrarProducto()}`;
   }

   function listarProductosConBajoStock() {
   const productosConBajoStock = productos.filter(producto => producto.cantidadEnStock < 10);
   let resultadoHTML = "<h3>Productos con stock menor a 10:</h3>";

   if (productosConBajoStock.length > 0) {
      productosConBajoStock.forEach(producto => {
          resultadoHTML += `<p>${producto.mostrarProducto()}</p>`;
      });
   } else {
      resultadoHTML += "<p>No hay productos con bajo stock.</p>";
   }

   document.getElementById("resultado2").innerHTML = resultadoHTML;
   }

  // Ejercicio 4: Sistema de Empleados
   class Empleado {
   constructor(nombre, sueldo) {
      this.nombre = nombre;
      this.sueldo = sueldo;
   }
   }

   class EmpleadoTiempoCompleto extends Empleado {
   calcularSueldo(horas) {
      return this.sueldo * horas;
   }
   }

   class EmpleadoMedioTiempo extends Empleado {
   calcularSueldo(horas) {
      return this.sueldo * horas * 0.5;
   }
   }

   let empleados = [];

   function agregarEmpleado() {
   const nombre = document.getElementById("nombreEmpleado").value;
   const sueldo = parseFloat(document.getElementById("sueldoEmpleado").value);
   const tipo = document.getElementById("tipoEmpleado").value;
   const horas = parseFloat(document.getElementById("horasTrabajadas").value);

   let nuevoEmpleado;

   if (tipo === "Tiempo Completo") {
      nuevoEmpleado = new EmpleadoTiempoCompleto(nombre, sueldo);
   } else if (tipo === "Medio Tiempo") {
      nuevoEmpleado = new EmpleadoMedioTiempo(nombre, sueldo);
   }

   if (nuevoEmpleado) {
      empleados.push(nuevoEmpleado);
      const sueldoTotal = nuevoEmpleado.calcularSueldo(horas);
      document.getElementById("resultado3").innerHTML = `${nuevoEmpleado.nombre} ha sido agregado. Sueldo total: $${sueldoTotal}`;
   }
   }

   function listarEmpleados() {
   let resultado = "";
   if (empleados.length > 0) {
      empleados.forEach(empleado => {
          resultado += `${empleado.nombre} - Sueldo por hora: $${empleado.sueldo}<br>`;
      });
      document.getElementById("resultado3").innerHTML = resultado;
   }
   }

   // Ejercicio 5: Sistema Bancario
   class CuentaBancaria {
   constructor(numeroCuenta, saldo = 0) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldo;
   }

   depositar(monto) {
      this.saldo += monto;
   }

   retirar(monto) {
      if (monto <= this.saldo) {
          this.saldo -= monto;
      } else {
          alert("Saldo insuficiente.");
      }
   }
   }

   class CuentaAhorros extends CuentaBancaria {
   aplicarIntereses() {
      const interes = 0.02;
      this.saldo += this.saldo * interes;
   }
   }

   class CuentaCorriente extends CuentaBancaria {
  retirar(monto) {
      const limite = -500;
      if (this.saldo - monto >= limite) {
          this.saldo -= monto;
      } else {
          alert("Límite de sobregiro alcanzado.");
      }
   }
   }

   const cuentas = [];

   function crearCuenta() {
   const numeroCuenta = document.getElementById("numeroCuenta").value;
   const tipoCuenta = document.getElementById("tipoCuenta").value;

   let nuevaCuenta;
   if (tipoCuenta === "ahorros") {
      nuevaCuenta = new CuentaAhorros(numeroCuenta);
   } else {
      nuevaCuenta = new CuentaCorriente(numeroCuenta);
   }

   cuentas.push(nuevaCuenta);
   document.getElementById("listadoCuentas").innerHTML += `<li>${tipoCuenta} - ${numeroCuenta} - Saldo: $${nuevaCuenta.saldo}</li>`;
   }

   function depositar() {
   const numeroCuenta = document.getElementById("numeroCuenta").value;
   const monto = parseFloat(document.getElementById("monto").value);
   const cuenta = cuentas.find(c => c.numeroCuenta === numeroCuenta);

   if (cuenta) {
      cuenta.depositar(monto);
      alert(`Deposito realizado. Nuevo saldo: $${cuenta.saldo}`);
   } else {
      alert("Cuenta no encontrada.");
   }
   }

   function retirar() {
   const numeroCuenta = document.getElementById("numeroCuenta").value;
   const monto = parseFloat(document.getElementById("monto").value);
   const cuenta = cuentas.find(c => c.numeroCuenta === numeroCuenta);

   if (cuenta) {
      cuenta.retirar(monto);
      alert(`Retiro realizado. Nuevo saldo: $${cuenta.saldo}`);
   } else {
      alert("Cuenta no encontrada.");
   }
   }

   // Ejercicio 6: Catálogo de Vehículos
   class Vehiculo {
   constructor(marca, modelo, anio, tipo) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
      this.tipo = tipo;
   }

   mostrarVehiculo() {
      return `Vehículo: ${this.marca} ${this.modelo}, Año: ${this.anio}, Tipo: ${this.tipo}`;
   }
   }

   let vehiculos = [];

   function agregarVehiculo() {
   const marca = document.getElementById("marca").value;
   const modelo = document.getElementById("modelo").value;
   const anio = document.getElementById("anio").value;
   const tipo = document.getElementById("tipoVehiculo").value;

   if (marca && modelo && anio && tipo) {
      const nuevoVehiculo = new Vehiculo(marca, modelo, parseInt(anio), tipo);
      vehiculos.push(nuevoVehiculo);
      document.getElementById("resultado2").innerHTML += `<p>${nuevoVehiculo.mostrarVehiculo()} ha sido agregado.</p>`;
   } else {
      alert("Por favor, completa todos los campos.");
   }
   }

   function listarVehiculos() {
   let resultado = "";
   if (vehiculos.length > 0) {
      vehiculos.forEach(vehiculo => {
          resultado += `<p>${vehiculo.mostrarVehiculo()}</p>`;
      });
      document.getElementById("resultado2").innerHTML = resultado;
   } else {
       document.getElementById("resultado2").innerHTML = "No hay vehículos registrados.";
   }
   }

   // Ejercicio 8: Biblioteca
   class Libro {
   constructor(titulo, autor, tipo, formato = null, paginas = null) {
      this.titulo = titulo;
      this.autor = autor;
      this.tipo = tipo;
      this.formato = formato;
      this.paginas = paginas;
   }

   mostrarLibro() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, Tipo: ${this.tipo}` +
          (this.tipo === "digital" ? `, Formato: ${this.formato}` : `, Páginas: ${this.paginas}`);
   }
   }

   let libros = [];

   function mostrarCampos() {
   const tipo = document.getElementById("tipo").value;
   document.getElementById("campoDigital").style.display = tipo === "digital" ? "block" : "none";
   document.getElementById("campoFisico").style.display = tipo === "fisico" ? "block" : "none";
   }

   function agregarLibro() {
   const titulo = document.getElementById("nombreTitulo").value;
   const autor = document.getElementById("autor").value;
   const tipo = document.getElementById("tipo").value;
   const formato = tipo === "digital" ? document.getElementById("formato").value : null;
   const paginas = tipo === "fisico" ? document.getElementById("paginas").value : null;

   if (titulo && autor && tipo) {
      const nuevoLibro = new Libro(titulo, autor, tipo, formato, paginas);
      libros.push(nuevoLibro);
      document.getElementById("listadoLibros").innerHTML += `<p>${nuevoLibro.mostrarLibro()} ha sido agregado.</p>`;
   } else {
      alert("Por favor, completa todos los campos.");
   }
   }

   function listarLibros() {
   let resultado = "";
   if (libros.length > 0) {
      libros.forEach(libro => {
          resultado += `<p>${libro.mostrarLibro()}</p>`;
      });
      document.getElementById("listaLibros").innerHTML = resultado;
   } else {
      document.getElementById("listaLibros").innerHTML = "No hay libros registrados.";
   }
   }

   function listarLibrosPorAutor() {
   const autorBuscado = document.getElementById("BusquedaPorAutor").value;
   const librosPorAutor = libros.filter(libro => libro.autor.toLowerCase().includes(autorBuscado.toLowerCase()));
   let resultado = "";

   if (librosPorAutor.length > 0) {
      librosPorAutor.forEach(libro => {
          resultado += `<p>${libro.mostrarLibro()}</p>`;
      });
      document.getElementById("listaLibrosPorAutor").innerHTML = resultado;
   } else {
      document.getElementById("listaLibrosPorAutor").innerHTML = "No se encontraron libros de ese autor.";
   }
   }

   // Ejercicio 9: Sistema de Transporte
   class Transporte {
   constructor(tipo, capacidad, tipoCombustible) {
      this.tipo = tipo;
      this.capacidad = capacidad;
      this.tipoCombustible = tipoCombustible;
   }

   mostrarTransporte() {
      return `Transporte: ${this.tipo}, Capacidad: ${this.capacidad}, Combustible: ${this.tipoCombustible}`;
   }
   }

   let transportes = [];

   function agregarTransporte() {
   const tipo = document.getElementById("tipoTransporte").value;
   const capacidad = document.getElementById("capacidad").value;
   const tipoCombustible = document.getElementById("tipoCombustible").value;

   if (tipo && capacidad && tipoCombustible) {
      const nuevoTransporte = new Transporte(tipo, parseInt(capacidad), tipoCombustible);
      transportes.push(nuevoTransporte);
      document.getElementById("listaTransportes").innerHTML += `<p>${nuevoTransporte.mostrarTransporte()} ha sido agregado.</p>`;
   } else {
      alert("Por favor, completa todos los campos.");
   }
   }

   // Ejercicio 10: Tienda de Mascotas
   class Mascota {
   constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
   }

   mostrarMascota() {
      return `Mascota: ${this.nombre}, Tipo: ${this.tipo}`;
   }
   }

   let mascotas = [];

   function agregarMascota() {
   const nombre = document.getElementById("nombreMascota").value;
   const tipo = document.getElementById("tipoMascota").value;

   if (nombre && tipo) {
      const nuevaMascota = new Mascota(nombre, tipo);
      mascotas.push(nuevaMascota);
      document.getElementById("listaMascotas").innerHTML += `<p>${nuevaMascota.mostrarMascota()} ha sido agregada.</p>`;
   } else {
       alert("Por favor, completa todos los campos.");
   }
   }
