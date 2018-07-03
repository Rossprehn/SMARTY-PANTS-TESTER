You have a list/array of strings that represent dates and looks like this:
[‘Oct 7, 2009’, ‘Nov 10, 2009’, ‘Jan 10, 2009’, ‘Oct 22, 2009’, …]

The month is always the first three characters of full month name
(‘January’ => ‘Jan’, ‘February’ => ‘Feb’, …).

The day is one or two digits (1, 2, … 31), with no preceding zero. There is always a comma after the day. The year is always four digits. Write a routine (in any language) that will order this list of strings in date descending order. Do not use any built in date-­‐parsing library… write your own specific to this date format. Feel free to use, or not use, regex.
