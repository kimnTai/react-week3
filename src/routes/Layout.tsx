import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <div>表頭</div>
            <main>
                <Outlet />
            </main>
            <div>表尾</div>
        </>
    );
}
