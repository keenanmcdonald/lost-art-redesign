const { withPayload } = require("@payloadcms/next/withPayload");
const path = require("path");

module.exports = withPayload((phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = withPayload(
    {},
    {
      // The second argument to `withPayload`
      // allows you to specify paths to your Payload dependencies.

      // Point to your Payload config (Required)
      configPath: path.resolve(__dirname, "./payload/payload.config.ts"),

      // Point to your exported, initialized Payload instance (optional, default shown below`)
      payloadPath: path.resolve(process.cwd(), "./payload/payloadClient.ts"),
    }
  );
  return nextConfig;
});
