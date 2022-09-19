//added bootstrap css
window.addEventListener("message", (event) => {
  if (
    event.data.type === "hsFormCallback" &&
    event.data.eventName === "onFormReady"
  ) {
    $(".actions").insertAfter("#div-sig-image");
    $("input[type=submit]").addClass("btn btn-primary btn-block");
  }
});
