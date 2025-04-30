import * as fs from 'fs';
import BookmarkItem from './BookmarkItem';

class Bookmarks {
    filename!: string; // Property to hold the filename
    items: BookmarkItem[];
    
    constructor(filename: string) {
        this.filename = filename; // Initialize filename
        this.items = [];
    }

    init(filename: string) : boolean {
        let isInitialized = false; // Flag to check if initialization was successful

        try {
            const data = fs.readFileSync(filename, 'utf-8'); // Read file content
            const jsonData = JSON.parse(data);
            console.log(jsonData);
            this.items = jsonData.roots.bookmark_bar.children.map((child: any) => new BookmarkItem(child));
            isInitialized = this.items.length > 0;
        } catch (err) { 
            console.error(`Error reading or parsing bookmarks file : ${err}`); // Log the error
        }

        return isInitialized;
    }

    delete() : boolean {
        return false;
    }
}

export default Bookmarks;