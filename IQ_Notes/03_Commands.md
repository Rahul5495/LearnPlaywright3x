# VS Code Commands — Windows

## General

| Command | Shortcut | Description |
|---------|----------|-------------|
| Command Palette | `Ctrl+Shift+P` | Open all available commands |
| Quick Open | `Ctrl+P` | Search and open files by name |
| Settings | `Ctrl+,` | Open user/workspace settings |
| Keyboard Shortcuts | `Ctrl+K Ctrl+S` | Open keyboard shortcut editor |
| User Snippets | `Ctrl+Shift+P` → "Snippets" | Create custom code snippets |
| Extensions | `Ctrl+Shift+X` | Browse and install extensions |

## File Operations

| Command | Shortcut | Description |
|---------|----------|-------------|
| New File | `Ctrl+N` | Create a new untitled file |
| Open File | `Ctrl+O` | Open a file from the system |
| Open Folder | `Ctrl+K Ctrl+O` | Open a project folder |
| Save | `Ctrl+S` | Save current file |
| Save As | `Ctrl+Shift+S` | Save with a new name |
| Save All | `Ctrl+K S` | Save all open files |
| Close Tab | `Ctrl+W` | Close current file tab |
| Close All Tabs | `Ctrl+K Ctrl+W` | Close all open tabs |
| Reopen Closed Tab | `Ctrl+Shift+T` | Reopen the last closed tab |

## Navigation

