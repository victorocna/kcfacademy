import { MainHeader, Footer, Signup, Slider } from '../components';

const Page = () => (
  <>
    <header>
      <MainHeader />
    </header>
    <main className="cover bg-gray-200 md:bg-gray-600 flex flex-col items-center justify-center pt-4 flex-1">
      <div className="max md:my-8 md:grid gap-8 grid-cols-2">
        <div>
          <Signup />
        </div>
        <div className="screenshot-slider flex flex-col items-center my-4 md:my-0 md:rounded overflow-hidden">
          <Slider />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Page;
