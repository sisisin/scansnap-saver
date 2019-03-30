function getEnv(key: string): string {
  const v = process.env[key];
  if (v === undefined) {
    throw new Error(`you need to set ${key}`);
  } else {
    return v;
  }
}

export const getAppPath = () => getEnv('SCANSNAP_SAVER_PATH');
