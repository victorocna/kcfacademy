import { Button } from 'echess/components';
import { AddPgnText, AddPgnUpload, AddVideo } from 'echess/components/Lessons';
import { useDisclosure } from 'echess/hooks';
import AddText from './AddText';
import { Modal } from 'react-bootstrap';
import { sections } from '../constants';

const AddSection = ({ push, showEditor, sections: count }) => {
  const { isOpen, show, hide } = useDisclosure();

  return (
    <>
      <Button variant="outline" onClick={show}>
        Add section
      </Button>

      <Modal show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Choose section type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddText
            onClick={() => {
              push(sections.text);
              showEditor(count?.length);
              hide();
            }}
          />
          <AddVideo
            onClick={() => {
              push(sections.video);
              hide();
            }}
          />
          <AddPgnUpload
            onClick={() => {
              push(sections.pgnUpload);
              hide();
            }}
          />
          <AddPgnText
            onClick={() => {
              push(sections.pgnText);
              hide();
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddSection;
