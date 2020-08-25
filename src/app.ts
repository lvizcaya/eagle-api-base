import express, { Application } from 'express';
import config from "./config/config";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRoutes from './routes/api.routes';

// Init
const server: Application = express();

// Settings
server.set('port', config.api.port);
const corsOptions = {
    origin: config.cors.origin,
    credentials: config.cors.credentials
};

// Middlewares
server.use(morgan(config.morgan.format));
server.use(cors(corsOptions));
server.use(cookieParser());
server.use(express.urlencoded({extended: false}));
server.use(express.json());

// error handler
server.use((err:any, req:any, res:any, next:any) => {
	if (err) {
		console.error(err.message);
		console.error(err.stack);
		return res.status(err.output.statusCode || 500).json(err.output.payload);
	}
});

// Routes
server.use('/api/v1', authRoutes);

export default server;
