import { useRef } from 'react';
import JoditEditor from 'jodit-react';

const Jodit = ({ value, handleBlur }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={value}
      tabIndex={1} // tabIndex of textarea
      onBlur={handleBlur}
    />
  );
};
export default Jodit;
