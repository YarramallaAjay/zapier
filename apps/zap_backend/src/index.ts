import  express,{ Express, Router } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import listEndpoints from 'express-list-endpoints';
import hooksRouter from "@/routes/hooksRouter";
import zapRouter from '@/routes/zapRouter';
import integrator from '@/routes/ApplicationRoute';
import authRouter from '@/routes/authRouter';
import { KafkaProducer } from '@/processor/processor';
import { KafkaConsumer } from '@/workers/worker';
import { UserDetails } from '@repo/types/src/UserSession';
import cors from 'cors'

async function main() {
  try {
    // Initialize Kafka
    console.log('Starting Kafka setup...');
    await new KafkaProducer('zapConsumers', ['localhost:9092']);
    await new KafkaConsumer('zapConsumers', ['localhost:9092']);
    console.log('Kafka setup complete');

    const app: Express = express();

    // Middleware
    app.use(express.json());
    app.use(cookieParser());
    app.use(
      session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
      })
    );
    app.use(
      cors({
        origin: ["http://localhost:3000"], // Allow requests from localhost:3000
        credentials: true, // Allow cookies and credentials
      })
    );

    
    // Handle preflight requests
    app.options('*', cors());

    // Register Routes
    console.log('Registering routes...');
    app.use('/hooks', hooksRouter);
    app.use('/auth', authRouter);
    app.use('/integrator', integrator);
    app.use('/zap', zapRouter);

    // Sample GET route
    app.get('/', async (req, res) => {
      try {
        const {userId} = req.body;
        if (!userId) { res.status(400).json({ error: 'userId required' });
      return
    }
      const user=await UserDetails.getUser(userId)
        res.status(200).json({ message: 'Welcome', user });
      } catch (err) {
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Endpoint to list all routes
    app.get('/routes', (req, res) => {
      console.log('Fetching routes via /routes endpoint...');
      console.log(req)
      const routes = listEndpoints(app);
      res.json({
        total: routes.length,
        routes,
      });
    });
    console.log('tsconfig-paths/register loaded');

    // Log individual routers
    console.log('Hooks Router Routes:');
    console.table(listEndpoints(hooksRouter as Router));
    console.log('Auth Router Routes:');
    console.table(listEndpoints(authRouter as Router));
    console.log('Zap Router Routes:');
    console.table(listEndpoints(zapRouter as Router));
    console.log('Integrator Router Routes:');
    console.table(listEndpoints(integrator as Router));

    // Log all routes
    console.log('All Registered Endpoints:');
    console.table(listEndpoints(app));

    // Start the server
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

main();