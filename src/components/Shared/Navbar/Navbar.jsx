import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm items-center justify-center">
            <Link href={'/'}>
                <p className="btn btn-ghost text-xl">BookVerse</p>
            </Link>
        </div>
    );
};

export default Navbar;