import { useState } from 'react';
import { Layout, withAuth } from 'echess/components';
import { QuizFilters, QuizList } from 'echess/components/Member';
import { Tags, Sort } from 'echess/components/Filter';

const Page = () => {
  const [options, setOptions] = useState({});

  return (
    <Layout role="member">
      <div className="bg-white rounded-lg p-4 lg:px-8 border border-gray-400">
        <div className="flex flex-wrap items-center mb-4">
          <h2 className="font-bold text-xl w-full md:w-auto md:flex-1 mb-2">My quizzes</h2>
          <Tags setOptions={setOptions} />
          <Sort setOptions={setOptions} />
        </div>
        <QuizFilters setOptions={setOptions} />
        <hr className="my-4" />
        <QuizList options={options} />
      </div>
    </Layout>
  );
};

export default withAuth(Page);
