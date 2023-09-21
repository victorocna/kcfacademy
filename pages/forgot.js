import { MainHeader, Footer, Forgot } from '../components';

const Page = () => (
  <>
    <header>
      <MainHeader />
    </header>
    <main className="cover bg-gray-200 md:bg-gray-600 flex flex-col items-center justify-center pt-4 flex-1">
      <div className="flex max-md">
        <Forgot />
      </div>
    </main>
    <Footer />
  </>
);

export default Page;
