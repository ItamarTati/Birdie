const express = require('express');
const app = express()
declare var path: any

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
app.listen(process.env.PORT || 4000, () => console.log('All is running'))