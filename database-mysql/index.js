var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'watchbuddy'
});

var checkUser = (params, callback) => {
  connection.query('select id where username = ? and password = ?', params, (error, results, fields) => {
    if (error) {
      console.log('User does not exist');
    } else {
      createUser(params, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          callback(res);
        }
      })
    }
  })
}

var createUser = (params, callback) => {
  connection.query('insert into user set ?', params, (error, results, fields) => {
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
