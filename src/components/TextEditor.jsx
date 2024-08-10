import React, { useEffect, useState } from 'react';
import {
  BubbleMenu, EditorContent, useEditor,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Link from '@tiptap/extension-link';


const TextEditor = ({ content, onContentChange, onDeleteContent }) => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      ListItem,
      Link.configure({
        openOnClick: false,  // Prevents the link from being opened on click
        linkOnPaste: true,   // Automatically converts URLs to links when pasted
      }),
    ],
    content: content,
    onUpdate({ editor }) {
      const updatedContent = editor.getHTML();
      onContentChange(updatedContent);
    },
    onFocus() {
      setIsFocused(true);
    },
    onBlur() {
      setTimeout(() => {
        setIsFocused(false);
      }, 200);
    },
  });

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href ?? "";
    const url = window.prompt('Enter the URL', previousUrl)
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  const unsetLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  if (!editorLoaded) {
    return null;
  }

  return (
    <div className="relative editor-content">
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="bubble-menu">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            Strike
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={"min-w-[80px] " + (editor.isActive('bulletList') ? 'is-active' : '')}
          >
            Bullet List
          </button>
          <button
            onClick={setLink}
            className={"min-w-[80px] " + (editor.isActive('link') ? 'is-active' : '')}
          >
            Set Link
          </button>
          <button
            onClick={unsetLink}
            disabled={!editor.isActive('link')}
            className={"min-w-[80px] "}
          >
            Unset Link
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
          >
            Undo
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
          >
            Redo
          </button>
        </div>
      </BubbleMenu>}

      {/* control */}
      {
        onDeleteContent && isFocused &&  <div className="absolute top-0 right-[-20px]">
          <button
            className="text-slate-200 w-4 h-4 rounded"
            onClick={onDeleteContent}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </button>
        </div>
      }

      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
