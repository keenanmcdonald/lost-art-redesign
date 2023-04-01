module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: { unoptimized: true },
    output: "export",
    // assetPrefix: "./",
  }
  return nextConfig
}
