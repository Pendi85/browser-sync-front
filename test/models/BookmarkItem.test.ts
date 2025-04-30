import BookmarkItem from '../../src/models/BookmarkItem';

describe('BookmarkItem', () => {
    it('should initialize with correct properties', () => {
        const itemData = {
            date_added: '13339894691000000',
            date_last_used: '13389902368926940',
            id: '6',
            name: 'Gmail',
            type: 'url',
            url: 'https://mail.google.com/mail/u/0/?hl=fr#inbox',
        };

        const bookmarkItem = new BookmarkItem(itemData);

        expect(bookmarkItem.date_added).toBe(itemData.date_added);
        expect(bookmarkItem.date_last_used).toBe(itemData.date_last_used);
        expect(bookmarkItem.id).toBe(itemData.id);
        expect(bookmarkItem.name).toBe(itemData.name);
        expect(bookmarkItem.type).toBe(itemData.type);
        expect(bookmarkItem.url).toBe(itemData.url);
        expect(bookmarkItem.children).toBeUndefined();
    });

    it('should initialize a folder with bookmarks inside', () => {
        const itemData = {
            date_added: '13339894691000000',
            date_last_used: '13389902368926940',
            id: '6',
            name: 'Google',
            type: 'folder',
            children: [
                {
                    date_added: '13339894691000001',
                    date_last_used: '13389902368926941',
                    id: '7',
                    name: 'Gmail',
                    type: 'url',
                    url: 'https://mail.google.com/mail/u/0/?hl=fr#inbox',
                },
                {
                    date_added: '13339894691000002',
                    date_last_used: '13389902368926942',
                    id: '8',
                    name: 'Google',
                    type: 'url',
                    url: 'https://google.com',
                }
            ]
        };

        const bookmarkItem = new BookmarkItem(itemData);

        expect(bookmarkItem.date_added).toBe(itemData.date_added);
        expect(bookmarkItem.date_last_used).toBe(itemData.date_last_used);
        expect(bookmarkItem.id).toBe(itemData.id);
        expect(bookmarkItem.name).toBe(itemData.name);
        expect(bookmarkItem.type).toBe("folder");
        expect(bookmarkItem.children).toHaveLength(2);
        bookmarkItem.children?.forEach(c => {
            expect(c.name).toBeDefined();
            expect(c.type).toBeDefined();
            expect(c.url).toBeDefined();
        });
    });
});