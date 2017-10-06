var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'watchbuddyplay'
});

var checkUser = (params, callback) => {
  // select password and salt for hash comparision
  connection.query('select password, salt from user where username = ?', params, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(results);
    }
  });
};

var createUser = (params, callback) => {
  // added salt parameter
  connection.query('insert into user set username = ?, password = ?, salt = ?', params, (error, results, fields) => {
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
