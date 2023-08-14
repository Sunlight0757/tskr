import Content from "../components/Content";

const EditProfile = () => {
  return (
    <Content
      title="Edit Profile"
      description="This is Edit Profile Page"
      component={
        <div className="flex-1 flex justify-center items-center bg-white">
          <h1>Edit Profile</h1>
        </div>
      }
    />
  );
};

export default EditProfile;
