class BookmarkItem {
    date_added!: string;
    date_last_used!: string;
    id!: string;
    name!: string;
    type!: string;
    url!: string;
    children: BookmarkItem[] | undefined

    constructor(itemData: any) {
        this.date_added = itemData.date_added;
        this.date_last_used = itemData.date_last_used;
        this.id = itemData.id;
        this.name = itemData.name;
        this.type = itemData.type;
        this.url = itemData.url;

        if(itemData.children)
            this.children = itemData.children.map((child: any) => new BookmarkItem(child))
    }
}

export default BookmarkItem;