class ProductoVenta {
    constructor(idventa, idproducto, cantidadvendida, subtotal, precioVenta) {
        this.idventa = idventa
        this.idproducto = idproducto
        this.cantidadvendida = cantidadvendida
        this.subtotal = subtotal
        this.precioVenta = precioVenta
    }
}

module.exports = ProductoVenta