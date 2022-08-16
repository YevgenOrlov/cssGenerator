document.getElementById("r1").oninput = cssGenerator;

function cssGenerator() {
  let dil = document.getElementById("test");

  let out = document.getElementById("out");
  //   console.log(this.value);
  dil.style.borderRadius = this.value + "px";
  out.innerHTML = "boder-radius: " + this.value + "px";
}
