import * as taskFunctions from "../../utils/task-functions";
import * as folderFunctions from "../../utils/folder-functions";
import * as nameFunctions from "../../utils/name-functions";
import * as moneyFunctions from "../../utils/money-functions";
import * as notesFunctions from "../../utils/notes-functions";

const initialState = {
  userName: "",
  tasks: [],
  folders: [],
  money: {
    value: 0,
    history: [],
  },
  notes: [
    {
      id: 1,
      title: "Note #1",
      content: `Headings

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Horizontal Rules

Some text above
___

Some text in the middle

---

Some text below


Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


Lists

Unordered

+ Create a list by starting a line with \`+\`, -, or *
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

Start numbering with offset:

57. foo
58. bar


Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`


Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


Links

[link text](https://www.google.com)

[link with title](https://www.google.com "title text!")

Autoconverted link https://www.google.com (enable linkify to see)


Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


Typographic Replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'`,
      folders: ["all"],
    },
    {
      id: 2,
      title: "Note #2",
      content: `_Заголовок 1_`,
      folders: ["all"],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return taskFunctions.addTask(state, action);
    case "EDIT_TASK":
      return taskFunctions.editTask(state, action);
    case "REMINDER_TASK":
      return taskFunctions.reminderTask(state, action);
    case "DELETE_TASK":
      return taskFunctions.deleteTask(state, action);

    case "ADD_NOTE":
      return notesFunctions.addNote(state, action);
    case "EDIT_NOTE":
      return notesFunctions.editNote(state, action);
    case "DELETE_NOTE":
      return notesFunctions.deleteNote(state, action);

    case "CREATE_FOLDER":
      return folderFunctions.createFolder(state, action);
    case "EDIT_FOLDER":
      return folderFunctions.editFolder(state, action);
    case "ADD_TASK_TO_FOLDER":
      return folderFunctions.addTaskToFolder(state, action);
    case "DELETE_FOLDER":
      return folderFunctions.deleteFolder(state, action);

    case "ADD_USER_NAME":
      return nameFunctions.addUserName(state, action);

    case "UPDATE_EXPENSE":
      return moneyFunctions.updateExpense(state, action);
    case "UPDATE_PURSE":
      return moneyFunctions.updatePurse(state, action);

    default:
      return state;
  }
};

export default reducer;
