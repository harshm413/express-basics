import express from 'express';
const router = express.Router();

let teachers = [
    { id: 1, name: 'Ms. Smith', subject: 'Math', age: 35 },
    { id: 2, name: 'Mr. Johnson', subject: 'English', age: 40 },
    { id: 3, name: 'Mrs. Davis', subject: 'Science', age: 38 },
    { id: 4, name: 'Dr. Brown', subject: 'History', age: 45 },
    { id: 5, name: 'Mr. Taylor', subject: 'Computer Science', age: 32 },
    { id: 6, name: 'Mrs. Robinson', subject: 'Art', age: 37 },
    { id: 7, name: 'Mr. White', subject: 'Physical Education', age: 42 },
    { id: 8, name: 'Ms. Garcia', subject: 'Spanish', age: 33 },
    { id: 9, name: 'Mr. Lee', subject: 'Music', age: 39 },
    { id: 10, name: 'Dr. Patel', subject: 'Chemistry', age: 36 },
];

router.get('/', (req, res) => {
    console.log("at /teachers -> get");
    res.send(teachers);
})

router.get('/:id', (req, res) => {
    console.log("at /teachers/:id -> get");

    let teacherID = req.params.id;
    let foundTeacher = teachers.find((teacher) => teacher.id == teacherID);

    res.send(foundTeacher);
})

router.post('/', (req, res) => {
    console.log("at /teachers -> post");

    let newTeacher = req.body;
    teachers.push({
        id: teachers.length + 1,
        ...newTeacher
    });

    res.send(`New teacher successfully added in the database.`);
})

router.delete('/:id', (req, res) => {
    console.log("at /teachers -> delete");

    let teacherID = req.params.id;
    teachers = teachers.filter((teacher) => teacher.id != teacherID);

    res.send(`Teacher with ID ${teacherID} deleted from the database.`)
})

export default router;
