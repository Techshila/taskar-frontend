import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AuthRequired } from '@/components/auth-layout/AuthRequired';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AuthRequired>
        <div className='flex flex-col min-h-screen'>
        <Navbar />
        {children}
        <div className='mt-auto'><Footer /></div>
        </div>
      </AuthRequired>
    </div>
  );
}
