export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="p-3 bg-border rounded-full">
            <span className="text-sm text-primary opacity-50">
                &copy;&nbsp;{year}&nbsp;Somtochukwu.
            </span>
        </footer>
    );
}
