import Content from "../components/Content";

const Bids = () => {
  return (
    <Content
      title="Bids"
      description="This is Bid Page"
      component={
        <div className="flex-1 flex justify-center items-center bg-white">
          <h1>Bids</h1>
        </div>
      }
    />
  );
};

export default Bids;
