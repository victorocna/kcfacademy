import dynamic from 'next/dynamic';

const JoditContent = ({ value, handleBlur }) => {
  let currentValue = value;
  if (Array.isArray(value)) {
    currentValue = value.join('\n');
  }

  const Jodit = dynamic(() => import('../Jodit'), { ssr: false });

  return <Jodit value={currentValue} handleBlur={handleBlur} />;
};

export default JoditContent;
