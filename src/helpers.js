export function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

export function remove(items, item) {
    const index = items.indexOf(item);

    if (index !== -1) {
        const found = items[index];
        items.splice(index, 1);
        return found;
    }

    return undefined;
}
