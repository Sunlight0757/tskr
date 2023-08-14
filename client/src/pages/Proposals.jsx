import Content from "../components/Content";

const Proposals = () => {
  return (
    <Content
      title="Proposals"
      description="This is My Proposals Page"
      component={
        <div className="flex-1 flex justify-center items-center bg-white">
          <h1>My Proposals</h1>
        </div>
      }
    />
  );
};

export default Proposals;
