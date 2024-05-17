
export interface createTableUseCase {
    execute: (options: createTablOptions) => string;
};

export interface createTablOptions {
    base: number,
    limit?: number
};

export class CreateTable implements createTableUseCase {

    constructor() {

    };

    execute({ base, limit = 10 }: createTablOptions) {
        let outputMessage = "";
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} * ${i} = ${base * i} `;

            if (i < limit) {
                outputMessage += "\n";
            };
        };

        return outputMessage;
    }
};