/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Harry Potter',
        author: 'JK Rowling',
        year: '2006',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Attack on Titan',
        author: 'Hajime Isayama',
        year: '2008',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Laskar Pelangi',
        author: 'Andrea Hirata',
        year: '2010',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
    await queryInterface.bulkDelete('Books', null);
  },
};
