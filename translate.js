const fs = require('fs');
const enToFr = {};
// fs.readFileSync('./en-fr.csv', 'utf-8')
//   .split(/\r?\n/)
//   .forEach((line) => {
//     const [en, fr] = line.replace(/,,/g, '').split(';');
//     enToFr[en] = fr;
//   });
// const messageObj = JSON.parse(fs.readFileSync('./src/utils/messages/en.json', 'utf-8'));
// Object.values(messageObj).forEach((item) => {
//   item.defaultMessage = enToFr[item.defaultMessage] ?? '';
// });
// fs.writeFileSync('./src/utils/messages/fr.json', JSON.stringify(messageObj));
const enMessageObj = JSON.parse(fs.readFileSync('./src/utils/messages/en.json', 'utf-8'));
const frMessageObj = JSON.parse(fs.readFileSync('./src/utils/messages/fr.json', 'utf-8'));
Object.entries(enMessageObj).forEach(([key, item]) => {
  if (!frMessageObj[key]) {
    enToFr[key] = { defaultMessage: item.defaultMessage };
  }
});
// console.log(JSON.stringify(enToFr));