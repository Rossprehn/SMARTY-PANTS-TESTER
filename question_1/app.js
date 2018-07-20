var dates = ['Jan 1, 2009', 'Nov 2, 2009', 'Nov 10, 2009', 'Feb 10, 2009', 'Oct 22, 2009']

newJan = dates.map(date => date.replace('Jan ', '01-'))

newFeb = newJan.map(date => date.replace('Feb ', '02-'))

newMar = newFeb.map(date => date.replace('Mar ', '03-'))

newApr = newMar.map(date => date.replace('Apr ', '04-'))

newMay = newApr.map(date => date.replace('May ', '05-'))

newJun = newMay.map(date => date.replace('Jun ', '06-'))

newJul = newJun.map(date => date.replace('Jul ', '07-'))

newAug = newJul.map(date => date.replace('Aug ', '08-'))

newSep = newAug.map(date => date.replace('Sep ', '09-'))

newOct = newSep.map(date => date.replace('Oct ', '10-'))

newNov = newOct.map(date => date.replace('Nov ', '11-'))

newDec = newNov.map(date => date.replace('Dec ', '12-'))

removeComma = newDec.map(date => date.replace(', ', '-'))

formatDayOne = removeComma.map(date => date.replace('-1-', '-01-'))

formatDayTwo = formatDayOne.map(date => date.replace('-2-', '-02-'))

formatDayThree = formatDayTwo.map(date => date.replace('-3-', '-03-'))

formatDayFour = formatDayThree.map(date => date.replace('-4-', '-04-'))

formatDayFive = formatDayFour.map(date => date.replace('-5-', '-05-'))

formatDaySix = formatDayFive.map(date => date.replace('-6-', '-06-'))

formatDaySeven = formatDaySix.map(date => date.replace('-7-', '-07-'))

formatDayEight = formatDaySeven.map(date => date.replace('-8-', '-08-'))

formatDayNine = formatDayEight.map(date => date.replace('-9-', '-09-'))

var sortedDates = formatDayNine.sort().reverse()

console.log(formatDayNine)

removeDash = sortedDates.map(date => date.replace('-', ' '))

replaceDash = removeDash.map(date => date.replace('-', ', '))

oldJan = replaceDash.map(date => date.replace('01 ', 'Jan '))

oldFeb = oldJan.map(date => date.replace('02 ', 'Feb '))

oldMar = oldFeb.map(date => date.replace('03 ', 'Mar '))

oldApr = oldMar.map(date => date.replace('04 ', 'Apr '))

oldMay = oldApr.map(date => date.replace('05 ', 'May '))

oldJun = oldMay.map(date => date.replace('06 ', 'Jun '))

oldJul = oldJun.map(date => date.replace('07 ', 'Jul '))

oldAug = oldJul.map(date => date.replace('08 ', 'Aug '))

oldSep = oldAug.map(date => date.replace('09 ', 'Sep '))

oldOct = oldSep.map(date => date.replace('10 ', 'Oct '))

oldNov = oldOct.map(date => date.replace('11 ', 'Nov '))

oldDec = oldNov.map(date => date.replace('12 ', 'Dec '))

fixDayOne = oldDec.map(day => day.replace('01,', '1,'))

fixDayTwo = fixDayOne.map(day => day.replace('02,', '2,'))

fixDayThree = fixDayTwo.map(day => day.replace('03,', '3,'))

fixDayFour = fixDayThree.map(day => day.replace('04,', '4,'))

fixDayFive = fixDayFour.map(day => day.replace('05,', '5,'))

fixDaySix = fixDayFive.map(day => day.replace('06,', '6,'))

fixDaySeven = fixDaySix.map(day => day.replace('07,', '7,'))

fixDayEight = fixDaySeven.map(day => day.replace('08,', '8,'))

OrderedDates = fixDayEight.map(day => day.replace('09,', '9,'))

console.log(OrderedDates)
