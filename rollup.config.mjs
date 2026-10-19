// Studio Pro already ships @react-native-community/datetimepicker for its own Date
// picker and resolves it for the app bundle through Metro's extraNodeModules. If the
// widget copies the package into its .mpk, Metro resolves the widget's import to that
// copy instead, the bundle ends up with two modules registering the native view
// "RNDateTimePicker", and iOS throws "Tried to register two views with the same name".
// Keeping it external leaves a bare import that resolves to Studio Pro's single copy.
const datetimepicker = /^@react-native-community\/datetimepicker($|\/)/;

export default args =>
    args.configDefaultConfig.map(config =>
        /\.(ios|android)\.js$/.test(config.output.file)
            ? { ...config, external: [...config.external, datetimepicker] }
            : config
    );
