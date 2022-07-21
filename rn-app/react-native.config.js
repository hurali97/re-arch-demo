module.exports = {
  dependencies: {
    /**
     * This name practically should be from the package.json file of the module?
     */
    Dlog: {
      platforms: {
        android: {
          libraryName: 'CustomModules',
          componentDescriptors: null,
          androidMkPath: null,
          /**
           * The path required here needs to have the android project,
           * so if I do ./android/custommodules, it only has java file,
           * not the android project.
           */
          sourceDir: './android',
        },
      },
    },
  },
};
