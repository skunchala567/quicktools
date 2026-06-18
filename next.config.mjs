const redirects = [
  ["/public/tools-access.html", "/", true],
  ["/tools-access.html", "/", true],
  ["/index.html", "/", true],
  ["/excel-merger.html", "/tools/excel-tools/excel-toolkit.html", true],
  ["/tools/excel-tools/excel-merger.html", "/tools/excel-tools/excel-toolkit.html", true],
  ["/whatsapp.html", "/tools/messaging/iwhatsapp.html", true],
  ["/tools/messaging/whatsapp.html", "/tools/messaging/iwhatsapp.html", true],
  ["/image-url-generator.html", "/tools/image-generator/image-url-generator.html", true],
  ["/qr-generator.html", "/tools/qr-generator/index.html", true],
  ["/certificate-generator.html", "/tools/certificate-generator/index.html", true],
  ["/rfid-coupon.html", "/", false],
  ["/tools/rfid-management/rfid-coupon.html", "/", false],
  ["/id-card-registration.html", "/", false],
  ["/tools/id-card/id-card-registration.html", "/", false]
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return redirects.map(([source, destination, permanent]) => ({
      source,
      destination,
      permanent
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          }
        ]
      },
      {
        source: "/core/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
