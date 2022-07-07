const useKeyFrames = (innitialObject: any): any => {
  let max: number = 0;

  for (const key in innitialObject) {
    if (typeof innitialObject[key] === 'object') {
      if (innitialObject[key].length > max) {
        max = innitialObject[key].length;
      }
    }
  }

  const newArray: any = [];
  
  for (let i = 0; i < max; i++) {
    const newObj: any = {};
    for (const key in innitialObject) {
      if (typeof innitialObject[key] === 'object') {
        newObj[key] = innitialObject[key][i];
      }
    }
    
    newArray.push(newObj);
  }
  
  return newArray;

};

export default useKeyFrames;