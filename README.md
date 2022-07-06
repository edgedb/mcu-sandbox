# The EdgeDB MCU sandbox

This is a sandbox for playing with EdgeDB and the EdgeQL query builder. It includes a simple movie database schema (`dbschema/default.esdl`) and a sample dataset (`seed.ts`) containing the movies/shows in the Marvel Cinematic Universe.

## Setup

#### 1. Install the EdgeDB CLI

```bash
# macOS/Linux
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh

# windows
$ iwr https://ps1.edgedb.com -useb | iex
```

#### 2. Clone the repo

```bash
git clone git@github.com:edgedb/mcu-sandbox.git
cd mcu-sandbox
```

#### 3. Initialize the EdgeDB project

```bash
edgedb project init
```

Then follow the prompts. This step spins up a local EdgeDB instance and apply all the migrations inside `dbschema/migrations`.

After the project is initialized, all EdgeDB clients initialized inside the project directory will connect to the newly-created instance automatically—no need for environment variables or hard-coded configuration. ([Read more about projects here.](https://www.edgedb.com/docs/guides/projects))

#### 4. Setup project

```bash
npm run setup
```

The `setup` script is an alias for the following steps, which you can optionally run individually.

```bash
$ npm install
$ npx edgeql-js
$ npx esr seed.ts
```

### 5. Start writing queries!

Start writing some queries in `script.ts`! Then execute it like so:

```bash
npm run dev
```

This starts a watcher, so every time you save `script.ts`, the script will be re-run automatically.

## Playing with the project

The sandbox is a simple project designed to showcase the query builder.

- `script.ts` - a simple script you can update to play with the query builder
- `dbschema/default.esdl` - the schema file
- `dbschema/migrations` - the migrations directory
- `dbschema/edgeql-js` - the default location of the generated query builder

## Evolving the schema

1. Update the schema in `dbschema/default.esdl`
2. Generate a new migration with `edgedb migration create`
3. Follow the interactive prompts
4. Apply the migration with `edgedb migrate`
5. Regenerate the query builder with `npx edgeql-js`
