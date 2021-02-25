const iceCreamFlavors = [
    '1. Banana Cream Pie Ice Cream',
    '2. Banana Split',
    '3. Birthday Cake Ice Cream',
    '4. Blackberry Ice Cream',
    '5. Bubble Gum Ice Cream',
    '6. Bunny Tracks',
    '7. Butter Pecan Ice Cream',
    '8. Caramel Apple Ice Cream',
    '9. Carrot Cake Ice Cream',
    '10. Chocolate Banana Ice Cream'
    ];
    
    let flavor1 = iceCreamFlavors.pop();
    let flavor2 = iceCreamFlavors.pop();
    let flavor3 = iceCreamFlavors.pop();
    let flavor4 = iceCreamFlavors.pop();
    
    
    console.log(iceCreamFlavors, typeof iceCreamFlavors);
    console.log('removed flavor :',flavor1, typeof flavor1);
    console.log('removed flavor :',flavor2);
    console.log('removed flavor :',flavor3);
    console.log('removed flavor :',flavor4);