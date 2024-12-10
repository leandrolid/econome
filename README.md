<p align="center"><h1 align="center">ECONOME</h1></p>
<p align="center">
	<em>💸 econome: Streamline Finance, Empower Developers! 🚀

A robust backend solution, built with NestJS, that simplifies finance management while upholding coding standards for a seamless developer experience. With BullMQ, Drizzle-ORM, JWT authentication, and more, econome is the ultimate financial toolbox for modern developers! 🔧💻💰</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/leandrolid/econome?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/leandrolid/econome?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/leandrolid/econome?style=default&color=0080ff" alt="repo-language-count">
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

econome is a project built with NestJS, addressing the need for efficient, scalable, and maintainable server-side applications. Key features include BullMQ for job queues, Drizzle-ORM for database operations, Jest for testing, email services using nodemailer, JSON Web Token (JWT) authentication, and Pug templating engine for server-side rendering. The project is optimized with ESLint for consistent coding standards, TypeScript support, and Prettier integration. econome caters to developers seeking robust, extensible solutions for their backend needs, particularly in areas like email services, authentication, and database operations.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | The project is built with NestJS, a scalable and maintainable framework for server-side applications. It uses BullMQ for job queues and Drizzle-ORM for database operations. The codebase also includes TypeScript, SQL, and Pug templates for frontend views. |
| 🔩 | **Code Quality**  | The project follows best practices in coding standards, with a focus on maintainability and scalability. It uses TypeScript for type checking and has a high number of TypeScript files (66) compared to other languages. The codebase is well-organized and easy to navigate. |
| 📄 | **Documentation** | The project includes documentation in the form of TypeScript comments, with a total of 66 TypeScript files and 2 Pug templates for frontend views. Additionally, there are JSON, SQL, and JavaScript files for specific purposes. Documentation is primarily focused on TypeScript. |
| 🔌 | **Integrations**  | The project integrates with various tools such as Yarn, NPM, and BullMQ for job queues. It also uses Drizzle-ORM for database operations. The project's frontend views are built using Pug templates. |
| 🧩 | **Modularity**    | The project is modular in nature, with separate directories for different aspects of the application such as 'infra/services/emails/templates'. This modular structure allows for efficient and consistent development across the project. |
| 🧪 | **Testing**       | The project uses Jest for testing, which is configured in a separate file (`backend/jest.config.ts`). Testing commands are provided for both Yarn and NPM. |
| ⚡️  | **Performance**   | Performance characteristics of the project are not explicitly stated in the provided codebase details. However, the use of efficient tools such as BullMQ and Drizzle-ORM suggests optimized performance. |
| 🛡️ | **Security**      | Security measures within the project are not explicitly stated in the provided codebase details. However, the use of modern technologies like NestJS and TypeScript implies a focus on security best practices. |
| 📦 | **Dependencies**  | The project has dependencies on Yarn, npm, Nest CLI, SQL, TypeScript, BullMQ, Drizzle-ORM, Jest, and other packages specified in the `package.json` and `yarn.lock` files. |

---

##  Project Structure

```sh
└── econome/
    └── backend
        ├── .eslintrc.js
        ├── .gitignore
        ├── .prettierrc
        ├── README.md
        ├── jest.config.ts
        ├── nest-cli.json
        ├── package.json
        ├── src
        ├── test
        ├── tsconfig.build.json
        ├── tsconfig.json
        └── yarn.lock
```


