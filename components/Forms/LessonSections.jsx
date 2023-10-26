import {
  Fieldset,
  MarkdownSection,
  PgnTextSection,
  PgnUploadSection,
  VideoSection,
} from 'echess/components/Forms';
import { LessonHelper } from 'echess/components/Lessons';
import { Field, useFormikContext } from 'formik';
import { AddBefore } from '../Lessons';
import JoditSection from './JoditSection';

const LessonSections = ({ remove, insert, showEditor, sections = [] }) => {
  const { values } = useFormikContext();

  const handleSections = (type, index) => {
    return (
      <div key={index} className="bg-stripe-section p-4 lg:px-8">
        <div className="my-2 flex flex-wrap items-center">
          <LessonHelper index={index} type={type} />
          <AddBefore index={index} insert={insert} showEditor={showEditor} />
          <button
            type="button"
            className="ml-2 text-red-700 text-sm hover:underline"
            onClick={() => remove(index)}
          >
            Delete
          </button>
        </div>
        <div className="mb-2">
          <Fieldset name={`sections.${index}.content`}>
            {type === 'markdown' && (
              <Field name={`sections.${index}.content`} as={MarkdownSection} />
            )}
            {type === 'text' && (
              <Field
                name={`sections.${index}.content`}
                as={JoditSection}
                value={values.sections[index].content}
                index={index}
              />
            )}
            {type === 'video' && <Field name={`sections.${index}.content`} as={VideoSection} />}
            {type === 'pgn' && <Field name={`sections.${index}.content`} as={PgnUploadSection} />}
            {type === 'pgn-text' && (
              <Field name={`sections.${index}.content`} as={PgnTextSection} />
            )}
          </Fieldset>
        </div>
      </div>
    );
  };

  return sections.map(({ type }, index) => handleSections(type, index));
};

export default LessonSections;
