-- CreateTable
CREATE TABLE "author" (
    "auth_id" UUID NOT NULL,
    "auth_name" VARCHAR(54) NOT NULL,
    "auth_age" INTEGER,

    CONSTRAINT "author_pkey" PRIMARY KEY ("auth_id")
);
