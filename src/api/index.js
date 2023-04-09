const express = require('express'),
    helmet = require('helmet'),
    cors = require('cors'),
    morgan = require('morgan'),
    controller = require('./controller/');

const app = express();
app.use(express.json());
app.use(controller);
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.listen(process.env.PORT, () => {
    console.log(`Started app @ ${process.env.PORT}.`);
});
