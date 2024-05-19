const { testOne, modifiedNames } = require('./arrayManipulation');




function createUserProfiles() {
   
    let endresult = [];
    for (let i = 0; i < testOne.length; i++) {
      endresult.push({
        originalName: testOne[i],
        modifiedName: modifiedNames[i],
        id: i + 1
      });
    }
    return endresult;
  }
  
  const userProfiles = createUserProfiles( );
  console.log(userProfiles);

  