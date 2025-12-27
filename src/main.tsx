import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './lib/wagmi'
import { resetLocalData } from './lib/resetData'
import './i18n'

createRoot(document.getElementById("root")!).render(
	<WagmiProvider config={wagmiConfig}>
		<App />
	</WagmiProvider>
);
