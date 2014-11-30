<?php

// This PHP script fetches values from a database table,
// formats these values into HTML option tags, and 
// passes the result back.
// This result will then be used to populate the drop-down.

// 1. establish database connection
$dbHost = '0.0.0.0';
$dbUser = 'lcarbonaro';
$dbPass = '';
$dbName = 'test';
$dbConn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
if ( !$dbConn ) {
    exit('Database Connection Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

// 2. query out the data
$sqlStatement = "SELECT `id`,`method_name` FROM `paymethod`";
$sqlResult    = mysqli_query($dbConn, $sqlStatement);
if ( !$sqlResult ) {
    exit('MySQL Error: ' . mysqli_error($dbConn) . 'SQL: ' . $sqlStatement);
}

// 3. prepare the data for presentation 
// i.e. format the values from the query result as HTML option tags
$options = '';
while ( $row = mysqli_fetch_assoc($sqlResult) ) {
    $options .= '<option value="'.$row['id'].'">'.$row['method_name'].'</option>';
}

// 4. return the formatted data
echo($options);

/*

-- The code shown above assumes this table structure:
CREATE TABLE `paymethod` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `method_name` varchar(25),
  PRIMARY KEY (`id`)
);

-- With records something like:
INSERT INTO `paymethod` (`id`, `method_name`) VALUES
(1, 'Credit Card'),
(2, 'Debit Card'),
(3, 'Cash'),
(4, 'Cheque');

*/