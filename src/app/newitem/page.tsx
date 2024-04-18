import {prisma} from "../db";
import Link from "next/link";
import {redirect} from "next/navigation";
import {Checkbox} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";


export default function NewItem() {


    async function createTodoItem(data: FormData){
        "use server";
        const title = data.get("title")?.valueOf();

        if (typeof title === "string" ) {
            await prisma.todo.create({
                data:{title},
            });

            redirect('/');
        }else return new Error("Invalid Title");

    }
    return (
        <main className="">
            <h2 className="text-2xl">Create new item</h2>
            <form action={createTodoItem} className="flex gap-2 flex-col">
                <input
                    type="text"
                    name="title"
                    placeholder="Create a new todo item"
                    className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 focus-within:border-zinc-700 bg-transparent outline-none"
                ></input>


                <Slider></Slider>

                <div className="flex gap-3 justify-end">
                    <Link
                        href=".."
                        className="border border-blue-500 text-blue-700 rounded px-4 py-2 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white outline-none"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="border border-green-500 text-green-700 rounded px-4 py-2 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white outline-none"
                    >
                        Save
                    </button>
                </div>
            </form>
        </main>
    );
}

