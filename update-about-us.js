const fs = require('fs');

const historyContent = `
export const metadata = {
  title: 'History - Janhit Foundation',
};

export default function HistoryPage() {
  return (
    <main className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#2d4315]">Our History</h1>
      <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
        <p className="mb-4">
          While in his teens, our founder, the Late Shri Anil Rana, formed a group of young dynamic leaders, with the aim of making a difference in their local community. Throughout his young adult life this remained solely an unachievable vision, and he spent his time employed as a university English lecturer. However, still dissatisfied with what life had to offer, he resigned from his job and created a platform for his vision.
        </p>
        <p className="mb-4">
          This platform was Janhit Foundation, which was formally registered under the Societies Registration Act on August 4, 1998, in Meerut City, Western Uttar Pradesh. The first five years of the organization's existence were a tough and barren time. With little funding and support, our founder and his following of youthful volunteers persevered to raise awareness about water and agricultural problems in the region.
        </p>
        <p className="mb-4">
          Slowly but surely, the organization gained credibility and numbers, until it reached its current state, located in a two storey office building, housing approximately 25 full-time salaried employees. Sadly, our founding Director, Anil Rana, passed away suddenly in 2008, and since this time, Janhit Foundation has been overseen by his wife, our new Director, <strong>Ms. Anita Rana</strong>.
        </p>
      </div>
    </main>
  );
}
`;

const locationContent = `
export const metadata = {
  title: 'Location - Janhit Foundation',
};

export default function LocationPage() {
  return (
    <main className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#2d4315]">Janhit's Location</h1>
      <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
        <p className="mb-6">
          Janhit Foundation operates from our head office in Meerut and our geographical reach covers the district of Meerut in Western Uttar Pradesh, in addition to extending to other neighbouring districts including Muzaffarnagar, Saharanpur, Baghpat, Ghaziabad and Noida.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-[#2d4315]">Our main office address is listed below:</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 max-w-xl">
          <h3 className="font-bold text-xl mb-2 text-[#2d4315]">Janhit Foundation</h3>
          <p>
            771/8, Jagriti Vihar<br/>
            Meerut-250004,<br/>
            Uttar Pradesh, India<br/>
          </p>
          <p className="mt-4">
            <strong>Phone:</strong> +91-121-4004123, 0121-4302021<br/>
            <strong>E-mail Id:</strong> <a href="mailto:janhitfoundation@gmail.com" className="text-[#f58220] hover:underline">janhitfoundation@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
`;

const vacanciesContent = `
export const metadata = {
  title: 'Vacancies - Janhit Foundation',
};

export default function VacanciesPage() {
  return (
    <main className="py-20 px-4 md:px-8 max-w-7xl mx-auto min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-8 text-[#2d4315]">Vacancies</h1>
      <div className="prose max-w-none text-lg text-gray-700 leading-relaxed bg-gray-50 p-12 rounded-xl border border-gray-200 text-center shadow-sm">
        <p className="text-xl">
          All Janhit Foundation’s jobs are advertised here.<br/><br/>
          <span className="text-gray-500">Currently, there are no open vacancies. Please check back later.</span>
        </p>
      </div>
    </main>
  );
}
`;

fs.writeFileSync('src/app/about-us/history/page.js', historyContent);
fs.writeFileSync('src/app/about-us/location/page.js', locationContent);
fs.writeFileSync('src/app/about-us/vacancies/page.js', vacanciesContent);
