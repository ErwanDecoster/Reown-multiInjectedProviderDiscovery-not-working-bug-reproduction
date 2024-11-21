import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { createAppKit } from '@reown/appkit/react';

export const projectId = "";

const bellecour = {
  id: 0x86,
  name: 'iExec Sidechain',
  nativeCurrency: {
    decimals: 18,
    name: 'xRLC',
    symbol: 'xRLC',
  },
  rpcUrls: {
    public: { http: ['https://bellecour.iex.ec'] },
    default: { http: ['https://bellecour.iex.ec'] },
  },
  blockExplorers: {
    etherscan: {
      name: 'Blockscout',
      url: 'https://blockscout-bellecour.iex.ec',
    },
    default: { name: 'Blockscout', url: 'https://blockscout-bellecour.iex.ec' },
  },
};

export const wagmiAdapter = new WagmiAdapter({
  networks: [bellecour],
  multiInjectedProviderDiscovery: false,
  projectId,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [bellecour],
  projectId,
  defaultNetwork: bellecour,
});
