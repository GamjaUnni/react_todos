const STORAGE_KEY = "YUNA_TODOS";

export function getTodos() {
    const json = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(json);
}

export function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
