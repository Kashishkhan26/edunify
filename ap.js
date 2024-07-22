import mysql from 'ysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chools_db'
});

db.connect();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, address, city, state, contact, email_id, image } = req.body;
    const query = `INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?,?,?,?,?,?,?)`;
    db.query(query, [name, address, city, state, contact, email_id, image], (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Error adding school' });
      } else {
        res.status(201).json({ message: 'School added successfully' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}