###  Project Index
<details open>
	<summary><b><code>ECONOME/</code></b></summary>
	<details> <!-- backend Submodule -->
		<summary><b>backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/jest.config.ts'>jest.config.ts</a></b></td>
				<td>- This Jest configuration file optimizes the backend testing environment by setting up test parameters, defining which files to include and exclude from coverage analysis, and configuring module paths based on TypeScript settings<br>- It ensures efficient and accurate testing within the project structure.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/nest-cli.json'>nest-cli.json</a></b></td>
				<td>- The `backend/nest-cli.json` file configures the NestJS project's schema for code generation, specifically focusing on assets within the 'infra/services/emails/templates' directory<br>- This setup ensures efficient and consistent development of email templates within the larger project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/package.json'>package.json</a></b></td>
				<td>- This backend project is a Node.js application built with NestJS, an efficient framework for building scalable and maintainable server-side applications<br>- It leverages BullMQ for job queues, Drizzle-ORM for database operations, and Jest for testing<br>- The project also includes features like email services using nodemailer, JSON Web Token (JWT) authentication, and Pug templating engine for server-side rendering<br>- The codebase is configured to support development, debugging, and production environments, with tools like Prettier for code formatting and ESLint for linting.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/.eslintrc.js'>.eslintrc.js</a></b></td>
				<td>- This backend project utilizes ESLint, a popular JavaScript and TypeScript linter, to enforce consistent coding standards across the codebase<br>- The provided configuration file, .eslintrc.js, sets up ESLint with TypeScript support, adhering to recommended rules and integrating Prettier for formatting consistency<br>- This ensures maintainability, readability, and efficiency in collaboration among developers.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/tsconfig.build.json'>tsconfig.build.json</a></b></td>
				<td>- The backend/tsconfig.build.json file configures the TypeScript build process within the project structure<br>- It specifies which files to include (src) and exclude (node_modules, test, dist, **/*test.ts) during compilation, ensuring a streamlined build process for the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- The TypeScript configuration (backend/tsconfig.json) in this project structure outlines the settings for compiling TypeScript files, enabling features like experimental decorators and declaration generation<br>- It organizes the codebase into modules based on application, domain, and infrastructure layers, ensuring a clean and maintainable architecture<br>- This setup facilitates efficient development and collaboration within the project.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/main.ts'>main.ts</a></b></td>
						<td>- The `main.ts` file in the backend's `src` directory serves as the entry point for the application<br>- It initializes and configures various components, including services, connections, repositories, controllers, middlewares, validations, use cases, and queues using NestJS modules<br>- The main purpose is to bootstrap the server, set up necessary dependencies, and start the server on a specified port (defaulting to 3001)<br>- This architecture enables efficient handling of requests, error management, and integration with external services or queues within the application.</td>
					</tr>
					</table>
					<details>
						<summary><b>application</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/application/index.ts'>index.ts</a></b></td>
								<td>- In the provided backend architecture, the `index.ts` file within the 'application' directory defines a collection of use cases, with the primary one being the 'CreateUserUseCase'<br>- This setup orchestrates the application logic for user creation, facilitating seamless interaction between the backend and the user interface.</td>
							</tr>
							</table>
							<details>
								<summary><b>create-user</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/application/create-user/create-user.usecase.ts'>create-user.usecase.ts</a></b></td>
										<td>- In the provided file, a Use Case named `CreateUserUseCase` is defined within the backend architecture<br>- This Use Case handles the creation of a new user in the application by validating email uniqueness, hashing data, and sending an email confirmation with a generated code<br>- The interaction between the UserRepository, UserCodeRepository, EmailQueueService, and HashService ensures seamless user registration and email verification processes.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/application/create-user/create-user.output.ts'>create-user.output.ts</a></b></td>
										<td>- In the project architecture, the `create-user.output.ts` file within the 'backend/src/application' directory defines the structure of the output generated when a user is created<br>- The output consists of two main components: a user object with an ID and email, and a user code object containing a unique user ID and a generated code for verification purposes<br>- This output facilitates efficient handling and management of newly registered users in the system.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/application/create-user/create-user.input.ts'>create-user.input.ts</a></b></td>
										<td>- In the provided project structure, the `create-user.input.ts` file within the 'backend/src/application' directory defines a TypeScript interface named `CreateUserInput`<br>- This interface serves as a data model to structure and validate input data when creating a new user in the application, ensuring consistent and valid user data is handled throughout the system.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>validate-code</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/application/validate-code/validate-code.output.ts'>validate-code.output.ts</a></b></td>
										<td>- The `validate-code.output.ts` file within the backend's application directory defines an interface, `ValidateCodeOutput`, which represents the output structure of a code validation process<br>- This output includes a token string, serving as a means to authenticate or identify validated codes in the broader project architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/application/validate-code/validate-code.usecase.ts'>validate-code.usecase.ts</a></b></td>
										<td>- In the provided code file, a use case named `ValidateCodeUseCase` is defined within the backend architecture<br>- This use case validates an input code against a user's account and returns a token upon successful validation<br>- The purpose of this use case is to authenticate users by verifying their entered codes, thereby enabling secure access to protected resources in the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/application/validate-code/validate-code.input.ts'>validate-code.input.ts</a></b></td>
										<td>- In the project structure, the `validate-code.input.ts` file within the 'backend/src/application' directory defines a TypeScript interface, `ValidateCodeInput`<br>- This interface serves as a blueprint for data structures that will be used to validate user input when processing code validation requests in the application.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>infra</b></summary>
						<blockquote>
							<details>
								<summary><b>database</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/index.ts'>index.ts</a></b></td>
										<td>- The provided TypeScript file, located within the infrastructure folder of the backend, sets up database repositories for user and user code interactions<br>- It configures connections to a specific database using Drizzle and defines UserRepository and UserCodeRepository classes<br>- These repositories are used to interact with the underlying data in the application's domain layer, facilitating efficient handling of user and user code-related operations within the system.</td>
									</tr>
									</table>
									<details>
										<summary><b>repositories</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/repositories/_repository.ts'>_repository.ts</a></b></td>
												<td>- This TypeScript file, located within the infrastructure database repositories of a NestJS project, defines a generic repository interface for handling database operations<br>- It enables the creation, retrieval, and management of entities (data objects) by abstracting the underlying database connection, thereby facilitating consistent data access across the application.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/repositories/user.repository.ts'>user.repository.ts</a></b></td>
												<td>- The `UserRepository` file within the backend infrastructure of our project manages user data interactions with the database<br>- It implements a repository pattern, enabling functions like creating new users, checking if an email is registered, and retrieving the ID associated with a given email<br>- This facilitates seamless user management within our application.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/repositories/user-code.repository.ts'>user-code.repository.ts</a></b></td>
												<td>- The `UserCodeRepository` within the project's backend infrastructure manages user code data in the database<br>- It ensures secure storage and validation of user codes by hashing them before comparison, providing a mechanism to create new user codes and verify their validity based on associated user IDs<br>- This component is integral to maintaining user authentication and data integrity within the system.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>connections</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/connections/pg.connection.ts'>pg.connection.ts</a></b></td>
												<td>- This file is a database connection implementation for PostgreSQL using pg-promise within the project's backend infrastructure<br>- It provides methods to query, insert data, and check for existence of records in the database, leveraging TypeScript decorators and interfaces for type safety and readability.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/connections/drizzle.connection.ts'>drizzle.connection.ts</a></b></td>
												<td>- This file, located within the database connections folder of the backend, implements a DrizzleConnection class<br>- This class establishes and manages a connection to a PostgreSQL database using the Drizzle ORM (Object-Relational Mapping) library<br>- It provides methods for executing queries, inserting data, checking existence, and retrieving IDs based on specified conditions<br>- The connection is configured with logging capabilities and error handling mechanisms, ensuring efficient and secure interaction with the database within the larger project architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>interfaces</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/interfaces/connection.interface.ts'>connection.interface.ts</a></b></td>
												<td>- The provided TypeScript interface `connection.interface.ts` within the backend's infrastructure defines a contract for database connections<br>- This contract outlines methods such as query, destroy, insertInto, exists, and getId, enabling seamless interaction with various database entities across the project<br>- By standardizing these interactions, it ensures consistency and maintainability throughout the application's data handling processes.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>schemas</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/schemas/user-code.schema.ts'>user-code.schema.ts</a></b></td>
												<td>- The provided TypeScript file, `user-code.schema.ts`, within the database infrastructure of our project, defines a schema for 'user_codes'<br>- This schema manages user authentication codes, including their unique identifiers, associated user IDs, codes themselves, and timestamps for creation, update, and deletion<br>- The purpose is to securely handle user authentication processes in our application.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/schemas/user.schema.ts'>user.schema.ts</a></b></td>
												<td>- In the provided project structure, the `user.schema.ts` file within the 'database' directory defines a schema for user data in the backend infrastructure<br>- This schema includes fields such as id, email, createdAt, updatedAt, and deletedAt, ensuring proper organization and validation of user data within the database.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/schemas/index.ts'>index.ts</a></b></td>
												<td>- In the project structure, the 'backend/src/infra/database/schemas/index.ts' file serves as a schema registry, importing and managing database schemas for entities such as 'user' and 'user-code'<br>- This facilitates efficient interaction with the underlying databases in the application.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>decorators</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/decorators/transaction.decorator.ts'>transaction.decorator.ts</a></b></td>
												<td>- The provided TypeScript file defines a decorator named `Transaction`, which is used to manage database transactions within the application<br>- This decorator ensures that each method it adorns begins, commits, and rolls back transactions if an error occurs during execution<br>- Its purpose is to maintain data consistency by ensuring all operations within a transaction are either fully committed or rolled back in case of errors.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/decorators/column.decorator.ts'>column.decorator.ts</a></b></td>
												<td>- This TypeScript file, located within the database infrastructure of the project, defines a decorator named `Column`<br>- This decorator is used to annotate properties in models with metadata about their column attributes such as name, type, default value, whether it's generated or nullable<br>- In essence, it helps structure and manage database schema definitions within the application.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/decorators/entity.decorator.ts'>entity.decorator.ts</a></b></td>
												<td>- The `backend/src/infra/database/decorators/entity.decorator.ts` file is a metadata decorator that assigns table names to classes within the project architecture<br>- This facilitates seamless interaction between the application's entities and the underlying database, ensuring proper data organization and efficient querying.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>config</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/config/drizzle.config.ts'>drizzle.config.ts</a></b></td>
												<td>- The provided configuration file, `drizzle.config.ts`, sets up the database connection and configuration for the project using Drizzle ORM (Object-Relational Mapping) in a PostgreSQL environment<br>- It specifies the URL for the database, output directory for migrations, schema location, and casing style<br>- This ensures seamless interaction between the application and the database throughout the project.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>migrations</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/migrations/0000_create-initial-tables.sql'>0000_create-initial-tables.sql</a></b></td>
												<td>- In the provided project structure, the SQL file at `backend/src/infra/database/migrations/0000_create-initial-tables.sql` establishes and configures two core tables: 'users' and 'user_codes'<br>- These tables serve as the foundation for user management and code handling within the application, ensuring unique email addresses and proper data organization.</td>
											</tr>
											</table>
											<details>
												<summary><b>meta</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/migrations/meta/0000_snapshot.json'>0000_snapshot.json</a></b></td>
														<td>- This JSON file initializes the database schema for the project, defining tables for 'users' and 'user_codes'<br>- The 'users' table stores user email addresses and timestamps, while the 'user_codes' table associates unique codes with users<br>- The schema ensures data integrity through primary keys, unique constraints, and foreign keys<br>- This setup facilitates user authentication and management within the application.</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/database/migrations/meta/_journal.json'>_journal.json</a></b></td>
														<td>- This JSON file within the project's database infrastructure migrates the PostgreSQL database schema to its initial state, version 7, by creating the necessary tables<br>- The migration process is tracked and can be paused or resumed using breakpoints.</td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>http</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/index.ts'>index.ts</a></b></td>
										<td>- The 'backend/src/infra/http/index.ts' file serves as a central configuration point for the application's HTTP infrastructure<br>- It imports and registers controllers, validations, and middlewares, such as the CreateUserController, LoggerMiddleware, and CreateUserValidation respectively<br>- This setup facilitates handling user-related requests and logging within the overall system architecture.</td>
									</tr>
									</table>
									<details>
										<summary><b>server</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/server/server.ts'>server.ts</a></b></td>
												<td>- This server class initializes and manages a NestJS application, enabling the integration of controllers, middlewares, error handlers, and modules<br>- It facilitates the creation of an Express-based web server, handling requests and responses while providing essential features like CORS and graceful shutdown upon receiving specific signals.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>controllers</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/controllers/create-user.controller.ts'>create-user.controller.ts</a></b></td>
												<td>- The provided TypeScript file, located at `backend/src/infra/http/controllers/create-user.controller.ts`, serves as a controller in the NestJS framework for creating new users within the application<br>- It utilizes the CreateUserUseCase to validate and process user creation requests, returning a status of 'CREATED' upon successful execution<br>- This is part of a larger architecture that manages user data within the system.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>interfaces</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/interfaces/status.enum.ts'>status.enum.ts</a></b></td>
												<td>This `HttpStatusCode` enum within the project's infrastructure layer defines a set of standard HTTP status codes used across the application, ensuring consistent error handling and response messaging in the backend.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/interfaces/validation.interface.ts'>validation.interface.ts</a></b></td>
												<td>- The `validation.interface.ts` file within the backend infrastructure defines a type-safe validation interface, `IValidation`, for handling data validation across the application<br>- This abstraction ensures consistent and robust input validation, enhancing overall data integrity in the system.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/interfaces/controller.interface.ts'>controller.interface.ts</a></b></td>
												<td>- The provided TypeScript interface file within the backend infrastructure's HTTP layer defines a standard contract for controller functions<br>- This contract, encompassing `IRequest` and `IResponse`, ensures uniform data handling across all controllers in the application, promoting consistency and maintainability.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/interfaces/message.enum.ts'>message.enum.ts</a></b></td>
												<td>This file defines a set of predefined HTTP response messages within the project's infrastructure layer, facilitating consistent error handling and status reporting across the backend services.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/interfaces/response.interface.ts'>response.interface.ts</a></b></td>
												<td>- The `response.interface.ts` file within the backend's infrastructure defines a type `IResponse`, which encapsulates an HTTP response structure<br>- This interface allows for consistent handling and formatting of responses across the entire application, ensuring a uniform user experience.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/interfaces/request.interface.ts'>request.interface.ts</a></b></td>
												<td>- In the provided project structure, the `request.interface.ts` file within the backend's source code (`backend/src/infra/http/interfaces`) defines a type `IRequest`<br>- This type serves as a blueprint for incoming HTTP requests by specifying their possible properties such as body, parameters, query string, and headers<br>- This standardization ensures consistent handling of request data across the application architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>middlewares</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/middlewares/http-error.middleware.ts'>http-error.middleware.ts</a></b></td>
												<td>- This file, located within the backend's infrastructure and HTTP middlewares, handles custom error responses for HTTP errors in our application<br>- By implementing an exception filter, it ensures that when an HTTPError occurs, a structured JSON response is returned to the client, including the status code, message, and the requested path<br>- This contributes to maintaining a clean and consistent API interface across our project.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/middlewares/logger.middleware.ts'>logger.middleware.ts</a></b></td>
												<td>- The provided file is a middleware (LoggerMiddleware) within the backend infrastructure of the project<br>- Its purpose is to log HTTP requests and responses, capturing essential details such as method, URL, status code, headers, and body content<br>- This logging helps in debugging, monitoring, and understanding the application's behavior and performance.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>validations</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/validations/_validation.ts'>_validation.ts</a></b></td>
												<td>- This abstract class, located within the backend's infrastructure and HTTP validations module, serves to validate input data within the application<br>- By leveraging Zod for schema validation, it ensures that incoming data adheres to the expected structure, preventing potential errors and maintaining the integrity of the system.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/http/validations/create-user.validation.ts'>create-user.validation.ts</a></b></td>
												<td>- In the provided file, a validation function is implemented to ensure user input data adheres to specific rules before processing<br>- This validation function, located within the 'backend/src/infra/http' directory, focuses on email validation for new user creation<br>- The implementation leverages the Zod library and NestJS for a robust and efficient validation process in our application architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>types</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/types/class-like.interface.ts'>class-like.interface.ts</a></b></td>
										<td>- The `class-like.interface.ts` file within the backend's infrastructure types defines a generic interface named `ClassLike`<br>- This interface serves as a type constraint for constructors, enabling the creation of objects with specific types in a manner similar to ES6 classes, thereby enhancing type safety and consistency across the project architecture.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>services</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/index.ts'>index.ts</a></b></td>
										<td>- This TypeScript file within the backend infrastructure of the project configures various services<br>- It imports and registers EmailQueueService, CryptoHashService, NodeMailerService, EmailQueueProcessor, IEmailConfig, IEmailService, IHashService, ITokenService, and JwtTokenService for dependency injection<br>- These services facilitate email processing, hashing, token management, and more, contributing to the overall functionality of handling user interactions and data processing in the application.</td>
									</tr>
									</table>
									<details>
										<summary><b>queues</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/queues/index.ts'>index.ts</a></b></td>
												<td>- The provided TypeScript file configures a BullMQ queue system within the project's backend infrastructure<br>- This setup enables asynchronous task processing, primarily for email-related tasks in this instance, by connecting to a Redis server and providing an interface for monitoring queues via BullBoard.</td>
											</tr>
											</table>
											<details>
												<summary><b>email</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/queues/email/email-queue.input.ts'>email-queue.input.ts</a></b></td>
														<td>- The `email-queue.input.ts` file within the backend infrastructure defines the input structure for email queue services<br>- This input is based on the email configuration object, enabling efficient handling and dispatching of emails in the system<br>- It aligns with the overall project architecture by facilitating seamless communication between the domain layer (email service) and the infrastructure layer (queues).</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/queues/email/email-queue.service.ts'>email-queue.service.ts</a></b></td>
														<td>- The `EmailQueueService` within the project's backend infrastructure is responsible for managing email queues asynchronously<br>- It utilizes a BullMQ queue to store and process email sending tasks, ensuring reliable delivery with retry mechanisms in case of failures<br>- This service contributes to the overall system by handling email-related tasks efficiently, improving application responsiveness and reducing potential overload during high traffic periods.</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/queues/email/email-queue.processor.ts'>email-queue.processor.ts</a></b></td>
														<td>- The provided file is part of an email queue processing service within the project's infrastructure<br>- It handles incoming emails by receiving data from the email queue, preparing the necessary information (to, subject, template, replacements), and delegating the actual sending process to the EmailService<br>- This architecture ensures efficient management and delivery of emails in a scalable manner.</td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
									<details>
										<summary><b>token</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/token/token.service.ts'>token.service.ts</a></b></td>
												<td>- The `JwtTokenService` within the project's backend infrastructure implements a token service using JSON Web Tokens (JWT)<br>- This service is responsible for creating, verifying, and decoding JWTs, ensuring secure authentication and authorization across the application.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>hash</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/hash/hash.service.ts'>hash.service.ts</a></b></td>
												<td>- The `hash.service.ts` file within the backend infrastructure of this project provides a hashing service using cryptographic methods, primarily for generating random strings and hashing input values<br>- This service is crucial for ensuring data integrity and security across various operations in the application.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>emails</b></summary>
										<blockquote>
											<details>
												<summary><b>mailers</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/emails/mailers/node-mailer.service.ts'>node-mailer.service.ts</a></b></td>
														<td>- The NodeMailerService file within the backend infrastructure serves as an email service implementation using nodemailer and Pug templates<br>- It enables sending customized emails with dynamic content, utilizing environment variables for configuration such as SMTP settings, sender address, and recipient list<br>- This service is integral to the application's communication functionality by facilitating notifications via email.</td>
													</tr>
													</table>
												</blockquote>
											</details>
											<details>
												<summary><b>templates</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/emails/templates/confirmation-code.pug'>confirmation-code.pug</a></b></td>
														<td>- This PUG template file within the project's backend infrastructure serves to generate an email confirmation message<br>- The message contains a unique code sent to the user upon request, such as account activation or password reset<br>- The purpose is to ensure the authenticity of the user's action and prevent unauthorized access.</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/emails/templates/_head.pug'>_head.pug</a></b></td>
														<td>- In the project structure, the backend/src/infra/services/emails/templates/_head.pug file sets up the fundamental layout for email templates<br>- It establishes essential meta tags and includes global CSS styles, ensuring consistent presentation across all emails sent from the system<br>- This contributes to a seamless user experience by maintaining branding and formatting standards.</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/infra/services/emails/templates/_global.css'>_global.css</a></b></td>
														<td>- This CSS file within the project's backend infrastructure serves to standardize the visual style of emails sent from the application<br>- It defines common classes for layout, typography, and styling, ensuring a consistent look across all email templates.</td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>domain</b></summary>
						<blockquote>
							<details>
								<summary><b>entities</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/entities/user-code.entity.ts'>user-code.entity.ts</a></b></td>
										<td>- In the provided project structure, the `UserCode` entity defined within `backend/src/domain/entities/user-code.entity.ts` serves to model user authentication codes in the system<br>- This class extends a base entity and is mapped to the 'user_codes' database table, ensuring consistent data handling across the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/entities/user.entity.ts'>user.entity.ts</a></b></td>
										<td>- In the provided project structure, the `UserEntity.ts` file within the 'backend/src/domain/entities' folder defines a User entity class that extends the BaseEntity<br>- This User entity represents a user in the system, with properties such as id, email, creation and update timestamps, and a deletion timestamp<br>- The purpose of this code is to manage and store user data within the application's domain layer.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/entities/_base.entity.ts'>_base.entity.ts</a></b></td>
										<td>- The provided TypeScript file defines an abstract class `BaseEntity` within the project's domain layer<br>- This class serves as a base for other entities, providing a standard structure and common methods such as creating instances, copying values, and checking equality between instances<br>- By leveraging this base entity, the codebase ensures consistency across all entities while simplifying their creation and manipulation.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>errors</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/errors/http.error.ts'>http.error.ts</a></b></td>
										<td>- In the provided project structure, the `backend/src/domain/errors/http.error.ts` file defines a custom error class, `HttpError`, which is used to handle HTTP errors within the application<br>- This class allows for structured error responses with status codes and messages, enhancing the system's error handling capabilities and ensuring consistent communication of error information to clients.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/errors/conflict.error.ts'>conflict.error.ts</a></b></td>
										<td>- In the provided project structure, the `backend/src/domain/errors/conflict.error.ts` file defines a custom error class called `ConflictError`<br>- This class extends an existing `HttpError` class and is used to handle conflict situations in the application, adhering to HTTP status code 409 (Conflict)<br>- The purpose of this file is to ensure consistent and meaningful error handling across the entire backend architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/errors/not-found.error.ts'>not-found.error.ts</a></b></td>
										<td>- In the provided project structure, the `backend/src/domain/errors/not-found.error.ts` file defines a custom error class, `NotFoundError`, which extends an existing `HttpError`<br>- This custom error is utilized to handle not found scenarios within the application's domain layer, ensuring consistent and appropriate responses when resources cannot be located.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/errors/bad-request.error.ts'>bad-request.error.ts</a></b></td>
										<td>- In the provided project structure, the `backend/src/domain/errors/bad-request.error.ts` file defines a custom error class, `BadRequestError`, which extends an existing `HttpError`<br>- This custom error is specifically designed to handle bad request scenarios within the application, providing a clear and consistent way to manage and communicate such errors in the system.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>repositories</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/repositories/_repository.ts'>_repository.ts</a></b></td>
										<td>- The provided TypeScript file, located within the domain repositories of the backend, outlines an abstract interface named `IRepository`<br>- This interface serves as a blueprint for defining data access operations (create, exist, get id) across various entities in the system<br>- By standardizing these operations, it ensures consistency and maintainability throughout the project's data layer.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/repositories/user.repository.ts'>user.repository.ts</a></b></td>
										<td>- The 'user.repository.ts' file within the project structure defines an abstract interface (IUserRepository) for managing user data in the backend domain<br>- This interface includes methods to create, check email registration, and retrieve user ID by email, ensuring a consistent approach to user repository interactions across the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/repositories/user-code.repository.ts'>user-code.repository.ts</a></b></td>
										<td>- In the project architecture, the `user-code.repository.ts` file within the 'backend/src/domain/repositories' folder serves as an abstract repository interface for managing user code data<br>- This interface defines methods to create and validate user codes, ensuring secure and efficient handling of user authentication processes.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>services</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/services/token.service.ts'>token.service.ts</a></b></td>
										<td>- The `token.service.ts` file within the project's domain layer is responsible for managing and validating authentication tokens<br>- It provides an abstract interface (ITokenService) that defines methods to create, verify, and decode tokens<br>- These functionalities enable secure user authentication across various services in the application architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/services/hash.service.ts'>hash.service.ts</a></b></td>
										<td>- The abstract class `IHashService` within the 'hash.service.ts' file of the project structure serves as a blueprint for implementing hashing functionalities across the backend domain services<br>- It provides two essential methods, `random()` and `hash()`, enabling secure data handling by generating random strings and hashing input values, respectively.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/services/queue.service.ts'>queue.service.ts</a></b></td>
										<td>- The abstract class `IQueueService` within the 'queue.service.ts' file of the project structure serves as a blueprint for implementing queue management services across various data types (T)<br>- This abstraction enables efficient handling and processing of tasks in a queue-like manner, contributing to the overall system's ability to manage workflows effectively.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/src/domain/services/email.service.ts'>email.service.ts</a></b></td>
										<td>- The `email.service.ts` file within the project's backend domain serves as an abstract interface for sending emails<br>- It accepts configurations such as recipient, subject, and email template, and returns a unique ID, preview, and lists of accepted and rejected recipients upon successful execution<br>- This service facilitates communication with users via automated emails, enhancing user engagement and interaction within the application.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>test</b></summary>
				<blockquote>
					<details>
						<summary><b>unity</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/test/unity/data-class.test.ts'>data-class.test.ts</a></b></td>
								<td>- This TypeScript test file within the backend's test suite tests the 'BaseEntity' class from the domain layer<br>- It ensures that instances of this class can be created, copied, and compared correctly, and verifies that using the 'new' operator is not allowed<br>- The BaseEntity serves as a foundation for other entities in the system, providing common functionality such as creation, copying, and comparison.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>integration</b></summary>
						<blockquote>
							<details>
								<summary><b>services</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/test/integration/services/hash.service.test.ts'>hash.service.test.ts</a></b></td>
										<td>- This test file within the project's backend integration services verifies the functionality of the hash service<br>- Specifically, it checks if the hash service can generate random hashes with a specified length, ensuring secure and consistent data handling in the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/test/integration/services/mailer.service.test.ts'>mailer.service.test.ts</a></b></td>
										<td>- This test file within the backend's integration services folder is designed to verify the functionality of the mailer service using NestJS testing framework<br>- It tests the 'EmailService', ensuring it can successfully send an email with specified configurations, such as recipient, subject, and template<br>- The test uses a mock NodeMailerService for this purpose<br>- This process is crucial for maintaining the application's ability to communicate via email effectively.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/test/integration/services/token.service.test.ts'>token.service.test.ts</a></b></td>
										<td>- This file is a test suite for the TokenService within the project's backend integration tests<br>- It verifies the functionality of token decoding, creation, and expiration handling in the provided service architecture<br>- The test suite ensures that the generated tokens can be correctly decoded to retrieve user data and that the tokens have appropriate expiration times.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>usecases</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/test/integration/usecases/create-user.test.ts'>create-user.test.ts</a></b></td>
										<td>- This test file within the backend folder verifies the functionality of the 'CreateUserUseCase' in the project<br>- It ensures that a new user can be created, prevents duplicate users, and checks if a confirmation code is sent upon user creation<br>- The integration tests also set up necessary services and connections for database operations and email services.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/test/integration/usecases/validate-code.test.ts'>validate-code.test.ts</a></b></td>
										<td>- The provided code file, located at `backend/test/integration/usecases/validate-code.test.ts`, is a test suite for the 'ValidateCodeUseCase' in the project<br>- This use case is designed to validate user codes and return a token if the code is valid<br>- It interacts with the database, token service, and other services within the application architecture<br>- The tests ensure that the use case correctly verifies user codes and generates tokens containing correct data.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>config</b></summary>
						<blockquote>
							<details>
								<summary><b>pre-test</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/econome/blob/master/backend/test/config/pre-test/setup.ts'>setup.ts</a></b></td>
										<td>- The provided TypeScript file, located within the backend test configuration folder, initializes and sets up the project environment prior to running tests<br>- It utilizes 'dotenv/config' to load environment variables from a .env file and 'reflect-metadata' for decorating classes with metadata<br>- This ensures consistent and correct functioning of the test suite across different environments.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with econome, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Yarn, Npm


###  Installation

Install econome using one of the following methods:

**Build from source:**

1. Clone the econome repository:
```sh
❯ git clone https://github.com/leandrolid/econome
```

2. Navigate to the project directory:
```sh
❯ cd econome
```

3. Install the project dependencies:


**Using `yarn`**

```sh
❯ yarn install
```




###  Usage
Run econome using the following command:
**Using `yarn`**

```sh
❯ yarn start
```


###  Testing
Run the test suite using the following command:
**Using `yarn`**

```sh
❯ yarn test
```

---

##  Acknowledgments

- This is an ongoing project.

---
