'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla 'ProductoVenta'
    await queryInterface.createTable('ProductoVenta', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idventa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Venta', // Nombre de la tabla de la relación
          key: 'id', // Clave primaria de la tabla de la relación
        },
      },
      idproducto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Productos', // Nombre de la tabla de la relación
          key: 'id', // Clave primaria de la tabla de la relación
        },
      },
      cantidadvendida: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subtotal: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      precioVenta: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },


  down: async (queryInterface, Sequelize) => {
    // Deshacer la creación de la tabla 'ProductoVenta'
    await queryInterface.dropTable('ProductoVenta');
  },
};
