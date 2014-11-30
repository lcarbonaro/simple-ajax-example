/* 
 * This script does the AJAX call to the PHP script which returns the data for the drop-down, 
 * i.e. the option tags with data from the database table.
 * 
 * Ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 * 
 */

function doAjaxCall() {
    
    // 1. create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // 2. set up an event handler, i.e. what to do once the request is sent
    // note that this does not execute until after step 3
    xhr.onreadystatechange = function() {
        // readyState 4 means DONE (request complete)
        // status 200 is the usual HTTP code for success
        if ( xhr.readyState===4 && xhr.status===200 ) {  
            // prepared data from the PHP script is returned here as responseText
            // "inject" this responseText into <select> element (the dropdown)
            document.getElementById("mydropdown").innerHTML = xhr.responseText;
        }
    };
    
    // 3. initialise a request and send it
    xhr.open("GET", "getDropdownOptions.php", true);  // last parm (true) refers to asynchronous
    xhr.send();  
    
}


