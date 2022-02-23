# Ghost Upload

A vscode extension to upload blog posts directly to ghost.js.

Have you ever been tired of using the ghost.js browser editor? I know I have.
The search for a good writer's tool has been difficult. I realized the only
solution is to create a writing tool myself. vscode is that solution. But there
is only one thing it lacks -- a post upload button.

## Features

- Uploads markdown files to ghost.js as draft.
- Opens ghost.js to finish the publishing process.
- Parses yaml metadata, e.g `authors`, `tags`, `title`...
- Includes snippet templates for metadata headers.

Future features:

- Supports image upload.
- Sync with ghost.js.
- If I do add sync features and more, then I'll rename this to be ghost-sync.
  - Maybe this would include an interface to use ghost from vscode :O.

Limitations:

- No support for multi authors.

## Installation

Download form here:

or use the commands:

After installing you need to add the ghost keys.
Use this method to do that:

## Usage


## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

This will move into beta once it's useable. Anything alpha is only prototyping.

Users appreciate release notes as you update your extension.

### 0.1.0 - Alpha

Initial commit of Ghost Upload

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.
