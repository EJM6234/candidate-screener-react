module.exports = function(sequelize, DataTypes) {
  var HiringManager = sequelize.define('hiring_manager', {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [8,25]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,15]
      }
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  HiringManager.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
  };

  HiringManager.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  return HiringManager;
}
