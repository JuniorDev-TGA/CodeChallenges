#
# We are constructing a component that reads the local drive
# and presents the folders and files that are contained
# in it.
# Other component is in charge of read the drive content
# and pass that information to our function.
#
# The following is our first solution:


def build_folder(data):

    # Skipping the first item (0) to exclude the C: drive
    for i in range(1, len(data)):
        item = data[i]
        final_text = ""

        if item['parentId'] != 0:
            final_text += "   "

        final_text += item['name']
        print(final_text)


build_folder([
    {'itemId': 0, 'name': 'C:\\', 'parentId': None, 'hasChildren': True},
    {'itemId': 1, 'name': 'images', 'parentId': 0, 'hasChildren': True},
    {'itemId': 2, 'name': 'homer.jpg', 'parentId': 1, 'hasChildren': False},
    {'itemId': 3, 'name': 'austin_powers.groovy', 'parentId': 1, 'hasChildren': False},
    {'itemId': 4, 'name': 'programs', 'parentId': 0, 'hasChildren': False},
    {'itemId': 5, 'name': 'windows', 'parentId': 0, 'hasChildren': False},
])


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
# [
#     {'itemId': 0, 'name': 'C:\\', 'parentId': None, 'hasChildren': True},
#     {'itemId': 1, 'name': 'images', 'parentId': 0, 'hasChildren': True},
#     {'itemId': 2, 'name': 'homer.jpg', 'parentId': 1, 'hasChildren': False},
#     {'itemId': 3, 'name': 'austin_powers.groovy', 'parentId': 1, 'hasChildren': False},
#     {'itemId': 4, 'name': 'programs', 'parentId': 0, 'hasChildren': True},
#     {'itemId': 5, 'name': 'node', 'parentId': 4, 'hasChildren': True},
#     {'itemId': 6, 'name': 'bin', 'parentId': 5, 'hasChildren': True},
#     {'itemId': 7, 'name': 'nodejs.exe', 'parentId': 6, 'hasChildren': False},
#     {'itemId': 8, 'name': 'windows', 'parentId': 0, 'hasChildren': False},
# ]
# Expected result:
# images
#    homer.jpg
#    austin_powers.groovy
# programs
#    node
#       bin
#          nodejs.exe
# windows
