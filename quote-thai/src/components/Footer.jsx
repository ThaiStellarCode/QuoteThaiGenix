const Footer = () => {
    const repo = [
        {
            name: 'QuoteThaiGenix',
            link: 'https://github.com/ThaiStellarCode/QuoteThaiGenix',
        },
        {
            name: 'nodejs-puppeteer-hsl-color',
            link: 'https://github.com/ThaiStellarCode/nodejs-puppeteer-hsl-color',
        },
    ];

    return (
        <div className="absolute bottom-0 pt-12 pb-6 w-full bg-neutral-800 text-white">
            <div className="p-6 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h1 className="text-3xl font-bold">Quote-Thai</h1>
                    <p className="text-neutral-400">
                        สุ่มคำคมไทยแบบง่ายๆ โดยแค่ไม่กี่ขั่นตอน :DD
                    </p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">ลิงก์ด่วน</h1>
                    <div className="mt-2">
                        <div className="hover:text-blue-400 hover:translate-x-2 transition-all duration-200">
                            <a
                                href="https://github.com/ThaiStellarCode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400"
                            >
                                ติดตามเรา ThaiStellarCode
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold">ผลงานภายใน</h1>
                    <div className="mt-2">
                        {repo.map((item, index) => (
                            <div
                                key={index}
                                className="hover:text-blue-400 hover:translate-x-2 transition-all duration-200"
                            >
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-400"
                                >
                                    ดูข้อมูลเกี่ยวกับ {item.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-neutral-500 flex flex-col lg:flex-row pt-2 items-center justify-center lg:justify-between lg:max-w-[1000px] xl:max-w-[1420px] mx-auto text-center">
                <h1 className="font-medium text-neutral-300">
                    &copy; Copyright 2025 -{' '}
                    <a
                        href="https://github.com/ThaiStellarCode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 decoration-neutral-400"
                    >
                        ThaiStellarCode
                    </a>
                    . MIT License
                </h1>
                <h2 className="text-neutral-300 font-medium text-sm md:text-base">
                    ใบอนุญาต Repo ทั้งหมดเป็น MIT License ซึ่งไม่สงวนสิทธิ์ใดๆ
                    ทั้งนั้น
                </h2>
            </div>
        </div>
    );
};

export default Footer;
