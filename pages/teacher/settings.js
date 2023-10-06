import { Profile, withAuth } from 'echess/components';
import { Layout } from '../../components';

const Page = () => (
  <Layout role="teacher">
    <div className="bg-white border rounded-lg shadow py-8">
      <h2 className="font-bold text-2xl mb-4 px-4 lg:px-8">Account settings</h2>
      <Profile />
    </div>
  </Layout>
);

export default withAuth(Page);
