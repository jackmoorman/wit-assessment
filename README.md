# Wit - Take-Home Assessment

## Jack Moorman

---

Instructions for running locally:

1. run `npm install`
2. run `docker pull mysql:8.0`
3. run `npm run db` - this starts the local MySQL database within a Docker container.
   - NOTE: A Docker volume was not created for this project, so every time the container is killed, all data will be lost in the container. As long as the container is running, all data should persist.
4. In a separate terminal window, run `npx prisma migrate dev --name dbinit`
   - NOTE: I used Prisma as the ORM for the MySQL database. In order to format your database tables, you have to run a migration to create the tables in the MySQL database container.
5. Now, run `npx prisma generate`
   - This generates the prisma client which gives access to the database queries based on the schema defined `/prisma/prisma.schema`.
6. Finally, run `npm run dev` to start the application on `http://localhost:3000` in the browser.

7. OPTIONAL: In the terminal running the Dockerized MySQL database, use `Ctrl + C` to hard-kill the container, or run `npm run db-stop` to ~gracefully~ stop the container.

### DEV NOTES:

- Normally, I would NEVER push the `.env` file to the Github repo, but the reviewers will need it to connect to the database.

- This is mentioned in the JSX files throughout the app, but typically for fetching data in Next.js 12.0+, you would fetch applicable data in `getStaticProps`, `getServerSideProps`, `getInitialProps`, etc.

  - For the purpose of this assessment, I fetched the data directly.

- I used the Bootstrap `container` class a few times, but opted to use SCSS and customized media queries for responsive design. This was to have direct access to the screen widths and make them fully customizable.

- I talked to Vaidhy about being able to access the assets on the Adobe XD file, while some worked, I was not able to download them all. I replaced the images with other stock photos I found, and for the "videos" section, I copied the same one several times and changed them slightly to show they are different pictures.
