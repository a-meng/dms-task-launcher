var CronJob = require('cron').CronJob;
const apkLicTask = requier('./apkLicTask');
var job = new CronJob(
    '0 */10 * * * *',
    apkLicTask,
    null,
    true
);