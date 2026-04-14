import fs from "fs";
import { pool } from "./index.mjs";

const setupDatabase = async () => {
    try {
        const sql = fs.readFileSync("init-db.sql", "utf-8");
        console.log("Reading SQL starting commands...");
        await pool.query(sql);
        console.log("Database tables created successfully!");
    } catch (err) {
        console.error("Error creating tables:", err);
    } finally {
        process.exit();
    }
};

setupDatabase();