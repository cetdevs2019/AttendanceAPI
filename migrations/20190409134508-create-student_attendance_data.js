'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('student_attendance_data', {
      id: {
        type: Sequelize.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        unique: 'compositeIndex',
      },
      course_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      faculty_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      // switch to multiple compositeIndex when sequelize supports it.
      // https://github.com/sequelize/sequelize/issues/8148
      start_date_time: {
        type: Sequelize.DATE(),
        allowNull: false,
        unique: 'compositeIndex',
      },
      end_date_time: {
        type: Sequelize.DATE(),
        allowNull: false,
        unique: 'compositeIndex',
      },
      value: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      max_value: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('student_attendance_data');
  }
};