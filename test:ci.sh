echo "Running All tests..."

echo "Server tests...starting..."
npm run test:server:ci;
echo "Server tests done"

echo "Client tests...starting..."
npm run test:client;
echo "Client tests done"