| Command | Shortcut | Description |
|---------|----------|-------------|
| Go to Line | `Ctrl+G` | Jump to a specific line number |
| Go to File | `Ctrl+P` | Quick file search by name |
| Go to Symbol | `Ctrl+Shift+O` | Jump to a function/class/variable in current file |
| Go to Definition | `F12` | Jump to where a symbol is defined |
| Peek Definition | `Alt+F12` | View definition inline without leaving current file |
| Go to References | `Shift+F12` | See all usages of a symbol |
| Go Back | `Alt+←` | Navigate to previous cursor position |
| Go Forward | `Alt+→` | Navigate forward in cursor history |
| Go to Bracket | `Ctrl+Shift+\` | Jump to matching bracket |
| Breadcrumb Navigation | `Ctrl+Shift+;` | Open breadcrumb bar at top |

## Editing

| Command | Shortcut | Description |
|---------|----------|-------------|
| Cut Line | `Ctrl+X` | Cut the entire current line (empty selection) |
| Copy Line | `Ctrl+C` | Copy the entire current line (empty selection) |
| Move Line Up/Down | `Alt+↑` / `Alt+↓` | Drag a line up or down |
| Copy Line Up/Down | `Shift+Alt+↑` / `Shift+Alt+↓` | Duplicate line above/below |
| Duplicate Selection | `Ctrl+D` | Select next occurrence of current selection |
| Add Cursor Above | `Ctrl+Alt+↑` | Multi-cursor — one more line up |
| Add Cursor Below | `Ctrl+Alt+↓` | Multi-cursor — one more line down |
| Insert Line Below | `Ctrl+Enter` | Insert new line below current |
| Insert Line Above | `Ctrl+Shift+Enter` | Insert new line above current |
| Indent / Outdent | `Tab` / `Shift+Tab` | Increase/decrease indentation |
| Toggle Comment | `Ctrl+/` | Comment/uncomment current line or selection |
| Toggle Block Comment | `Shift+Alt+A` | Add/remove `/* */` comment block |
| Format Document | `Shift+Alt+F` | Auto-format entire file |
| Format Selection | `Ctrl+K Ctrl+F` | Auto-format selected code only |
| Rename Symbol | `F2` | Rename a variable/function across all files |
| Trim Trailing Whitespace | `Ctrl+K Ctrl+X` | Remove trailing spaces |
| Fold / Unfold | `Ctrl+Shift+[` / `Ctrl+Shift+]` | Collapse/expand code block |
| Fold All / Unfold All | `Ctrl+K Ctrl+0` / `Ctrl+K Ctrl+J` | Collapse/expand all |

## Find & Replace

| Command | Shortcut | Description |
|---------|----------|-------------|
| Find | `Ctrl+F` | Search in current file |
| Replace | `Ctrl+H` | Find and replace in current file |
| Find in Files | `Ctrl+Shift+F` | Search across the entire project |
| Replace in Files | `Ctrl+Shift+H` | Find and replace across the entire project |
| Find Next / Previous | `F3` / `Shift+F3` | Cycle through matches |

## Multi-Cursor & Selection

| Command | Shortcut | Description |
|---------|----------|-------------|
| Select All Occurrences | `Ctrl+Shift+L` | Select all matches of current selection |
| Expand Selection | `Ctrl+Shift+→` | Select larger code units (word → scope → function) |
| Shrink Selection | `Ctrl+Shift+←` | Opposite of expand |
| Column Select | `Shift+Alt+Drag` | Select rectangular block of text |

## Terminal

| Command | Shortcut | Description |
|---------|----------|-------------|
| New Terminal | `` Ctrl+` `` | Open integrated terminal |
| New Terminal (alternate) | `Ctrl+Shift+` ` | Open a new terminal instance |
| Kill Terminal | `Ctrl+Shift+` ` then `k` | Kill active terminal |
| Switch Terminal | `Ctrl+Shift+` ` then `1/2/3` | Switch between terminal tabs |

## Sidebar & Panels

| Command | Shortcut | Description |
|---------|----------|-------------|
| Toggle Sidebar | `Ctrl+B` | Show/hide the left sidebar |
| Explorer | `Ctrl+Shift+E` | Show file explorer |
| Search | `Ctrl+Shift+F` | Show search pane |
| Source Control (Git) | `Ctrl+Shift+G` | Show Git panel |
| Debug | `Ctrl+Shift+D` | Show debug panel |
| Extensions | `Ctrl+Shift+X` | Show extensions panel |
| Toggle Panel | `Ctrl+J` | Show/hide bottom panel (terminal, output, problems) |
| Output Panel | `Ctrl+Shift+U` | Show output window |
| Problems Panel | `Ctrl+Shift+M` | Show errors/warnings panel |

## Debugging

| Command | Shortcut | Description |
|---------|----------|-------------|
| Start / Continue | `F5` | Start debugging or continue |
| Stop | `Shift+F5` | Stop debugging session |
| Step Over | `F10` | Execute next line, skip into functions |
| Step Into | `F11` | Enter a function call |
| Step Out | `Shift+F11` | Exit current function |
| Toggle Breakpoint | `F9` | Set/remove breakpoint on current line |
| Conditional Breakpoint | `Ctrl+F9` | Set a breakpoint with a condition |

## IntelliSense & Code Actions

| Command | Shortcut | Description |
|---------|----------|-------------|
| Trigger Suggestion | `Ctrl+Space` | Manually invoke IntelliSense |
| Quick Fix | `Ctrl+.` | Show available code actions / lightbulb |
| Trigger Parameter Hints | `Ctrl+Shift+Space` | Show function parameter info |
| Show Hover Info | `Ctrl+K Ctrl+I` | Display type info / docs for a symbol |

## Git Integration

| Command | Shortcut | Description |
|---------|----------|-------------|
| Source Control Panel | `Ctrl+Shift+G` | Open Git panel |
| Stage Changes | `Ctrl+Shift+G` then `s` | Stage selected file |
| Commit | `Ctrl+Shift+G` then `c` | Commit staged changes |
| Pull | `Ctrl+Shift+G` then `p` | Pull from remote |
| Push | `Ctrl+Shift+G` then `P` | Push to remote |
| View Diff | `Ctrl+Shift+G` then `d` | See diff of a changed file |
| Undo Last Commit | `Ctrl+Shift+G` then `u` | Soft reset last commit |

## Markdown Preview

| Command | Shortcut | Description |
|---------|----------|-------------|
| Open Preview | `Ctrl+Shift+V` | View rendered markdown in a tab |
| Preview to Side | `Ctrl+K V` | Open rendered markdown in split view |
| Bold | `Ctrl+B` | Wrap selection with `**bold**` |
| Italic | `Ctrl+I` | Wrap selection with `*italic*` |

## Custom Commands (Command Code)

| Command | Shortcut | Description |
|---------|----------|-------------|
| Command Code: Quick Chat | `Ctrl+Shift+I` | Open quick inline chat |
| Command Code: Explain | `Ctrl+Shift+E` | Explain selected code |
| Command Code: Refactor | `Ctrl+Shift+R` | Refactor selected code |
| Command Code: Open Chat | `Ctrl+Shift+J` | Open full chat panel |
