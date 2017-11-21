function queryById (bookNumber, callback) {
  const { Client } = require('pg');
  const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://jyamevtnefikev:c21391120be4cd964cfe0b8f1c5395f58da938b9c8ce7fec59fc6c88efa96330@ec2-54-235-80-137.compute-1.amazonaws.com:5432/d34otthgq56sk',
    ssl: true,
  });
  client.connect();
  client.query(`SELECT * FROM book WHERE bookNumber = '${ bookNumber }'`, (err, res) => {
    if (err) {
      console.log(err)
      callback({})
    } else {
      callback(res.rows[0])
    }
    client.end();
  });
}

function queryAll (callback) {
  const { Client } = require('pg');
  const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://jyamevtnefikev:c21391120be4cd964cfe0b8f1c5395f58da938b9c8ce7fec59fc6c88efa96330@ec2-54-235-80-137.compute-1.amazonaws.com:5432/d34otthgq56sk',
    ssl: true,
  });
  client.connect();
  client.query(`SELECT * FROM book`, (err, res) => {
    if (err) {
      console.log(err)
      callback({})
    } else {
      callback(res.rows)
    }
    client.end();
  });
}

module.exports = {
  queryById,
  queryAll
}
