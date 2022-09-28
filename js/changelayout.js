//added bootstrap css
window.addEventListener("message", (event) => {
  if (
    event.data.type === "hsFormCallback" &&
    event.data.eventName === "onFormReady"
  ) {
    //$(".actions").insertAfter("#div-sig-image");
    $("input[type=submit]").addClass("btn btn-primary btn-block");
    /* CHANGED HERE (MAKE SIGNATURE REQUIRED)*/
    var data = document.getElementById(
      "2-6008128/aos_initial_inspection_data-6aca3cfc-63cd-452e-930a-39831b843104"
    );
    document.querySelector("[type='submit']").addEventListener(
      "click",
      function (event) {
        //if competition code doesn't contain 2 letters and 4 numbers then stop the form from submitting...
        if (data.value.length === 0) {
          event.preventDefault();
        }
      },
      false
    );
    /* END */
  }
});
