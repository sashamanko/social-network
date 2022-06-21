const date = (seconds: number): any => {

  return {
    h: new Date(+seconds * 1000).getHours(),
    m: new Date(+seconds * 1000).getMinutes(),
  };
};

export default date;