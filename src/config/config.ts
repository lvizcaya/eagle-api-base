import dotenv from 'dotenv';
dotenv.config();

export default {
    api: {
        port: process.env.API_PORT || 3000
    },
    cors: {
        origin: process.env.CORS_ORIGIN || '*',
        credentials: (process.env.CORS_CREDENTIALS === 'true') || true
    },
    morgan: {
        format: process.env.MORGAN_FORMAT || 'dev'
    }
}