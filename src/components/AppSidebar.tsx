import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

type RouteType = {
    id: string;
    name: string;
    path: string;
    active: boolean;
};

const SidebarItem = ({ route }: { route: RouteType }) => {
    const textColor = route.active ? "text-blue-500" : "text-gray-900";

    return (
        <li className="w-full">
            <Link href={route.path} className={`block w-full p-2 rounded-lg hover:bg-gray-100 ${textColor}`}>
                <span>{route.name}</span>
            </Link>
        </li>
    );
};

interface AppSidebarProps {}

const AppSidebar: FunctionComponent<AppSidebarProps> = () => {
    const router = useRouter();

    const availableRoutes: RouteType[] = [
        { id: "dashboard", name: "Dashboard", path: "/", active: router.pathname == "/" },
        { id: "list", name: "List", path: "/list", active: router.pathname == "/list" }
    ];

    return (
        <aside className="w-64 shrink-0">
            <div className="h-full px-3 py-4">
                <ul className="space-y-2 font-medium">
                    {availableRoutes.map((route) => (
                        <SidebarItem key={route.id} route={route} />
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default AppSidebar;
