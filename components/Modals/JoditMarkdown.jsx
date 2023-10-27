import { Modal } from 'react-bootstrap';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { isNil } from 'lodash';
import { Button } from 'echess/components';
import JoditContent from '../Forms/JoditContent';

const JoditMarkdown = ({ isOpen, hide, index, value: initialValue }) => {
  const { values, setFieldValue } = useFormikContext();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (!isNil(index)) {
      setFieldValue('editor', index);
    }
  }, []);

  const handleCancel = () => {
    setValue(initialValue);
    hide();
  };
  const handleSave = () => {
    setFieldValue(`sections.${values?.editor}.content`, value);
    hide();
  };

  // Jodit Editor blur handler
  const handleBlur = (newContent) => {
    setValue(newContent);
  };

  return (
    <Modal
      centered={true}
      show={isOpen}
      onHide={hide}
      size="lg"
      backdrop="static"
      enforceFocus={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Text editor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <JoditContent
          name={`sections.${values?.editor}.content`}
          value={initialValue}
          handleBlur={handleBlur}
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-between">
          <Button variant="outline" onClick={handleCancel}>
            Close
          </Button>
          <Button onClick={handleSave}>Save changes</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default JoditMarkdown;
