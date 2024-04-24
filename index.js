const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ExpressError = require('./utils/ExpressError');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const pricingRouter = require('./routes/pricing');
const HomeRoute = require('./routes/HomeRoute');
app.use('/', HomeRoute);
app.use('/api/pricing', pricingRouter);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
