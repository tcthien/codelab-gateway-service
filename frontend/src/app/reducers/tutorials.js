const initialTutorialsState = [
  {
    id: 0,
    title: 'Java Collection Framework - List',
    alias: 'java-collection-framework-list',
    category: 'Java',
    author: 'Thien Tran',
    totalLength: 20,
    steps: [
      {
        title: 'Setup Environment',
        description: 'This step showing how to setup environment to practice java collection framework',
        length: 5
      }, {
        title: 'Introduction',
        description: 'This step showing some summary about Java Collection Framework',
        length: 10
      }, {
        title: 'List',
        description: 'This step showing some summary about Java Collection Framework - list',
        length: 5
      }
    ]
  }, {
    id: 1,
    title: 'Java Collection Framework - Map',
    alias: 'java-collection-framework-map',
    category: 'Java',
    author: 'Thien Tran',
    totalLength: 20,
    steps: [
      {
        title: 'Setup Environment',
        description: 'This step showing how to setup environment to practice java collection framework',
        length: 5
      }, {
        title: 'Introduction',
        description: 'This step showing some summary about Java Collection Framework',
        length: 10
      }, {
        title: 'Map',
        description: 'This step showing some summary about Java Collection Framework - Map',
        length: 5
      }
    ]
  }, {
    id: 2,
    title: 'Java Collection Framework - Set',
    alias: 'java-collection-framework-set',
    category: 'Java',
    author: 'Thien Tran',
    totalLength: 20,
    steps: [
      {
        title: 'Setup Environment',
        description: 'This step showing how to setup environment to practice java collection framework',
        length: 5
      }, {
        title: 'Introduction',
        description: 'This step showing some summary about Java Collection Framework',
        length: 10
      }, {
        title: 'set',
        description: 'This step showing some summary about Java Collection Framework - set',
        length: 5
      }
    ]
  }, {
    id: 3,
    title: 'Java Collection Framework - TreeSet',
    alias: 'java-collection-framework-treeset',
    category: 'Java',
    author: 'Thien Tran',
    totalLength: 20,
    steps: [
      {
        title: 'Setup Environment',
        description: 'This step showing how to setup environment to practice java collection framework',
        length: 5
      }, {
        title: 'Introduction',
        description: 'This step showing some summary about Java Collection Framework',
        length: 10
      }, {
        title: 'TreeSet',
        description: 'This step showing some summary about Java Collection Framework - TreeSet',
        length: 5
      }
    ]
  }
];

function tutorials(state, action, initDummy) {
  if (initDummy !== null) {
    state = initialTutorialsState;
    return state;
  }
  switch (action.type) {
    case FIND_TUTORIAL:
      return [
        ...state
      ];

    default:
      return state;
  }
}
