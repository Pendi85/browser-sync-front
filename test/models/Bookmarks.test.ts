import * as fs from 'fs';
import Bookmarks from '../../src/models/Bookmarks';


jest.mock('fs');
const mockFilePath = '../bookmarks/brave_default.json';

describe('init', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize successfully with valid JSON file', () => {
        const mockData = JSON.stringify(
            {
                "roots": {
                    "bookmark_bar": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "date_added": "13339894691000000",
                                        "date_last_used": "13389902368926940",
                                        "guid": "33f6c809-cae9-4797-bb1c-c12cb488265a",
                                        "id": "6",
                                        "name": "Gmail",
                                        "type": "url",
                                        "url": "https://mail.google.com/mail/u/0/?hl=fr#inbox"
                                    },
                                    {
                                        "date_added": "13340471764000000",
                                        "date_last_used": "13389284060422659",
                                        "guid": "e38ef43d-6941-41bc-9d4e-2e9879ecb8cf",
                                        "id": "9",
                                        "name": "Google",
                                        "type": "url",
                                        "url": "https://www.google.com/"
                                    }
                                ],
                                "date_added": "13383748412461121",
                                "date_last_used": "0",
                                "date_modified": "13389871910736995",
                                "guid": "b0be6add-68cc-43c4-a043-c31d907f6f2c",
                                "id": "5",
                                "name": "Google",
                                "type": "folder"
                            }
                        ]
                    }
                }
            }
        );
        (fs.readFileSync as jest.Mock).mockReturnValue(mockData);

        const bookmarks = new Bookmarks(mockFilePath);
        const result = bookmarks.maj(mockFilePath);

        expect(result).toBe(true);
        expect(bookmarks.items).toHaveLength(1);
        expect(bookmarks.items.at(0)?.type).toEqual("folder");
        expect(bookmarks.items.at(0)?.name).toEqual("Google");
        expect(bookmarks.items.at(0)?.children).toHaveLength(2);
        expect(bookmarks.items.at(0)?.children?.at(0)?.name).toEqual("Gmail");
        expect(bookmarks.items.at(0)?.children?.at(1)?.name).toEqual("Google");
        expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath, 'utf-8');
    });

    it('should fail to initialize when file does not exist', () => {
        (fs.readFileSync as jest.Mock).mockImplementation(() => {
            throw new Error('File not found');
        });

        const bookmarks = new Bookmarks(mockFilePath);
        const result = bookmarks.maj(mockFilePath);

        expect(result).toBe(false);
        expect(bookmarks.items).toEqual([]);
        expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath, 'utf-8');
    });

    it('should fail to initialize with invalid JSON file', () => {
        const invalidJSON = '{ key: value }'; // Invalid JSON
        (fs.readFileSync as jest.Mock).mockReturnValue(invalidJSON);

        const bookmarks = new Bookmarks(mockFilePath);
        const result = bookmarks.maj(mockFilePath);

        expect(result).toBe(false);
        expect(bookmarks.items).toEqual([]);
        expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath, 'utf-8');
    });
});