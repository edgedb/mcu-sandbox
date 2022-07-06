import * as edgedb from 'edgedb';
import e from './dbschema/edgeql-js';

const characterNames: Record<string, string> = {
  'Robert Downey Jr.': 'Iron Man',
  'Chris Evans': 'Captain America',
  'Mark Ruffalo': 'The Hulk',
  'Jeremy Renner': 'Hawkeye',
  'Tom Holland': 'Spider-Man',
  'Scarlett Johansson': 'Black Widow',
  'Florence Pugh': 'Yelena Belova',
  'Chris Hemsworth': 'Thor',
  'Anthony Mackie': 'The Falcon',
  'Tessa Thomson': 'Valkyrie',
  'Paul Rudd': 'Ant-Man',
  'Evangeline Lilly': 'The Wasp',
  'Benedict Cumberbatch': 'Doctor Strange',
  'Chadwick Boseman': 'Black Panther',
  'Elizabeth Olsen': 'Scarlet Witch',
  'Aaron Taylor-Johnson': 'Quicksilver',
  'Paul Bettany': 'Vision',
  'Brie Larson': 'Captain Marvel',
  'Don Cheadle': 'War Machine',
  'Dave Bautista': 'Drax',
  'Zoe Saldana': 'Gamora',
  'Chris Pratt': 'Star-Lord',
  'Bradley Cooper': 'Rocket',
  'Karen Gillan': 'Nebula',
  'Vin Diesel': 'Groot',
  'Michael Rooker': 'Yondu',
  'Pom Klementieff': 'Mantis',
  'Samuel L. Jackson': 'Nick Fury',
  'Ray Winstone': 'General Dreykov',
  'Salma Hayek': 'Ajak',
  'Gemma Chan': 'Sersi',
  'Richard Madden': 'Ikaris',
  'Kumail Nanjiani': 'Kingo',
  'Lia McHugh': 'Sprite',
  'Brian Tyree Henry': 'Phastos',
  'Lauren Ridloff': 'Makkari',
  'Barry Keoghan': 'Druig',
  'Don Lee': 'Gilgamesh',
  'Angelina Jolie': 'Thena',
  'Kit Harington': 'Black Knight',
  'Danai Durira': 'Okoye',
  'Letitia Wright': 'Shuri',
  'Benedict Wong': 'Wong',
  'Simu Liu': 'Shang Chi',
  'Sam Rockwell': 'Justin Hammer',
  'Mickey Rourke': 'Whiplash',
  'Tom Hiddleston': 'Loki',
  'Tim Roth': 'Abomination',
  'Hugo Weaving': 'Red Skull',
  'Ben Kingsley': 'The Mandarin',
  'Gu Pearce': 'Aldrich Killian',
  'Chris Eccleston': 'Malekith',
  'Sebastian Stan': 'The Winter Soldier',
  'Lee Pace': 'Ronin the Accuser',
  'James Spader': 'Ultron',
  'Daniel Bruhl': 'Zemo',
  'Mads Mikkelsen': 'Kaecilius',
  'Kurt Russell': 'Ego',
  'Michael Keaton': 'The Vulture',
  'Bokeem Woodbine': 'Shocker',
  'Michael Chernus': 'Tinkerer',
  'Cate Blanchett': 'Hela',
  'Michael B. Jordan': 'Killmonger',
  'Josh Brolin': 'Thanos',
  'RaeLynn BrattenXXX': 'Ghost',
  'Jude Law': 'Yon-Rogg',
  'Jake Gyllenhaal': 'Mysterio',
  'Olga Kurylenko': 'Taskmaster',
  'Alfred Molina': 'Doc Ock',
  'Willem Dafoe': 'Green Goblin',
  'Jamie Foxx': 'Electro',
  'Thomas Haden Church': 'Sandman',
  'Rhys Ifans': 'The Lizard',
  'Kathryn Hahn': 'Agatha Harkness',
  'Owen Wilson': 'Mobius',
  'Sophia Di Martino': 'Sylvie',
  'Jonathan Majors': 'Kang',
  'Erin Kellyman': 'Karli Morgenthau',
  'Wyatt Russell': 'U.S. Agent',
  'Hailee Steinfeld': 'Kate Bishop',
  'Oscar Isaac': 'Moon Knight',
  'Ethan Hawke': 'Arthur Harrow',
  'Iman Vellani': 'Ms. Marvel',
};

