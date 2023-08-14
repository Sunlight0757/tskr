import Content from "../components/Content";

const Dashboard = () => {
  return (
    <Content
      title="Dashboard"
      description="This is Freelancer Dashboard"
      component={
        <div className="flex-1 flex justify-center items-center bg-white">
          <h1>Dashboard</h1>
        </div>
      }
    />
  );
};

export default Dashboard;
