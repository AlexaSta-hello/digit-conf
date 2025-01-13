import Logo from "@/assets/Logo.png";

function Footer() {
    return (
        <footer className="bg-blue-3 text-white py-16">
            <img src={Logo} alt="logo" className="pl-8 md:pl-16"/>
            <div className=" mx-auto w-5/6 gap-16 md:flex items-end">
                <div className="mt-16 basis-1/2 md:mt-0">
                    
                    <p className="my-12 font-audiowide text-4xl">
                        Thanks for joining DIGIT CONF 2025! 
                    </p>
                    <p>© All Rights Reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold font-audiowide text-xl">Links</h4>
                    <p className="my-5">Facebook</p>
                    <p className="my-5">Instagram</p>
                    <p>TikTok</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold font-audiowide text-xl">Kontakt</h4>
                    <p className="my-5">Leipzig</p>
                    <p className="my-5">diigit-conf@mail.com</p>
                    <p>(+49) 123-4567</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;