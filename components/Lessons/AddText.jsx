import { useDisclosure } from 'echess/hooks';
import JoditMarkdown from '../Modals/JoditMarkdown';

const AddText = ({ onClick }) => {
  const { isOpen, show, hide } = useDisclosure();
  const handleClick = () => {
    onClick();
    show();
  };

  return (
    <>
      <div
        className="grid grid-wrapper items-center mb-4 hover:bg-gray-200 py-2 rounded no-underline cursor-pointer"
        onClick={handleClick}
      >
        <div className="first">
          <div className="flex items-center justify-center text-green-600 rounded-full border-2 border-green-600 p-3">
            <i className="text-xl fas fa-scroll"></i>
          </div>
        </div>
        <div className="second">
          <h2 className="text-lg font-semibold">Text Content</h2>
        </div>
        <div className="third">
          <p className="text-gray-700">
            A text section can contain only formatted text, including links, images and subtitles
          </p>
        </div>
      </div>
      {isOpen && <JoditMarkdown isOpen={isOpen} hide={hide} />}
    </>
  );
};

export default AddText;
