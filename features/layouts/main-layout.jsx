import { Header } from './header';

export const MainLayout = ({ children }) => {
  return (
    <section className="min-h-screen bg-black/95 text-white">
      <Header />
      <main>{children}</main>
    </section>
  );
};
