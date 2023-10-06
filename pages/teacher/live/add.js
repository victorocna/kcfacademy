import { Formik } from 'formik';
import { withAuth, Back } from 'echess/components';
import { AddLiveLesson } from 'echess/components/Formik';
import { liveLesson } from 'echess/models';
import { create } from 'echess/controllers/live';
import { Layout } from '../../../components';

const Page = () => (
  <Layout role="teacher">
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/teacher/live" />
        <h2 className="font-bold text-2xl">Add Live Lesson</h2>
      </div>
      <Formik {...liveLesson} onSubmit={create}>
        {(props) => <AddLiveLesson {...props} />}
      </Formik>
    </div>
  </Layout>
);

export default withAuth(Page);
