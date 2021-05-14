const
  reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  match = reDate.exec('2018-04-30'),
  year = match?.groups?.year,  // 2018
  month = match?.groups?.month, // 04
  day = match?.groups?.day;   // 30

console.log(year, month, day);

export { }