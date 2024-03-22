import DefaultTheme from 'vitepress/theme';
import 'remixicon/fonts/remixicon.css';
import './theme.css';
import Playground from "../components/Playground.vue";

export default {
    extends: DefaultTheme,
    enhanceApp(context) {
        if (!import.meta.env.SSR) {
            context.app.component('Playground', Playground);
        }
    }
}