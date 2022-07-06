CREATE MIGRATION m1rjmmjge7q4ufvq7edv7guetlpuha6ua7fyhurn2jbwp6mwaiywpq
    ONTO m1onvgwprtkcy3cm6rjeamv6oy7cdajl5h4dcoeee3hbjwj4lbsy3a
{
  DROP TYPE default::Account;
  ALTER TYPE default::Person {
      DROP LINK filmography;
  };
  ALTER TYPE default::Media RENAME TO default::Content;
  ALTER TYPE default::Content {
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Movie {
      CREATE LINK director -> default::Person;
  };
  ALTER TYPE default::Person {
      CREATE MULTI LINK directed := (.<director[IS default::Movie]);
      CREATE MULTI LINK acted_in := (.<cast[IS default::Content]);
  };
  ALTER TYPE default::TVShow {
      ALTER PROPERTY number_of_seasons {
          RENAME TO num_seasons;
      };
  };
};
