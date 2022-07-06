# The EdgeDB MCU sandbox 🦹

This is a sandbox for playing with EdgeDB and the EdgeQL query builder.

It includes a simple movie database schema (`dbschema/default.esdl`) and a sample dataset (`seed.ts`) containing the movies and shows in the Marvel Cinematic Universe (last update: July 2022).

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
$ git clone git@github.com:edgedb/mcu-sandbox.git
$ cd mcu-sandbox
```

#### 3. Initialize the EdgeDB project

```bash
edgedb project init
```

Then follow the prompts. This step spins up a local EdgeDB instance and applies the migrations inside `dbschema/migrations`.

#### 4. Setup project

```bash
$ npm run setup
```

Alternatively, you can run each of these commands individually:

```bash
$ npm install
$ npx edgeql-js
$ npx esr seed.ts
```

### 5. Start writing queries!

Write a query in `script.ts` and execute it like so:

```bash
$ npm run dev
```

This starts a watcher, so every time you update and save `script.ts`, the script will be re-run.

## Evolving the schema

1. Update the schema in `dbschema/default.esdl`
2. Generate a new migration with `edgedb migration create`
3. Follow the interactive prompts
4. Apply the migration with `edgedb migrate`
5. Regenerate the query builder with `npx edgeql-js`

## File structure

The sandbox is a simple project designed to showcase the query builder.

- `script.ts` - a simple script you can update to play with the query builder
- `dbschema/default.esdl` - the schema file
- `dbschema/migrations` - the migrations directory
- `dbschema/edgeql-js` - the default location of the generated query builder
