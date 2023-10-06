import { useState } from 'react';
import { withAuth } from 'echess/components';
import { LessonFilters, LessonList } from 'echess/components/Member';
import { Tags, Sort } from 'echess/components/Filter';
import { Layout } from '../../../components';

const Page = () => {
  const [options, setOptions] = useState({});

  return (
    <Layout role="member">
      <div className="bg-white rounded-lg p-4 lg:px-8 border border-gray-400">
        <div className="flex flex-wrap items-center mb-2">
          <h2 className="font-bold text-xl w-full md:w-auto md:flex-1 mb-2">My lessons</h2>
          <Tags setOptions={setOptions} />
          <Sort setOptions={setOptions} />
        </div>
        <LessonFilters setOptions={setOptions} />
        <hr className="my-4" />
        <LessonList options={options} />
      </div>
    </Layout>
  );
};

export default withAuth(Page);
