import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AuthRequired } from '@/components/auth-layout/AuthRequired';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AuthRequired>
        <Navbar />
        {children}
        <Footer />
      </AuthRequired>
    </div>
  );
}
