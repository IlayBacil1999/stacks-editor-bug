import { useEffect, useRef } from "react";
import { StacksEditor } from "@stackoverflow/stacks-editor";
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";

export default function MarkdownEditor() {
  const editorContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorContainerRef.current) {
      new StacksEditor(editorContainerRef.current, "This is your text!");
    }
  }, []);

  return (
    <div>
      <div ref={editorContainerRef}></div>
    </div>
  );
}
