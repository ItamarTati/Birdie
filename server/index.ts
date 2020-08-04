const express = require('express');
const app = express()
const mysql = require('mysql'); 
const cors = require('cors');

app.use(cors());

const connection = mysql.createConnection({
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'test-read',
    password: 'xnxPp6QfZbCYkY8',
    database: 'birdietest',
});
app.get('/events', (req, res) => {
    connection.connect();
    connection.query(`SELECT id, event_type, visit_id, timestamp, caregiver_id, care_recipient_id, payload from events`, function(err, rows, fields) {
        if (!err) {
            res.send(JSON.stringify(rows));
        } else {
            console.log('Error while performing Query.');
        }
    });
    connection.end();
});
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        //@ts-ignore
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
app.listen(process.env.PORT || 4000, () => console.log('All is running'))