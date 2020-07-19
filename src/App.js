import React  from 'react';
import Sidevar from './components/Sidevar';
import { makeStyles } from '@material-ui/core';
import Tarjeta from './components/Tarjeta';
import Tabla from './components/Tabla';
import Modal from "./components/Modal"



const useStyles = makeStyles((theme) => ({

container :  {
  paddingLeft : '15px',
  marginTop: '-15px'
},
center : {
  height:"100px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"

}
}));

function App() {

  const classes = useStyles()
  return (
    <div className="App">
<Sidevar />  



<div className={classes.container} />


        <Tarjeta />
        <div className={classes.center}>
        <Modal   />
        </div>
        <Tabla />
   

    </div>
  );
}

export default App;



