import DefaultTheme from 'vitepress/theme';
import {Icons, Sui, Themes} from "../../../src/index.js";
import 'remixicon/fonts/remixicon.css';

export default {
    extends: DefaultTheme,
    enhanceApp(context) {
        context.app.use(Sui, {
            theme: Themes.Dark,
            icons: Icons.Remixicon,
        });
    }
}