1 安装typeScript  npm install -g typescript
  tsc xxx.ts编译成js文件，可以安装ts-node,ts-node xxx.ts 直接执行ts文件
2 创建配置文件     tsc --init生成tsconfig.json文件
3 vscode自动编译ts    tsconfig.json中修改outDir输出路径,选择vscode任务-》运行任务-》监听tsconfig.json