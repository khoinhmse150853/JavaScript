function cyears(form) {
  console.log(form);
  form.dogage.value = form.myage.value * 7;
  const constant = "constant";
  document.getElementById("myConst").innerText = constant;
}
