require("dotenv").config();
export const TEST_DB_URL = "mongodb://localhost/led-matrix-test";
export const IS_PROD = process.env.NODE_ENV === "production";
export const APP_DOMAIN_PREFIX = IS_PROD
  ? "https://led-matrices.herokuapp.com"
  : "http://localhost:3000";
export const TEST_USERNAME = "test-user";
export const TEST_EMAIL = "test@email.com";
export const TEST_PASSWORD = "test password";
