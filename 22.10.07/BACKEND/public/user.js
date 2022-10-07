// 설치해야할 것
// sequelize, mysql2

const Sequelize = require('sequelize');

class user extends Sequelize.Model{
    static init(sequelize){
        return super.init(
          {
            user_id: {
              type: Sequelize.STRING(20),
              allowNull: false,
              unique: true,
            },
            user_pw: {
              type: Sequelize.STRING(20),
              allowNull: false,
            },
          },
          {
            sequelize,
            timestamps : true, //생성시간 자동으로 넣어주기
            moduleName : 'User',
            tableName : 'users',
            charset : 'utf8',
            collate : 'utf8_general_ci'
          }
        );
    }
}

module.exports = user;