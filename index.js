const ProductoDAO = require('./dataAccess/productoDAO');
const VentaDAO = require('./dataAccess/ventaDAO');
const ProductoVentaDAO = require('./dataAccess/productoVentaDAO');
const { sequelize } = require('./models');


async function realizarTransacciones() {
    try {
        await sequelize.sync()

        // Creamos un producto
        const producto = await ProductoDAO.crearProducto('Producto1', 10.99, 50)
        console.log('Producto creado: ', producto.toJSON())

        // Creamos una venta
        const venta = await VentaDAO.crearVenta(100.0, 15.0)
        console.log('Venta creada: ', venta.toJSON())

        // Creamos un producto venta
        const productoVenta = await ProductoVentaDAO.crearProductoVenta(
            venta.id,
            producto.id,
            3,
            32.97,
            10.99
        );
        console.log('ProductoVenta creado: ', productoVenta.toJSON())

        // Leer productos y ventas

        const productos = await ProductoDAO.obtenerProductos();
        console.log('Productos: ', productos);

        const ventas = await VentaDAO.obtenerVentas();
        console.log('Ventas: ', ventas);

        // Actualizamos un producto
        await ProductoDAO.actualizarProducto(producto.id, 'Producto Actualizado', 15.99, 40);
        console.log('Producto Actualizado');

        // Eliminar una venta
        // No podremos eliminar una venta que está asociada a un productoVenta porque violaría la integridad
        // de la base de datos, entonces tiraría error.
        await VentaDAO.eliminarVenta(venta.id)
        console.log('Venta Eliminada')
        
        // Obtenemos las ventas
        const ventasActualizadas = await VentaDAO.obtenerVentas();
        console.log('Ventas actualizadas: '+ ventasActualizadas)

        // Leemos producto ventas
        const productosVentas = await ProductoVentaDAO.obtenerProductosVenta();
        console.log('Productos Ventas: ',productosVentas)

    } catch (error) {
        console.error('Error en las transacciones: '+error)
    } finally{
        // Cerramos la conexión a la base de datos cuando todo haya terminado.
        await sequelize.close();
    }
}

// Ejecutamos las transacciones
realizarTransacciones();
