import { Link, Layout, withAuth } from 'echess/components';
import { QuizList } from 'echess/components/Admin';

const Page = () => (
  <Layout role="teacher">
    <div className="flex items-center mb-4">
      <h1 className="font-bold text-2xl mr-2">Quiz list</h1>
      <Link href="/teacher/quizzes/add">Add quizzes</Link>
    </div>
    <QuizList />
  </Layout>
);

export default withAuth(Page);
