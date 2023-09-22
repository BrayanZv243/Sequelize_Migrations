const { ProductoVenta } = require('../models');

class ProductoVentaDAO {
    constructor() { }

    async crearProductoVenta(idventa, idproducto, cantidadvendida, subtotal, precioVenta) {
        try {
            return await ProductoVenta.create({ idventa, idproducto, cantidadvendida, subtotal, precioVenta });
        } catch (error) {
            throw error
        }
    }

    async obtenerProductosVenta() {
        try {
            return await ProductoVenta.findAll();
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductoVentaPorId(id) {
        try {
            return await ProductoVenta.findByPk(id);
        } catch (error) {
            throw error
        }
    }

    async actualizarProductoVenta(id, idventa, idproducto, cantidadvendida, subtotal, precioVenta) {
        try {
            await ProductoVenta.update({ idventa, idproducto, cantidadvendida, subtotal, precioVenta }, { where: { id } })
            return await ProductoVenta.findByPk(id)
        } catch (error) {
            throw error
        }
    }

    async eliminarProductoVenta(id) {
        try {
            const productoVenta = await ProductoVenta.findByPk(id);
            if (!productoVenta) {
                throw new Error('Producto Venta no encontrado')
            }
            await productoVenta.destroy();
            return 'Producto Venta eliminado con éxito';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductoVentaDAO();