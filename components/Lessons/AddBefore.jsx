import { AddPgnText, AddPgnUpload, AddVideo } from 'echess/components/Lessons';
import { useDisclosure } from 'echess/hooks';
import { Modal } from 'react-bootstrap';
import { sections } from '../constants';
import AddText from './AddText';

const AddBefore = ({ insert, index, showEditor }) => {
  const { isOpen, show, hide } = useDisclosure();

  return (
    <>
      <button type="button" className="text-blue-700 text-sm hover:underline" onClick={show}>
        Add before
      </button>

      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Choose section type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddText
            onClick={() => {
              insert(index, sections.text);
              showEditor(index);
              hide();
            }}
          />
          <AddVideo
            onClick={() => {
              insert(index, sections.video);
              hide();
            }}
          />
          <AddPgnUpload
            onClick={() => {
              insert(index, sections.pgnUpload);
              hide();
            }}
          />
          <AddPgnText
            onClick={() => {
              insert(index, sections.pgnText);
              hide();
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddBefore;
