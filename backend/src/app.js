import express  from 'express';
import cors from 'cors';
import morgan from 'morgan';

import tasksRoutes from './routes/tasks';

const app = express();
app.set("port", 3000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(tasksRoutes);

//app.use(userRoutes);
export default app;