### Title: `multiInjectedProviderDiscovery` option not working after switching from Wallet Connect to Reown  

---

#### Description  

After switching from Wallet Connect to Reown, the `multiInjectedProviderDiscovery` option in the `WagmiAdapter` is no longer taken into account.  

Here’s the updated setup:  

```javascript
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { createAppKit } from '@reown/appkit/react';

export const projectId = ""

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
```  

When using Wallet Connect, the `multiInjectedProviderDiscovery` option worked as expected. However, after transitioning to Reown, it seems to be ignored.  

---

#### Expected Behavior  

- The `multiInjectedProviderDiscovery` option should work as it did previously with Wallet Connect.  

#### Actual Behavior  

- The option is no longer taken into account after switching to Reown.  

---

#### Environment  

- `@reown/appkit`: `1.5.0`  
- `@reown/appkit-adapter-wagmi`: `1.5.0` 

---

#### Steps to Reproduce  

1. Set up the `WagmiAdapter` as shown in the code above.  
2. Transition from Wallet Connect to Reown.  
3. Observe that the `multiInjectedProviderDiscovery` option no longer functions as expected.  

---

#### Additional Context  

- The issue arose specifically after switching from Wallet Connect to Reown.  
- Downgrading to Wallet Connect resolves the issue.  

---

#### Suggested Labels  

- Bug  
- Needs Investigation  

#### Thank You  

Thank you for your assistance! Please let me know if additional information is needed.  