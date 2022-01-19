-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "publishDate" DATETIME,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "categoryId" INTEGER,
    CONSTRAINT "Topic_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Topic" ("categoryId", "createdAt", "description", "id", "image", "isPublished", "publishDate", "title", "updatedAt") SELECT "categoryId", "createdAt", "description", "id", "image", "isPublished", "publishDate", "title", "updatedAt" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
