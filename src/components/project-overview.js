import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import project from './markdown/project-example.md';

export const ProjectOverview = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(project)
      .then((result) => result.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div class="container mx-auto p-5">
      <ReactMarkdown className='prose'>{content}</ReactMarkdown>
    </div>
  );
};

export default ProjectOverview