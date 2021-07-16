module.exports = {
  name: 'nowTime',
  nowTime: (i) => {
    let dates = new Date();
    let year = dates.getFullYear();
    let month = String([dates.getMonth() + 1]).padStart(2, '0');
    let day = String(dates.getDate()).padStart(2, '0');
    let hour = String(dates.getHours()).padStart(2, '0');
    let minute = String(dates.getMinutes()).padStart(2, '0');
    let second = String(dates.getSeconds()).padStart(2, '0');
    if(i == 1 ) return day + `/` + month + `/` + year + ` ` + hour + `:` + minute + `:` + second
    return day + "-" + month + "-" + year +"_" + hour + "-" + minute+ "-" + second
  },
};