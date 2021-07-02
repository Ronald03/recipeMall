import React, { useContext } from "react";
import Pantry from "./Pantry";
import PantryAddModal from "./PantryAddModal.js";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const style = {
  mainContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  subContainer: {
    width: "50%",
    height: 400,
  },
  pantry: {},
  addToPantryContainer: {
    margin: 15,
    float: "right",
  },
  addIcon: {
    width: 50,
    height: 50,
    cursor: "pointer",
  },
};
function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(value);
  };

  return (
    <div className="dashboard" style={style.mainContainer}>
      <div
        className="dashboard__pantry"
        style={(style.subContainer, style.pantry)}
      >
        <Pantry />
        <div className="pantry--add" style={style.addToPantryContainer}>
          <AddCircleIcon
            color="secondary"
            style={style.addIcon}
            onClick={handleOpen}
          />
        </div>
      </div>
      <div style={style.subContainer}></div>
      <div style={style.subContainer}></div>
      <div style={style.subContainer}></div>

      <PantryAddModal open={open} onChange={handleOpen} />
    </div>
  );
}

export default Dashboard;
