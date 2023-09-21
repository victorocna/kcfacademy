import { Layout, withAuth, withRouter, withQuery } from 'echess/components';
import { MyQuizDetails } from 'echess/components/Teacher';
import { fetchMyQuiz } from 'echess/controllers/quiz';

const Page = ({ slug }) => {
  const QuizWithQuery = withQuery(MyQuizDetails, slug, fetchMyQuiz);

  return (
    <Layout role="teacher">
      <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
        <QuizWithQuery />
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));