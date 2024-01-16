import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  let tabContent = <p> Please select a Topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  function onSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => onSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => onSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => onSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => onSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
