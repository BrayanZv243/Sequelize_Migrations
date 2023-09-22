const { Producto } = require('../models');

class ProductoDAO {
    constructor() { }

    async crearProducto(nombre, precio, cantidad) {
        try {
            return await Producto.create({ nombre, precio, cantidad });
        } catch (error) {
            throw error
        }
    }

    async obtenerProductos() {
        try {
            return await Producto.findAll();
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductoPorId(id) {
        try {
            return await Producto.findByPk(id);
        } catch (error) {
            throw error
        }
    }

    async actualizarProducto(id, nombre, precio, cantidad) {
        try {
            await Producto.update({ nombre, precio, cantidad }, { where: { id } })
            return await Producto.findByPk(id)
        } catch (error) {
            throw error
        }
    }

    async eliminarProducto(id) {
        try {
            const producto = await Producto.findByPk(id);
            if (!producto) {
                throw new Error('Producto no encontrado')
            }
            await producto.destroy();
            return 'Producto eliminado con éxito';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductoDAO();