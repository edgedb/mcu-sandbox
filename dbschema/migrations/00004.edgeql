CREATE MIGRATION m1gqaq6y4abab4wcncj2otq5rkyeq5d6ok3kvpxtzotwlr6ez64nja
    ONTO m1rjmmjge7q4ufvq7edv7guetlpuha6ua7fyhurn2jbwp6mwaiywpq
{
  ALTER TYPE default::Content {
      ALTER LINK cast {
          RENAME TO actors;
      };
  };
};
