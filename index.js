const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});


app.post('/calculate-delivery-cost', async (req, res) => {
    const { zone, organization_id, total_distance, item_type } = req.body;

    try {
        const result = await pool.query(`
            SELECT * FROM pricing
            WHERE zone = $1 AND organization_id = $2 AND type = $3
        `, [zone, organization_id, item_type]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Pricing information not found' });
        }

        const pricing = result.rows[0];
        let total_price = pricing.fix_price;

        if (total_distance > pricing.base_distance_in_km) {
            const extra_distance = total_distance - pricing.base_distance_in_km;
            total_price += extra_distance * pricing.km_price;
        }

        res.json({ total_price: total_price.toFixed(2) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
