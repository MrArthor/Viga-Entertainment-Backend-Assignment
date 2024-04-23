const { Client } = require('pg');

// Load environment variables from .env file
require('dotenv').config();

const DB_NAME = process.env.DB_NAME || 'your_database_name';
const DB_USER = process.env.DB_USER || 'your_database_user';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PASSWORD = process.env.DB_PASSWORD || 'your_database_password';

const client = new Client({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: 5432,
});

client.connect();
client.query(`SELECT datname FROM pg_catalog.pg_database WHERE datname = '${DB_NAME}'`, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    if (res.rowCount === 0) {
        console.log(`${DB_NAME} database not found, creating it.`);
        client.query(`CREATE DATABASE "${DB_NAME}";`, (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Created database ${DB_NAME}`);
            client.end();
        });
    } else {
        console.log(`${DB_NAME} database exists.`);
        client.end();
    }
});
function createTables() {
    const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL
        );
    `;

    const createItemsTableQuery = `
        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT
        );
    `;

    client.query(createUsersTableQuery, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Users table created successfully.');
    });

    client.query(createItemsTableQuery, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Items table created successfully.');
    });
}

// Call the function to create tables
createTables();
