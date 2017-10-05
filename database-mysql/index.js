var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'watchbuddy'
});

var checkUser =  function(params, callback) {
  connection.query('select id where username = ? and password = ?', params, function(error, results, fields) {
    if (error) {
      console.log('User does not exist');
    } else {
      createUser(params, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      });
    }
  });
};

var createUser = function(params, callback) {
  connection.query('insert into user set ?', params, function(error, results, fields) {
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
