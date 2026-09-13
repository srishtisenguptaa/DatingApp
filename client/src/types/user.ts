export type User = {
    id: string;
    displayName: string;
    email: string;
    token: string;
    imageurl?: string;
}

export type RegisterCreds = {
    email: string;
    password: string;
    displayName: string;
}

export type LoginCreds = {
    email: string;
    password: string;
}