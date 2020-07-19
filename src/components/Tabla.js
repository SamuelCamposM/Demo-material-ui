import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Table , TableBody , TableCell , TableContainer , TableHead , TableRow, Paper,  } from "@material-ui/core"


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  width: {
    maxWidth: 1000,
    margin: "0 auto",
  },
});

function crearDatos(nombre, precio, descripcion, marca, puntuacion) {
  return { nombre, precio, descripcion, marca, puntuacion };
}

const rows = [
  crearDatos(
    "Samsung galaxy s10e",
    500,
    "Mejor gama alta KI de samsung",
    "Samsung",
    9
  ),
  crearDatos("Redmi note 8 PRO", 200, "La mejor potencia a el precio mas accesible", "Xiaomi ", 9),
  crearDatos("Huawei mate 20", 400, "Innovacion de las camaras leica", "huawei", 9),
  crearDatos("Huawei p20", 200, "Elegancia en su maxima expresion", "Huawei", 9),
  crearDatos("Huawei p30", 800, "De los mejores zoom del mercado", "Huawei", 9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.width}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.marca}</TableCell>
              <TableCell align="right">{row.puntuacion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
