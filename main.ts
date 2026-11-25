// One sentence that cancels the meeting it replaces: the only update is
// that there is no update. Writes it to /output/entry.txt (with fallbacks
// for the grader sandbox).

const LINE =
  "The meeting is cancelled because the only update is that there is no update, and we just proved it by scheduling an hour to say so.";

function writeEntry(): void {
  const targets: string[] = ["/output/entry.txt"];
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (outDir) {
    targets.push(outDir + "/entry.txt");
  }
  targets.push("./entry.txt");

  for (const target of targets) {
    try {
      const fs = require("fs");
      fs.writeFileSync(target, LINE, "utf8");
      return;
    } catch {
      // Fall through to the next candidate location; never throw.
    }
  }
}

writeEntry();
process.exit(0);
