/* 
 * This script does the AJAX call to the PHP script via a jQuery .ajax() call
 * 
 * Ref: http://api.jquery.com/jquery.ajax/
 * 
 */

$(document).ready(function() {
    
    $.ajax({
        url: 'getDropdownOptions.php',
        type: 'GET',                     
        
        success: function (response) {
            $('#mydropdown').append(response);
        }
        
    });    // ajax call              
    
});  // document.ready function 
    
/*
 * Note that this solution (specifically the .append line) assumes the backend (PHP script)
 * is returning option HTML tags.
 * A better (more de-coupled) approach is to have the backend return JSON such as:
 *     [{"id":1,"name":"Tom"},{"id":2,"name":"Dick"},{"id":3,"name":"Harriet"}]
 *
 * and then, on successful return from the backend script, have something like:
 * 
 *  success: function(response) {
 *      var records = JSON.parse(response);
 *      $.each(records, function (i, rec) {
 *          $('#mydropdown').append($('<option>', { value: rec.id, text: rec.name }));
 *      });
 *  }
 *
 */
