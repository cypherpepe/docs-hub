import { join } from 'path';

const BASE_URL = 'https://fuel.network';
const TESTNET = 'testnet';
const TESTNET_VERSION = 'v1';

export const DOCS_DIRECTORY = join(process.cwd(), './docs');
export const NIGHTLY_DOCS_DIRECTORY = join(process.cwd(), './docs/nightly');
export const FIELDS = ['title', 'slug', 'content', 'category'];

export const LINKS = {
  faucet: `https://faucet-${TESTNET}.${BASE_URL}/`,
  playground: `https://${TESTNET}.${BASE_URL}/${TESTNET_VERSION}/playground/`,
  explorer: `https://app.${BASE_URL}/`,
  bridge: `https://app.${BASE_URL}/bridge`,
  swayCoreLib: 'https://fuellabs.github.io/sway/master/core/',
  swayStdLib: 'https://fuellabs.github.io/sway/master/std/',
  swayExamples: 'https://github.com/FuelLabs/sway-examples/',
  swayApplications: 'https://github.com/FuelLabs/sway-applications/',
  swayPlayground: 'https://sway-playground.org/',
  audits: 'https://github.com/FuelLabs/audits',
  contributing: '/docs/contributing',
};

export type LinkObject = {
  name: string;
  link: string;
  menu?: LinkObject[];
};

export const EXTERNAL_NAVIGATION_LINKS: LinkObject[] = [
  { name: 'Sway Core Lib', link: LINKS.swayCoreLib },
  { name: 'Sway Std Lib', link: LINKS.swayStdLib },
  { name: 'Sway Examples', link: LINKS.swayExamples },
  { name: 'Example Applications', link: LINKS.swayApplications },
  { name: 'Sway Playground', link: LINKS.swayPlayground },
  { name: 'Faucet', link: LINKS.faucet },
  { name: 'Audits', link: LINKS.audits },
  { name: 'Contributing', link: LINKS.contributing },
];

// TODO: replace this
// this is only used the search component
// biome-ignore lint/suspicious/noExplicitAny:
export const NAVIGATION: LinkObject[] = [
  { name: 'Guides', link: '/guides' },
  { name: 'Intro', link: '/docs/intro' },
  {
    name: 'Sway',
    menu: [
      { name: 'Sway Language' },
      { name: 'Sway', link: '/docs/sway' },
      { name: 'Standard Library', link: LINKS.swayStdLib },
      { name: 'Core Library', link: LINKS.swayCoreLib },
      { name: 'Sway Playground', link: LINKS.swayPlayground },
      { name: 'Sway By Example', link: 'https://swaybyexample.com/' },
      { name: 'Example Apps', link: LINKS.swayApplications },
      { name: 'Tooling' },
      { name: 'Forc', link: '/docs/forc' },
    ],
  },
  {
    name: 'SDKs',
    menu: [
      { name: 'Rust SDK', link: '/docs/fuels-rs' },
      { name: 'TypeScript SDK', link: '/docs/fuels-ts' },
      { name: 'Wallet', link: '/docs/wallet/install/' },
    ],
  },
  {
    name: 'Network',
    menu: [
      //{ name: 'About Fuel', link: '/docs/about-fuel/' }
      { name: 'GraphQL API', link: '/docs/graphql/overview/' },
      { name: 'Specifications', link: '/docs/specs' },
      { name: 'Explorer', link: LINKS.explorer },
      { name: 'Faucet', link: LINKS.faucet },
      { name: 'Bridge', link: LINKS.bridge },
    ],
  },
];

export const DEFAULT_THEME = 'light';
