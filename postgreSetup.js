const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://jyamevtnefikev:c21391120be4cd964cfe0b8f1c5395f58da938b9c8ce7fec59fc6c88efa96330@ec2-54-235-80-137.compute-1.amazonaws.com:5432/d34otthgq56sk',
  ssl: true,
});

client.connect();
client.query(`SELECT * FROM copy`, (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res.rows)
  }
  client.end();
});
