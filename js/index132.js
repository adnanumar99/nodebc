const mutants = ['Professor X', 'Cyclops', 'Beast', 'Jean Grey', 'Logan', 'Angel', 'Phoenix'];

if (mutants.indexOf('Professor X') > -1 && mutants.indexOf('Logan') > -1) {
  console.log('We Love X-Men');
}

if (mutants.indexOf('Gambit') > -1) {
  console.log('Gambit is X-Men team member');
} else {
  console.log('X-Men sucks');
}