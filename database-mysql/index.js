var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'watchbuddy'
});

var checkUser = (params, callback) => {
  connection.query('select id from user where username = ? and password = ?', params, (error, results, fields) => {
    if (error) {
      console.log('User does not exist');
    } else {
      callback(results);
    }
  })
}

var createUser = (params, callback) => {
  connection.query('insert into user set username = ?, password = ?', params, (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      callback(results);
    }
  });
};

module.exports = {
  checkUser,
  createUser
};