const fullMovies = [
  {title: 'Iron Man', release_year: 2008, characters: ['Iron Man']},
  {
    title: 'The Incredible Hulk',
    release_year: 2008,
    characters: ['The Hulk', 'Abomination'],
  },
  {
    title: 'Iron Man 2',
    release_year: 2010,
    characters: ['Iron Man', 'Black Widow', 'Justin Hammer', 'Whiplash'],
  },
  {title: 'Thor', release_year: 2010, characters: ['Thor', 'Loki']},
  {
    title: 'Captain America: The First Avenger',
    release_year: 2011,
    characters: ['Captain America', 'Red Skull'],
  },
  {
    title: 'The Avengers',
    release_year: 2012,
    characters: [
      'Iron Man',
      'Thor',
      'Captain America',
      'Hawkeye',
      'Black Widow',
      'The Hulk',
      'Loki',
    ],
  },
  {
    title: 'Iron Man 3',
    release_year: 2013,
    characters: ['Iron Man', 'The Mandarin', 'Aldrich Killian'],
  },
  {
    title: 'Thor: The Dark World',
    release_year: 2013,
    characters: ['Thor', 'Loki', 'Malekith'],
  },
  {
    title: 'Captain America: The Winter Soldier',
    release_year: 2014,
    characters: [
      'Captain America',
      'The Winter Soldier',
      'Black Widow',
      'Nick Fury',
    ],
  },
  {
    title: 'Guardians of the Galaxy',
    release_year: 2014,
    characters: [
      'Drax',
      'Gamora',
      'Star-Lord',
      'Rocket',
      'Nebula',
      'Groot',
      'Yondu',
      'Ronin the Accuser',
    ],
  },
  {
    title: 'Avengers: Age of Ultron',
    release_year: 2015,
    characters: [
      'Iron Man',
      'Thor',
      'Captain America',
      'Hawkeye',
      'Black Widow',
      'The Hulk',
      'Scarlet Witch',
      'Quicksilver',
      'Ultron',
      'Nick Fury',
      'Vision',
    ],
  },
  {title: 'Ant-Man', release_year: 2015, characters: ['Ant-Man']},
  {
    title: 'Captain America: Civil War',
    release_year: 2016,
    characters: [
      'Captain America',
      'Iron Man',
      'Black Widow',
      'Hawkeye',
      'Spider-Man',
      'The Winter Soldier',
      'Ant-Man',
      'Nick Fury',
      'Vision',
      'The Falcon',
      'Scarlet Witch',
      'Black Panther',
      'War Machine',
      'Zemo',
    ],
  },
  {
    title: 'Doctor Strange',
    release_year: 2016,
    characters: ['Doctor Strange', 'Wong', 'Kaecilius'],
  },
  {
    title: 'Guardians of the Galaxy Vol. 2',
    release_year: 2017,
    characters: [
      'Drax',
      'Gamora',
      'Star-Lord',
      'Rocket',
      'Nebula',
      'Groot',
      'Ego',
      'Mantis',
      'Yondu',
    ],
  },
  {
    title: 'Spider-Man: Homecoming',
    release_year: 2017,
    characters: [
      'Spider-Man',
      'Iron Man',
      'The Vulture',
      'Shocker',
      'Tinkerer',
    ],
  },
  {
    title: 'Thor: Ragnarok',
    release_year: 2017,
    characters: ['Thor', 'Valkyrie', 'Loki', 'Hela'],
  },
  {
    title: 'Black Panther',
    release_year: 2018,
    characters: ['Black Panther', 'Shuri', 'Okoye', 'Killmonger'],
  },
  {
    title: 'Avengers: Infinity War',
    release_year: 2018,
    characters: [
      'Iron Man',
      'Thanos',
      'Thor',
      'Captain America',
      'Doctor Strange',
      'Wong',
      'Scarlet Witch',
      'Vision',
      'Nebula',
      'Black Panther',
      'Okoye',
      'Shuri',
      'The Falcon',
      'The Hulk',
      'The Winter Soldier',
      'Black Widow',
      'Spider-Man',
      'Star-Lord',
      'Gamora',
      'Mantis',
      'Rocket',
      'Groot',
      'Drax',
      'War Machine',
      'Loki',
    ],
  },
  {
    title: 'Ant-Man and the Wasp',
    release_year: 2018,
    characters: ['Ant-Man', 'The Wasp', 'Ghost'],
  },
  {
    title: 'Captain Marvel',
    release_year: 2019,
    characters: ['Captain Marvel', 'Nick Fury', 'Yon-Rogg'],
  },
  {
    title: 'Avengers: Endgame',
    release_year: 2019,
    characters: [
      'Ant-Man',
      'The Wasp',
      'Captain Marvel',
      'Hawkeye',
      'Iron Man',
      'Thanos',
      'Thor',
      'Captain America',
      'Doctor Strange',
      'Wong',
      'Scarlet Witch',
      'Vision',
      'Nebula',
      'Black Panther',
      'Okoye',
      'Shuri',
      'The Falcon',
      'The Hulk',
      'The Winter Soldier',
      'Black Widow',
      'Spider-Man',
      'Star-Lord',
      'Gamora',
      'Mantis',
      'Rocket',
      'Groot',
      'Drax',
      'War Machine',
      'Loki',
      'Valkyrie',
    ],
  },
  {
    title: 'Spider-Man: Far From Home',
    release_year: 2019,
    characters: ['Spider-Man', 'Mysterio', 'Nick Fury'],
  },
  {
    title: 'Black Widow',
    release_year: 2021,
    characters: [
      'Black Widow',
      'Yelena Belova',
      'Taskmaster',
      'General Dreykov',
    ],
  },
  {
    title: 'Shang Chi and the Legend of the Ten Rings',
    release_year: 2021,
    characters: ['Shang Chi', 'The Mandarin'],
  },
  {
    title: 'Eternals',
    release_year: 2021,
    characters: [
      'Ajak',
      'Sersi',
      'Ikaris',
      'Kingo',
      'Sprite',
      'Phastos',
      'Makkari',
      'Druig',
      'Gilgamesh',
      'Thena',
      'Black Knight',
    ],
  },
  {
    title: 'Spider-Man: No Way Home',
    release_year: 2021,
    characters: [
      'Spider-Man',
      'Doc Ock',
      'Green Goblin',
      'Doctor Strange',
      'Electro',
      'Sandman',
      'The Lizard',
    ],
  },
  {
    title: 'Doctor Strange in the Multiverse of Madness',
    release_year: 2021,
    characters: ['Doctor Strange', 'Scarlet Witch', 'Wong'],
  },
];

