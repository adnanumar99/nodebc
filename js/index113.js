function getShapePerimeter(base, height) {
    let perimeter;
  
    if (typeof base !== 'number' || typeof height !== 'number') {
      console.log('Invalid entry, try again \n');
      return;
    } else if (base === height) {
      perimeter = 4 * base;
      console.log(`Perimeter of Square is : ${4 * base} `);
    } else {
      perimeter = 2 * (base + height);
      console.log(`Perimeter of Rectangle is : ${2 * (base + height)} `);
    }
    if (perimeter > 100) {
      console.log('The perimeter is too big \n' );
    } else {
      console.log('The perimeter is fine \n');  
    }
  }
  
getShapePerimeter(7,3)
getShapePerimeter(2,2)
getShapePerimeter('a',3)
getShapePerimeter(100,100)