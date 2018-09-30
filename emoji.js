angular.module('myApp', [])
  .controller('myController', function ($scope) {
    $scope.searchText = '';
    $scope.selectedEmoji = '';
    $scope.checkDiv = function () {
      return true;
    };
    console.log($scope.searchText);


    $scope.people = [{
      title: "People",
      name: "laugh-cry",
      code: String.fromCodePoint(0x1f602)
    }, {
      name: "laugh-eye",
      code: String.fromCodePoint(0x1f604)
    }, {
      name: "laugh-smile",
      code: String.fromCodePoint(0x1f603)
    }, {
      name: "glasses",
      code: String.fromCodePoint(0x1f9d0)
    }, {
      name: "laugh-widetheeth",
      code: String.fromCodePoint(0x1f600)
    }, {
      name: "laugh-cry",
      code: String.fromCodePoint(0x1f601)
    }, {
      name: "g",
      code: String.fromCodePoint(0x1f606)
    }, {
      name: "dd",
      code: String.fromCodePoint(0x1f605)
    }, {
      name: "ff",
      code: String.fromCodePoint(0x1f923)
    }];

    $scope.nature = [{
      title: "Nature",
      name: "monkey face",
      code: String.fromCodePoint(0x1f435)
    }, {
      name: "monkey",
      code: String.fromCodePoint(0x1f412)
    }, {
      name: "gorilla",
      code: String.fromCodePoint(0x1f98d)
    }, {
      name: "dog face",
      code: String.fromCodePoint(0x1f436)
    }, {
      name: "dog",
      code: String.fromCodePoint(0x1f429)
    }, {
      name: "wolf face",
      code: String.fromCodePoint(0x1f43a)
    }, {
      name: "fox face",
      code: String.fromCodePoint(0x1f98a)
    }, {
      name: "cat",
      code: String.fromCodePoint(0x1f408)
    }, {
      name: "cat face",
      code: String.fromCodePoint(0x1f431)
    }];

    $scope.food = [{
      title: "Food & Drinks",
      name: "grapes",
      code: String.fromCodePoint(0x1f347)
    }, {
      name: "melon",
      code: String.fromCodePoint(0x1f348)
    }, {
      name: "watermelon",
      code: String.fromCodePoint(0x1f349)
    }, {
      name: "tangerine",
      code: String.fromCodePoint(0x1f34a)
    }, {
      name: "lemon",
      code: String.fromCodePoint(0x1f34b)
    }, {
      name: "pineapple",
      code: String.fromCodePoint(0x1f34d)
    }, {
      name: "red apple",
      code: String.fromCodePoint(0x1f34e)
    }, {
      name: "green apple",
      code: String.fromCodePoint(0x1f34f)
    }, {
      name: "pear",
      code: String.fromCodePoint(0x1f350)
    }];

    $scope.activity = [{
      title: "Activity",
      name: "person getting massage",
      code: String.fromCodePoint(0x1f486)
    }, {
      name: "person getting haircut",
      code: String.fromCodePoint(0x1f487)
    }, {
      name: "person walking",
      code: String.fromCodePoint(0x1f6b6)
    }, {
      name: "person running",
      code: String.fromCodePoint(0x1f3c3)
    }, {
      name: "woman dancing",
      code: String.fromCodePoint(0x1f483)
    }, {
      name: "man dancing",
      code: String.fromCodePoint(0x1f57a)
    }, {
      name: "person fencing",
      code: String.fromCodePoint(0x1f93a)
    }, {
      name: "horse racing",
      code: String.fromCodePoint(0x1f3c7)
    }, {
      name: "skier",
      code: String.fromCodePoint(0x26f7)
    }];

    $scope.travel = [{
      title: "Travel",
      name: "globe showing Europe-Africa",
      code: String.fromCodePoint(0x1f30d)
    }, {
      name: "snow-capped mountain",
      code: String.fromCodePoint(0x1f3d4)
    }, {
      name: "mountain",
      code: String.fromCodePoint(0x26f0)
    }, {
      name: "volcano",
      code: String.fromCodePoint(0x1f30b)
    }, {
      name: "camping",
      code: String.fromCodePoint(0x1f3d5)
    }, {
      name: "beach with umbrella",
      code: String.fromCodePoint(0x1f3d6)
    }, {
      name: "desert",
      code: String.fromCodePoint(0x1f3dc)
    }, {
      name: "desert island",
      code: String.fromCodePoint(0x1f3dd)
    }, {
      name: "national park",
      code: String.fromCodePoint(0x1f3de)
    }];

    $scope.objects = [{
      title: "Objects",
      name: "glasses",
      code: String.fromCodePoint(0x1f453)
    }, {
      name: "sunglasses",
      code: String.fromCodePoint(0x1f576)
    }, {
      name: "necktie",
      code: String.fromCodePoint(0x1f454)
    }, {
      name: "t-shirt",
      code: String.fromCodePoint(0x1f455)
    }, {
      name: "jeans",
      code: String.fromCodePoint(0x1f456)
    }, {
      name: "scarf",
      code: String.fromCodePoint(0x1f9e3)
    }, {
      name: "gloves",
      code: String.fromCodePoint(0x1f9e4)
    }, {
      name: "coat",
      code: String.fromCodePoint(0x1f9e5)
    }, {
      name: "socks",
      code: String.fromCodePoint(0x1f9e6)
    }];

    $scope.symbols = [{
      title: "Symbols",
      name: "ATM sign",
      code: String.fromCodePoint(0x1f3e7)
    }, {
      name: "litter in bin sign",
      code: String.fromCodePoint(0x1f6ae)
    }, {
      name: "potable water",
      code: String.fromCodePoint(0x1f6b0)
    }, {
      name: "water closet",
      code: String.fromCodePoint(0x1f6be)
    }, {
      name: "wheelchair symbol",
      code: String.fromCodePoint(0x267f)
    }, {
      name: "men's room",
      code: String.fromCodePoint(0x1f6b9)
    }, {
      name: "women’s room",
      code: String.fromCodePoint(0x1f6ba)
    }, {
      name: "restroom",
      code: String.fromCodePoint(0x1f6bb)
    }, {
      name: "baby symbol",
      code: String.fromCodePoint(0x1f6bc)
    }];

    $scope.flags = [{
        title: 'Flags',
        name: 'flag: Ascension Island',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1e8))
      },
      {
        name: 'flag: Andorra',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1e9))
      },
      {
        name: 'flag: United Arab Emirates',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1ea))
      },
      {
        name: 'flag: Afghanistan',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1eb))
      },
      {
        name: 'flag: Antigua & Barbuda',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1ec))
      },
      {
        name: 'flag: Anguilla',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1ee))
      },
      {
        name: 'flag: Albania',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1f1))
      },
      {
        name: 'flag: Armenia',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1f2))
      },
      {
        name: 'flag: Angola',
        code: (String.fromCodePoint(0x1f1e6) + String.fromCodePoint(0x1f1f4))
      }
    ];

  });