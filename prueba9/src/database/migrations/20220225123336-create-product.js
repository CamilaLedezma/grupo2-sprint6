'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stock_min: {
        type: Sequelize.INTEGER
      },
      stock_max: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      categories_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'categories',
          key:'id'
        }
      },
      sizes_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'sizes',
          key:'id'
        }
      },
      colors_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'colors',
          key:'id'
        }
      },
      visibility: {
        type: Sequelize.INTEGER
      },
      recommended: {
        type: Sequelize.INTEGER
      },
      discounts_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'discounts',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};