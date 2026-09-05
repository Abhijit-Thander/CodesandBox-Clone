import EditorButton from "./EditorTabs";
import MonacoEditor from "./MonacoEditor";

const EditorLayout = () => {
  return (
    <div className="h-screen bg-[#1e1e1e] text-white flex ">
      {/* Activity Bar */}
      <aside className="w-16 border-r border-[#333]">Activity Bar</aside>

      {/* Explorer */}
      <aside className="w-66 border-r border-[#333]">File Explorer</aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Tabs */}
        <div className="h-20 border-b border-[#333]">
          <EditorButton />
        </div>

        {/* Monaco */}
        <div className="flex-1">
          <MonacoEditor />
        </div>

        {/* Bottom Panel */}
        <div className="h-60 border-t border-[#333]">Terminal</div>
      </main>
    </div>
  );
};

export default EditorLayout;
