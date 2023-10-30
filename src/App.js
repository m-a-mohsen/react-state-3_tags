import { useDebugValue, useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
// import { uid } from "uid";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

function handelAddTag(tag) {
  console.log(tag)
  setTags([...tags, tag])
}
  function handelDeleteTag(tag) {
    console.log(tag);
    setTags(tags.filter(element => element !== tag));
  }
  
  return (
    <main className="app">
      <Form onAddTag={ handelAddTag } />
      <List tags={tags} onDeleteTag={handelDeleteTag}/>
    </main>
  );
}
