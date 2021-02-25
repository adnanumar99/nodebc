var mutants = [
    "Professor X",
    "Cyclops",
    "Iceman",
    "Angel",
    "Magneto",
    "Beast",
    "Phoenix",
    "Logan",
    "Gambit"
];
for(let i = 0; i < mutants.length; i++) {
    if(mutants[i] === "Magneto")
    break;
    console.log(mutants[i]);
}
//mutants.splice(mutants.indexOf("Magneto"),1);
mutants = mutants.filter(mutant => mutant !== "Magneto");
for(let i = 0; i < mutants.length; i++) {
    console.log(i+1,mutants[i].toUpperCase())
}