import prompt from "prompt";
prompt.start();
prompt.message = "";

import { writeFileSync } from "fs";
import { appendFileSync } from "fs";
import { existsSync } from "fs";

const csvFileName = "./contacts-ext.csv";

class Person {
    constructor(name = "", number = "", email = "") {
        this.name = name;
        this.number = number;
        this.email = email;
    }
    
    saveToCSV() {
        const content = `${this.name},${this.number},${this.email}\n`;
        try {
            if (!existsSync(csvFileName)) {
                const header = "Name,Number,Email\n";
                writeFileSync(csvFileName, header);
            }
            appendFileSync(csvFileName,content);
            console.log(`${this.name} saved!`);
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