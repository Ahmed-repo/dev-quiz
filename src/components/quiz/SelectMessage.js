const SelectMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "95%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 25,
        backgroundColor: "#ffd166",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default SelectMessage;
