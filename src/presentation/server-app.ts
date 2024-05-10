import { CreateTable } from "../domain/uses-cases/create-table.uses-cases";
import { SaveFile } from "../domain/uses-cases/save-file.uses-cases";


interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    destination: string;
};


export class ServerApp {

    static run({ base, limit, showTable, destination, fileName }: RunOptions) {
        console.log("server running...");

        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile()
            .execute({ fileContent: table, destination, fileName });

        if (showTable) console.log(table);

        (wasCreated) ? console.log("Was created!") : console.error("File not created")
    };
};


