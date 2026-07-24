import { Router } from "express";
import path from "path";
import fs from "fs";

const router = Router();

router.get("/download/apk", (req, res) => {
  const apkPath = path.resolve("/home/runner/workspace/PulseLauncher_fixed.apk");
  if (!fs.existsSync(apkPath)) {
    res.status(404).json({ error: "APK not found" });
    return;
  }
  res.setHeader("Content-Disposition", "attachment; filename=PulseLauncher_fixed.apk");
  res.setHeader("Content-Type", "application/vnd.android.package-archive");
  res.sendFile(apkPath);
});

export default router;
