import { Layout, withAuth, withRouter, Back } from 'echess/components';
import { TagForm } from 'echess/components/Admin';

const Page = ({ slug }) => (
  <Layout>
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/tags" />
        <h2 className="font-bold text-2xl">Edit tag</h2>
      </div>
      <TagForm slug={slug} />
    </div>
  </Layout>
);

export default withRouter(withAuth(Page));
