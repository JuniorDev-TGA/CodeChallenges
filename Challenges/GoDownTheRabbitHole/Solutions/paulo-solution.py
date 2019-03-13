#
# We are constructing a component that reads the local drive
# and presents the folders and files that are contained
# in it.
# Other component is in charge of read the drive content
# and pass that information to our function.
#


def build_folder(data, indent="  "):
    # Skip the first item - "C:\"
    result = ""
    # WARNING: We assume here that ItemID and array order is the same.
    # WARNING: We also assume the items are therefore in order, and that children are always after parents
    for record in data[1:]:
        # work out our indent and add it to the current record
        record["indent_level"] = (
            0
            if record["parentId"] == 0
            else data[record["parentId"]]["indent_level"] + 1
        )
        # render the string and append to the result
        result += "{0}{1}\n".format(indent * record["indent_level"], record["name"])
    print(result)


first_sample = [
    {"itemId": 0, "name": "C:\\", "parentId": None, "hasChildren": True},
    {"itemId": 1, "name": "images", "parentId": 0, "hasChildren": True},
    {"itemId": 2, "name": "homer.jpg", "parentId": 1, "hasChildren": False},
    {"itemId": 3, "name": "austin_powers.groovy", "parentId": 1, "hasChildren": False},
    {"itemId": 4, "name": "programs", "parentId": 0, "hasChildren": False},
    {"itemId": 5, "name": "windows", "parentId": 0, "hasChildren": False},
]


# Result:
# images
#    homer.jpg
#    austin_powers.groovy
# programs
# windows

# Once our initial solution was created
# we found the drive has a more complex structure
# that we will need to represent.
#
# Modify the function in a way to allow represent the complexity
# of a real drive
# Sample input:
second_sample = [
    {"itemId": 0, "name": "C:\\", "parentId": None, "hasChildren": True},
    {"itemId": 1, "name": "images", "parentId": 0, "hasChildren": True},
    {"itemId": 2, "name": "homer.jpg", "parentId": 1, "hasChildren": False},
    {"itemId": 3, "name": "austin_powers.groovy", "parentId": 1, "hasChildren": False},
    {"itemId": 4, "name": "programs", "parentId": 0, "hasChildren": True},
    {"itemId": 5, "name": "node", "parentId": 4, "hasChildren": True},
    {"itemId": 6, "name": "bin", "parentId": 5, "hasChildren": True},
    {"itemId": 7, "name": "nodejs.exe", "parentId": 6, "hasChildren": False},
    {"itemId": 8, "name": "windows", "parentId": 0, "hasChildren": False},
]
# Expected result:
# images
#    homer.jpg
#    austin_powers.groovy
# programs
#    node
#       bin
#          nodejs.exe
# windows

build_folder(second_sample, "   ")
