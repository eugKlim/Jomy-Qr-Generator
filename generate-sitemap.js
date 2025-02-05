import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFile } from 'fs/promises';

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: 'https://jomy-qr-generator.vercel.app',
  });

  const pages = ['/', '/home', '/allSaveQr'];

  pages.forEach((page) => {
    sitemap.write({ url: page, changefreq: 'daily', priority: 0.8 });
  });

  sitemap.end();
  const sitemapBuffer = await streamToPromise(sitemap);

  await writeFile('./public/sitemap.xml', sitemapBuffer);
  console.log('✅ Сайтмап создан в public/sitemap.xml');
}

generateSitemap().catch(console.error);
