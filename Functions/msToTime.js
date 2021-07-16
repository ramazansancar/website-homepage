module.exports = {
  name: 'msToTime',
  msToTime: (ms,type=1) => {
    if(type != 1){
      const duration = ms;
      const secNum = parseInt(duration, 10); // don't forget the second param
      let days = Math.floor(secNum / 86400);
      let hours = Math.floor(secNum / 3600) % 24;
      let minutes = Math.floor((secNum - (hours * 3600)) / 60) % 60;
      let seconds = secNum % 60;

      days = days < 10 ? `0${days}` : days;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }else{
      const days = Math.floor(ms / 86400000), // 24*60*60*1000
      daysms = ms % 86400000, // 24*60*60*1000
      hours = Math.floor(daysms / 3600000), // 60*60*1000
      hoursms = ms % 3600000, // 60*60*1000
      minutes = Math.floor(hoursms / 60000), // 60*1000
      minutesms = ms % 60000, // 60*1000
      sec = Math.floor(minutesms / 1000);

      let str = "";
      if (days) str = str + days + " day ";
      if (hours) str = str + hours + " hour ";
      if (minutes) str = str + minutes + " min ";
      if (sec) str = str + sec + " sec";

      return str || "0s";
  }
  },
};