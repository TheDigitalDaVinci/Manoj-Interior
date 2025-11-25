var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.40288551409879503,
          "pitch": 0.5028873651331178,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.549873660283419,
          "pitch": 0.5344584887758046,
          "rotation": 0,
          "target": "2-family-living"
        },
        {
          "yaw": 3.013317671884689,
          "pitch": 0.08885688757166577,
          "rotation": 0,
          "target": "5-gf-bedroom-v1"
        },
        {
          "yaw": 0.752692001886837,
          "pitch": 0.39114894070196016,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": -1.624602159043235,
          "pitch": 0.06341699755629016,
          "rotation": 1.5707963267948966,
          "target": "8-gf-master-v1"
        },
        {
          "yaw": 2.6767125810202055,
          "pitch": 0.001150238820978089,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-family-living",
      "name": "Family Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0018568292340539472,
          "pitch": 0.3710098397808128,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -3.068121918189977,
          "pitch": 0.38645041035185557,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -0.7495907190194693,
          "pitch": 0.07532177750991842,
          "rotation": 0,
          "target": "8-gf-master-v1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.543745923929576,
          "pitch": 0.3786018926242942,
          "rotation": 0,
          "target": "2-family-living"
        },
        {
          "yaw": 0.510574552618893,
          "pitch": 0.22499078102297965,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13948064651984637,
          "pitch": 0.24445817713617757,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gf-bedroom-v1",
      "name": "GF Bedroom V1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6286690375312887,
          "pitch": 0.3972274634731612,
          "rotation": 0,
          "target": "6-gf-bedroom-v2"
        },
        {
          "yaw": -0.45953713821917397,
          "pitch": 0.2282767509806849,
          "rotation": 0,
          "target": "7-gf-bedroom-v3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-gf-bedroom-v2",
      "name": "GF Bedroom V2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.45583410018300796,
          "pitch": 0.5337667052159532,
          "rotation": 0,
          "target": "5-gf-bedroom-v1"
        },
        {
          "yaw": 0.6428864469736428,
          "pitch": 0.20329035245523386,
          "rotation": 0,
          "target": "6-gf-bedroom-v2"
        },
        {
          "yaw": -0.7566880166566872,
          "pitch": 0.035273679944051395,
          "rotation": 0,
          "target": "2-family-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gf-bedroom-v3",
      "name": "GF Bedroom V3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2749904186634176,
          "pitch": 0.024598552985633404,
          "rotation": 0.7853981633974483,
          "target": "2-family-living"
        },
        {
          "yaw": 2.0272473262646065,
          "pitch": 0.2310579333261149,
          "rotation": 0,
          "target": "5-gf-bedroom-v1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gf-master-v1",
      "name": "GF Master V1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.36133843605912475,
          "pitch": 0.146305941409274,
          "rotation": 0,
          "target": "9-gf-master-v2"
        },
        {
          "yaw": -0.6660403639578902,
          "pitch": 0.1775172627312802,
          "rotation": 0,
          "target": "10-gf-master-v3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-gf-master-v2",
      "name": "GF Master V2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.670713581500392,
          "pitch": -0.09045605740140772,
          "rotation": 0,
          "target": "2-family-living"
        },
        {
          "yaw": -2.9775842577336658,
          "pitch": 0.3567676013172534,
          "rotation": 0,
          "target": "8-gf-master-v1"
        },
        {
          "yaw": -1.7848138925809813,
          "pitch": 0.1950755922383003,
          "rotation": 0,
          "target": "10-gf-master-v3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-gf-master-v3",
      "name": "GF Master V3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4330200785132483,
          "pitch": 0.24441391531425793,
          "rotation": 0,
          "target": "8-gf-master-v1"
        },
        {
          "yaw": 0.883112806915431,
          "pitch": 0.001762874406193049,
          "rotation": 1.5707963267948966,
          "target": "2-family-living"
        },
        {
          "yaw": -0.44910052841727754,
          "pitch": 0.21297792388602943,
          "rotation": 0,
          "target": "9-gf-master-v2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Manoj GF Rooms",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
