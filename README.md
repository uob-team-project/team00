# teamproject24 template application

This application was generated using JHipster 8.7.3 for the team project 2024-2025 module at the university of Birmingham.

# Team X

TODO:

1. Add your team number above (replace X)

2. Add your name below:

   - Alice S. example@student.bham.ac.uk
   - Bob S. example@student.bham.ac.uk

3. Modify [gdpr-policy.component.html](src/main/webapp/app/gdpr-policy/gdpr-policy.component.html) to add your team number (replace X) and team members to the contact section.

<!-- this is a comment: delete lines TODO: and 1. 2. 3. once done... -->

# Required software

To run the code from this repository requires at least:

- `git` - any modern version - to clone this repository
- `java` JDK v21 - to run the SpringBoot backend
- `node` LTS v20 - to run the Angular frontend and other `npm` commands
- `jhipster` v8.7.3 - to run the JDL code generation
- `docker` - any modern version - to run a dockerised version of the application

There will be a development enviroment provided on the course.

### Install JHipster 8.7.3

After installing node do:

```
npm install -g generator-jhipster@8.7.3
```

### Verify software versions

each of the following commands will help you verify the installation:

````
% git --version
git version 2.39.3 (Apple Git-146)

% java --version
OpenJDK Runtime Environment Temurin-21.0.4+7 (build 21.0.4+7-LTS)
OpenJDK 64-Bit Server VM Temurin-21.0.4+7 (build 21.0.4+7-LTS, mixed mode)```

% node --version
v20.18.1

jhipster --version
8.7.3

% docker --version
Docker version 27.4.0, build bde2b89
````

# Run the application

### Local development with frontend+backend on port 8080 - must restart every code change

In a terminal, `clone` the repo, `cd` into the cloned folder do on linux/mac:

```
./mvnw
```

or Windows:

```
mvnw.cmd
```

This compiles and runs the app. then open a web browser at http://localhost:8080

### For frontend develpment on port 9000 - automatically updated frontend

`npm start`

This compiles and runs the frontend only, the back end needs to be running. open a web browser at http://localhost:9000 It will show front end changes straight away.

### Docker compose containerised run

In a terminal, `clone` the repo, `cd` into the cloned folder and do:

```
npm run java:docker
```

or for macswith M1 (arm64) chips

```
npm run java:docker:arm64
```

The above will build the production version of the app

and then do:

```
docker compose -f src/main/docker/app.yml up
```

The above will run a local production version of the app on port 8080.

# Changes for team project 2024

Modified by Madasar Shah for Team Project 2024 - 2025 as follows:

### added gdpr policy page

- ran `ng generate component gdpr-policy` to create [gdpr-policy](src/main/webapp/app/gdpr-policy) angular component with a template gdpr policy in [gdpr-policy.component.html](src/main/webapp/app/gdpr-policy/gdpr-policy.component.html)

### updated footer

- [footer.component.html](src/main/webapp/app/layouts/footer/footer.component.html) modified to add the text ` <p><a href="https://team00.bham.team/">Team Project</a> application developed in Birmingham, by a team of students. <a href="/gdpr-policy">Privacy Policy</a></p>`

### removed docker compose from spring

- [application-dev.yml](src/main/resources/config/application-dev.yml) changed `spring: ... docker: compose: enabled: false` as not needed unless you want to run postgres locally in docker

### added ci-cd files for gitlab and github

- [main.yml](.github/workflows/main.yml) for github and [.gitlab-ci.yml](.gitlab-ci.yml) for gitlab

### added deployment scripts and configs

- see the [docker](src/main/docker) folder

# Settings used to generate the application

These settings can also be found in the file [.yo-rc.json](.yo-rc.json)

- `? Which *type* of application would you like to create? Monolithic application (recommended for simple projects) `
- `? What is the base name of your application? teamproject24`
- `? Do you want to make it reactive with Spring WebFlux? No `
- `? What is your default Java package name? bham.team `
- `? Which *type* of authentication would you like to use? JWT authentication (stateless, with a token) `
- `? Which *type* of database would you like to use? SQL (H2, PostgreSQL, MySQL, MariaDB, Oracle, MSSQL) `
- `? Which *production* database would you like to use? PostgreSQL `
- `? Which *development* database would you like to use? H2 with in-memory persistence `
- `? Which cache do you want to use? (Spring cache abstraction) Ehcache (local cache, for a single node) `
- `? Do you want to use Hibernate 2nd level cache? Yes `
- `? Would you like to use Maven or Gradle for building the backend? Maven `
- `? Do you want to use the JHipster Registry to configure, monitor and scale your application? No `
- `? Which other technologies would you like to use? `
- `? Which *Framework* would you like to use for the client? Angular `
- `? Do you want to generate the admin UI? Yes ? Would you like to use a Bootswatch theme (https://bootswatch.com/)? Materia `
- `? Choose a Bootswatch variant navbar theme (https://bootswatch.com/)? Primary `
- `? Would you like to enable internationalization support? No `
- `? Please choose the native language of the application English `
- `? Besides JUnit and Jest, which testing frameworks would you like to use? `
- `? Would you like to install other generators from the JHipster Marketplace? No`

# Regenerating the application

If you would like to regrenrate the application from scratch, there are some files and folder you should keep:

    .github/*
    .gitlab-ci.yml
    .yo-rc.json
    .git
    README.md

    src/main/docker/Caddyfile
    src/main/docker/caddy.yml
    src/main/docker/dev.yml
    src/main/docker/install-app.sh
    src/main/docker/install-docker.sh
    src/main/docker/prd.yml

    src/main/webapp/app/gdpr-policy/*

    src/main/resources/config/application-dev.yml

    src/main/webapp/app/app.routes.ts
    src/main/webapp/app/layouts/footer/footer.component.html

delete all the other files and run:

`jhipster`

# Documentation

You can find documentation and help at [https://www.jhipster.tech/documentation-archive/v8.7.3](https://www.jhipster.tech/documentation-archive/v8.7.3).

## Project Structure

Node is required for generation and recommended for development. `package.json` is always generated for a better development experience with prettier, commit hooks, scripts and so on.

In the project root, JHipster generates configuration files for tools like git, prettier, eslint, husky, and others that are well known and you can find references on the web.

`/src/*` structure follows default Java structure.

- `.yo-rc.json` - Yeoman configuration file
  JHipster configuration is stored in this file at `generator-jhipster` key. You may find `generator-jhipster-*` for specific blueprints configuration.
- `.yo-resolve` (optional) - Yeoman conflict resolver
  Allows to use a specific action when conflicts are found skipping prompts for files that matches a pattern. Each line should match `[pattern] [action]` with pattern been a [Minimatch](https://github.com/isaacs/minimatch#minimatch) pattern and action been one of skip (default if omitted) or force. Lines starting with `#` are considered comments and are ignored.
- `.jhipster/*.json` - JHipster entity configuration files

- `npmw` - wrapper to use locally installed npm.
  JHipster installs Node and npm locally using the build tool by default. This wrapper makes sure npm is installed locally and uses it avoiding some differences different versions can cause. By using `./npmw` instead of the traditional `npm` you can configure a Node-less environment to develop or test your application.
- `/src/main/docker` - Docker configurations for the application and services that the application depends on

## Development

The build system will install automatically the recommended version of Node and npm.

We provide a wrapper to launch npm.
You will only need to run this command when dependencies change in [package.json](package.json).

```
./npmw install
```

We use npm scripts and [Angular CLI][] with [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

```
./mvnw
./npmw start
```

Npm is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `./npmw update` and `./npmw install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `./npmw help update`.

The `./npmw run` command will list all the scripts available to run for this project.

### PWA Support

JHipster ships with PWA (Progressive Web App) support, and it's turned off by default. One of the main components of a PWA is a service worker.

The service worker initialization code is disabled by default. To enable it, uncomment the following code in `src/main/webapp/app/app.config.ts`:

```typescript
ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
```

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

```
./npmw install --save --save-exact leaflet
```

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

```
./npmw install --save-dev --save-exact @types/leaflet
```

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Edit [src/main/webapp/app/app.config.ts](src/main/webapp/app/app.config.ts) file:

```
import 'leaflet/dist/leaflet.js';
```

Edit [src/main/webapp/content/scss/vendor.scss](src/main/webapp/content/scss/vendor.scss) file:

```
@import 'leaflet/dist/leaflet.css';
```

Note: There are still a few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Using Angular CLI

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

```
ng generate component my-component
```

will generate few files:

```
create src/main/webapp/app/my-component/my-component.component.html
create src/main/webapp/app/my-component/my-component.component.ts
update src/main/webapp/app/app.config.ts
```

## Building for production

### Packaging as jar

To build the final jar and optimize the teamproject24 application for production, run:

```
./mvnw -Pprod clean verify
```

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

```
java -jar target/*.jar
```

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

```
./mvnw -Pprod,war clean verify
```

### Docker Compose support

JHipster generates a number of Docker Compose configuration files in the [src/main/docker/](src/main/docker/) folder to launch required third party services.

For example, to start required services in Docker containers, run:

```
docker compose -f src/main/docker/services.yml up -d
```

To stop and remove the containers, run:

```
docker compose -f src/main/docker/services.yml down
```

[Spring Docker Compose Integration](https://docs.spring.io/spring-boot/reference/features/dev-services.html) is enable by default. It's possible to disable it in application.yml:

```yaml
spring:
  ...
  docker:
    compose:
      enabled: false
```

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a Docker image of your app by running:

```sh
npm run java:docker
```

Or build a arm64 Docker image when using an arm64 processor os like MacOS with M1 processor family running:

```sh
npm run java:docker:arm64
```

Then run:

```sh
docker compose -f src/main/docker/app.yml up -d
```

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the Docker Compose sub-generator (`jhipster docker-compose`), which is able to generate Docker configurations for one or several JHipster applications.

[JHipster Homepage and latest documentation]: https://www.jhipster.tech
[JHipster 8.7.3 archive]: https://www.jhipster.tech/documentation-archive/v8.7.3
[Using JHipster in development]: https://www.jhipster.tech/documentation-archive/v8.7.3/development/
[Using Docker and Docker-Compose]: https://www.jhipster.tech/documentation-archive/v8.7.3/docker-compose
[Using JHipster in production]: https://www.jhipster.tech/documentation-archive/v8.7.3/production/
[Running tests page]: https://www.jhipster.tech/documentation-archive/v8.7.3/running-tests/
[Code quality page]: https://www.jhipster.tech/documentation-archive/v8.7.3/code-quality/
[Setting up Continuous Integration]: https://www.jhipster.tech/documentation-archive/v8.7.3/setting-up-ci/
[Node.js]: https://nodejs.org/
[NPM]: https://www.npmjs.com/
[Webpack]: https://webpack.github.io/
[BrowserSync]: https://www.browsersync.io/
[Jest]: https://facebook.github.io/jest/
[Leaflet]: https://leafletjs.com/
[DefinitelyTyped]: https://definitelytyped.org/
[Angular CLI]: https://cli.angular.io/
