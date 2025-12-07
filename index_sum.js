function get_sum(btn) {
    const disp = document.calculator.display;
    const current = disp.value;
    const lastChar = current.slice(-1); 

    if (btn.value === "=") {
      try {
       disp.value = eval(disp.value);
      } catch {
      disp.value = "Error";
    }
  } else if (btn.value === "AC") {
    disp.value = "";
  } else {
     const operators = ["+", "-", "*", "/"];

    if (btn.value === "×") {
      if (operators.includes(lastChar)) return;
      disp.value += "*";
    } else if (btn.value === "÷") {
      if (operators.includes(lastChar)) return;
      disp.value += "/";
    } else if (btn.value === ".") {
      if (lastChar === ".") return;
      disp.value += ".";
    } else if (btn.value === "0" || btn.value === "00") {
      if (current === "") return;
      disp.value += btn.value;
    } else {
      if (operators.includes(btn.value) && operators.includes(lastChar)) return;
      disp.value += btn.value;
    }
  }
}
