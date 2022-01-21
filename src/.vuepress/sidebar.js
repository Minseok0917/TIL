const path = require('path');
const fs = require('fs');
const rootFolderPath = path.join(`${__dirname}/../`);


function fetchFiles(folderPath,parentName=''){
	return fs.readdirSync(folderPath,{ withFileTypes:true }).map( file =>({
		type: file.isDirectory() ? 'folder' : 'file',
		title:`${file.name}`,
		path:`${parentName}/${file.name === 'README.md' ? '' : file.name.replace('.md','') }`,
		filePath:`${folderPath}/${file.name}`,
	}));
}

function fetchDepthFiles(folders){
	return folders.map( ({title,path,filePath,type}) => {
		if( type === 'folder'){
			const newFolders = fetchFiles(filePath,path);
			const child = fetchDepthFiles(newFolders);
			return {
				title,
				path:child[0].path,
				collapsable: false,
				children:child
			};
		}else{
			return {
				title:title.replace('.md',''),
				path,
			}
		}
	});
}


function init(){
	const rootFiles = fetchFiles(rootFolderPath).filter(({title,type})=> title != '.vuepress' && type != 'file' );
	const depthFiles = fetchDepthFiles(rootFiles);
	return depthFiles;
}


module.exports = init();
