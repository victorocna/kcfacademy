import { Formik } from 'formik';
import { Layout, withAuth, Back } from 'echess/components';
import { AddMember } from 'echess/components/Formik';
import { signup } from 'echess/models';
import { create } from 'echess/controllers/member';

const Page = () => (
  <Layout>
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/members" />
        <h2 className="font-bold text-2xl">Add member</h2>
      </div>
      <Formik {...signup} onSubmit={create}>
        {(props) => <AddMember {...props} />}
      </Formik>
    </div>
  </Layout>
);

export default withAuth(Page);
