import { Layout, withAuth, withRouter, Group } from 'echess/components';
import { GroupForm } from 'echess/components/Admin';

const Page = ({ id }) => (
  <Layout>
    <Group group={id} />
    <GroupForm group={id} className="mt-3 py-4 bg-white shadow rounded" />
  </Layout>
);

export default withRouter(withAuth(Page));
