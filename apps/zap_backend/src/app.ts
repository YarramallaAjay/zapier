import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import zapRoutes from './routes/zapRouter'
import zapTemplateRoutes from './routes/zap-template.routes'
import authRoutes from './routes/authRouter'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/zaps', zapRoutes)
app.use('/api/templates', zapTemplateRoutes)
app.use('/api/auth', authRoutes)

export default app 