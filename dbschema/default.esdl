using extension graphql;

module default {

  type Franchise {
    required property name -> str;
    multi link entries -> Content;
  }

  abstract type Content {
    required property title -> str { constraint exclusive; };
    multi link actors -> Person {
      property character_name -> str;
    };
  }

  type Movie extending Content {
    link director -> Person;
    property release_year -> int64;
  }

  type TVShow extending Content {
    property num_seasons -> int64;
  }

  type Person {
    required property name -> str;
    multi link acted_in := .<actors[is Content];
    multi link directed := .<director[is Movie];
  }

}

