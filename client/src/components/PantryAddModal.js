import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { FormControl, FormGroup } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import Fade from "@material-ui/core/Fade";
import { green, red } from "@material-ui/core/colors";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

//import axios from "axios";
import { UNITS } from "./constant.js";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function PantryAddModal({ open, onChange }) {
  const [inputList, setInputList] = useState([
    { item: "", Quantity: "", Unit: "" },
    { item: "", Quantity: "", Unit: "" },
    { item: "", Quantity: "", Unit: "" },
    { item: "", Quantity: "", Unit: "" },
  ]);

  const classes = useStyles();

  const handleChange = () => {
    //props.onChange(false);
    onChange(false);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { item: "", Quantity: "", Unit: "" }]);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[i][name] = value;
    setInputList(list);
  };

  const handleClick = () => {
    console.log(inputList);

    /* axios.post("http://localhost:5000/dash/toTest", {
      body: inputList,
    }); */
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleChange}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Ingredients</h2>
            <FormGroup className={classes.formControl}>
              {inputList.map((iField, index) => (
                <div>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ingredient Name"
                      name="item"
                      value={iField.item}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      placeholder="Quantity"
                      type="number"
                      name="Quantity"
                      value={iField.Quantity}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </FormControl>
                  <FormControl>
                    <Select
                      name="Unit"
                      value={iField.Unit}
                      onChange={(e) => handleInputChange(e, index)}
                      labelId="fotSelect"
                      style={{ width: "70px" }}
                    >
                      {UNITS.map((unit) => (
                        <MenuItem value={unit}>{unit}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {inputList.length !== 1 && (
                    <RemoveCircleIcon
                      onClick={() => handleRemoveClick(index)}
                      style={{ color: red[500] }}
                    />
                  )}
                  {inputList.length - 1 === index && (
                    <AddCircleIcon
                      onClick={handleAddClick}
                      style={{ color: green[500] }}
                    />
                  )}
                </div>
              ))}
              <button onClick={handleClick}>Add to Pantry</button>
            </FormGroup>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default PantryAddModal;
