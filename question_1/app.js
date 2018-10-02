var dates = ["Jan 1, 2009", "Nov 2, 2009","Nov 10, 2009" , "Feb 10, 2009", "Oct 22, 2009"]

newMonths = dates.map(month =>
  month.replace("Jan ", "01-")
  .replace("Feb ", "02-")
  .replace("Mar ", "03-")
  .replace("Apr ", "04-")
  .replace("May ", "05-")
  .replace("Jun ", "06-")
  .replace("Jul ", "07-")
  .replace("Aug ", "08-")
  .replace("Sep ", "09-")
  .replace("Oct ", "10-")
  .replace("Nov ", "11-")
  .replace("Dec ", "12-")
)

removeComma = newMonths.map(date =>
  date.replace(", ", "-")
)

formatDays = removeComma.map(date =>
  date.replace("-1-", "-01-")
  .replace("-2-", "-02-")
  .replace("-3-", "-03-")
  .replace("-4-", "-04-")
  .replace("-5-", "-05-")
  .replace("-6-", "-06-")
  .replace("-7-", "-07-")
  .replace("-8-", "-08-")
  .replace("-9-", "-09-")
)

var sortedDates = formatDays.sort().reverse()

removeFirstDash = sortedDates.map(date =>
 date.replace("-", " ")
)

removeSecondDash = removeFirstDash.map(date =>
  date.replace("-", ", ")
  )

oldMonths = removeSecondDash.map(month =>
  month.replace("01 ", "Jan ")
  .replace("02 ", "Feb ")
  .replace("03 ", "Mar ")
  .replace("04 ", "Apr ")
  .replace("05 ", "May ")
  .replace("06 ", "Jun ")
  .replace("07 ", "Jul ")
  .replace("08 ", "Aug ")
  .replace("09 ", "Sep ")
  .replace("10 ", "Oct ")
  .replace("11 ", "Nov ")
  .replace("12 ", "Dec ")
)

OrderedDates = oldMonths.map(day => 
  day.replace("01,", "1,")
  .replace("02,", "2,")
  .replace("03,", "3,")
  .replace("04,", "4,")
  .replace("05,", "5,")
  .replace("06,", "6,")
  .replace("07,", "7,")
  .replace("08,", "8,")
  .replace("09,", "9,")
)


console.log(OrderedDates)
