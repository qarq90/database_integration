import mysql from "mysql2";

export const executeQuery = async (query, values) => {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "qarq90",
            password: "123456789",
            database: "snx_database"
        })

        const [result] = await connection.execute(query, values);

        return result;

    } catch (error) {
        console.log(error);
    }
}