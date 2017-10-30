"use strict";

const config = require("./config"),
      staticServer = require("./server/staticServer");
      

const hostname = config.HOSTNAME || "127.0.0.1",
      port = config.PORT || "9696";

staticServer.init(port,hostname);