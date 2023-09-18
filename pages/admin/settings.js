import { Layout, Profile, withAuth } from 'echess/components';

const Page = () => (
  <Layout>
    <div className="bg-white border rounded-lg shadow py-8">
      <h1 className="font-bold text-2xl mb-4 px-4 lg:px-8">Account settings</h1>
      <Profile />
    </div>
  </Layout>
);

export default withAuth(Page);
