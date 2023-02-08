<!DOCTYPE html>
<html>
    <head>
        <title>Ticket Form</title>
    </head>

    <body>

        <h1>Welcome to our Ticketing System</h1>

        <form action="ticket-submit.php" method="POST">

            Problem: <input type="text" name="problem" />
            <br>
            Priority: <select name="priority">
                <option value = '1'>High</option>
                <option value = '2'>Medium</option>
                <option value = '3'>Low</option>
            </select>
            <br>
            ContactE-Mail: <input type="text" name="contact" />
            <br>
            <input type="submit" />
        </form>


    </body>