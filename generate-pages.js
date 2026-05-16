const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'for-her', title: 'For Her' },
  { path: 'for-him', title: 'For Him' },
  { path: 'silver', title: 'Silver Collection' },
  { path: 'gold', title: 'Gold Collection' },
  { path: 'rings', title: 'Rings' },
  { path: 'earrings', title: 'Earrings' },
  { path: 'necklaces', title: 'Necklaces' },
  { path: 'bracelets', title: 'Bracelets' },
];

const template = (title) => `import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "${title} | Aurelia Jewelry",
  description: "Explore our exclusive ${title} collection.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-bg">
      <Navbar />
      <main className="flex-grow">
        <ProductGrid title="${title}" />
      </main>
    </div>
  );
}
`;

pages.forEach(page => {
  const dirPath = path.join(__dirname, 'src', 'app', page.path);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.js'), template(page.title));
  console.log(`Created page for ${page.title} at src/app/${page.path}/page.js`);
});
