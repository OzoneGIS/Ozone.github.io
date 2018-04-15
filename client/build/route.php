<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

function getData() {
  echo '{
    "name": "Jenny",
    "data": "April 2018"
  }';
}

getData();

 ?>
