const express = require('express');
const app = express()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        //@ts-ignore
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
app.listen(process.env.PORT || 4000, () => console.log('All is running'))