const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/Header.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Import usePathname
if (!content.includes('usePathname')) {
  content = content.replace(
    'import { useState, useEffect } from "react";',
    'import { useState, useEffect } from "react";\nimport { usePathname } from "next/navigation";'
  );
}

// Add the hook inside the component
if (!content.includes('const pathname = usePathname();')) {
  content = content.replace(
    'const [openSubmenu, setOpenSubmenu] = useState(null);',
    'const [openSubmenu, setOpenSubmenu] = useState(null);\n  const pathname = usePathname();\n\n  useEffect(() => {\n    setIsMobileMenuOpen(false);\n  }, [pathname]);'
  );
}

// Remove onClick={() => setIsMobileMenuOpen(false)} from all Links to prevent race condition
content = content.replace(/ onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}/g, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Header fixed!');
