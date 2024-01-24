import {executeQuery} from "@/app/lib/connection";
import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

export const POST = async (req) => {
    const {name, email, password, phone} = await req.json();

    try {
        const insertQuery = 'INSERT INTO snx_users (user_name, user_email, user_password, user_phone_number) VALUES (?, ?, ?, ?)';
        const insertValues = [name, email, password, phone];
        console.log(insertQuery, insertValues);
        await executeQuery(insertQuery, insertValues);

        revalidatePath("/signupUser");

        return NextResponse.json({message: 'User Updated successfully'});

    } catch (error) {
        console.log(error);
    }
}