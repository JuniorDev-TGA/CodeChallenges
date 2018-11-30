/*
* We are constructing a component that reads the local drive
* and presents the folders and files that are contained
* in it.
* Other component is in charge of read the drive content
* and pass that information to our function.
*
* The following is our first solution:
*/

function buildFolder(data) {

    //Exclude C: drive
    for (var i = 1; i < data.length; i++) {
        var item = data[i];
        var finalText = "";

        if (item.parentId !== 0) {
            finalText += "   ";
        }

        finalText += item.name;
        console.log(finalText);
    }

}

buildFolder([
    { itemId: 0, name: "C:\\", parentId: null, hasChildren: true },
    { itemId: 1, name: "images", parentId: 0, hasChildren: true },
    { itemId: 2, name: "homer.jpg", parentId: 1, hasChildren: false },
    { itemId: 3, name: "austin_powers.groovy", parentId: 1, hasChildren: false },
    { itemId: 4, name: "programs", parentId: 0, hasChildren: false },
    { itemId: 5, name: "windows", parentId: 0, hasChildren: false }
]);

/* Result:
images
   homer.jpg
   austin_powers.groovy
programs
windows
*/

/*
* Once our initial solution was created
* we found the drive has a more complex structure
* that we will need to represent.
* 
* Modify the function in a way to allow represent the complexity
* of a real drive
* Sample JSON:
[
    { itemId: 0, name: "C:\\", parentId: null, hasChildren: true },
    { itemId: 1, name: "images", parentId: 0, hasChildren: true },
    { itemId: 2, name: "homer.jpg", parentId: 1, hasChildren: false },
    { itemId: 3, name: "austin_powers.groovy", parentId: 1, hasChildren: false },
    { itemId: 4, name: "programs", parentId: 0, hasChildren: true },
    { itemId: 5, name: "node", parentId: 4, hasChildren: true },
    { itemId: 6, name: "bin", parentId: 5, hasChildren: true },
    { itemId: 7, name: "nodejs.exe", parentId: 6, hasChildren: false },
    { itemId: 8, name: "windows", parentId: 0, hasChildren: false }
]
* Expected result:
* images
*    homer.jpg
*    austin_powers.groovy
* programs
*    node
*       bin
*          nodejs.exe
* windows
*/