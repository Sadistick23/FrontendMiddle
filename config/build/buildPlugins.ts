import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths, mode}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin(
            {
                template: paths.html,
                title: mode,
            }
        ),
    ]
}