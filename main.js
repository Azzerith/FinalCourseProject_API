async function process_argv() {
    let { argv } = process;
    argv = argv.slice(2);
    const result = await studentActivitiesRegistration(argv);

    return result;
}

async function getStudentActivities() {
    const response = await fetch('http://localhost:3001/activities');
    return response.json();
    // TODO: replace this
}

async function studentActivitiesRegistration(data) {
    const method = data[0];
    //mendaftarkan
    if (method === "CREATE") {
        const result = await addStudent(data[1], data[2]);
        return result;
    } else if (method === "DELETE") {
        const message = await deleteStudent(data[1]);
        return message; //menghapus 
    } else {
        return "Method tak sesuai"
    }
    // TODO: replace this
}

async function addStudent(name, day) {
    const activities = await getStudentActivities();
    const filterActivities = activities.filter(activity => activity.days.includes(day));
    const response = await fetch("http://localhost:3001/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            activities: filterActivities.map(activity => ({
                name: activity.name,
                desc: activity.desc
            }))
        })
    });
    return await response.json();
    // TODO: replace this
}

async function deleteStudent(id) {
    await fetch(`http://localhost:3001/students/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return { message: `Successfully deleted student data with id ${id}` };
    // TODO: replace this
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