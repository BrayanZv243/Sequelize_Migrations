const { Venta } = require('../models');

class VentaDAO {
    constructor() { }

    async crearVenta(total, iva) {
        try {
            return await Venta.create({ total, iva });
        } catch (error) {
            throw error
        }
    }

    async obtenerVentas() {
        try {
            return await Venta.findAll();
        } catch (error) {
            throw error;
        }
    }

    async obtenerVentaPorId(id) {
        try {
            return await Venta.findByPk(id);
        } catch (error) {
            throw error
        }
    }

    async actualizarVenta(id, total, iva) {
        try {
            await Venta.update({ total, iva }, { where: { id } })
            return await Venta.findByPk(id)
        } catch (error) {
            throw error
        }
    }

    async eliminarVenta(id) {
        try {
            const venta = await Venta.findByPk(id);
            if (!venta) {
                throw new Error('Venta no encontrada')
            }
            await venta.destroy();
            return 'Venta eliminada con éxito';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new VentaDAO();