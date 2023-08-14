import Content from "../components/Content";

const Finances = () => {
  return (
    <Content
      title="Finances"
      description="This is Finances Page"
      component={
        <div className="flex-1 flex justify-center items-center bg-white">
          <h1>Finances</h1>
        </div>
      }
    />
  );
};

export default Finances;
