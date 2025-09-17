import fs from "fs";

let orden= fs.readFileSync("orden.txt", "utf-8")
let cuento = orden.split ("\r\n")
let parte;
let completo = "";

console.log(cuento);

console.log(cuento[1])
for (let i=0; i<cuento.length; i++){
   parte = fs.readFileSync("Cuento/parte"+cuento[i]+".txt", "utf-8");
   completo = completo + parte + "\n";
}

console.log(completo)
fs.writeFileSync("La autopista del sur.txt", completo)

