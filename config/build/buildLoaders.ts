import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const styleLoader = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    }

    const cssLoader = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        sassLoader,
        cssLoader,
        styleLoader
    ]
}