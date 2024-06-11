// routes is an array of coordinates where each coordinate is an array of two numbers representing the latitude and longitude of a point
// [latitude, longitude] for each point, points are connected and a line is drawn between them
let routes = {
  route: [
    {
      name: "Mercado Tec",
      path: [
        [19.72364, -101.18314],
        [19.72386, -101.18475],
        [19.72407, -101.1848],
        [19.72422, -101.18475],
        [19.72482, -101.18419],
        [19.72582, -101.18352],
      ],
    },
    {
      name: "Mercado Ziracuarendiro",
      path: [
        [
          [19.706911, -101.244468],
          [19.707665, -101.245337],
        ],
        [
          [19.70647, -101.24544],
          [19.70712, -101.24479],
        ],
        [
          [19.70676, -101.24576],
          [19.70741, -101.24509],
        ],
      ],
    },
    {
      name: "Mercado Pedregal",
      path: [
        [
          [19.717226, -101.218212],
          [19.717147, -101.216048],
        ],
        [
          [19.717147, -101.216048],
          [19.715216, -101.215574],
        ],
        [
          [19.715216, -101.215574],
          [19.713625, -101.215684],
        ],
        [
          [19.717147, -101.216048],
          [19.718072, -101.216528],
        ],
        [
          [19.718072, -101.216528],
          [19.722311, -101.223134],
        ],
      ],
    },
    // {
      // name: "Mercado la Colina",
      // path: [
      //   [
      //     [19.710004, -101.215699],
      //     [19.709083, -101.215598],
      //   ],
      // ],
    // },
    {
      name: "Mercado la Guadalupe",
      path: [
        [19.709846, -101.221621],
        [19.712566, -101.22224],
      ],
    },
    {
      name: "Tianguis de la San Rafael",
      path: [
        [19.70108, -101.15533],
        [19.70165, -101.15239],
      ],
    },
    {
      name: "Tianguis del Infonavit",
      path: [
        [19.69879, -101.15925],
        [19.69921, -101.15921],
      ],
    },
    {
      name: "Tianguis de la Insurgentes",
      path: [
        [19.69535, -101.15497],
        [19.69733, -101.15479],
        [19.69836, -101.15462],
      ],
    },
    // {
    //   name: "Tianguis del Quinceo",
    //   path: [
    //     [19.69989, -101.16196],
    //     [19.70533, -101.16439],
    //   ],
    // },
    // {
    //   name: "Tianguis de la Guayangareo",
    //   path: [
    //     [19.70045, -101.15927],
    //     [19.70291, -101.16031],
    //   ],
    // },
  ],
};

export { routes };
