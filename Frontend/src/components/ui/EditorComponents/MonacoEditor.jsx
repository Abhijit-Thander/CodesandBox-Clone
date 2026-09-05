import Editor from "@monaco-editor/react";

const MonacoEditor = () => {
  return (
    <Editor
      height="90vh"
      theme="vs-dark"
      options={{
        fontSize: 14,
        minimap: {
          enabled: true,
        },
        automaticLayout: true,
        tabSize: 2,
        wordWrap: "on",
        padding: {
          top: 10,
        },
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        cursorBlinking: "smooth",
        renderWhitespace: "selection",
      }}
    />
  );
};

export default MonacoEditor;
