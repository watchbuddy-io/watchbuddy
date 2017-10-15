var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'watchbuddy'
});


var getFavorites = (params, cb) => {
  connection.query('select * from favorites where user_id = ? order by time desc', params, (err, favorites) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, favorites);
    }
  });
};

var getRecentlyClicked = (params, cb) => {
  connection.query('select * from clicks where user_id = ? order by time desc', params, (err, clicked) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, clicked);
    }
  });
};

var addToFavorites = (params, cb) => {
  connection.query('insert into favorites (user_id, movie_id) values (?, ?)', [params[0], params[1]], () => {
    connection.query('insert into userProfile (user_id, description) values (?, ?) on duplicate key update description=concat(description, " ", ?)', [params[0], params[2], params[2]], (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
  });
};

var addToClickHistory = (params, cb) => {
  connection.query('insert into clicks (user_id, movie_id) values (?, ?)', params, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
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
  addToClickHistory,
  addToFavorites,
  getFavorites,
  getRecentlyClicked
};
