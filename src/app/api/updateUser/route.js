import { executeQuery } from "@/app/lib/connection";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const POST = async (req) => {
    const { name, email, password, phone } = await req.json();

    try {
        const updateQuery = 'UPDATE snx_users SET user_name = ? , user_email = ?, user_password = ?, user_phone_number = ? WHERE user_name = "Reaper"';
        const updateValues = [email, password, phone, name];

        console.log(updateQuery, updateValues);

        await executeQuery(updateQuery, updateValues);

        revalidatePath("/signupUser");

        return NextResponse.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred while updating the user' }, { status: 500 });
    }
};
