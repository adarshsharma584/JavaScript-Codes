let string = " ";

let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let btnArray = Array.from(buttons);

btnArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    string += e.target.innerText;

    input.value = string;

    if (e.target.innerText === "=") {
      try {
        string = eval(string.slice(0, -1));
        if (string === "") {
          input.value = "Error";
          string = " ";
        }

        input.value = string;
      } catch {
        (error) => {
          input.value = "Error";
          string = " ";
        };
      }
    } else if (e.target.innerText === "C") {
      string = " ";
      input.value = string;
    }
  });
});
