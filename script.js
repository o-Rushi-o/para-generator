const input = document.getElementById("numberofwords");
const container = document.querySelector(".container");

const genwords = (n) => {
  let text = "";
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < n; ++i) {
    const random = (Math.random() * (letter.length - 1)).toFixed(0);
    text += letter[random];
  }
  return text;
};

let numofwords;
const getPara = () => {
  numofwords = Number(input.value);

  if (input.value === "") {
    return null;
  }

  const para = document.createElement("p");
  let data = "";
  for (let i = 0; i < numofwords; ++i) {
    const randomNumber = (Math.random() * 15).toFixed(0);
    data += genwords(randomNumber);
    data += " ";
  }
  para.innerText = data;
  para.setAttribute("class", "paras");
  container.append(para);
};
