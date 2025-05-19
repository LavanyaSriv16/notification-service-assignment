const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', notificationRoutes);


sequelize.sync()
  .then(() => console.log(' Database synced!'))
  .catch(err => console.error(' Database sync failed:', err));

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
