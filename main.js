async function process_argv() {
    let { argv } = process;
    argv = argv.slice(2);
    const result = await studentActivitiesRegistration(argv);

    return result;
}

async function getStudentActivities() {
    fetch('http://localhost:3001/activities')
        .then((response) => response.json)
        .then((json) => {
            return [json]
        });
    // TODO: replace this
}

async function studentActivitiesRegistration(data) {
    //mendaftarkan

    //menghapus

    return 0; // TODO: replace this
}

async function addStudent(name, day) {
    return {}; // TODO: replace this
}

async function deleteStudent(id) {
    return {}; // TODO: replace this
}

process_argv()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = {
    studentActivitiesRegistration,
    getStudentActivities,
    addStudent,
    deleteStudent
};