import { fresh } from "fresh";

fresh.commands.add("format_file", async () => {
  const path = await fresh.activeBuffer.getPath();
  if (path) {
    await fresh.terminal.run(`prettier --write "${path}"`);
    await fresh.activeBuffer.reload();
  }
});
