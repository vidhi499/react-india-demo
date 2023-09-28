import SDK from './sdk';
import { config } from '@project/client-config';
// Add imports here

const env = (str: string) => {
	let env = {};
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
