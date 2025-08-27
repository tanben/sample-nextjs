import { init, BasicLogger } from '@launchdarkly/node-server-sdk';

async function initialize() {
  const SDK_KEY = process.env.LAUNCHDARKLY_SDK_KEY;
  // console.log(`--- ld-server.js initialize SDK=${SDK_KEY} ---`);

  const options = {
    logger: new BasicLogger({
      destination: console.log,
      level: "debug",
    }),
  };
  const client = init(SDK_KEY, options);
  globalThis.LaunchDarklyServerClient = await client.waitForInitialization({timeout: 5});

  return globalThis.LaunchDarklyServerClient;
}

async function getClient() {
  const ldClient = globalThis.LaunchDarklyServerClient;
  return ldClient ? ldClient : initialize();
}

async function getVariation(flagKey, context, defaultValue) {
  const ldClient = await getClient();
  return ldClient.variation(flagKey, context, defaultValue);
}
async function getAllFlags(context) {
  const ldClient = await getClient();
  return ldClient.allFlagsState(context);
}
export default { getClient, getVariation, getAllFlags };
