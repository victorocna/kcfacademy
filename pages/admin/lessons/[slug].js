import { Layout, withAuth, withRouter, withQuery } from 'echess/components';
import { Lesson } from 'echess/components/Admin';
import { fetchLesson } from 'echess/controllers/lesson';

const Page = ({ slug }) => {
  const LessonWithQuery = withQuery(Lesson, slug, fetchLesson);

  return (
    <Layout>
      <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
        <LessonWithQuery />
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