const tvShows = [
  {
    title: 'WandaVision',
    num_seasons: 1,
    characters: ['Scarlet Witch', 'Vision', 'Agatha Harkness'],
  },
  {
    title: 'The Falcon and the Winter Soldier',
    num_seasons: 1,
    characters: [
      'The Winter Soldier',
      'The Falcon',
      'Zemo',
      'Karli Morgenthau',
      'U.S. Agent',
    ],
  },
  {
    title: 'Loki',
    num_seasons: 1,
    characters: ['Loki', 'Sylvie', 'Kang', 'Mobius'],
  },
  {
    title: 'Hawkeye',
    num_seasons: 1,
    characters: ['Hawkeye', 'Kate Bishop', 'Yelena Belova'],
  },
  {
    title: 'Moon Knight',
    num_seasons: 1,
    characters: ['Moon Knight', 'Arthur Harrow'],
  },
  {
    title: 'Ms. Marvel',
    num_seasons: 1,
    characters: ['Ms. Marvel'],
  },
];

const charToActor: {[k: string]: string} = {};
const actorNames = Object.keys(characterNames);
for (const actor in characterNames) {
  charToActor[characterNames[actor]] = actor;
}

const missing = new Set<string>();
for (const m of fullMovies) {
  for (const c of m.characters) {
    if (!charToActor[c]) missing.add(c);
  }
}

async function run() {
  const client = edgedb.createClient();

  try {
    await e.delete(e.Movie).run(client);
    await e.delete(e.Person).run(client);

    for (const actor of actorNames) {
      await e.insert(e.Person, {name: actor}).run(client);
    }

    for (const movie of fullMovies) {
      console.log(`Creating ${movie.title}...`);
      const actors = movie.characters.map((char) => ({
        actor: charToActor[char],
        char,
      }));

      const newMovie = await e
        .insert(e.Movie, {
          title: movie.title,
          release_year: movie.release_year,
        })
        .run(client);

      for (const actor of actors) {
        const query = e.update(e.Movie, (movie) => ({
          filter: e.op(movie.id, '=', e.uuid(newMovie.id)),
          set: {
            actors: {
              '+=': e.select(e.Person, (person) => ({
                '@character_name': e.str(actor.char),
                filter: e.op(person.name, '=', actor.actor),
              })),
            },
          },
        }));
        await query.run(client);
      }
    }

    for (const show of tvShows) {
      console.log(`Creating ${show.title}...`);
      const actors = show.characters.map((char) => ({
        actor: charToActor[char],
        char,
      }));

      const newShow = await e
        .insert(e.TVShow, {
          title: show.title,
          num_seasons: show.num_seasons,
        })
        .run(client);

      for (const actor of actors) {
        const query = e.update(e.TVShow, (show) => ({
          filter: e.op(show.id, '=', e.uuid(newShow.id)),
          set: {
            actors: {
              '+=': e.select(e.Person, (person) => ({
                '@character_name': e.str(actor.char),
                filter: e.op(person.name, '=', actor.actor),
              })),
            },
          },
        }));
        await query.run(client);
      }
    }

    console.log(`Creating Account testuser...`);
    const createAccount = e.insert(e.Account, {
      username: 'testuser',
      watchlist: e.select(e.Content, (content) => ({
        filter: e.op(
          content.title,
          'in',
          e.set(
            'Moon Knight',
            'Avengers: Endgame',
            'Eternals',
            'Spider-Man: No Way Home'
          )
        ),
      })),
    });
    await e
      .select(createAccount, () => ({id: true, username: true}))
      .run(client);
  } catch (err) {
    console.log(err);
  }

  console.log(`SEEDING COMPLETE.`);
  client.close();
}

run();
