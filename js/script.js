   var link = document.querySelector(".button");
   var form = document.querySelector(".search-form");
   var from = form.querySelector("[name=date-from]");
   var to = form.querySelector("[name=date-to]");
   var result = form.querySelector(".result-form");
   link.addEventListener("click", function (evt) {
    evt.preventDefault();
    //alert("hi");
    form.classList.toggle("form-animation");
    from.focus();
  });
  form.addEventListener("submit", function (evt) {
    if (!from.value || !to.value) {
      evt.preventDefault();
      console.log("Нужно указать дату заезда и дату выезда");
      result.classList.toggle("show-result");
    }
    });