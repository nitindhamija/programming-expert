const transform = (str) => {
  if (str != null && str != undefined && str.length != 0 && str != "_") {
    str = str.trim().split("");

    let res = "";

    str.forEach((ele, index) => {
      if (ele === "_") {
        res = res + str[index + 1].toUpperCase();

        str.splice(index, 1);
      } else if (ele === ele.toUpperCase()) {
        res = res + "_" + ele.toLowerCase();
      } else {
        res = res + ele;
      }
    });

    console.log(res);
  } else {
    console.log("unsupported");
  }
};

transform("this_is_a_variable");
transform("thisIsAVariable");
transform("_");
