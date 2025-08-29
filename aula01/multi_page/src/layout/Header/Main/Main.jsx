import {Outlet} from "react";
import Header from ".../layout/Header";


export default function Main(){
    <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-4">
            <Outlet/>

        </main>

    </div>
}