import express from 'express';
import cors from 'cors';
import teachersRouter from './routes/teachersRoute.js';

let students = [
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie', age: 21, grade: 'C' },
    { id: 4, name: 'David', age: 23, grade: 'B' },
    { id: 5, name: 'Eva', age: 19, grade: 'A' },
    { id: 6, name: 'Frank', age: 24, grade: 'C' },
    { id: 7, name: 'Grace', age: 20, grade: 'A' },
    { id: 8, name: 'Henry', age: 22, grade: 'B' },
    { id: 9, name: 'Ivy', age: 21, grade: 'C' },
    { id: 10, name: 'Jack', age: 23, grade: 'A' },
];

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    console.log("at / -> get");
    res.send(`At the Homepage.`);
})


app.get('/query', (req, res) => {
    console.log("at /query -> get");

    let message = req.query;

    res.send(`Demonstrating query. ${JSON.stringify(message)}`);
})

app.post('/urlencoded', (req, res) => {
    console.log("at /urlencoded -> post");

    let message = req.body;

    res.send(`Demonstrating urlencoding. ${JSON.stringify(message)}`);
})



app.get('/students', (req, res) => {
    console.log("at /students -> get");
    res.send(students);
})

app.get('/students/:id', (req, res) => {
    console.log("at /students/:id -> get");

    let studentID = req.params.id;
    let foundStudent = students.find((student) => student.id == studentID);

    res.send(foundStudent);
})

app.post('/students', (req, res) => {
    console.log("at /students -> post");

    let newStudent = req.body;
    students.push({
        id: students.length + 1,
        ...newStudent
    });

    res.send(`New student successfully added in the database.`);
})

app.delete('/students/:id', (req, res) => {
    console.log("at /students -> delete");

    let studentID = req.params.id;
    students = students.filter((student) => student.id != studentID);

    res.send(`Student with ID ${studentID} deleted from the database.`)
})

app.use('/teachers', teachersRouter);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
