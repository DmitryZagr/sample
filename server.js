let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();
let persons = {};

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

app.post('/users', (req, res) => {
    console.log(req.body);

    // TODO: вернуть количество обращений
    if(req.body.email in persons) {
        persons[req.body.email] = +persons[req.body.email] + 1;
    } else {
        persons[req.body.email] = 1;
    }

    res.send(persons[req.body.email] + ' ');
    

});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
