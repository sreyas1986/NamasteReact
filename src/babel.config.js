module.exports = {
    presets: [
        ['@babel/preset-react', {runtime: 'automatic'}]
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ["@babel/plugin-transform-react-jsx", {
            "runtime": "automatic"
          }]
      
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(scss|sass|css)$": "identity-obj-proxy"
      }
  };