interface Props {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-start gap-6 w-full max-w-4xl mx-auto mt-30">
            <p className="text-xl text-center md:text-left md:text-lg font-medium pt-3 w-full md:max-w-42">{title}</p>
            {children}
        </section>
    );
}