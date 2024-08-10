import TextEditor from './TextEditor';
export default function TextEditorWrap({ content, onContentChange, isEditing, onDeleteContent }) {
    return (
        isEditing ? <TextEditor content={content} onContentChange={onContentChange} onDeleteContent={onDeleteContent} /> : <div className="editor-content" dangerouslySetInnerHTML={{ __html: content }} />
    );
}
