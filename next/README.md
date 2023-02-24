## Instructions

You will find technical tasks related to your desired position below.
Fork this repository, work on the tasks, and create a pull request.
Make sure you comment your code as needed.
Track your time and send an email with the link for the pull request and the time it took to complete once you are done.

Not being able to complete every task will NOT disqualify you as a candidate. Do your best and good luck!

### Tasks

-   Add `.next/` to `.gitignore`.

-   Fix the missing dependency error.

-   Define the type of `children` in `./src/components/layouts/default.tsx'.

-   On the index page, fetch data from `/api/clients` using the already imported custom `request` function to populate the table. Use a TypeScript interface to define a type in the `useState` you will implement.

-   Make sure that the genders, names, and emails of clients are matching. Client avatars do not have to match with client genders.

-   Make sure that the full names of clients on the table are displayed. Hint: Use `Array.prototype.map()` to reformat data.

-   Make sure that the client emails on the table are selectable and copiable by the user.

-   Define the custom color `#EE964B` as `sandy` in Tailwind.

-   Get a query parameter named `highlight` from the URL in the index page using `useEffect()`.

-   If there is a client with the same ID as `highlight`'s value, change their background color on the table to `sandy`.

-   Use the styling from `./src/examples/modals.tsx` and `./src/examples/forms.tsx` to create a Formik form with Yup validation for registering a client inside a modal.

-   Make the 'Register new client' button open the modal with the form inside.

-   Complete the `onRegister` function to make a `POST` request to `/api/clients` with the form data using the already imported custom `request` function.
