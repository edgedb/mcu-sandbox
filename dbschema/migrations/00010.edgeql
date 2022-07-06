CREATE MIGRATION m1oo2lm3u6ciw5suu36q6wwzcqpnwlrvp3n55nvcfwucsjz3sjdmaa
    ONTO m1ajuxtgvsr3ijcxajbxs2x6ft6phas32y2dijeo4osspsw3e3nmbq
{
  CREATE TYPE default::Account {
      CREATE MULTI LINK watchlist -> default::Content;
      CREATE REQUIRED PROPERTY username -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
