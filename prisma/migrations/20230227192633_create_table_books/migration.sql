-- CreateTable
CREATE TABLE "books" (
    "book_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "book_title" VARCHAR(45) NOT NULL,
    "auth_id" UUID NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("book_id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_auth_id_fkey" FOREIGN KEY ("auth_id") REFERENCES "author"("auth_id") ON DELETE CASCADE ON UPDATE NO ACTION;
