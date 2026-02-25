📄 Project: Simple Gym website with Index, Login and Dashboard

#### Problem Statement

Problem:
Clients need a simplified platform that lets them log in, see relevant information about the gym and check their membership status.

Stakeholders:
Clients

--------

### Requirement list
   
Functional requirements:

- F1. The system should offer a role based login for the user (Clients, PT, Staff)
- F2. After login, the system should redirect the user to the corresponding dashboard based on their role.
- F3. Clients should be able to check the newsletter and sign up for gym classes.
- F4. Clients should be able to cancel their sign ups.
- F5. Dashboard should show newsletter, information about the gym and membership tirs.
- F6. Client should be able to logout and be redirected to the home page.

Non-functional requirements

- NF1. Usability
The application be user-friendly and straightforward without unecessary complexity

- NF2. Accessibility
Website should be easily accessible

- NF3. Performance
Website should load and respond to user input instantly without extra delay

### Priorities (MoSCoW)
   
Must Have: 

F1. The system should offer a role based login for the user (Clients, PT, Staff)
F2. After login, the system should redirect the user to the corresponding dashboard based on their role
F3. Clients should be able to check the newsletter
F4. Dashboard should display newsletter, general information about the gym (machine maintenance etc), membership status and available membership tiers
F5. Client should be able to logout and be redirected to the home page.


Should Have

Website performance and ease of use accessibility. 


Could Have:

Being able to reorganize your dashboard and move panels around
Built-in Calendar with your class sign-ups 

Won’t Have:

Online store where you can buy fitness products

Membership plan billing

--------

### Preconditions:

* User is located on the main page (index.html)
* User has an account
* Login form should include an email and password
* User has selected their role

Main Flow:

- User visits the website, lands on index.html and proceeds to login
- The website should display the login form with a role slider
- User chooses role
- User inputs their e-mail and password
- User clicks "Sign up" button
- The system should validate user details
- The system should verify the user
- System creates a login session
- System redirects user to the corresponding dashboard based on their role

Alternate Flows: 

- In case of incorrect e-mail and password credentials, the system should notify the user to input correct information
- The system should notify the user if they are trying to login with a different role that they do not have permissions for

--------

### Postconditions:

- After inputting the correct credentials, the user should be redirected to the corresponding page
- In case of incorrect credentials, the user will remain on the login page until they enter correct details

--------

### Risks and limitations
- Login is client-side only and does not provide real authentication or security.
- User roles are simulated and not validated against a backend.
- No persistent session handling or data storage is implemented.

--------

### Possible improvements
- Add backend authentication and database integration.
- Improve accessibility testing with screen readers.
- Add role-based dashboards with dynamic content.

--------

### Change Notes
- 1.0	2026-02-24	First version of requirements and use-case document
- 1.1	2026-02-24	Index.html, Dashboard.html and Login.html implemented
- 1.2 2026-02-25  script.js, style.css changed (see commits)

### Additional Information
- Components.html should technically only show the componential structure of the website but I decided to do a mini demo of a dashboard layout with newsletter, article and section.



