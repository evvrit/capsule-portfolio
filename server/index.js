require("ignore-styles");

require("@babel/register")({
  ignore: [/node-modules/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");
