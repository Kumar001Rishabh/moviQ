import { pool } from "../../../index.mjs";

export async function createUser(username, hashedPassword) {
  const query = `
    INSERT INTO users (username, password_hash)
    VALUES ($1, $2)
    RETURNING id, username
  `;
  const result = await pool.query(query, [username, hashedPassword]);
  return result.rows[0];
}

export async function getUserByName(username) {
  const query = `
    SELECT id, username
    FROM users
    WHERE username = $1
  `;
  const result = await pool.query(query, [username]);
  return result.rows[0] || null;
}