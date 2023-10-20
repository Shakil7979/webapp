function showFormx(display_part1, display_part2, display_part3) {
  document.getElementById("form-part1").style.display = display_part1; //"block";
  document.getElementById("form-part2").style.display = display_part2; //"none";
  document.getElementById("form-part3").style.display = display_part3; //"none";
}

function add_new_formset_element(form_list, empty_form, x_form) {
  //console.log(args) //print()
  if (event) {
    event.preventDefault(); //prevents document from being submitted
  }
  const stepCopyTarget = document.getElementById(form_list);
  const emptyStepEl = document.getElementById(empty_form).cloneNode(true);
  emptyStepEl.setAttribute("class", x_form);
  stepCopyTarget.append(emptyStepEl);
  // add new instruction steps to empty form element to html form
}

function delete_formset_element(form_list, empty_form, x_form) {
  //console.log(args) //print()
  if (event) {
    event.preventDefault(); //prevents document from being submitted
  }
  var formElement = document.getElementById("form-" + $(this).data("id"));
  const emptyStepEl = document.getElementById(empty_form).cloneNode(true);
  emptyStepEl.setAttribute("class", x_form);
  stepCopyTarget.append(emptyStepEl);
  // add new instruction steps to empty form element to html form
}
