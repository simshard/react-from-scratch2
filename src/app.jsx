import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";

export function App() {
  return (
    // <PageWrapper>
    //   <Container>
    //   </Container>
    // </PageWrapper>
    <main className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
      <div className="mx-auto max-w-5xl p-4 md:p-8">
        <Header />
      </div>
    </main>
  );
}