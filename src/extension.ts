// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import GhostAdminAPI from '@tryghost/admin-api';
const GhostAdminAPI = require('@tryghost/admin-api');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ghost-upload" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('ghost-upload.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showWarningMessage('Hello World from Ghost Upload!');
	});

	let ghostRead = vscode.commands.registerCommand('ghost-upload.ghostRead', () => {

		// Your API config
		const api = new GhostAdminAPI({
			url: 'URL HERE',
			version: "v3",
			// key: 'KEY ERE'
		});

		// Utility function to find and upload any images in an HTML string
		function processImagesInHTML(html: string) {
			// Find images that Ghost Upload supports
			let imageRegex = /="([^"]*?(?:\.jpg|\.jpeg|\.gif|\.png|\.svg|\.sgvz))"/gmi;
			let imagePromises = [];

			let result = null;

			console.log(process.cwd());

			while((result = imageRegex.exec(html)) !== null) {
				let file = result[1];
					// Upload the image, using the original matched filename as a reference
					imagePromises.push(api.images.upload({
						ref: file,
						file: path.resolve(file)
					}));
			}

			return Promise
				.all(imagePromises)
				.then(images => {
					images.forEach(image => html = html.replace(image.ref, image.url));
					return html;
				});
		}

		// Your content
		let html = '<p>My test post content.</p><figure><img src="/Users/michaelleonffu/Developer/candr/ghost-upload/ghost-upload/images/orange.png" /><figcaption>My awesome photo</figcaption></figure>';

		vscode.window.showInformationMessage('Hello World from Ghost Read!');

		return processImagesInHTML(html)
			.then(html => {
				return api.posts
					.add(
						{title: 'My Test Post', html},
						{source: 'html'} // Tell the API to use HTML as the content source, instead of mobiledoc
					)
					.then((res: any) => console.log(JSON.stringify(res)))
					.catch((err: any) => console.log(err));

			})
			.catch(err => console.log(err));
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(ghostRead);
}

// this method is called when your extension is deactivated
export function deactivate() {}
