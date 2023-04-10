<?php
include('library.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>DPW Tracker - permit field</title>
    </head>

    <body>
        <div class="container-fluid">
            <a href = index.php ><h1 class="font-monospace fst-italic text-success">DPW Tracker</h1></a>
            <a href = index.php?content=list>list</a>
            <a href = index.php?content=field>field</a>
            <a href = index.php?content=date>date</a>
            <?php include(get_content() . '.php'); ?>
        </div>
    </body>
</html>