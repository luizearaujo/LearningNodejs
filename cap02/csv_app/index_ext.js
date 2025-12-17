import { createObjectCsvWriter } from "csv-writer";
import prompt from "prompt";
import fs from 'fs';

prompt.start();
prompt.message = "";

const csvFileName = './contacts-ext.csv';

const csvWriter = createObjectCsvWriter({
    path: csvFileName,
    append: fs.existsSync(csvFileName),
    header: [
        {id : 'name', title: 'Name'},
        {id : 'number', title: 'Number'},
        {id : 'email', title: 'Email'}
    ],
});

class Person {
    constructor(name = "", number = "", email = "") {
        this.name = name;
        this.number = number;
        this.email = email;
    }
    
    async saveToCSV() {
        try {
            const {name, number, email} = this;
            await csvWriter.writeRecords([{name, number, email}]);
            console.log(`${name} saved!`);
        } catch (err) {
            console.error(err);
        }
    }
}

const startApp = async () => {
    const querstions = [
        {name: "name", description: "Contact Name: "},
        {name: "number", description: "Contact Number: "},
        {name: "email", description: "Contact Email: "}
    ];
    const response = await prompt.get(querstions);
    const person = new Person(response.name, response.number, response.email);
    await person.saveToCSV();

    const { again } = await prompt.get({
        name: "again",
        description: "Continue? [y to continue]: "
    });
    if (again.toLowerCase() === "y") await startApp();
}


startApp()