import { Attachment } from "./attachment";

export interface UserComment {
    id: number;
    userName: string;
    email: string;
    homePage?: string;
    captcha: string;
    text: string;
    dateAdded: string;
    replies: UserComment[];
    attachments: Attachment[];
}
  