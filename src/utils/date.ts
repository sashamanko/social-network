const dateFormater = (milliseconds: number, format: any) => {
  const formatArr = format.split(':');

  let value = '';
  formatArr.forEach((elem: any, index: number) => {
    
    if (elem.toUpperCase() === 'HH' ) {
      console.log((milliseconds / (1000 * 60 * 60)).toFixed(0));
      
      value += (milliseconds / (1000 * 60 * 60)).toFixed(0)  + ':';
    } else if ((elem.toUpperCase() === 'MM' )) {
      value += (milliseconds / (1000 * 60)).toFixed(0);
    }
  });
  
  
  return value;
};

const myDate = (milliseconds?: number) => {



  const now = (format?: any) => {
    return format === undefined 
      ? new Date().getTime()
      : dateFormater(new Date().getTime(), format);
    
  };

  return {
    now,
  };
};

export default myDate;