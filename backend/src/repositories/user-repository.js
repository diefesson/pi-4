const pool = require("../dbs/postgres");

exports.findAll = async () => {
  const resul = await pool.query("SELECT * FROM users;");
  return resul.rows;
};

exports.findById = async (id) => {
  const resul = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
  return resul.rows[0];
};

exports.findByUsername = async (username) => {
  const resul = await pool.query("SELECT * FROM users WHERE username=$1;", [
    username,
  ]);
  return resul.rows[0];
};

exports.save = async (user) => {
  const valid = await pool.query("SELECT * FROM users WHERE username=$1 OR email=$2;", [
    user.username, user.email
  ]);
  if(valid.rows != 0){
    return false;
  }
  else {
  const resul = await pool.query(
    "INSERT INTO users(username, password, email, isAdmin) VALUES ($1,$2,$3,$4) RETURNING *;",
    [user.username, user.password, user.email, user.isAdmin]
  );
  return resul.rows[0];
  }
};
