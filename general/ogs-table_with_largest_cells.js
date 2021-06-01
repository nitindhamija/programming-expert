function solution() {
  // write your code in Javascript
  const tables = document.querySelectorAll("table");
  if (tables.length !== 0) {
    const lengths = Array.from(tables).map(
      (table) => table.querySelectorAll("td").length
    );

    const max = Math.max(...lengths);
    //console.log(max);
    return max;
  } else return 0;
  // you can access DOM Tree by using DOM Object Model:
  //    document.getElementsByTagName
  // or by using jQuery:
  //    $('some_tag')
}
