import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";



const { b: base, l: limite, s: showTable } = yarg;

let tabla = "";
const headerMessage = `
========================
   Tabla del ${base}
=========================
\n`;



tabla = headerMessage + tabla;

if (showTable) {
    console.log(tabla);
};

