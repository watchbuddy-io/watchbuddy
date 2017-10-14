var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'watchbuddy'
});

var addToClickHistory = (params, cb) => {
  connection.query('insert into clicks (user_id, movie_id) values (?, ?)', params, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(results);
    }
  });
};


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


var addSurveyData = (params, callback) => {
  var queryStr = 'update user set showtitle = ?, season = ?, episode = ?, start = ?, deadline = ?, monday = ?, \
    tuesday = ?, wednesday = ?, thursday = ?, friday = ?, saturday = ?, sunday = ?, hours = ? where username = ?';
  connection.query(queryStr, params, (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      callback(results);
    }
  });
};

var modifySeasonInfo = (params, callback) => {
  var queryStr = 'update user set season = ?, episode = ? where username = ?';
  connection.queryStr(queryStr, params, (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      callback(results);
    }
  });
};

module.exports = {
  checkUser,
  createUser,
  addSurveyData,
  modifySeasonInfo,
  addToClickHistory
};
