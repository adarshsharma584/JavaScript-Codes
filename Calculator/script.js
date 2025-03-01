let string = " ";
console.log("String:", string);
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
console.log("buttons:", buttons);

let btnArray = Array.from(buttons);
console.log("array:", btnArray);

btnArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("button clicked:", e.target.innerText);

    string += e.target.innerText;
    console.log("String:", string);
    input.value = string;
    console.log("input value:", input.value);

    if (e.target.innerText === "=") {
      try {
        string = eval(string.slice(0, -1));
        if(string === ""){
          input.value = "Error";
          string = " ";
        }
        console.log("evaled string:", string);
        input.value = string;
        console.log("input value after eval:", input.value);
      } catch {
        (error) => {
          
          console.log("error:", error);
          input.value = "Error";
          string = " ";
        };
      }
    } else if (e.target.innerText === "C") {
      console.log(e.target);
      string = " ";
      input.value = string;
      console.log("else part string:", string);
    }
  });
});
