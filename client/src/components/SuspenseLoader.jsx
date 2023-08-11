const SuspenseLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> */}
    </div>
  );
};

export default SuspenseLoader;
