<?php
    include('library.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Ticket Details</title>
    </head>
    <body>
        <h1>Ticket Details</h1>
        <?php
        extract($_REQUEST);
        $sql = "SELECT * FROM tickets WHERE tck_id = $id";
        echo $sql;
        $conn = get_database_connection();
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        ?>
        <form action="ticket-submit.php" method="POST">
            Problem: <input type="text" name="problem" value="<?php echo $row['tck_issue']; ?>" />
            <br>
            Priority: <select name="priority">
                <option value = '1'<?php echo$row['tck_priority']==1?'selected=true':'';?>>High</option>
                <option value = '2'<?php echo$row['tck_priority']==1?'selected=true':'';?>>Medium</option>
                <option value = '3'<?php echo$row['tck_priority']==1?'selected=true':'';?>>Low</option>
            </select>
            <br>
            ContactE-Mail: <input type="text" name="contact" value="<?php echo $row['tck_email']; ?>" />
            <br>
            Status: <select name="stati">
                <option <?php echo$row['tck_status']=='Open'?'selected=true':'';?>>Open</option>
                <option <?php echo$row['tck_status']=='Closed'?'selected=true':'';?>>Closed</option>
            </select>
            <br>
            Resoltuion: <input type="text" name="contact" value="<?php echo $row['tck_resolution']; ?>"/>
            <br>
            <input type="submit" />
        </form>
    </body>