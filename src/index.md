<img src="https://photo.coolenjoy.net/data/editor/2102/d778f4ec8403ae4caaaa6415ea73b28932c47005.jpg">

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=Minseok0917&theme=prussian)](https://github.com/anuraghazra/github-readme-stats)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=JangHyuckYun&layout=compact&theme=tokyonight)](https://github.com/anuraghazra/github-readme-stats)

[Config 이동](./config/)

# Lorem
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud.

## Sub Lorem
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

### Sub Lorem
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam

- Lorem
	- Lorem
		- Lorem

**`Lorem`**
`Lorem`
**Lorem**
Lorem

::: tip Lorem
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
:::

:::warning Lorem
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
:::
:::danger Lorem
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
:::
:::details Lorem
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
:::

``` javascript
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
```