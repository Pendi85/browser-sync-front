import * as fs from 'fs';
import BookmarkItem from './BookmarkItem';
import { resolve } from 'path';

class Bookmarks {
    filepath!: string; // Property to hold the filename
    items: BookmarkItem[];
    
    constructor(filename: string) {
        this.filepath = filename; // Initialize filename
        this.items = [];
    }

    maj(filepath: string) : boolean {
        let isInitialized = false; // Flag to check if initialization was successful

        try {
            const data = fs.readFileSync(filepath, 'utf-8'); // Read file content
            const jsonData = JSON.parse(data);
            console.log(jsonData);
            this.items = jsonData.roots.bookmark_bar.children.map((child: any) => new BookmarkItem(child));
            isInitialized = this.items.length > 0;
        } catch (err) { 
            console.error(`Error reading or parsing bookmarks file : ${err}`); // Log the error
        }

        return isInitialized;
    }

    delete(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            fs.rm(this.filepath, (err) => {
                if (err) {
                    resolve(false)
                    console.error(`Error removing bookmarks file : ${err}`);
                }
                else {
                    this.items = [];
                    resolve(true);
                }
            });
        });
    }
}

export default Bookmarks;