CREATE MIGRATION m1lcx5emfyajo7byootwibuuytmbisu22fihnjpb7kx5gx4eqjmfba
    ONTO m12nxnnmdyvm3y3dim6fkj3wjrfrs4uflj45af2gwh5q6ggyn2kfpa
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY release_year {
          SET OWNED;
      };
  };
  ALTER TYPE default::Content {
      DROP PROPERTY release_year;
  };
  ALTER TYPE default::Movie {
      ALTER PROPERTY release_year {
          RESET readonly;
          RESET CARDINALITY;
          SET TYPE std::int64;
      };
  };
  ALTER TYPE default::Movie {
      DROP PROPERTY runtime;
  };
};
