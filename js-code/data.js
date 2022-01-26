let studentData = [
    { id: 1, name: 'anil', age: 33 },
    { id: 2, name: 'soni', age: 22 },
    { id: 3, name: 'moni' },
];

function show() {
    let msg = '';
    for (let index = 0; index < studentData.length; index++) {
        console.log(studentData[index].id + ' - ' + studentData[index].name + ' - ' + studentData[index].age);

        msg += '<br>' + studentData[index].id + ' - ' + studentData[index].name + ' - ' + studentData[index].age;
        // document.writeln(msg);
    }
    document.getElementById("demo").innerHTML = msg;

}