import {createClient} from 'edgedb';
import e from './dbschema/edgeql-js';

const client = createClient();

async function run() {
  console.log(`run`);
  const query = e.select(e.Person, (p) => ({
    id: true,
    movies: p['<actors'].is(e.Movie),
  }));

  /* {
    title: string;
    release_year: number | null;
    num_seasons: number | null;
  }[] */

  const result = await query.run(client);
  console.log(result);
  console.log('done');
}

run();
