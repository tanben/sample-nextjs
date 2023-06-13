import LaunchDarkly from "launchdarkly-node-server-sdk";

async function initialize() {
  const SDK_KEY = process.env.LAUNCHDARKLY_SDK_KEY;
  // console.log(`--- ld-server.js initialize SDK=${SDK_KEY} ---`);

  const client = LaunchDarkly.init(SDK_KEY);
  globalThis.LaunchDarklyServerClient = await client.waitForInitialization();

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
export default { getClient, getVariation };
