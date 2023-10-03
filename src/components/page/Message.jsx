export const Message = ({ error, bgColor }) => {
  let styles = {
    padding: "1rem",
    margin: "1rem",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: bgColor,
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    width: "50%",
  };

  return (
    <>
      <div style={styles}>
        <h1>{error}</h1>
      </div>
    </>
  );
};
