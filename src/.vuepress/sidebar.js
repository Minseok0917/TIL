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
			return {
				title,
				path,
				collapsable: false,
				children:fetchDepthFiles(newFolders)
			};
		}else{
			console.log(path);
			return {
				title,
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
