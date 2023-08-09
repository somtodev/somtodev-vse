import SimpleIcon from './SimpleIcon';

export default function ToolCard({ name, icon }) {
    return (
        <>
            <div className="flex items-center justify-start gap-2 grayscale hover:grayscale-0 cursor-pointer px-1 py-2">
                <SimpleIcon name={(icon || name)?.toLowerCase()} />
                <p className="text-sm font-medium">{name}</p>
            </div>
        </>
    );
}
