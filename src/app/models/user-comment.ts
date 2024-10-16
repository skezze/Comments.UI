export interface UserComment {
    id: number;
    text: string;
    dateAdded: Date;
    userid:number;
    user: {
        id:number
        userName: string;
        email: string;
    };
}