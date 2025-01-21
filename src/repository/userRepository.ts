import { query } from "../database"

export const userNameExists = async (username: string) => {
    const { rows } = await query ("SELECT email FROM public.user u where u.username = $1", [username]);
    return rows.length >0;
}