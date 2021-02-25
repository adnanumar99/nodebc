let mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
  ];
  
  mutants.forEach(mutant => {
    console.log(mutant);
  });
  console.log(`\n` )
  mutants.map(mutant => {
    if (mutant === 'Professor X' || mutant === 'Logan' || mutant === 'Phoenix' || mutant === 'Gambit') {
    console.log(`<3 ${mutant}`)
    }else {console.log(`   ${mutant}`)}
  });