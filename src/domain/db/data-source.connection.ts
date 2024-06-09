
// Import the Sequelize module from sequelize-typescript
import { Sequelize } from "sequelize-typescript";

// Create a new Sequelize instance with the connection configuration
const connection = new Sequelize({
  dialect: "mysql", // Specifies the database dialect
  host: "localhost", // Specifies the database host
  username: "root", // Specifies the database username
  password: "", // Specifies the database password
  database: "scrum", // Specifies the database name
  logging: false, // Disables logging of SQL queries
});

// Export the connection object as the default module
export default connection;