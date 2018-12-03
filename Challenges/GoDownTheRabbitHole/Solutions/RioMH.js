let parentsCache = [];

function countParents(parentId, data) {
    let cached = parentsCache[parentId];
    let count = 1;

    if (cached) {
        count = cached;
    } else {
        for (let index = 1; index < data.length; index++) {
            let item = data[index]
            if (item.itemId == parentId && item.parentId != null) {
                count += countParents(item.parentId, data);
                break;
            }
        }
    }

    parentsCache[parentId] = count;
    return count;
}

function getIndent(item, data) {
    let indent = "";

    if (item.parentId != 0) {
        let repeatCount = countParents(item.parentId, data);

        if (repeatCount > 0) {
            repeatCount = repeatCount - 1;
        }

        indent = ("   ").repeat(repeatCount);
    }

    return indent;
}

function displayFolders(data) {
    for (let index = 1; index < data.length; index++) {
        let currentItem = data[index];

        if (currentItem.parentId != null) {
            console.log(getIndent(currentItem, data) + currentItem.name);
        }
    }
}

displayFolders([
    { itemId: 0, name: "C:\\", parentId: null, hasChildren: true },
    { itemId: 1, name: "images", parentId: 0, hasChildren: true },
    { itemId: 2, name: "homer.jpg", parentId: 1, hasChildren: false },
    { itemId: 3, name: "austin_powers.groovy", parentId: 1, hasChildren: false },
    { itemId: 4, name: "programs", parentId: 0, hasChildren: true },
    { itemId: 5, name: "node", parentId: 4, hasChildren: true },
    { itemId: 6, name: "bin", parentId: 5, hasChildren: true },
    { itemId: 7, name: "nodejs.exe", parentId: 6, hasChildren: false },
    { itemId: 8, name: "windows", parentId: 0, hasChildren: false }
]);
