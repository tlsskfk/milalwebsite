import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img 
          src={logo}
          alt='milal logo'
          className='w-[270px] h-[72px] object-contain'
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px] text-terracotta`}>
          And whoever in the name of a disciple gives to one of these little ones even a cup of cold water to drink, truly I say to you, he shall not lose his reward.
          <br />
          ~ Matthew 10:42
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-6">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px] text-tertiary'>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-secondary hover:text-bluePrimary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-secondary">
      <p className="font-poppins font-medium text-[18px] leading-[27px] text-tertiary">
      © 2022 American Wheat Mission. All Rights Reserved
      </p>
      <div className="flex flex-row md:mt-0 my-4 ">
        {socialMedia.map((social, index) => (
          <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[28px] h-[28px] object-contain cursor-pointer hover:scale-150 transition duration-500 shadow-xl rounded-lg ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0 border border-black'}`}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Footer