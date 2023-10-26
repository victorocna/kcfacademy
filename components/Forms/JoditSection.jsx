import parse from 'html-react-parser';
import JoditMarkdown from '../Modals/JoditMarkdown';
import { useDisclosure } from 'echess/hooks';

const JoditSection = ({ value, onClick, index }) => {
  const { isOpen, show, hide } = useDisclosure();

  let currentValue = value;
  if (Array.isArray(value)) {
    currentValue = value.join('\n');
  }

  return (
    <>
      <button type="button" onClick={show}>
        <div onClick={onClick}>{parse(currentValue)}</div>
      </button>
      {isOpen && <JoditMarkdown isOpen={isOpen} hide={hide} value={value} index={index} />}
    </>
  );
};

export default JoditSection;
