import AuthLayout from '@/components/auth-layout/AuthLayout';
import Link from 'next/link';
import ResultCard from '@/components/ui/result-card';

const SearchResults = () => {
  return (
    <AuthLayout>
     <div>
        <ResultCard/>
     </div>
    </AuthLayout>
  );
};

export default SearchResults;
