import SDK from './sdk';
import { config } from '@project/server-config';
import dotenv from 'dotenv'; 
import findWorkspaceRoot from 'find-yarn-workspace-root'; 
import { join } from 'path'; 
// Add imports here

const workspaceRoot: any = findWorkspaceRoot(__dirname); 
dotenv.config({	path: join(workspaceRoot, '.env')
	});


const env = (str: string) => {
	let env = process.env;
	// @ts-ignore
	return env[str];
};
export default (() => {
	const app = SDK.getInstance();
	const configOutput = config();
	app.initProviders(configOutput.providers);
	// return { ...app, config, env };
	app.updateConfig(config);
	app.updateEnv(env);
	return app;
})();
