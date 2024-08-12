import PageContent from "../components/PageContent";
import Sidebar from "../components/Sidebar";

export default function Homepage() {
  return (
    <main>
      <section>
        <Sidebar />
        <PageContent />
      </section>
    </main>
  );
}
