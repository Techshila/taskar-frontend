import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import ig_icon from '@/assets/icons/instagram_colored.svg';
import fb_icon from '@/assets/icons/fb_colored.svg';
import lnki_icon from '@/assets/icons/linkedin_colored.svg';
import x_icon from '@/assets/icons/twitter_colored.svg';
import { SOCIAL_LINKS } from '@/const';

const Footer = () => {
  const social_links: { name: string; icon: string; link: string | unknown }[] = [];
  if ('facebook_link' in SOCIAL_LINKS)
    social_links.push({ name: 'facebook', icon: fb_icon, link: SOCIAL_LINKS.facebook_link });
  if ('twitter_link' in SOCIAL_LINKS)
    social_links.push({ name: 'twitter', icon: x_icon, link: SOCIAL_LINKS.twitter_link });
  if ('linkedin_link' in SOCIAL_LINKS)
    social_links.push({ name: 'linkedin', icon: lnki_icon, link: SOCIAL_LINKS.linkedin_link });
  if ('insta_link' in SOCIAL_LINKS)
    social_links.push({ name: 'instagram', icon: ig_icon, link: SOCIAL_LINKS.insta_link });

  return (
    <div className={`footer_container`}>
      <div className='footer_logo'>
        <h1 className={'footer_taskar'}>
          <Image
            height={100}
            width={100}
            src={logo}
            alt='logo'
            className='rounded-lg border-[1px] border-black'
          />{' '}
          TASKAR
          <br />
          PHARMACY
        </h1>
      </div>

      <div className={'footer_social_container'}>
        <Link href={`mailto:${SOCIAL_LINKS.email}`} target='_blank'>
          {SOCIAL_LINKS.email}
        </Link>
        <div className={'footer_social_links'}>
          {social_links.map((social, index) => {
            if (social.link)
              return (
                <Link key={index} target={'_blank'} href={social.link}>
                  <Image src={social.icon} width={36} height={36} alt={social.name} />
                </Link>
              );
          })}
        </div>
        <Link href={`mailto:${SOCIAL_LINKS.email}`} className='footer_button'>
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Footer;
