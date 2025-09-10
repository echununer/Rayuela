import fs from "fs";

let cuento = [71, 1, 2, 116, 3, 84, 4, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11, 136]
let parte;
let completo = "";

for (let i=0; i<cuento.length; i++){
   parte = fs.readFileSync("Cuento/parte"+cuento [i]+".txt", "utf-8");
   completo = completo + parte + "\n";
}

fs.writeFileSync("La autopista del sur.txt", completo)
