import React, { useRef, useState } from "react";
import "./App.css";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

const App: React.FC = () => {
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };
  return (
    <div className="App">
      <h1>Hello, welcome to your React TypeScript app!</h1>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <EmailEditor ref={emailEditorRef} onReady={onReady} />
    </div>
  );
};

export default App;
