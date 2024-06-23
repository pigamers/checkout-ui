import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B2C4B] p-7 font-jakarta">
      <div className="flex flex-row justify-around text-[#E9F2F9]">
        <ul className="py-2">
          <li>Plans & Pricing</li>
        </ul>
        <ul className="py-2">
          For Lawyer/CA
        </ul>
        <ul className="space-y-2 py-2">
          <li>Products</li>
          <li>Features</li>
          <li>Talk to Lawyer</li>
          <li>Talk to CA</li>
        </ul>
        <ul className="space-y-2 py-2">
          <li>About us</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
        <ul className="space-y-5 py-2">
          <li className="flex gap-3 items-center">
            <Image src="/vectors/call.png" height={10} width={20} />
            +91-6206XXXX64
          </li>
          <li className="flex gap-3 items-center">
            <Image src="/vectors/mail.png" width={25} height={15} />
            projectx@gmail.com
          </li>
          <li className="flex gap-3">
            <ul className="flex gap-6 items-center">
              <li>
                <Image src="/vectors/insta.png" height={25} width={25} />
              </li>
              <li>
                <Image src="/vectors/whatsapp.png" height={25} width={25} />
              </li>
              <li>
                <Image src="/vectors/linkedin.png" height={25} width={25} />
              </li>
              <li>
                <Image src="/vectors/x.png" height={25} width={25} />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <hr className="my-4 mx-6 border-[#6D6969]" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
        <div>
          <p className="text-[#E9F2F9]">
            2024 © Black Coat Technologies Pvt. Ltd. | All Rights Reserved
          </p>
        </div>
        <div>
          <ul className="text-[#E9F2F9] flex items-center gap-4">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>

  );
}
