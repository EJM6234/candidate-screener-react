const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define('candidate', {
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
    personality_profile: {
      type: DataTypes.JSON,
      allowNull: true
    }
  });

  Candidate.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  Candidate.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };

  return Candidate;
}
