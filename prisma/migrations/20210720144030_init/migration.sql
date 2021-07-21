-- CreateTable
CREATE TABLE "Tip" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "offenseType" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "nearestIntersection" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "references" TEXT NOT NULL
);
