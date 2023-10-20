let ingredientCount = 1;
const totalIngredientFormsInput = document.querySelector(
    "input[name='ingredient_formset-TOTAL_FORMS']"
);
totalIngredientFormsInput.value = ingredientCount

function customMatcher(params, data) {
    // If there are no search terms, return all options
    if ($.trim(params.term) === '') {
        return data;
    }

    // Split search term by whitespace
    var terms = params.term.split(/\s+/);

    // Check if all search terms are contained in the option name
    for (var i = 0; i < terms.length; i++) {
        var term = terms[i].toLowerCase();
        if (data.text.toLowerCase().indexOf(term) < 0) {
            return null;
        }
    }

    // If all search terms are found, return the option
    return data;
}

function initializeIngredientRow(ingredientRow) {
    // Initialize Select2 for the ingredient row
    $(ingredientRow).find(".searchable-dropdown").select2({
        placeholder: {
            id: "",
            text: "Select ingredient"
        },
        allowClear: true,
        matcher: customMatcher,
        minimumInputLength: 2,
        language: {
            noResults: function (params) {
                return "No matching ingredients...";
            },
            inputTooShort: function (args) {
                return "";
            },
            searching: function () {
                return "Search ingredients...";
            }
        },
    });

    // Bind remove button event
    ingredientRow.querySelector(".create-meal-delete-btn").addEventListener("click", removeIngredient);
}

function removeIngredient(event) {
    event.preventDefault();
    var allIngredientRows = document.querySelectorAll(".ingredient-row");
    if (allIngredientRows.length > 1) {
        this.closest(".ingredient-row").remove();
    } else if (allIngredientRows.length === 1) {
        document.querySelector(".ingredient-row").style.display = "none";
    }
    ingredientCount--;
    totalIngredientFormsInput.value = ingredientCount;

}

function addIngredient() {
    var newElem = document.querySelector(".ingredient-row-template").cloneNode(true);
    newElem.classList.remove("ingredient-row-template");
    newElem.classList.add("ingredient-row");
    newElem.style.display = "flex";


    // Remove Select2 container if present
    var select2Container = newElem.querySelector(".select2");
    if (select2Container) {
        select2Container.remove();
    }

    newElem.querySelector(".ingredient-input").setAttribute("name", "ingredient_formset-" + ingredientCount +
        "-quantity");
    newElem.querySelector(".ingredient-select").setAttribute("name", "ingredient_formset-" + ingredientCount +
        "-unit");
    newElem.querySelector(".custom-ingredient-select").setAttribute("name", "ingredient_formset-" +
        ingredientCount + "-name");
    //console.log("ingredient_formset-" + ingredientCount + "-quantity")
    // Insert the new ingredient row
    var ingredientContainer = document.querySelector(".control-group2");
    ingredientContainer.appendChild(newElem);

    // Initialize the new ingredient row
    initializeIngredientRow(newElem);


    // Add event listener to the delete button of the new element
    newElem.querySelector(".create-meal-delete-btn").addEventListener("click", removeIngredient);

    ingredientCount++;
    totalIngredientFormsInput.value = ingredientCount
    console.log(ingredientCount, totalIngredientFormsInput.value)

}


// Update the initialization function
$(document).ready(function () {
    var firstIngredientRow = document.querySelector(".ingredient-row");
    initializeIngredientRow(firstIngredientRow);
    // Bind addIngredient function to the add-more2 button
    document.querySelector("#after-add-more2").addEventListener("click", addIngredient);

    var formId = 'myForm';
    //var formErrors = '{{ form_errors|escapejs }}';
    handleFormValidation(formId, formErrors);

});


document.getElementById('back-btn').addEventListener('click', function () {
    // Determine the current visible form
    let currentForm = '';
    if (document.getElementById('form1').style.display === 'block') {
        currentForm = 'form1';
    } else if (document.getElementById('form2').style.display === 'block') {
        currentForm = 'form2';
    } else if (document.getElementById('form3').style.display === 'block') {
        currentForm = 'form3';
    }

    // Determine the previous form and hide the current form
    let prevForm = '';
    if (currentForm === 'form2') {
        hideForm2showForm1();
        prevForm = 'form1';
    } else if (currentForm === 'form3') {
        hideForm3showForm2();
        prevForm = 'form2';
    }

});

function hideForm1showForm2() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "block";
    document.getElementById('back-btn').style.display = "block";
}

function hideForm2showForm1() {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form1").style.display = "block";
    document.getElementById('back-btn').style.display = "none";

}

function hideForm2showForm3() {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "block";
    document.getElementById('back-btn').style.display = "block";
}

function hideForm3showForm2() {
    document.getElementById("form3").style.display = "none";
    document.getElementById("form2").style.display = "block";
    document.getElementById('back-btn').style.display = "block";
}


document.getElementById('prep_duration').addEventListener('input', function (event) { });

document.getElementById('prep_duration').addEventListener('blur', function (event) {
    roundToNearestFiveMinutes(event.target);
});

function roundToNearestFiveMinutes(input) {
    let value = parseInt(input.value);
    let roundedValue = Math.round(value / 5) * 5;
    input.value = roundedValue;
}

