module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  runtimeCompiler: true,
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "PGMJ"
      },
      disableMainProcessTypescript: false,
      mainProcessTypeChecking: false
    }
  }
};
