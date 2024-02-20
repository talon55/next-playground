export interface MockType {
    foo: string
}

export default function mockServer(): MockType {
    console.log("server was called!")
    return {
        foo: "bar"
    };
}