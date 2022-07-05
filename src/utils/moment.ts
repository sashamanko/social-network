import moment from "moment";


type variant = 'messegerMessage' | 'messegerMessageDay' | 'messegerAsideItem';


const date = (seconds: number, variant: variant): any => {
  
  let time;

  if (variant === 'messegerMessage') {
    time = moment.unix(seconds).format('HH:mm');
  }

  if (variant === 'messegerMessageDay') {
    time = moment.unix(seconds).format('L');
  }

  if (variant === 'messegerAsideItem') {
    const x = moment.unix(seconds).fromNow();
    const j = x.split(' ');

    if(x === 'a few seconds ago' || x === 'a minute ago' || x === 'an hour ago') {
      time = moment.unix(seconds).format('HH:mm');
    } else if (x === 'a month ago' || typeof +j[0] === 'number' && j[1] !== 'minutes' ) {
      time = moment.unix(seconds).format('MMM, D');
    } else {
      time = moment.unix(seconds).format('HH:mm');
    }
  }
  
  
  return time;
};

export default date;