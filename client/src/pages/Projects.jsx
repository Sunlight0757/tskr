import Content from "../components/Content";

const Projects = () => {
  return (
    <Content
      title="Projects"
      description="This is My Projects Page"
      component={
        <div className="flex-1 flex justify-center items-center bg-white">
          <h1>My Projects</h1>
        </div>
      }
    />
  );
};

export default Projects;
