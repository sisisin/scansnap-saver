import path from 'path';
import { getAppPath } from './env';
import { readFileAsync } from './fs';

export interface AppConfig {
  saveDir: string;
}

export async function getConfig(): Promise<AppConfig> {
  const f = await readFileAsync(path.resolve(getAppPath(), 'config.json'));
  return JSON.parse(f.toString());
}
