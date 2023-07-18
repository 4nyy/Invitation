/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = nextConfig
module.exports = {
    webpack: (config, { isServer }) => {
      // Tambahkan konfigurasi file-loader untuk file audio
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
              // Anda juga dapat menyesuaikan direktori output di atas sesuai kebutuhan.
            },
          },
        ],
      });
  
      // Jika Anda menggunakan Next.js versi lama (sebelum 12), Anda mungkin perlu menambahkan opsi di bawah ini:
      // config.node = {
      //   fs: 'empty',
      // };
  
      return config;
    },
  };
  
  
  
  
  
  
  