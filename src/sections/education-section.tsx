 import Section from "../components/section";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/logo.webp"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                B.Tech in Robotics & AI
                            </h3>
                            <div>CGC UNIVERSITY</div>
                        </div>
                    </div>
                    <div>Sep 2022 - May 2026</div>
                </div>
                <p className="mt-6 text-gray-500">A significant part of the education involves practical experience through labs and projects, which are designed to enhance problem-solving skills</p>
            </div>

        </Section>
    );
}