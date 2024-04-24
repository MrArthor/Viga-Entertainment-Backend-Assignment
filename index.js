const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const pricingRouter = require('./routes/pricing');
const HomeRoute = require('./routes/HomeRoute');
app.use('/', HomeRoute);
app.use('/api/pricing', pricingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
