import { Formik } from 'formik';
import { withAuth, Back } from 'echess/components';
import { lesson } from 'echess/models';
import { create } from 'echess/controllers/lesson';
import { Layout } from '../../../components';
import { AddLesson } from '../../../components/Formik';

const Page = () => (
  <Layout>
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/lessons" />
        <h2 className="font-bold text-2xl">Add lesson</h2>
      </div>
      <Formik {...lesson} onSubmit={create}>
        {(props) => <AddLesson {...props} />}
      </Formik>
    </div>
  </Layout>
);

export default withAuth(Page);
