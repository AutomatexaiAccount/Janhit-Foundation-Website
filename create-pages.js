const fs = require('fs');
const path = require('path');

const pages = [
  'achievements/awards',
  'achievements/organic-aaharam',
  'achievements/agriculture-innovation',
  'achievements/rainwater-harvesting',
  'events',
  'resources/news-media',
  'resources/newsletter',
  'resources/downloads',
  'resources/gallery',
  'programs/environment',
  'programs/gyan-ashram',
  'programs/give-as-you-earn',
  'programs/my-clean-meerut',
  'about-us/history',
  'about-us/location',
  'about-us/vacancies'
];

pages.forEach(p => {
  const dirPath = path.join('src', 'app', p);
  fs.mkdirSync(dirPath, { recursive: true });
  
  const title = p.split('/').pop().split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = `export const metadata = {
  title: '${title} - Janhit Foundation',
};

export default function Page() {
  return (
    <main className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#2d4315]">${title}</h1>
      <div className="prose max-w-none">
        <p>This is the placeholder page for ${title}. Content will be migrated from the old website here.</p>
      </div>
    </main>
  );
}
`;
  
  const filePath = path.join(dirPath, 'page.js');
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
});

console.log('Pages created successfully.');
