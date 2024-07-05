export default class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}