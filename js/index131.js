
const femaleStudents = ['Rachel', 'Monica', 'Phobe', 'Robin', 'Lily'];
const maleStudents = ['Joey', 'Ross', 'Ted', 'Marshal', 'Barney'];

const students = maleStudents.concat(femaleStudents);
a=students.sort();

let i = 0;
while (i < maleStudents.length) {
  console.log(`  maleStudent ${i+1} : `,maleStudents[i]);
  i++;
}
console.log('\n')
let j=0;
while (j < femaleStudents.length){
  console.log(`femaleStudent ${j+1} : `,femaleStudents[j]);
  j++;
}

for (let i = 0; i < students.length; i++) {
  console.log('\n', `Student ${i+1}:`, a[i]);
}