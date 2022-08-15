import { serve } from 'local-api';
import path from 'path';
import { Command } from 'commander';

export const serveCommand = new Command()
  .command('serve [filename]')  // brackets [] - optional value 
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')  // brackets <> - requared value
  .action((filename = 'notebook.js', options: { port: string }) => {
    const dir = path.join(process.cwd(), path.dirname(filename)); // calculating file paths
    serve(parseInt(options.port), path.basename(filename), dir);
  });
