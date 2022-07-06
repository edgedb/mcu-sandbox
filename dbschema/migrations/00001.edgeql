CREATE MIGRATION m1reefxg6oxwhwa32vlt5bawj6ajk3kx4m627zsnpcq3uvrkrs43ja
    ONTO initial
{
  CREATE EXTENSION graphql VERSION '1.0';
  CREATE TYPE default::Account {
      CREATE REQUIRED PROPERTY username -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE ABSTRACT TYPE default::Content {
      CREATE REQUIRED PROPERTY title -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Account {
      CREATE MULTI LINK watchlist -> default::Content;
  };
  CREATE TYPE default::Movie EXTENDING default::Content {
      CREATE PROPERTY release_year -> std::int64;
  };
  CREATE TYPE default::TVShow EXTENDING default::Content {
      CREATE PROPERTY num_seasons -> std::int64;
  };
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY name -> std::str;
  };
  ALTER TYPE default::Content {
      CREATE MULTI LINK actors -> default::Person {
          CREATE PROPERTY character_name -> std::str;
      };
  };
  ALTER TYPE default::Movie {
      CREATE LINK director -> default::Person;
  };
  ALTER TYPE default::Person {
      CREATE MULTI LINK acted_in := (.<actors[IS default::Content]);
      CREATE MULTI LINK directed := (.<director[IS default::Movie]);
  };
};
