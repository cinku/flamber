namespace flamber.interfaces {
    export interface User {
        id: number;
        name: string;
        username: string;
        email: string;
        flames: flamber.interfaces.Flames[];
    }
}