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
    

