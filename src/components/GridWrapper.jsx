import dynamic from "next/dynamic";

const Grid = dynamic(() => import("./DevExtremeGrid"), {
  ssr: false,
  loading: () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  },
});

const GridWrapper = () => {
  return (
    <>
      <Grid />
    </>
  );
};

export { GridWrapper };

