//Use Javascript Date methods to display the current date and day of the week.
const a=new Date();
console.log(a.toLocaleDateString());
console.log(a.toLocaleString('en-US',{weekday:'long'}));
