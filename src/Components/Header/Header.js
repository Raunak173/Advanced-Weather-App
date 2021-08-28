import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Header.css";

export const Header = ({city,setCity,clickHandler}) => {

  return (
    <div className="box">
      <TextField
        className="field"
        id="outlined-basic"
        label="Search your city"
        variant="outlined"
        onChange = {(e)=>setCity(e.target.value)}
        value={city}
      />
      <Button className='btn' variant="contained" color="secondary" onClick={()=>clickHandler()}>
        SEARCH
      </Button>
    </div>
  );
};
