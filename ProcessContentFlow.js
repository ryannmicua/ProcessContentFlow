$(document).ready(function(){

   var $p = $('#ProcessContentFlow');

   // instantiate the WireTabs
   $p.WireTabs({
       items: $("#ProcessContentFlow > .Inputfields > .InputfieldWrapper, #ProcessContentFlow > .Inputfields .InputfieldFieldsetTabOpen"),
       id: 'ProcessContentFlow'
   });

});