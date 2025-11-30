import IndexHeader from '@/components/index/IndexHeader';
import IndexHero from '@/components/index/IndexHero';
import IndexFooter from '@/components/index/IndexFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <IndexHeader />
      <main>
        <IndexHero />
      </main>
      <IndexFooter />
    </div>
  );
};

export default Index;