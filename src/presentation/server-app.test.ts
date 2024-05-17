
import { CreateTable } from "../domain/uses-cases/create-table.uses-cases";
import { SaveFile } from "../domain/uses-cases/save-file.uses-cases";
import { ServerApp } from "./server-app";

describe("server-app.ts", () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        fileDestination: "test-destination",
        fileName: "test-destination"
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("should create ServerApp instance", () => {
        const serverApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe("function");
    });

    test("should run ServerApp with options", () => {

        // const logSpy = jest.spyOn(console, "log");
        // const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
        // const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");



        // ServerApp.run(options);

        // expect(logSpy).toHaveBeenCalledTimes(2);
        // expect(logSpy).toHaveBeenCalledWith("server running...");
        // expect(logSpy).toHaveBeenLastCalledWith("Was created!");

        // expect(createTableSpy).toHaveBeenCalledTimes(1);
        // expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });

        // expect(saveFileSpy).toHaveBeenCalledTimes(1);
        // expect(saveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     fileName: options.fileName,
        //     fileDestination: options.fileDestination
        // });

    });

    test("should run with custom values mocked", () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue("1 x 1 = 2");
        const saveFileMock = jest.fn().mockReturnValue(false);

        console.error = logErrorMock;
        console.log = logMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);
        expect(logMock).toHaveBeenCalledWith("server running...");
        expect(createMock).toHaveBeenCalledWith({ "base": options.base, "limit": options.limit });

        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: "1 x 1 = 2",
            fileDestination: options.fileDestination,
            fileName: options.fileName,
        });

        // expect(logMock).toHaveBeenCalledWith("Was created!");
        expect(logErrorMock).toHaveBeenCalledWith("File not created");
    });
});