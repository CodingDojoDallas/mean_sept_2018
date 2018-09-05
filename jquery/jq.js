// We access the JQuery library, and all of its available methods using the
// $ symbol. This is just like any other function call. You can think of it
// like JQuery(document).ready(...);
$(document).ready(function() {
  // If we want to attach events to our HTML we need to wait for the HTML to
  // be loaded in the browser, otherwise JQuery won't know what objects we're
  // talking about. That is what $(document).ready(...) is doing.


  // We select an element similiar to how we select in CSS: $(selector). Next
  // we add the event we want to attach to that element, in this case a click
  // event. This brings us to $(selector).event. But what do we want to happen
  // when that event occurs? This will be the argument we give to the event.
  // This gets us: $(selector).event(callback).
  $('div').click(function() {

    // This code will run ONLY AFTER THE CLICK EVENT HAS OCCURRED. We will use
    // JQuery to first select the element we want, then apply one of JQuery's
    // methods to it. Here, I'm using the .text method to change the inner text
    // of the element.

    // $(selector).method(arguments)
    $(this).text('These are different words.');
  });
});
