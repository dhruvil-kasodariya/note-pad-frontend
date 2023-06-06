import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEdditer = () => {
  const [editorState, setEditorState] = useState(() => {
    const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  useEffect(() => {
    // Perform any necessary side effect on editorState change
    // You can access the converted HTML using: draftToHtml(convertToRaw(editorState.getCurrentContent()))
  }, [editorState]);

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};

export default TextEdditer;
