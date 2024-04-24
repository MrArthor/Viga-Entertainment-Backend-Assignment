# Food Delivery API

This project is a REST API backend for a food delivery app, focusing on a dynamic pricing module to calculate the total cost of food delivery based on various factors such as distance, item type, and zone. The API is built using Node.js and PostgreSQL, and it includes features like creating an API to calculate delivery costs for different types of food items across various zones.

## Features

- **Dynamic Pricing Module**: Calculates delivery costs for different types of food items across various zones based on the distance and item type.
- **Base Distance and Price**: A base distance of 5 km with a base price of 10 euros.
- **Per Km Price**: For distances beyond the base, e.g., 1.5 EUR/km for perishable items and 1 EUR/km for non-perishable items.
- **Database Relations**: Organization, Item, and Pricing models with validations for API input payloads.

## Technical Specifications

- **API Request and Response Format**:
 - Request: `{ zone: "central", organization_id: "005", total_distance: 12, item_type: "perishable" }`
 - Response: `{ total_price: 20.5 }`
- **Database Models**:
 - Organization: `{ id, name }`
 - Item: `{ id, type, description }`
 - Pricing: `{ organization_id, item_id, zone, base_distance_in_km: 5, km_price: 1.5/1, fix_price: 10 }`
- **Price Calculation**: Implemented as a service object. Prices are in cents to avoid decimal issues.
- **Coding Standards**: Follows Airbnb's style guide.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/food-delivery-api.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your PostgreSQL database. You can use a local setup or provision a database from a cloud server like ElephantSQL.
4. Configure your `.env` file with the database connection string:
   ```
   CONNECTION_STRING=your_connection_string_here
   ```
5. Run migrations to set up your database schema:
   ```
   npx sequelize-cli db:migrate
   ```
6. Start the server:
   ```
   npm start
   ```

### Running the Tests

To run the test suite, execute:
```
npm test
```

## Deployment

The application is deployed on Render.com. Follow the deployment guide provided by Render to deploy your application.

## API Documentation

API documentation is available at the Swagger page.

## Contributing

Contributions are welcome. Please read the contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Express](https://expressjs.com/) for the web application framework.
- [Sequelize](https://sequelize.org/) for the ORM to interact with PostgreSQL.
- [PostgreSQL](https://www.postgresql.org/) for the database.
- [ElephantSQL](https://www.elephantsql.com/) for the managed PostgreSQL service.
