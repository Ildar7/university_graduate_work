import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = buildBabelLoader(options);

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // const fileLoader = {
    //     test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    //     use: [
    //         {
    //             loader: 'file-loader',
    //         },
    //     ],
    //     types: 'asset/resource',
    // };

    const pngLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    return [
        svgLoader,
        pngLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
