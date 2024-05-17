// import { yarg } from "./args.plugin";


const runCommnad = async (args: string[]) => {
    process.argv = [...process.argv, ...args];

    const { yarg } = await import("./args.plugin");
    return yarg;
};



describe("args-pluging", () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });

    test("should return default values", async () => {

        const argv = await runCommnad(["-b", "5"]);


        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            d: 'outputs',
            n: "multiplication-table",
        }));
    });
    test("should return configuration with custom values", async () => {
        const argv = await runCommnad(["-b", "50", "-s", "true", "-l", "2", "-n", "table", "-d", "new-output"]);

        expect(argv).toEqual(expect.objectContaining({
            b: 50,
            s: true,
            l: 2,
            n: 'table',
            d: 'new-output',
        }));
    });
});