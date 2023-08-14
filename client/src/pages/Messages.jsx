import Content from "../components/Content";

const Messages = () => {
  return (
    <Content
      title="Messages"
      description="This is Messages Page"
      component={
        <div className="flex-1 flex justify-center items-center bg-white">
          <h1>Messages</h1>
        </div>
      }
    />
  );
};

export default Messages;
