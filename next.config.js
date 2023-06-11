module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: { unoptimized: true },
    output: "export",
    trailingSlash: true,
  }
  return nextConfig
}
