import Image from "next/image"; 


export default function Navbar() {
    return (
        <div className="relative w-full bg-white font-jakarta">
            <div className="mx-auto flex items-center justify-end p-4 sm:px-6 lg:px-8">
                <div>
                    <ul className="flex items-center mr-80 space-x-8">
                        <li>
                            <a
                                href="#"
                                className="text-lg font-semibold text-gray-800"
                            >
                                Product
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-lg font-semibold text-gray-800"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-lg font-semibold text-gray-800"
                            >
                                Customers
                            </a>
                        </li>
                        <li className="border-[#1B72B1] border rounded-md">
                            <button className="text-lg font-semibold px-3 py-1 text-[#1B72B1]">
                                Talk to Lawyer/CA
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center space-x-8">
                        <li className="static">
                            <Image src="/vectors/bell.png" width={20} height={20} />
                            <div className="bg-red-500 absolute bottom-6 right-[320px] h-2 w-2 rounded-full"></div>
                        </li>
                        <li className="static">
                            <Image src="/vectors/message.png" width={24} height={20} />
                            <div className="bg-green-500 absolute bottom-6 right-[265px] h-2 w-2 rounded-full"></div>
                        </li>
                        <li>
                            <Image src="/vectors/mark.png" width={20} height={20} />
                        </li>
                        <li>
                            <Image src="/vectors/cart.png" width={24} height={20} />
                        </li>
                        <li className="flex items-center gap-2">
                            <Image src="/vectors/profile.png" width={24} height={20} />
                            Aditya
                            <Image src="/vectors/profileArrow.png" width={10} height={8} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
} ``
