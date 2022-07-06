CREATE MIGRATION m1arqs36cz4kk5gr6vud6y7rq3ihtv3ims27w5jlmbuo7qnrsp4vkq
    ONTO m1gqaq6y4abab4wcncj2otq5rkyeq5d6ok3kvpxtzotwlr6ez64nja
{
  ALTER TYPE default::Content {
      CREATE PROPERTY release_year -> std::int64;
  };
};
