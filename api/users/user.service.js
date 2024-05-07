const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into login(name, email, password)
      values(?,?,?)`,
      [data.name, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUsers: (callback) => {
    pool.query(
      `select id, name, email, password from login`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUserByUserId: (id, callback) => {
    pool.query(
      `select id, name, email, password from login where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateUser: (data, callback) => {
    pool.query(
      `update login set name=?, email=?, password=? where id=?`,
      [data.name, data.email, data.password, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        if (!results) {
          return results.json({
            success: 0,
            message: "failed to update user",
          });
        }
        return callback(null, results);
      }
    );
  },
  deleteUser: (data, callback) => {
    pool.query(
      `delete from login where id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getUserByUserEmail: (email, callback) => {
    pool.query(
      `select * from login where email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