const checkboxes = document.querySelectorAll(".checkbox-item input[type='checkbox']");
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        const container = this.parentElement;
        if (this.checked) {
            container.classList.add("checkbox-item-selected");
        } else {
            container.classList.remove("checkbox-item-selected");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#after-add-more").addEventListener("click", addStep);
    document.querySelector(".custom-trash").addEventListener("click", removeStep);
    document.getElementById("description").addEventListener("keyup", updateCharacterCounter);
    document.querySelector("#after-add-more2").addEventListener("click", addIngredient);
    document.querySelector(".create-meal-delete-btn").addEventListener("click", removeIngredient);
});

let stepCount = 1;
const totalStepFormsInput = document.querySelector(
    "input[name='step_formset-TOTAL_FORMS']"
);
totalStepFormsInput.value = stepCount

function addStep() {
    if (stepCount === 0) {
        document.querySelector(".form-floating").style.display = "block";
    } else {
        var newElem = createNewStep();
        document.querySelector(".after-add-more").insertAdjacentElement('beforebegin', newElem);

        // Bind remove button event
        newElem.querySelector(".custom-trash").addEventListener("click", removeStep);

        // Bind character counter event
        newElem.querySelector("textarea").addEventListener("keyup", updateCharacterCounter);
        newElem.querySelector("#the-count span:first-child").textContent = "0";

    }
    stepCount++;
    totalStepFormsInput.value = stepCount;
    console.log(stepCount, totalStepFormsInput)

}

function removeStep() {
    if (stepCount > 1) {
        this.closest(".form-floating").remove();
    } else if (stepCount === 1) {
        document.querySelector(".form-floating").style.display = "none";
    }
    stepCount--;
    totalStepFormsInput.value = stepCount;
}

function createNewStep() {
    var newElem = document.createElement("div");
    newElem.innerHTML = document.querySelector(".first-step").outerHTML;

    // Change the textarea name attribute to match the Django-generated name
    newElem.querySelector("textarea").setAttribute("name", "step_formset-" + stepCount + "-instructions");

    newElem.classList.remove("first-step");
    return newElem;
}

function updateCharacterCounter() {
    var maxLength = 500;
    var currentLength = this.value.length;

    if (currentLength >= maxLength) {
        this.parentElement.querySelector("#the-count span:first-child").textContent = maxLength;
    } else {
        this.parentElement.querySelector("#the-count span:first-child").textContent = currentLength;
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            $("#recipe-thumbnail-preview").attr("src", e.target.result);
            $("#recipe-thumbnail-preview").css("border-radius", "10px");
            $(".image-preview").show();
            $(".image-preview img").css('visibility', 'visible');
            $("#start").hide();
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#recipe_thumbnail").change(function () {
    readURL(this);
});

function addIngredientFormset(ingredientData) {
    // Clone the ingredient row template
    var newElem = document.querySelector(".ingredient-row-template").cloneNode(true);
    newElem.classList.remove("ingredient-row-template");
    newElem.classList.add("ingredient-row");
    newElem.style.display = "flex";

    // Remove Select2 container if present
    var select2Container = newElem.querySelector(".select2");
    if (select2Container) {
        select2Container.remove();
    }

    // Set the name attributes for the fields
    newElem.querySelector(".ingredient-input").setAttribute("name", "ingredient_formset-" + ingredientCount +
        "-quantity");
    newElem.querySelector(".ingredient-select").setAttribute("name", "ingredient_formset-" + ingredientCount +
        "-unit");
    newElem.querySelector(".custom-ingredient-select").setAttribute("name", "ingredient_formset-" +
        ingredientCount + "-name");

    // Populate the fields with the data
    if (ingredientData) {
        newElem.querySelector(".ingredient-input").value = ingredientData.quantity;
        newElem.querySelector(".ingredient-select").value = ingredientData.unit;
        newElem.querySelector(".custom-ingredient-select").value = ingredientData.ingredient;
    }

    // Insert the new ingredient row
    var ingredientContainer = document.querySelector(".control-group2");
    ingredientContainer.appendChild(newElem);

    // Initialize the new ingredient row
    initializeIngredientRow(newElem);

    // Add event listener to the delete button of the new element
    newElem.querySelector(".create-meal-delete-btn").addEventListener("click", removeIngredient);
    ingredientCount++;
    totalIngredientFormsInput.value = ingredientCount;
}


for (var i = 0; i < ingredientData.length; i++) {
    console.log("Ingredient", i, ingredientData[i].ingredient)
    if (ingredientData[i].ingredient != "None") {
        addIngredientFormset(ingredientData[i]);
    }
}

function addStepFormset(stepsData) {
    var newElem = createNewStep();
    document.querySelector(".after-add-more").insertAdjacentElement('beforebegin', newElem);

    // If it's the first step, display the form-floating element
    if (stepCount === 0) {
        document.querySelector(".form-floating").style.display = "block";
    }

    // Bind remove button event
    newElem.querySelector(".custom-trash").addEventListener("click", removeStep);

    // Bind character counter event
    var textareaElem = newElem.querySelector(".step-description");
    textareaElem.addEventListener("keyup", updateCharacterCounter);
    textareaElem.value = "";  // Clear the content of the textarea

    // Update character counter
    newElem.querySelector("#the-count span:first-child").textContent = "0";

    // If stepsData.instructions exists, set textarea value
    if (stepsData && stepsData.instructions) {
        textareaElem.value = stepsData.instructions;
    }

    // Update total steps and step count
    stepCount++;
    totalStepFormsInput.value = stepCount;
}



for (var i = 0; i < stepsData.length; i++) {
    addStepFormset(stepsData[i]);
}
