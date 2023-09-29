import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin(
            {
                template: paths.html,
            }
        ),
    ]
}