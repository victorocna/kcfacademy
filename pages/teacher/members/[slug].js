import { Layout, withAuth, withRouter } from 'echess/components';
import { LessonAccess, QuizAccess, MyLessons, MyQuizzes } from 'echess/components/Query';
import { Member } from 'echess/components/Teacher';

const Page = ({ id }) => (
  <Layout role="teacher">
    <Member member={id} />
    <LessonAccess member={id} />
    <QuizAccess member={id} />
    <MyLessons member={id} />
    <MyQuizzes member={id} />
  </Layout>
);

export default withRouter(withAuth(Page));
