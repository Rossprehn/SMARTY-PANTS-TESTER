var dates = ['Jan 7, 2009', 'Nov 9, 2009', 'Nov 10, 2009', 'Feb 10, 2009', 'Oct 22, 2009']

newJan = dates.map(date => date.replace('Jan ', '01-'))

newFeb = newJan.map(date => date.replace('Feb ', '02-'))

newMar = newFeb.map(date => date.replace('Mar ', '03-'))

newApr = newMar.map(date => date.replace('Apr ', '04-'))

newMay = newApr.map(date => date.replace('May ', '05-'))

newJun = newMay.map(date => date.replace('Jun ', '05-'))

newJul = newJun.map(date => date.replace('Jul ', '07-'))

newAug = newJul.map(date => date.replace('Aug ', '08-'))

newSep = newAug.map(date => date.replace('Sep ', '09-'))

newOct = newSep.map(date => date.replace('Oct ', '10-'))

newNov = newOct.map(date => date.replace('Nov ', '11-'))

newDec = newNov.map(date => date.replace('Dec ', '12-'))

removeComma = newDec.map(date => date.replace(', ', '-'))

var newDates = removeComma.sort().reverse()

console.log(removeComma)

console.log(newDates)
