CREATE MIGRATION m1onvgwprtkcy3cm6rjeamv6oy7cdajl5h4dcoeee3hbjwj4lbsy3a
    ONTO m132lysysnyhfcih5gqaayce4ogxhdketuouhjnkql76tkntkmneoq
{
  ALTER TYPE default::Media {
      ALTER PROPERTY title {
          SET REQUIRED USING ('');
      };
  };
  ALTER TYPE default::Person {
      CREATE LINK filmography := (.<cast[IS default::Media]);
  };
};
