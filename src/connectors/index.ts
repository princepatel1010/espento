import { AuthereumConnector } from '@web3-react/authereum-connector';
import { ChainId } from 'dxswap-sdk';
import { CustomNetworkConnector } from './CustomNetworkConnector';
import { BitKeepInjectedConnector } from './BitKeepConnector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { UAuthConnector } from '@uauth/web3-react';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

export const INFURA_PROJECT_ID = '0ebf4dd05d6740f482938b8a80860d13';

export const network = new CustomNetworkConnector({
  urls: {
    [ChainId.ESPENTO]: 'https://rpc.escscan.com'
  },
  defaultChainId: ChainId.ESPENTO
});

export const injected = new InjectedConnector({
  supportedChainIds: [ChainId.ESPENTO]
});
export const bitKeepInjected = new BitKeepInjectedConnector({
  supportedChainIds: [ChainId.ESPENTO]
});

export const walletlink = new WalletLinkConnector({
  supportedChainIds: [ChainId.ESPENTO],
  url: 'https://poa-xdai.gateway.pokt.network/v1/lb/61140fc659501900341babff',
  appName: 'Honeyswap'
});

// xdai only
export const walletConnectXDAI = new WalletConnectConnector({
  rpc: {
    9911: 'https://rpc.escscan.com'
  },
  bridge: 'https://walletconnect-relay.minerva.digital',
  qrcode: true
});

// polygon only
export const walletConnectMATIC = new WalletConnectConnector({
  rpc: {
    137: 'https://rpc-mainnet.matic.quiknode.pro'
  },
  bridge: 'https://polygon.bridge.walletconnect.org',
  qrcode: true
});

// mainnet only
export const authereum = new AuthereumConnector({ chainId: 1 });

export const walletconnect = new WalletConnectConnector({
  infuraId: INFURA_PROJECT_ID,
  qrcode: true
});

export const UAUTH_CONFIG = {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  clientID: process.env.REACT_APP_UD_CLIENT_ID!,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  redirectUri: process.env.REACT_APP_UD_REDIRECT_URI!,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  scope: process.env.REACT_APP_UD_SCOPE!
};

//These params (ClientID & redirectUri) are obtained by following the Login Client Configuration in the UD login integration guide
export const uauth = new UAuthConnector({
  ...UAUTH_CONFIG,
  supportedChainIds: [ChainId.XDAI, ChainId.MATIC],
  connectors: { injected, walletconnect }
});
