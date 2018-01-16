import { Configuration } from "webpack";
import * as path from "path";

const config: Configuration = {
  entry: "./src/scripts/index.tsx",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/js"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
};

export default config;
