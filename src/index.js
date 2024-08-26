// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./database.js";

// takes an id parameter
async function getUserData(id) {

    // call functions using await
    const db = await central(id);
    const user = await eval(db)(id)
    const data = await vault(id)

    return { id, ...data, ...user }
}

//  get current time in ms
const startTime = performance.now()

// run the function
getUserData(1)
    .then((data) => {
        // measure time again in ms
        const endTime = performance.now()
        console.log(`Call getUserData ${endTime - startTime} milliseconds`)
        console.log(data)
    })
    .catch(console.log)

