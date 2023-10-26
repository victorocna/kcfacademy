import { AppContext } from 'echess/components';
import {
  Anygroup,
  Anyone,
  Anytime,
  CreatedAt,
  Description,
  DiagramPreview,
  LessonHelp,
  Name,
  OfferPreview,
  Submit,
  Tags,
  WhenCanSolve,
  WhoCanSolve,
} from 'echess/components/Forms';
import { useDisclosure } from 'echess/hooks';
import { FieldArray, Form } from 'formik';
import { useContext, useState } from 'react';
import { AddSection } from '../Lessons';
import LessonSections from '../Forms/LessonSections';
import { JoditMarkdown } from '../Modals';

const AddLesson = ({ values }) => {
  const { groups } = useContext(AppContext);
  const { isOpen, show, hide } = useDisclosure();

  const [editorIndex, setEditorIndex] = useState(null);
  const showEditor = (index) => {
    show();
    setEditorIndex(index);
  };

  return (
    <Form debug={true}>
      <Name />
      <Description
        label="Short description"
        help="Recommended info. The description will be displayed on the list of lessons"
      />
      <DiagramPreview {...values} />
      <Tags {...values} />
      <WhenCanSolve />
      <Anytime {...values} />
      <WhoCanSolve />
      <Anyone {...values} />
      {groups && <Anygroup {...values} />}
      <OfferPreview {...values} />
      <FieldArray
        name="sections"
        render={({ remove, insert, push }) => (
          <>
            <LessonSections remove={remove} insert={insert} showEditor={showEditor} {...values} />
            <div className="p-4 lg:px-8">
              <AddSection push={push} showEditor={showEditor} {...values} />
            </div>
          </>
        )}
      />
      <CreatedAt {...values} />
      <LessonHelp variant="before-save" />
      <Submit label="Save lesson" />
      {isOpen && <JoditMarkdown isOpen={isOpen} hide={hide} index={editorIndex} />}
    </Form>
  );
};

export default AddLesson;
