import { Layout, withAuth, withRouter } from 'echess/components';
import { Teacher } from 'echess/components/Query';

const Page = ({ id }) => (
  <Layout>
    <Teacher teacher={id} />
  </Layout>
);

export default withRouter(withAuth(Page));
