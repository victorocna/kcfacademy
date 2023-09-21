import { MainHeader, Footer, Signup } from '../components';

const Page = () => (
  <>
    <header>
      <MainHeader />
    </header>
    <main className="cover bg-gray-200 md:bg-gray-600 flex flex-col items-center justify-center pt-4 flex-1">
      <div className="flex max-md">
        <Signup />
      </div>
    </main>
    <Footer />
  </>
);

export default Page;