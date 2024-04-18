import Link from "next/link";
import Todo from "../app/components/todo";
import { prisma } from "./db";

export type TodoType = {
    id: string;
    title: string;
    complete: boolean;
    deleted: boolean;
};

export default async function Home() {

    function getTodos() {
        return prisma.todo.findMany({});
    }
    const todos = await getTodos();

    return (
        <div className="bg-gray-100 min-h-screen ">
            <header className="flex flex-col justify-center items-center pb-5 bg-gradient-to-r from-purple-400 to-indigo-500 px-4 py-3">
                <h1 className="text-2xl font-bold text-white mb-3">Todos</h1>
                <Link
                    href="/newitem"
                    className="border border-purple-500 text-purple-700 rounded px-4 py-2 hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white outline-none"
                >
                    New
                </Link>
            </header>

            <div className="bg-white rounded shadow-lg p-6 mt-4">
                <ul className="flex flex-col items-center">
                    {todos.map((todo: TodoType) => (
                        <li key={todo.id} className="mb-3">
                            <span className="text-gray-600">{todo.id}</span>
                            <span className="ml-2">{todo.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}