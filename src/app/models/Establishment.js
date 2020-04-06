import Sequelize, { Model } from 'sequelize';

class Establishment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
        document: Sequelize.STRING(100),
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default Establishment;
