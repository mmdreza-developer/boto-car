import Link from "next/link"

function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between min-h-screen gap-4">
            <header className="flex justify-between flex-col items-center">
                <Link href="/" className=" p-4 rounded bg-yellow-300 px-10">
                    <h2 className="text-center border-b border-gray-600 text-2xl font-bold">BOTOCAR</h2>
                    <p>Choose an Buy your car</p>
                </Link>
            </header>
            <div className="flex-1">
                {children}
            </div>
            <footer className="flex justify-center items-center p-2 bg-gray-400">
                <a href="https://botostart.ir">Botostart Next.js courses</a> | BotoCar Project &copy;
            </footer>
        </div>
    )
}

export default Layout