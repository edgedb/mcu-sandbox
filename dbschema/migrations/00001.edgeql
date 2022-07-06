CREATE MIGRATION m132lysysnyhfcih5gqaayce4ogxhdketuouhjnkql76tkntkmneoq
    ONTO initial
{
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY name -> std::str;
  };
  CREATE ABSTRACT TYPE default::Media {
      CREATE MULTI LINK cast -> default::Person {
          CREATE PROPERTY character_name -> std::str;
      };
      CREATE PROPERTY title -> std::str;
  };
  CREATE TYPE default::Account {
      CREATE MULTI LINK watchlist -> default::Media;
      CREATE REQUIRED PROPERTY username -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::Movie EXTENDING default::Media {
      CREATE PROPERTY runtime -> std::duration;
  };
  CREATE TYPE default::TVShow EXTENDING default::Media {
      CREATE PROPERTY number_of_seasons -> std::int64;
  };
};
