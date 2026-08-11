import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function StoryPage({ params }) {
  const { id } = params;

  return (
    <>
      <Header />
      <main style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '80vh' }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', color: 'var(--secondary-color)', marginBottom: '20px' }}>
            Story of Change: {id}
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--template-color)' }}>
            The content for this story will be uploaded soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
