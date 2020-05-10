export class Slide {
    title: string;
    description: string;
    link: string;
    imageURL: string;

    constructor(title: string, description: string, link: string, imageURL:string){
        this.title = title;
        this.description = description;
        this.link = link;
        this.imageURL = imageURL;
    }
}
