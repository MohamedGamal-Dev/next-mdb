import '@/styles/globals.css';
import { MainLayout } from '@/layouts';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
