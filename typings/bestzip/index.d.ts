declare module 'bestzip' {
  export default function(option: Option): Promise<void>;

  interface Option {
    source: string | string[];
    destination: string;
    cwd?: string;
  }
}
