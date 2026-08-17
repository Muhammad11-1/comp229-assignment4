import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/config.js';

import authRoutes from './server/routes/auth.routes.js';
import userRoutes from './server/routes/user.routes.js';
import projectRoutes from './server/routes/project.routes.js';
import contactRoutes from './server/routes/contact.routes.js';
import qualificationRoutes from './server/routes/qualification.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

// API Routes
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', projectRoutes);
app.use('/', contactRoutes);
app.use('/', qualificationRoutes);

mongoose.connect(config.mongoUri)
  .then(() => console.log("Connected to the database!"))
  .catch(err => console.log("Database Connection Error:", err));

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}.`);
});