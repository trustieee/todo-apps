window.todoListJsInterop = {
    focus: function (element) {
        element.focus();
    },

    get: function (defaultValue, key) {
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue ?? defaultValue;
    },

    set: function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}