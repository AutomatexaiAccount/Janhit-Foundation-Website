const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/app/programs/wash/page.js',
  'src/app/programs/community-development/page.js',
  'src/app/partnerships/page.js',
  'src/app/projects/page.js',
  'src/app/contact-us/page.js',
  'src/app/get-involved/page.js',
  'src/app/achievements/page.js',
  'src/app/events/page.js',
  'src/app/programs/organic-aaharam/page.js',
  'src/app/programs/agriculture-innovation/page.js',
  'src/app/resources/page.js'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    // Replace padding: '80px 20px' or padding: '100px 20px' with '180px 20px 80px' for the top banner
    content = content.replace(/padding:\s*'80px 20px'/g, "padding: '180px 20px 80px'");
    content = content.replace(/padding:\s*'100px 20px'/g, "padding: '180px 20px 80px'");
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed padding in ${filePath}`);
  }
});
