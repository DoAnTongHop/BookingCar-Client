import { DefaultTheme } from '@react-navigation/native';
import Colors from './Color';

const LightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.primary,
    },
};

const DarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.primary,
    },
};
export { DarkTheme, LightTheme };