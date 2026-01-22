# AgroVerse Deployment Checklist

## Pre-Deployment Steps

### 1. Environment Configuration
- [ ] Copy `server/.env.example` to `server/.env`
- [ ] Set `MONGODB_URI` (MongoDB Atlas or local)
- [ ] Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`
- [ ] Set `OPENWEATHER_API_KEY`
- [ ] Set `ORS_API_KEY` (OpenRouteService)
- [ ] Deploy smart contract to Arbitrum Sepolia and set `AGRI_TRUTH_CHAIN_ADDRESS`
- [ ] Set `RELAYER_PRIVATE_KEY` (account that will execute blockchain transactions)
- [ ] Set `OWNER_PRIVATE_KEY` (contract owner account)
- [ ] Configure optional: `N8N_WEBHOOK_SECRET`, `WHATSAPP_WEBHOOK_URL`, `PINATA_API_KEY`

### 2. Smart Contract Setup
- [ ] Deploy `contracts/AgriTruthChain.sol` to Arbitrum Sepolia
- [ ] Update `AGRI_TRUTH_CHAIN_ADDRESS` in `server/.env`
- [ ] Update contract address in `src/lib/contracts.ts`
- [ ] Fund relayer account with ETH for gas
- [ ] Run one-time setup: `POST /api/setup-relayer-as-verifier`
- [ ] Verify contract: `GET /api/chain-info` (should show `isRelayerVerifier: true`)

### 3. Database Setup
- [ ] Ensure MongoDB is running and accessible
- [ ] Connection string in `MONGODB_URI` is correct
- [ ] Database will auto-create collections on first use

### 4. Code Quality Checks
- [x] Run `npm run lint` (117 warnings/errors - mostly TypeScript any types, non-blocking)
- [x] Run `npm run build` (Build successful)
- [x] Fix critical React Hook errors
- [x] Fix empty catch blocks
- [x] Server syntax check passed

### 5. Build Assets
```bash
# Frontend build
npm run build

# The dist/ folder will contain production assets
```

### 6. Test Locally
```bash
# Terminal 1: Start backend server
cd server
npm start

# Terminal 2: Test frontend build
npm run preview
```

## Deployment Options

### Option A: Vercel (Frontend) + Railway/Render (Backend)

#### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Environment Variables: (None needed for frontend - uses server proxy)
5. Deploy

#### Backend (Railway/Render)
1. Create new service
2. Connect GitHub repo
3. Root Directory: `server`
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add all environment variables from `server/.env.example`
7. Deploy
8. Update frontend API endpoint if needed (currently uses `/api/*` proxy)

### Option B: Single VPS (DigitalOcean/AWS/GCP)

```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB
# Follow: https://www.mongodb.com/docs/manual/administration/install-on-linux/

# Clone repo
git clone <your-repo>
cd FarmLedge

# Install dependencies
npm install
cd server && npm install && cd ..

# Configure environment
cp server/.env.example server/.env
nano server/.env  # Edit with your values

# Build frontend
npm run build

# Setup PM2 for process management
sudo npm install -g pm2

# Start backend
cd server
pm2 start src/index.js --name "agroverse-api"
pm2 save
pm2 startup

# Serve frontend with nginx
sudo apt install nginx
# Configure nginx to serve dist/ folder
# And proxy /api/* to localhost:3001
```

### Option C: Docker Deployment

```bash
# Create Dockerfile for backend
# Create docker-compose.yml for full stack
# Deploy to any container platform
```

## Post-Deployment Verification

### API Health Checks
- [ ] `GET /api/health` → Should return `{ status: 'ok' }`
- [ ] `GET /api/chain-info` → Should show contract details
- [ ] `GET /api/batches` → Should return batch list
- [ ] `GET /api/weather?lat=13.0827&lon=80.2707` → Should return weather data

### Frontend Checks
- [ ] Homepage loads correctly
- [ ] Can connect wallet (MetaMask)
- [ ] Can login with different roles
- [ ] Dashboard displays data
- [ ] Weather widget shows data
- [ ] Maps load correctly
- [ ] Language switching works

### Blockchain Checks
- [ ] Can create batches (farmer role)
- [ ] Can transfer ownership (distributor/retailer)
- [ ] Payment flow works (Stripe checkout)
- [ ] Verification flow works (verifier role)

### Monitoring Setup
- [ ] Setup error tracking (Sentry, LogRocket, etc.)
- [ ] Setup uptime monitoring (UptimeRobot, Pingdom)
- [ ] Setup performance monitoring
- [ ] Configure log aggregation

## Common Issues & Solutions

### Build Warnings
- **TypeScript `any` types**: Non-blocking, safe to ignore for MVP deployment
- **React Hook warnings**: Fixed critical ones, remaining are optimization suggestions
- **Large bundle size**: Consider code-splitting for optimization (not critical)

### Runtime Issues
- **MongoDB connection errors**: Check `MONGODB_URI` and network access
- **Blockchain RPC errors**: Verify `ARB_SEPOLIA_RPC_URL` and relayer has ETH
- **Stripe webhook failures**: Ensure webhook secret matches Stripe dashboard
- **Weather API errors**: Verify `OPENWEATHER_API_KEY` is valid

### CORS Issues
- Backend has CORS enabled for all origins (production should restrict this)
- Update `cors()` in `server/src/index.js` for production domains

## Security Recommendations
- [ ] Restrict CORS to specific domains in production
- [ ] Use secure session management
- [ ] Implement rate limiting on API endpoints
- [ ] Store private keys in secure vault (AWS Secrets Manager, etc.)
- [ ] Enable HTTPS/SSL certificates
- [ ] Set up firewall rules
- [ ] Regular security audits of smart contracts
- [ ] Implement API authentication/authorization

## Performance Optimization
- [ ] Enable Gzip compression on server
- [ ] Setup CDN for static assets (Cloudflare, AWS CloudFront)
- [ ] Implement Redis caching for frequent queries
- [ ] Optimize image assets
- [ ] Enable HTTP/2
- [ ] Setup database indexes for common queries

## Maintenance
- [ ] Setup automated backups for MongoDB
- [ ] Monitor server logs regularly
- [ ] Update dependencies monthly
- [ ] Test payment flows weekly
- [ ] Monitor blockchain gas costs

---

## Quick Deploy Commands

```bash
# Frontend build
npm run build

# Server start
cd server && npm start

# Check logs
pm2 logs agroverse-api

# Restart server
pm2 restart agroverse-api
```

## Support
- Review logs in `server/` directory
- Check MongoDB connection in server logs
- Verify blockchain state via `/api/chain-info`
- Test APIs with Postman/curl
