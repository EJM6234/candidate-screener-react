module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('companie', {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [8,25]
      }
    },
    candidate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'candidates',
        key: 'id'
      }
    },
    hiring_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hiring_managers',
        key: 'id'
      }
    }
  });

  return Company;
}
