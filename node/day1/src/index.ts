import dotenv from "dotenv";
import * as todo from "./todo.js";
import { viewLogs } from "./logs.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

dotenv.config();

const rl = readline.createInterface({ input, output });

const main = async () => {
    console.log("=== Todo CLI ===");

    while (true) {
        console.log("\n1. Add Task\n2. List Tasks\n3. Update Task\n4. Toggle Task\n5. Remove Task\n6. Clear Tasks\n7. View Logs\n8. Exit");

        const choice = await rl.question("Choose an option: ");

        switch (choice) {
            case "1": {
                const title = await rl.question("Enter task title: ");
                await todo.addTask(title);
                break;
            }
            case "2": {
                await todo.listTasks();
                break;
            }
            case "3": {
                const updId = await rl.question("Enter task ID to update: ");
                const newTitle = await rl.question("Enter new title: ");
                await todo.updateTask(updId, newTitle);
                break;
            }
            case "4": {
                const togId = await rl.question("Enter task ID to toggle: ");
                await todo.toggleTask(togId);
                break;
            }
            case "5": {
                const remId = await rl.question("Enter task ID to remove: ");
                await todo.removeTask(remId);
                break;
            }
            case "6":
                await todo.clearTasks();
                break;

            case "7":
                await viewLogs();
                break;
            case "8":
                console.log("Goodbye!");
                await rl.close();
                process.exit(0);
            default:
                console.log("Invalid option");
        }
    }
};

main();
